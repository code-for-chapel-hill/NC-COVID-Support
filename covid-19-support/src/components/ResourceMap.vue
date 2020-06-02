<template>
  <b-container class="bv-example-row px-0" fluid>
    <div class="map">
      <l-map
        ref="covidMap"
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%; width: 100%;"
        @update:center="centerUpdated"
        @update:zoom="(val) => (zoom = val)"
        @update:bounds="boundsUpdated"
      >
        <l-control position="topright">
          <div class="mapkey" :class="{ 'show-key': showKey }">
            <div class="title-block">
              <h6 class="title">{{ $t('label.mapkey') }}</h6>
              <i @click="showKey = !showKey" class="fas fa-info-circle" />
            </div>
            <div class="keys" :class="{ 'show-key': showKey }">
              <icon-list-item :image="require('../images/Blue.png')" :title="$t('label.open')" link />
              <icon-list-item :image="require('../images/Grey.png')" :title="$t('label.closedonday')" link />
              <icon-list-item :image="require('../images/Red.png')" :title="$t('label.selected')" link />
            </div>
          </div>
        </l-control>
        <l-tile-layer :url="mapUrl" :attribution="attribution" />

        <v-marker-cluster ref="marks" :options="clusterOptions">
          <!-- @clusterclick="click()" @ready="ready" -->
          <l-marker
            :lat-lng="latLng(item.marker.gsx$lat.$t, item.marker.gsx$lon.$t)"
            :icon="selectedIcon(location.currentBusiness !== null && item.marker.id.$t === location.currentBusiness.marker.id.$t, item)"
            v-for="(item, index) in filteredMarkers"
            v-bind:key="index"
            @click="$emit('location-selected', { locValue: index, locId: item.marker.id.$t, isSetByMap: true })"
          ></l-marker>
          <l-circle-marker
            key="userLocation"
            name="Your Location"
            :lat-lng="userLocationData"
            v-if="userLocationData"
            :color="circle.border"
            :fillColor="circle.fill"
            :fillOpacity="1.0"
            :radius="circleRadius()"
          ></l-circle-marker>
        </v-marker-cluster>
        <l-control position="bottomleft">
          <button @click="getUserLocation">
            <i class="fas fa-location-arrow"></i>
          </button>
        </l-control>
        <b-alert variant="warning" class="location-alert" :show="showError" dismissible @dismissed="resetError" fade>
          {{ errorMessage }}
        </b-alert>
      </l-map>
    </div>
  </b-container>
</template>

