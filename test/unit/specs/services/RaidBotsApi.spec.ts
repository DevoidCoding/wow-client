import RaidBotsApi from '@/services/RaidBotsApi';
import { expect } from 'chai';

describe('RaidBotsApi', function() {
    this.timeout(10000);
    it('should get an sim id for Magefix on Ysondre-EU', async () => {
        var ticket = await RaidBotsApi.SendSim('EU', 'Ysondre', 'Magefix');
        expect(ticket).to.not.be.equals('');
    });
});
