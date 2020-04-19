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
        <highlights
          :need="need"
          :class="{ toggled: isFilterOpen }"
          :filteredMarkers="filteredMarkers"
          :highlightFilters="highlightFilters"
          @box-selected="boxSelected"
        />

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

import { spreadsheetUrl, weekdays, dayFilters, booleanFilters } from './constants'

function extend(obj, src) {
  for (var key in src) {
    obj.push(src[key])
  }
  return obj
}

function addOrRemove(array, item) {
  const exists = array.includes(item)

  if (exists) {
    return array.filter((c) => {
      return c !== item
    })
  } else {
    const result = array
    result.push(item)
    return result
  }
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
      showList: false,
      highlightFilters: []
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
    boxSelected: function (content) {
		this.highlightFilters = addOrRemove(this.highlightFilters, content.need)
	},
    isAnyDaySelected(day) {
      return day > 6
    },
    needSelected: function (val) {
      this.need = val
      this.highlightFilters = []
      window.gtag('event', 'What do you need?', { event_category: 'Search - (' + this.language.name + ')', event_label: val })
    },
    daySelected: function (val) {
      this.day = val
      this.highlightFilters = []
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
        markers = this.entries.filter((c) => c.gsx$familymeal.$t == 1 && c.gsx$status.$t == '1')
      } else {
        markers = this.entries.filter((c) => c.gsx$resource.$t === this.need && c.gsx$status.$t == '1')
      }

<<<<<<< HEAD
      // Filter out the boolean items
      this.highlightFilters.forEach((element) => {
        if (booleanFilters.includes(element)) {
          markers = markers.filter((c) => c['gsx$' + element].$t == '1')
        }
      })

      const dayFilter = dayFilters[this.getDay(this.day)]

      var open = markers.filter((c) => c[dayFilter].$t !== '0')
=======
      var today = new Date().getDay()
      var dayFilter = dayFilters[this.getDay(today)]
>>>>>>> Search Filter: Add "Any" option as a day selection
      var closed = markers.filter((c) => c[dayFilter].$t == '0')
      var open = markers.filter((c) => !closed.includes(c))
      if (!this.isAnyDaySelected(this.day)) {
        dayFilter = dayFilters[this.getDay(this.day)]
        open = markers.filter((c) => c[dayFilter].$t !== '0')
        closed = markers.filter((c) => c[dayFilter].$t == '0')
      }

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

<style></style>
