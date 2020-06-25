// *** NOTES ***
// The following files are included globally in the vue.config.js file so that
// we are able to use the SASS variables in the main CSS file and the component files.
// ./node_modules/bootstrap/scss/_functions.scss - The Bootstrap Functions
// ~bootstrap/scss/variables - The default Bootstrap Variables
// ~bootstrap/scss/mixins - The Bootstrap Minins
// ./src/themes/${process.env.VUE_APP_THEME}/SCSS/custom.scss - Our "theme" SCSS

import Vue from 'vue'
import {
  LayoutPlugin,
  NavbarPlugin,
  SidebarPlugin,
  ModalPlugin,
  DropdownPlugin,
  ButtonPlugin,
  AlertPlugin,
  ListGroupPlugin,
  FormSelectPlugin
} from 'bootstrap-vue'

import i18n from './i18n'

import App from './App.vue'

import './ExtraMarkers/css/leaflet.extra-markers.min.css'
import './ExtraMarkers/js/leaflet.extra-markers.min.js'

import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

// REQUIRED - Importing Bootstrap and BootstrapVue
import './scss/bootstrap.scss'

// REQUIRED - Importing our Main CSS file
import './scss/Main.scss'

// General style overrides and custom classes

// Install BootstrapVue
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(SidebarPlugin)
Vue.use(ModalPlugin)
Vue.use(DropdownPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(ListGroupPlugin)
Vue.use(FormSelectPlugin)
//Vue.use(BootstrapVue)
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
