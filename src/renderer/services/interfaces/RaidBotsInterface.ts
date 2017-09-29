namespace RaidBotsInterface {
    export interface ISim {
        type: string;
        text: string;
        advancedInput: string;
        baseActorName: string;
        reportName: string;
        armory: WowInterface.IArmory;
        email: '';
        sendEmail: boolean;
        character: WowInterface.ICharacter;
        spec: string;
        simcItems: any[];
        gearsets: any[];
        relics: IRelics[];
        talents: any | null;
        talentSets: any[];
        simcVersion: string;
        iterations: number;
        fightStyle: string;
        fightLength: number;
        enemyCount: number;
        enemyType: string;
        apl: string;
        ptr: boolean;
        frontendHost: string;
        frontendVersion: string;
    }

    export interface IRelics {
        id: number;
        relic1: WowInterface.IRelic;
        level1: number;
        crucible1: ICrucible;
        relic2: WowInterface.IRelic;
        level2: number;
        crucible2: ICrucible;
        relic3: WowInterface.IRelic;
        level3: number;
        crucible3: ICrucible;
    }

    export interface ICrucible {
        1: boolean | string;
        2: number | string;
        3: number | string;
    }
}
