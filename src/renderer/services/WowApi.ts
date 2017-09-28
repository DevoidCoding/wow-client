import axios from 'axios';

export default class WowApi {
    static async GetCharacter(realm: string, name: string) {
        return axios
            .get(`https://eu.api.battle.net/wow/character/${realm.toLowerCase()}/${name}`, {
                params: {
                    apikey: 'dbheutm7tz27r8brdbfr86w9f3g3ee4w',
                    fields: 'items',
                    locale: 'en_GB',
                },
            })
            .then(e => <WowInterface.ICharacter>e.data);
    }
}
