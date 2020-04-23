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
        @update:center="(val) => (center = val)"
        @update:zoom="(val) => (zoom = val)"
      >
        <l-control position="topright">
          <div class="mapkey" :class="{ 'show-key': showKey }">
            <div class="title-block">
              <h6 class="title">{{ $t('label.mapkey') }}</h6>
              <i @click="showKey = !showKey" class="fas fa-info-circle" />
            </div>
            <div class="keys" :class="{ 'show-key': showKey }">
              <icon-list-item :image="require('../images/Blue.png')" :title="$t('label.open')" link="" />
              <icon-list-item :image="require('../images/Grey.png')" :title="$t('label.closedonday')" link="" />
              <icon-list-item :image="require('../images/Red.png')" :title="$t('label.selected')" link="" />
            </div>
          </div>
        </l-control>
        <l-tile-layer :url="url" :attribution="attribution" />

        <v-marker-cluster ref="marks" :options="clusterOptions">
          <!-- @clusterclick="click()" @ready="ready" -->
          <l-marker
            :lat-lng="latLng(item.marker.gsx$lat.$t, item.marker.gsx$lon.$t)"
            :icon="selectedIcon(index === location.locValue, item)"
            v-for="(item, index) in filteredMarkers"
            v-bind:key="index"
            @click="$emit('location-selected', { locValue: index, isSetByMap: true })"
          ></l-marker>
        </v-marker-cluster>
      </l-map>
    </div>
  </b-container>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LControl } from 'vue2-leaflet'
import { latLng, Icon, ExtraMarkers } from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import { openStreetMapAttribution as attribution } from '../constants'
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
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LControl,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
    IconListItem
  },
  props: {
    filteredMarkers: Array,
    location: { locValue: Number, isSetByMap: Boolean }
  },
  data() {
    return {
      center: latLng(35.91371, -79.057919),
      zoom: 10,
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
      showParagraph: true,
      mapOptions: { zoomSnap: 0.5, setView: true },
      showMap: true,
      attribution,
      locationData: location,
      clusterOptions: { spiderfyOnMaxZoom: true, maxClusterRadius: 40, disableClusteringAtZoom: 16 },
      showKey: false
    }
  },
  mounted() {
    this.editZoomControl()
  },
  methods: {
    editZoomControl() {
      const zoomControl = this.$el.querySelector('.leaflet-top.leaflet-left')
      zoomControl.className = 'leaflet-bottom leaflet-right'
    },
    latLng,
    selectedIcon(selected, item) {
      const isOpen = item.oc
      let markerColor = isOpen ? '#566ca9' : '#999'
      const iconClasses = businessIcon(item.marker)
      if (selected) {
        markerColor = '#ff3d3d'
      }

      return ExtraMarkers.icon({
        markerColor,
        icon: iconClasses,
        prefix: 'fa',
        svg: true
      })
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
      var item = this.filteredMarkers[locationVal.locValue]
      this.$refs.covidMap.mapObject.setView(latLng(item.marker.gsx$lat.$t, item.marker.gsx$lon.$t), 16, { duration: 1 })
    }
  }
}
</script>

<style scoped lang="scss">
.map {
  width: auto;
  height: 100%;
  top: 0;
  padding: 0;
  /* margin-left: 8px;
    margin-right: 8px; */
}

.bv-example-row {
  height: calc(100% - 124px);
}

@media (min-width: 768px) {
  .bv-example-row {
    height: calc(100% - 116px);
  }
}

.noselection.bv-example-row {
  height: 100%;
}

.mapkey {
  padding: 16px;

  &.show-key {
    background-color: #f8f9fa !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  i {
    font-size: 2rem;
    opacity: 0.4;
    color: #000;
    cursor: pointer;
    vertical-align: middle;
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
</style>
