import WowApi from '@/services/WowApi';
import { expect } from 'chai';

describe('RaidBots API', () => {
    it('should get Magefix on Ysondre', async () => {
        const character = await WowApi.GetCharacter('Ysondre', 'Magefix');

        expect(character.name).to.equal('Magefix');
        expect(character.realm).to.equal('Ysondre');
    });
});
