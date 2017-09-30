import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './views/index';
import Buefy from 'buefy';
import './styles/darkly.scss';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    template: '<App/>',
}).$mount('#app');
