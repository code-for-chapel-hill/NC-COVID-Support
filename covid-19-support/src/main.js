import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

import { BootstrapVue } from 'bootstrap-vue' // IconsPlugin

import './ExtraMarkers/css/leaflet.extra-markers.min.css'
import './ExtraMarkers/js/leaflet.extra-markers.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

// Customize styling for components:
import './scss/Main.scss'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = true

new Vue({
  i18n,
  render: (h) => h(App),
  methods: {
    updateLang(iso) {
      i18n.locale = iso
    }
  }
}).$mount('#app')
