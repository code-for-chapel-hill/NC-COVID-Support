<template>
  <div class="home">
    <app-header :language="language.name" @language-selected="changeLanguage" />
    <div class="d-flex" id="wrapper" :class="{ toggled: isFilterOpen }" v-if="!!entries">
      <search-filter
        :isFilterOpen="isFilterOpen"
        :need="need"
        :day="day"
        :filteredMarkers="filteredMarkers"
        @toggle="isFilterOpen = !isFilterOpen"
        @need-selected="(val) => (need = val)"
        @day-selected="(val) => (day = val)"
      />

        <b-nav-item right>
            <b-icon icon="question-diamond" aria-hidden="true" @click="$bvModal.show('about-us')"></b-icon>
        </b-nav-item>

        <b-modal id="about-us" centered scrollable>
            <template v-slot:modal-title>
                {{$t('about.title')}}
            </template>
            <b-card no-body>
                <b-tabs card>
                    <b-tab :title="$t('about.partners')">
                        <p>
                            {{$t('about.info')}}
                        </p>
                        <ul>
                            <li><a href="https://www.orangecountync.gov/1710/Visitors-Bureau" target="_blank">{{$t('about.orgs.bureau')}}</a></li>
                            <li><a href="http://www.downtownchapelhill.com/" target="_blank">{{$t('about.orgs.partnership')}}</a></li>
                            <li><a href="https://locallistnc.com/" target="_blank">{{$t('about.orgs.localistnc')}}</a></li>
                            <li><a href="https://www.carolinafarmstewards.org/on-farm-pickups/" target="_blank">{{$t('about.orgs.farmstewards')}}</a></li>
                        </ul>
                    </b-tab>
                    <b-tab :title="$t('about.getinvolved')">
                        <p>
                            {{$t('about.devhelp.info')}}
                        </p>
                        <ol>
                            <li>{{$t('about.devhelp.step1')}}</li>
                            <li>{{$t('about.devhelp.step2')}}</li>
                            <li>{{$t('about.devhelp.step3')}}</li>
                        </ol>
                        <p>
                            {{$t('about.devhelp.dupsite')}}
                        </p>
                        <i18n path="about.devhelp.devnote" tag="p">
                            <a href="https://github.com/code-for-chapel-hill/COVID-Support-For-CH" target="_blank">{{$t('about.devhelp.source')}}</a>
                            <a href="https://github.com/codeforamerica/codeofconduct" target="_blank">{{$t('about.devhelp.conduct')}}</a>
                        </i18n>
                    </b-tab>
                    <b-tab :title="$t('about.contact')">
                        <i18n path="about.contactus.info" tag="p">
                            <a href="https://www.meetup.com/Triangle-Code-for-America/" target="_blank">{{$t('about.orgs.chb')}}</a>
                            <a href="https://www.codeforamerica.org/" target="_blank">{{$t('about.orgs.cfa')}}</a>
                            <a href="mailto:codeforchapelhill@gmail.com" target="_blank">{{$t('about.contactus.email')}}</a>
                        </i18n>
                    </b-tab>
                </b-tabs>
            </b-card>
            <template v-slot:modal-footer>
                <b-button @click="$bvModal.hide('about-us')" right>{{$t('about.close')}}</b-button>
            </template>
        </b-modal>
      <div id="page-content-wrapper">
        <highlights :need="need" :class="{ toggled: isFilterOpen }" :filteredMarkers="filteredMarkers" />
        <resource-map :filteredMarkers="filteredMarkers" :class="{ noselection: need == 'none' }" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import SearchFilter from './components/SearchFilter.vue'
import Highlights from './components/Highlights.vue'
import ResourceMap from './components/ResourceMap.vue'

import { spreadsheetUrl } from './constants'

export default {
  name: 'app',
  props: {
    msg: String
  },
  watch: {
    currentPage: 'fetchData'
  },
  created() {
    this.fetchData()
  },
  components: {
    AppHeader,
    Highlights,
    SearchFilter,
    ResourceMap
  },
  data() {
    return {
      entries: null,
      need: 'none',
      day: new Date().getDay(),
      isFilterOpen: true,
      language: { name: 'English', iso: 'en' }
    }
  },
  methods: {
    changeLanguage: function (item) {
      this.language = item
      this.$root.updateLang(item.iso)
    },
    async fetchData() {
      const res = await fetch(spreadsheetUrl)
      const entries = await res.json()
      this.entries = entries.feed.entry
    }
  },
  computed: {
    filteredMarkers() {
      if (this.entries == null) return null

      var markers

      if (this.need == 'family') {
        markers = this.entries.filter((c) => c.gsx$familymeal.$t == 1 && c.gsx$status.$t === 'active')
      } else {
        markers = this.entries.filter((c) => c.gsx$resource.$t === this.need && c.gsx$status.$t === 'active')
      }

      const dayFilters = ['sun', 'mon', 'tues', 'wed', 'thr', 'fri', 'sat'].map((attr) => `gsx$${attr}`)
      const dayFilter = dayFilters[this.day]

      return markers.filter((c) => c[dayFilter].$t !== '0')
    }
  }
}
</script>

<style>
html,
body,
#wrapper {
  height: 100%;
}

#search-filter-wrapper,
#page-content-wrapper {
  padding-top: 56px;
  box-sizing: border-box;
}

#page-content-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
}

#wrapper.toggled #search-filter-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #page-content-wrapper {
    min-width: 0;
  }
}
</style>
