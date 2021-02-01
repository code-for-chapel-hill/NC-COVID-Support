<template>
  <div class="home">
    <app-header :language="language.name" @language-selected="changeLanguage" :socialMedia="socialMediaico">
      <theme-header></theme-header>
    </app-header>
    <mobile-search-filters :need="need" @need-selected="needSelected" />
    <!-- <mobile-map-list-toggle
      :is-filter-open="isFilterOpen"
      :is-resource-selected="locationData.currentBusiness != null && showList !== true"
      @toggle="isFilterOpen = !isFilterOpen"
    /> -->
    <about-us-modal />
    <div class="d-flex" id="wrapper" :class="{ toggled: isFilterOpen }" v-if="!!entries">
      <sidebar
        :isFilterOpen="isFilterOpen"
        :need="need"
        :day="day"
        :filteredMarkers="filteredMarkers"
        :highlightFilteredMarkers="highlightFilteredMarkers"
        :location="locationData"
        :show-list="showList"
        @location-selected="locationSelected"
        @toggle="isFilterOpen = !isFilterOpen"
        @need-selected="needSelected"
        @update-show-list="updateShowList"
        @close-details="closeDetails"
      />

      <div id="page-content-wrapper">
        <highlights
          :need="need"
          :class="{ toggled: isFilterOpen }"
          :filteredMarkers="highlightFilteredMarkers"
          :highlightFilters="highlightFilters"
          @box-selected="boxSelected"
        />

        <resource-map
          :filteredMarkers="filteredMarkers"
          :class="{ noselection: need == 'none' }"
          :location="locationData"
          :attribution="attribution"
          @location-selected="locationSelected"
          @bounds="boundsUpdated"
          @center="centerUpdated"
          :mapUrl="mapUrl"
          :centroid="centroid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Highlights from './components/Highlights.vue'
import ResourceMap from './components/ResourceMap.vue'
import AboutUsModal from './components/AboutUs.vue'
import MobileSearchFilters from './components/MobileSearchFilters'
// import MobileMapListToggle from './components/MobileMapListToggle'
import { latLng } from 'leaflet'
import { haversineDistance, sortByDistance } from './utilities'

import { dayFilters, booleanFilters, dayAny } from './constants'

import { theme } from 'theme.config'
import ThemeHeader from 'theme.header'

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
    MobileSearchFilters,
    // MobileMapListToggle,
    AboutUsModal,
    AppHeader,
    Highlights,
    ResourceMap,
    Sidebar,
    ThemeHeader
  },
  data() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const mobileMediaQuery = window.matchMedia('(min-width: 768px)')
    return {
      entries: null,
      need: 'none',
      day: dayAny,
      isFilterOpen: true,
      language: { name: 'English', iso: 'en' },
      locationData: { locValue: null, locId: null, currentBusiness: null, isSetByMap: false },
      showList: false,
      highlightFilters: [],
      bounds: null,
      centroid: {
        lat: theme.settings.initialMapCenter.lat,
        lng: theme.settings.initialMapCenter.lng,
        zoom: theme.settings.initialMapZoom
      },
      mobileMediaQuery: mobileMediaQuery,
      darkModeMediaQuery: darkModeMediaQuery,
      darkMode: darkModeMediaQuery.matches,
      mapUrl: '',
      attribution: null,
      socialMediaico: theme.socialMedia
    }
  },
  mounted() {
    this.setDarkMode(this.darkMode)
    this.darkModeMediaQuery.addListener((e) => {
      this.darkMode = e.matches
      this.setDarkMode(this.darkMode)
    })
    this.mobileMediaQuery.addListener(() => this.closeListOnMobile())
    this.closeListOnMobile()
  },
  methods: {
    setDarkMode(darkMode) {
      this.mapUrl = darkMode ? theme.maps.dark.url : theme.maps.normal.url
      this.attribution = darkMode ? theme.maps.dark.attribution : theme.maps.normal.attribution
    },
    // Closes the list when mobile or going to mobile as long as there are no filters selected;
    closeListOnMobile() {
      if (this.mobileMediaQuery.matches) {
        return
      }

      if (this.need !== 'none') {
        return
      }

      if (this.day !== dayAny) {
        return
      }

      this.isFilterOpen = false
    },
    centerUpdated(center) {
      this.centroid = { lat: center.lat, lng: center.lng }
    },
    boundsUpdated(bounds) {
      this.bounds = bounds
    },
    getDay(day) {
      if (day == 0) {
        return 6
      } else {
        return day - 1
      }
    },
    boxSelected(content) {
      this.highlightFilters = addOrRemove(this.highlightFilters, content.need)
    },
    isAnyDaySelected(day) {
      return day >= dayAny
    },
    needSelected(val) {
      this.need = val
      this.showList = this.need !== 'none'
      this.highlightFilters = []
      window.gtag('event', 'What do you need?', { event_category: 'Search - (' + this.language.name + ')', event_label: val })
    },
    changeLanguage(item) {
      this.language = item
      this.$root.updateLang(item.iso)
    },
    async fetchData() {
      const res = await fetch(theme.data.spreadsheetUrl)
      const entries = await res.json()

      // if (entries !== null) {
      //   entries.forEach(c => {
      //     c
      //   });
      // }

      this.entries = entries.feed.entry
    },
    updateShowList(val) {
      this.showList = val
    },
    closeDetails() {
      this.showList = true

      this.locationData = { currentBusiness: null }
    },
    locationSelected(val) {
      val.currentBusiness = this.filteredMarkers[val.locValue]
      this.locationData = val
      this.isFilterOpen = true
      this.showList = false
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

      // Filter out the boolean items
      this.highlightFilters.forEach((element) => {
        if (booleanFilters.includes(element)) {
          markers = markers.filter((c) => c['gsx$' + element].$t == '1')
        }
      })

      var today = new Date().getDay()
      var selectedDay = today
      if (!this.isAnyDaySelected(this.day)) {
        selectedDay = this.day
      }

      const dayFilter = dayFilters[this.getDay(selectedDay)]
      var open = markers.filter((c) => c[dayFilter].$t !== '0')
      var closed = markers.filter((c) => c[dayFilter].$t == '0')

      var retList = extend(
        open.map((marker) => ({
          marker,
          oc: true,
          distance: haversineDistance([this.centroid.lat, this.centroid.lng], [marker.gsx$lat.$t, marker.gsx$lon.$t], true)
        })),
        closed.map((marker) => ({
          marker,
          oc: false,
          distance: haversineDistance([this.centroid.lat, this.centroid.lng], [marker.gsx$lat.$t, marker.gsx$lon.$t], true)
        }))
      ).sort(sortByDistance)

      return retList
    },
    highlightFilteredMarkers() {
      var contained = [] //makers in map boundingbox
      this.filteredMarkers.forEach((m) => {
        if (this.bounds.contains(latLng(m.marker.gsx$lat.$t, m.marker.gsx$lon.$t))) contained.push(m)
      })

      if (!this.isAnyDaySelected(this.day)) {
        return contained
      }

      return contained.map((m) => {
        let obj = Object.assign({}, m)
        obj.oc = true
        return obj
      })
    }
  }
}
</script>

<style></style>
