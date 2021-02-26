<template>
  <b-container class="bv-example-row px-0" fluid>
    <div class="map">
      <l-map
        ref="covidMap"
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%; width: 100%"
        @update:center="centerUpdated"
        @update:zoom="(val) => (zoom = val)"
        @update:bounds="boundsUpdated"
        @click="unselectBusiness"
      >
        <l-control position="topright">
          <div class="mapkey" :class="{ 'show-key': showKey }">
            <div class="title-block">
              <h6 class="title">{{ $t('label.mapkey') }}</h6>
              <i @click="showKey = !showKey" class="fas fa-info-circle" />
            </div>
            <div class="keys" :class="{ 'show-key': showKey }" v-for="item in mapKey" v-bind:key="item.title">
              <icon-list-item :leaflet-icon="item.icon" :title="item.title" link="" />
            </div>
          </div>
        </l-control>
        <l-tile-layer :url="mapUrl" :attribution="attribution" />
        <l-circle
          name="Accuracy"
          :lat-lng="userLocationData"
          v-if="userLocationData"
          :radius="accuracyRadius()"
          :weight="1"
          :class-name="'locAccuracy'"
        ></l-circle>
        <l-circle-marker
          name="Your Location"
          :lat-lng="userLocationData"
          v-if="userLocationData"
          :radius="circleRadius()"
          :weight="1"
          :class-name="'locMarker'"
        ></l-circle-marker>
        <v-marker-cluster ref="marks" :options="clusterOptions">
          <!-- @clusterclick="click()" @ready="ready" -->
          <l-marker
            :lat-lng="latLng(item.marker.gsx$lat.$t, item.marker.gsx$lon.$t)"
            :icon="selectedIcon(location.currentBusiness !== null && item.marker.id.$t === location.currentBusiness.marker.id.$t, item)"
            v-for="(item, index) in filteredMarkers"
            v-bind:key="index"
            @click="$emit('location-selected', { locValue: index, locId: item.marker.id.$t, isSetByMap: true })"
          ></l-marker>
        </v-marker-cluster>
        <l-control position="bottomright" class="user-location-button">
          <a
            href="#"
            @click="getUserLocation"
            class="user-location-link"
            ref="useLocation"
            :title="$t('label.useyourlocation')"
            :aria-label="$t('label.useyourlocation')"
          >
            <!--<h5>Your location</h5>-->
            <i class="fas fa-location-arrow"></i>
          </a>
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
import { LMap, LTileLayer, LMarker, LControl, LCircle, LCircleMarker } from 'vue2-leaflet'
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
    LCircle,
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
      zoom: this.centroid.zoom,
      showParagraph: true,
      showError: false,
      errorMessage: '',
      userLocationData: false,
      mapOptions: {
        zoomSnap: 0.5,
        setView: true,
        zoomControl: true
      },
      showMap: true,
      locationData: location,
      accuracy: 0,
      circle: {
        border: 'white',
        fill: '#f00'
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
  computed: {
    mapKey() {
      return [
        {
          title: this.$t('label.open'),
          icon: ExtraMarkers.icon({
            className: 'markeropen',
            icon: 'na',
            prefix: 'fa',
            svg: true
          })
        },
        {
          title: this.$t('label.closedonday'),
          icon: ExtraMarkers.icon({
            className: 'markerclosed',
            icon: 'na',
            prefix: 'fa',
            svg: true
          })
        },
        {
          title: this.$t('label.selected'),
          icon: ExtraMarkers.icon({
            className: 'markerselected',
            icon: 'na',
            prefix: 'fa',
            svg: true
          })
        }
      ]
    }
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
      map.locate({ setView: true, enableHighAccuracy: true, watch: true, maximumAge: 60000 })
      map.on('locationfound', (locationEvent) => {
        if (locationEvent.latitude && locationEvent.longitude) {
          this.userLocationData = latLng(locationEvent.latitude, locationEvent.longitude)
          // this.centerUpdated(this.userLocationData)
          this.accuracy = locationEvent.accuracy
          this.$refs.useLocation.classList.add('active')
        }
      })
      map.on('locationerror', (err) => {
        if (err.message && err.code != err.TIMEOUT) {
          this.showError = true
          this.errorMessage = err.message
          this.errorMessage += ' Please check your browser settings and ensure you have given our site permission to view your location.'
          this.$refs.useLocation.classList.add('disabled')
        }
      })
    },
    editZoomControl() {
      const zoomControl = this.$el.querySelector('.leaflet-top.leaflet-left')
      zoomControl.className = 'leaflet-bottom leaflet-right'
    },
    circleRadius() {
      var radius = 8
      if (radius <= 5) {
        radius = 5
      }
      return radius
    },
    accuracyRadius() {
      var radius = this.accuracy
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
    },
    unselectBusiness() {
      if (this.location.currentBusiness && (this.$screen.breakpoint === 'xs' || this.$screen.breakpoint === 'sm')) {
        this.$emit('location-unselected', true)
      }
    }
    // eslint-disable-next-line no-console
    // click: (e) => console.log('clusterclick', e),
    // eslint-disable-next-line no-console
    // ready: (e) => console.log('ready', e)
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

.locAccuracy {
  color: $map-accuracy-outline;
  fill: $map-accuracy;
  fill-opacity: 0.15;
  cursor: grab !important;
}

.locMarker {
  color: $map-location-outline;
  fill: $map-location;
  fill-opacity: 1;
  cursor: grab !important;
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

@include media-breakpoint-up(sm) {
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
  border: none !important;
  box-shadow: 0 1px 5px rgb(0 0 0 / 65%) !important;
  @media (pointer: coarse) {
    visibility: hidden;
  }
  @media (pointer: none) {
    visibility: hidden;
  }
  @media (pointer: fine) {
    margin-bottom: 70px !important;
  }
  @include media-breakpoint-up(md) {
    margin-bottom: 26px !important;
  }
}

.leaflet-control-zoom a {
  width: 26px !important;
  height: 26px !important;
  line-height: 26px !important;
}

.leaflet-control-zoom a:hover {
  background-color: #f4f4f4 !important;

  @media (prefers-color-scheme: dark) {
    background-color: $gray-300 !important;
  }
}

.leaflet-control-zoom a.leaflet-disabled {
  background-color: #f4f4f4 !important;

  @media (prefers-color-scheme: dark) {
    background-color: $gray-300 !important;
  }
}

.user-location-button {
  @media (pointer: coarse) {
    bottom: 24px !important;
  }
  @media (pointer: none) {
    bottom: 0px !important;
  }
  @media (pointer: fine) {
    bottom: 112px !important;
  }
  @include media-breakpoint-up(md) {
    bottom: 68px !important;
  }
}

.user-location-link {
  border-radius: 2.5px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: $white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  width: 26px;
  height: 26px;
  display: block;
  line-height: 26px;
  text-align: center;
  color: #000 !important;

  @media (pointer: none) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    font-size: 18px;
  }
  @media (pointer: coarse) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    font-size: 18px;
  }

  &:hover {
    background-color: #f4f4f4;

    @media (prefers-color-scheme: dark) {
      background-color: $gray-300 !important;
    }
  }

  &.active {
    color: theme-color('primary') !important;
  }

  &.disabled {
    color: theme-color('#bbb') !important;
  }
}

