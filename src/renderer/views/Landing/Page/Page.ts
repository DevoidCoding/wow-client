import { BaseRouteComponent } from '@/router/BaseRouteComponent';
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import LandingPage from '@/components/Landing/Page/Page.vue';

@Component({
    components: {
        LandingPage,
    },
})
export default class RouteLandingPage extends BaseRouteComponent {}
