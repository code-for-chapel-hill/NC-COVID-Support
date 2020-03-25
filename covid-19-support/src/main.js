import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = true;

new Vue({
    i18n,
    render: h => h(App),
    methods: {
        updateLang(iso) {
            i18n.locale = iso;
        }
    }
}).$mount('#app');