.user-location-link1 {
  border-radius: 20px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: $white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  width: 30px;
  height: 30px;
  display: block;
  line-height: 30px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7) !important;

  @media (pointer: none) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    font-size: 18px;
  }

  @media (pointer: coarse) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    font-size: 18px;
  }

  &:hover {
    background-color: #f4f4f4;

    @media (prefers-color-scheme: dark) {
      background-color: $gray-300 !important;
    }
  }

  &.active {
    color: theme-color('primary') !important;
  }

  &.disabled {
    color: theme-color('#bbb') !important;
  }
}

.user-location-link2 {
  border-radius: 15px;
  background-color: $white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  width: 110px;
  height: 25px;
  display: flex;
  line-height: 15px;
  text-align: center;
  padding-top: 7px;
  color: rgba(0, 0, 0, 0.3) !important;

  &:hover {
    background-color: #f4f4f4;

    @media (prefers-color-scheme: dark) {
      background-color: $gray-300 !important;
    }
  }

  &.active {
    color: theme-color('primary') !important;
  }

  &.disabled {
    color: theme-color('#bbb') !important;
  }

  h5 {
    color: rgba(0, 0, 0, 0.3);
    font-size: 11px;
    font-family: Geneva, sans-serif;
    padding-right: 10px;
    margin-left: 8px;
  }
}
</style>
