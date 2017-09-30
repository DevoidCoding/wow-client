import { Component } from 'vue-property-decorator';
import Vue from 'vue';

@Component({})
export default class Route<%= name %> extends Vue {
    render(h: Vue.CreateElement) {
        return h('router-view');
    }
}
