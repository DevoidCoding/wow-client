import request from 'request';

type ResultCallback = (ticket: string, actual: number, total: number) => void;
export default class RaidBotsApi {
    private static async GetCharacter(region: string, realm: string, name: string) {
        var options = {
            method: 'GET',
            url: `https://www.raidbots.com/wowapi/character/${region.toLowerCase()}/${realm.toLowerCase()}/${name}`,
            headers: {},
        };

        return new Promise(done => {
            request(options, (error, response, body) => {
                if (error) throw new Error(error);
                done(JSON.parse(body.toString()));
            });
        });
    }

    private static GetRelics(character: WowInterface.ICharacter) {
        return {
            relic1: character.items.mainHand.relics[0],
            relic2: character.items.mainHand.relics[1],
            relic3: character.items.mainHand.relics[2],
        };
    }

    private static GetCrucibles(character: WowInterface.ICharacter) {
        var ret: any = {};
        for (var i = 0; i < 3; i++) {
            ret[`crucible${i + 1}`] = {};
            for (var j = 0; j < 3; j++) {
                ret[`crucible${i + 1}`][j + 1] = character.crucibleTraits[i][j] || '';
            }
        }
        return ret;
    }

    static async SendSim(region: string, realm: string, name: string): Promise<string> {
        const character = (await this.GetCharacter(region, realm, name)) as WowInterface.ICharacter;

        const talent = character.talents.find((talent: any) => talent.selected);
        if (talent == undefined) throw 'ITalentException';

        const { relic1, relic2, relic3 } = this.GetRelics(character);
        const { crucible1, crucible2, crucible3 } = this.GetCrucibles(character);

        const relics: RaidBotsInterface.IRelics[] = [
            {
                id: 0,
                relic1: relic1,
                level1: relic1 ? relic1.itemLevel : 0,
                crucible1: crucible1,
                relic2: relic2,
                level2: relic2 ? relic2.itemLevel : 0,
                crucible2: crucible2,
                relic3: relic3,
                level3: relic3 ? relic3.itemLevel : 0,
                crucible3: crucible3,
            },
        ];

        const requested: RaidBotsInterface.ISim = {
            type: 'stats',
            text: '',
            advancedInput: '',
            baseActorName: character.name,
            reportName: 'Stats Weights',
            armory: {
                region: region.toLowerCase(),
                realm: realm.toLowerCase(),
                name: character.name,
            },
            email: '',
            sendEmail: false,
            character,
            spec: talent.spec.name,
            simcItems: [],
            gearsets: [],
            relics,
            talents: null,
            talentSets: [],
            simcVersion: 'weekly',
            iterations: 10000,
            fightStyle: 'Patchwerk',
            fightLength: 300,
            enemyCount: 1,
            enemyType: 'FluffyPillow',
            apl: '',
            ptr: false,
            frontendHost: 'www.raidbots.com',
            frontendVersion: 'f3378d86ba97cc39f712a80479f9a7ac1a30a72c\n',
        };

        var options = {
            method: 'POST',
            url: 'https://www.raidbots.com/sim',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(requested),
        };

        return new Promise<string>((done, reject) => {
            request(options, function(error: any, response: any, body: any) {
                if (error) reject(error);

                done(JSON.parse(body.toString()).simId);
            });
        });
    }

    static async GetResult(ticket: string, report?: ResultCallback) {
        var options = {
            method: 'GET',
            url: `https://www.raidbots.com/job/${ticket}`,
        };

        return new Promise(async (done, reject) => {
            let state = 'inactive';
            const timeout = (ms: number) => new Promise(done => setTimeout(done, ms));
            do {
                request(options, function(error: any, response: any, body: any) {
                    if (error) reject(error);
                    let resp = JSON.parse(body.toString());
                    state = resp.job.state;
                    if (resp && report) {
                        report(ticket, resp.queue.position, resp.queue.total);
                    }
                });
                await timeout(1000);
            } while (state != 'complete');

            timeout(1000);
            options.url = `https://www.raidbots.com/reports/${ticket}/data.json`;
            request(options, function(error: any, response: any, body: any) {
                if (error) reject(error);
                done(JSON.parse(body.toString()));
            });
        });
    }
}
