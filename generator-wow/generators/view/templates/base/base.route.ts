import Route<%= name %> from './<%= filename %>';
import VueRouter from 'vue-router';

export const route<%= name %>: VueRouter.RouteConfig = {
    path: '/',
    props: true,
    component: Route<%= name %>,
    children: [],
};
