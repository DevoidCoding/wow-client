import Vue from 'vue';
import VueRouter from 'vue-router';

export function initRouter(appRoutes: VueRouter.RouteConfig[]) {
    Vue.use(VueRouter);

    const routes = [...appRoutes];

    return new VueRouter({
        mode: 'hash',
        routes,
    });
}
