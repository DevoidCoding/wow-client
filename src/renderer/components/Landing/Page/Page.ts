import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import RaidBotsApi from '@/services/RaidBotsApi';

@Component({})
export default class LandingPage extends Vue {
    getElementByTicket(ticket: string) {
        return this.$el.querySelector(`[data-ticket='${ticket}']`);
    }

    async open(e: Event) {
        let ticket = await RaidBotsApi.SendSim('EU', 'Ysondre', (e.target as HTMLElement).innerHTML);
        (e.target as HTMLButtonElement).dataset['ticket'] = ticket;
        let message = await RaidBotsApi.GetResult(ticket, this.report);
        this.reportDPS(ticket, message);
    }

    report(ticket: string, actual: number, total: number) {
        let element = this.getElementByTicket(ticket);
        if (!element) return;
        element.innerHTML = `${actual}/${total}`;
    }

    reportDPS(ticket: string, message: any) {
        let element = this.getElementByTicket(ticket);
        if (!element) return;
        let player = message.sim.players[0];
        element.innerHTML = `${player.name}: ${player.collected_data.dps.mean}`;
    }
}
