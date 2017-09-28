import WowApi from '../../../src/services/WowApi';

describe('RaidBots API', () => {
    it('should get Magefix on Ysondre', async () => {
        const character = await WowApi.GetCharacter('Ysondre', 'Magefix');

        expect(character);
    });
});
