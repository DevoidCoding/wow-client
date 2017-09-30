import <%= filename %> from './<%= filename %>.vue';
import VueRouter from 'vue-router';

export const route<%= name %>: VueRouter.RouteConfig = {
    name: '<%= filename.toLowerCase() %>',
    path: '',
    props: true,
    component: <%= filename %>,
};
