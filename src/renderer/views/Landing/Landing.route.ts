import VueRouter from 'vue-router';
import { routeLandingPage } from './Page/Page.route';
import RouteLanding from './Landing';

export const routeLanding: VueRouter.RouteConfig = {
    path: '/',
    props: true,
    component: RouteLanding,
    children: [routeLandingPage],
};
