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

function extend(obj, src) {
  for (var key in src) {
    obj.push(src[key])
  }
  return obj
}

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
    getDay: function (day) {
      if (day == 0) {
        return 6
      } else {
        return day - 1
      }
    },
    needSelected: function (val) {
      this.need = val
      window.gtag('event', 'What do you need?', { event_category: 'Search - (' + this.language.name + ')', event_label: val })
    },
    daySelected: function (val) {
      this.day = val
      // console.log("val:" + val + " getDay:" + this.getDay(val) + " - " + weekdays[this.getDay(val)].day)
      window.gtag('event', 'When do you need it?', {
        event_category: 'Search - (' + this.language.name + ')',
        event_label: weekdays[this.getDay(val)].day
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
      var proName = this.filteredMarkers[val.locValue].marker.gsx$provideraddloc.$t
        ? ', ' + this.filteredMarkers[val.locValue].marker.gsx$provideraddloc.$t
        : ''

      window.gtag('event', val.isSetByMap ? 'Marker clicked' : 'List item clicked', {
        event_category: 'View details - (' + this.language.name + ')',
        event_label: this.filteredMarkers[val.locValue].marker.gsx$providername.$t + proName
      })
    }
  },
  computed: {
    filteredMarkers() {
      if (this.entries == null) return null

      var markers

      if (this.need == 'family') {
        markers = this.entries.filter((c) => c.gsx$familymeal.$t == 1 && c.gsx$status.$t !== '0')
      } else {
        markers = this.entries.filter((c) => c.gsx$resource.$t === this.need && c.gsx$status.$t !== '0')
      }

      const dayFilter = dayFilters[this.getDay(this.day)]

      var open = markers.filter((c) => c[dayFilter].$t !== '0')
      var closed = markers.filter((c) => c[dayFilter].$t == '0')

      var retList = extend(
        open.map((marker) => ({ marker, oc: true })),
        closed.map((marker) => ({ marker, oc: false }))
      ).sort(function (a, b) {
        var nameA = a.marker.gsx$providername.$t.toUpperCase() // ignore upper and lowercase
        var nameB = b.marker.gsx$providername.$t.toUpperCase() // ignore upper and lowercase
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        // names must be equal
        return 0
      })

      return retList
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

h1,
h2,
h3,
h4,
h5,
h6,
.navbar-brand,
.poppins {
  font-family: 'Poppins', sans-serif;
}

#search-filter-wrapper,
#page-content-wrapper {
  padding-top: 41px;
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
