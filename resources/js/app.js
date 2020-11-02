require('./bootstrap');
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.config.silent = true

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var VueScrollTo = require('vue-scrollto');
import VueFullPage from 'vue-fullpage.js';
import Vuefab from 'vue-fab'

 
Vue.use(VueScrollTo);
Vue.use(VueFullPage);
Vue.use(Vuefab);

Vue.component('appbody', require('./components/AppBody.vue').default);
var app = new Vue({
    el: '#app',
 });
