import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import VueRouter from 'vue-router';

@Component({})
export class BaseRouteComponent extends Vue {
    routeDestroyed = false;

    get routeTitle(): string | null {
        return 'WoW Client';
    }

    get routeTitleTemplate(): string | null {
        return null;
    }

    routeInit() {}

    routed() {}

    routeDestroy() {}

    async routeResolve(this: undefined, _route: VueRouter.Route): Promise<any> {}

    beforeCreate() {}

    created() {
        this.routeInit();

        // if (this.routeTitle) this.$options.metaInfo.title = this.routeTitle;

        // if (this.routeTitle) this.$options.metaInfo.titleTemplate = this.routeTitleTemplate;

        // this.$watch('routeTitle', (routeTitle: string | null) => {
        //     if (routeTitle) {
        //         this.$options.metaInfo.title = routeTitle;
        //         this.$meta().refresh();
        //     }
        // });
    }

    // tslint:disable-next-line:no-empty
    destroyed() {
        this.routeDestroyed = true;
        this.routeDestroy();
    }
}
