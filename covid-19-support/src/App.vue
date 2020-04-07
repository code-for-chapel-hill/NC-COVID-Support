<template>
  <div class="home">
    <app-header :language="language.name" @language-selected="changeLanguage" />
    <about-us-modal />
    <div class="d-flex" id="wrapper" :class="{ toggled: isFilterOpen }" v-if="!!entries">
      <search-filter
        :isFilterOpen="isFilterOpen"
        :need="need"
        :day="day"
        :filteredMarkers="filteredMarkers"
        :location="locationData"
        :show-list="showList"
        @location-selected="passLocation"
        @toggle="isFilterOpen = !isFilterOpen"
        @need-selected="needSelected"
        @day-selected="daySelected"
      />

      <div id="page-content-wrapper">
        <highlights :need="need" :class="{ toggled: isFilterOpen }" :filteredMarkers="filteredMarkers" />

        <resource-map
          :filteredMarkers="filteredMarkers"
          :class="{ noselection: need == 'none' }"
          :location="locationData"
          @location-selected="passLocation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import SearchFilter from './components/SearchFilter.vue'
import Highlights from './components/Highlights.vue'
import ResourceMap from './components/ResourceMap.vue'
import AboutUsModal from './components/AboutUs.vue'

import { spreadsheetUrl, weekdays, dayFilters } from './constants'

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
    ResourceMap,
    AboutUsModal
  },
  data() {
    return {
      entries: null,
      need: 'none',
      day: new Date().getDay(),
      isFilterOpen: true,
      language: { name: 'English', iso: 'en' },
      locationData: { locValue: null, isSetByMap: false },
      showList: false
    }
  },
  methods: {
    needSelected: function (val) {
      this.need = val
      window.gtag('event', 'What do you need?', { event_category: 'Search - (' + this.language.name + ')', event_label: val })
    },
    daySelected: function (val) {
      this.day = val
      window.gtag('event', 'When do you need it?', {
        event_category: 'Search - (' + this.language.name + ')',
        event_label: weekdays[val].day
      })
    },
    changeLanguage: function (item) {
      this.language = item
      this.$root.updateLang(item.iso)
    },
    async fetchData() {
      const res = await fetch(spreadsheetUrl)
      const entries = await res.json()
      this.entries = entries.feed.entry
    },
    passLocation: function (val) {
      this.locationData = val
      this.showList = false
      this.isFilterOpen = true
      var proName = this.filteredMarkers[val.locValue].gsx$provideraddloc.$t
        ? ', ' + this.filteredMarkers[val.locValue].gsx$provideraddloc.$t
        : ''

      window.gtag('event', val.isSetByMap ? 'Marker clicked' : 'List item clicked', {
        event_category: 'View details - (' + this.language.name + ')',
        event_label: this.filteredMarkers[val.locValue].gsx$providername.$t + proName
      })
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
