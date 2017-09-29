import axios from 'axios';

export default class WowApi {
    static async GetCharacter(region: string, realm: string, name: string) {
        return axios
            .get(`https://${region.toLowerCase()}.api.battle.net/wow/character/${realm.toLowerCase()}/${name}`, {
                params: {
                    apikey: 'dbheutm7tz27r8brdbfr86w9f3g3ee4w',
                    fields: 'items,talents',
                    locale: 'en_GB',
                },
            })
            .then(e => <WowInterface.ICharacter>e.data);
    }
}
