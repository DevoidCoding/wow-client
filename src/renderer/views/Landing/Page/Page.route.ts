import Page from './Page.vue';
import VueRouter from 'vue-router';

export const routeLandingPage: VueRouter.RouteConfig = {
    name: 'page',
    path: '',
    props: true,
    component: Page,
};
