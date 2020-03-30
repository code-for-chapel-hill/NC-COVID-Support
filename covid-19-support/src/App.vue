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
      <div id="page-content-wrapper">
        <highlights :need="need" :class="{ toggled: isFilterOpen }" :filteredMarkers="filteredMarkers" />
        <resource-map :filteredMarkers="filteredMarkers" />
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

      const markers = this.entries.filter((c) => c.gsx$resource.$t === this.need && c.gsx$status.$t === 'active')

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