<script>
import { BAlert } from 'bootstrap-vue'
import { LMap, LTileLayer, LMarker, LControl, LCircleMarker } from 'vue2-leaflet'
import { latLng, Icon, ExtraMarkers } from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import IconListItem from './IconListItem.vue'
import { businessIcon } from '../utilities'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'ResourceMap',
  components: {
    BAlert,
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LCircleMarker,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
    IconListItem
  },
  props: {
    filteredMarkers: Array,
    location: { locValue: Number, currentBusiness: Object, isSetByMap: Boolean },
    mapUrl: String,
    attribution: String,
    centroid: { lat: Number, lng: Number }
  },
  data() {
    return {
      center: latLng(this.centroid.lat, this.centroid.lng),
      zoom: 10,
      showParagraph: true,
      showError: false,
      errorMessage: '',
      userLocationData: false,
      mapOptions: { zoomSnap: 0.5, setView: true },
      showMap: true,
      locationData: location,
      accuracy: 0,
      circle: {
        border: 'blue',
        fill: 'white'
      },
      clusterOptions: { spiderfyOnMaxZoom: true, maxClusterRadius: 40, disableClusteringAtZoom: 16 },
      showKey: false
    }
  },
  mounted() {
    this.editZoomControl()
    this.$nextTick(() => {
      this.$emit('bounds', this.$refs.covidMap.mapObject.getBounds())
    })
  },
  methods: {
    centerUpdated(center) {
      this.center = center
      this.$emit('center', center)
    },
    boundsUpdated(bounds) {
      this.$emit('bounds', bounds)
    },
    resetError() {
      this.showError = false
      this.errorMessage = ''
    },
    userIcon() {
      const icon = ExtraMarkers.icon({
        markerColor: 'usermarker',
        icon: 'fas fa-home',
        prefix: 'fa',
        svg: true
      })
      return icon
    },
    getUserLocation() {
      var map = this.$refs.covidMap.mapObject
      map.locate({ setView: true, enableHighAccuracy: true })
      map.on('locationfound', (locationEvent) => {
        if (locationEvent.latitude && locationEvent.longitude) {
          this.userLocationData = latLng(locationEvent.latitude, locationEvent.longitude)
          this.centerUpdated(this.userLocationData)
          this.accuracy = locationEvent.accuracy
        }
      })
      map.on('locationerror', (err) => {
        if (err.message) {
          this.showError = true
          this.errorMessage = err.message
          this.errorMessage += ' Please check your browser settings and ensure you have given our site permission to view your location.'
        }
      })
    },
    editZoomControl() {
      const zoomControl = this.$el.querySelector('.leaflet-top.leaflet-left')
      zoomControl.className = 'leaflet-bottom leaflet-right'
    },
    circleRadius() {
      var radius = this.accuracy - 10
      if (radius <= 5) {
        radius = 5
      }
      return radius
    },
    latLng,
    selectedIcon(selected, item) {
      const isOpen = item.oc
      let markerColor = isOpen ? 'markeropen' : 'markerclosed'
      const iconClasses = businessIcon(item.marker)
      if (selected) {
        markerColor = 'markerselected'
      }
      var markerIcon = ExtraMarkers.icon({
        className: markerColor,
        icon: iconClasses,
        prefix: 'fa',
        svg: true
        // ,
        // name: item.marker.gsx$providername.$t,
        // nameClasses: 'markerName'
      })

      return markerIcon
    }
    // eslint-disable-next-line no-console
    // click: (e) => console.log('clusterclick', e),
    // eslint-disable-next-line no-console
    // ready: (e) => console.log('ready', e)
  },
  watch: {
    // https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    location: function (locationVal) {
      if (locationVal.isSetByMap) {
        return
      }
      // var item = this.filteredMarkers[locationVal.locValue]
      if (locationVal.currentBusiness !== null && this.$refs.covidMap.mapObject.getZoom() < 17) {
        this.$refs.covidMap.mapObject.setView(
          latLng(locationVal.currentBusiness.marker.gsx$lat.$t, locationVal.currentBusiness.marker.gsx$lon.$t),
          17,
          { duration: 1 }
        )
      }
    }
  }
}
</script>

<style lang="scss">
.map {
  width: auto;
  height: 100%;
  top: 0;
  padding: 0;
  /* margin-left: 8px;
    margin-right: 8px; */
}

.alert-warning {
  @media (prefers-color-scheme: dark) {
    background-color: theme-color-level('warning', 2) !important;
    color: theme-color-level('warning', 8) !important;
    border-color: theme-color-level('warning', 2) !important;
  }
}

.bv-example-row {
  height: calc(100% - 124px);
}

@media (min-width: 768px) {
  .bv-example-row {
    height: calc(100% - 116px);
  }
}

.markerselected svg path {
  fill: $marker-selected;
}

div.markeropen svg path {
  fill: $marker-open;
}

.markerclosed svg path {
  fill: $marker-closed;
}

.usermarker {
  background-color: $user-marker;
}

.noselection.bv-example-row {
  height: 100%;
}

.mapkey {
  padding: 16px;

  &.show-key {
    background-color: $map-key-bg !important;
    color: $map-key;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    @media (prefers-color-scheme: dark) {
      background-color: $map-key-bg-dark !important;
      color: $map-key-dark;
    }
  }

  i {
    font-size: 2rem;
    opacity: 0.4;
    color: #000;
    cursor: pointer;
    vertical-align: middle;
    @media (prefers-color-scheme: dark) {
      color: #fff;
    }
  }

  &.show-key i {
    opacity: 1;
  }
}

.title-block {
  width: 100%;
  text-align: right;
}

.mapkey .title {
  vertical-align: middle;
  margin: 0 8px;
  display: none;
}

.keys {
  display: none;
}

.show-key {
  display: block;
}
.mapkey.show-key .title {
  display: inline;
}
.location-alert {
  position: absolute;
  bottom: 0px;
  left: calc(50% - 175px);
  width: 350px;
  z-index: 1000;
}
.leaflet-bottom .leaflet-control-zoom {
  margin-bottom: 26px !important;
}
</style>
