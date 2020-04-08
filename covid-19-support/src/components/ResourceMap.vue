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
        <l-tile-layer :url="url" :attribution="attribution" />

        <v-marker-cluster ref="marks" :options="clusterOptions">
          <!-- @clusterclick="click()" @ready="ready" -->
          <l-marker
            :lat-lng="latLng(item.marker.gsx$lat.$t, item.marker.gsx$lon.$t)"
            :icon="selectedIcon(index === location.locValue, item.oc)"
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
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import { latLng, Icon, icon } from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import { openStreetMapAttribution as attribution } from '../constants'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'ResourceMap',
  props: {
    filteredMarkers: Array,
    location: { locValue: Number, isSetByMap: Boolean }
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
    selectedIcon(selected, isOpen) {
      if (selected) {
        return icon({
          iconUrl: require('../images/Red.png'),
          iconRetinaUrl: require('../images/Red2x.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
          iconSize: [25, 40],
          iconAnchor: [12.5, 40]
        })
      }
      var iconColor
      if (isOpen) {
        iconColor = 'Blue'
      } else {
        iconColor = 'Grey'
      }
      return icon({
        iconUrl: require('../images/' + iconColor + '.png'),
        iconRetinaUrl: require('../images/' + iconColor + '2x.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12.5, 41]
      })
    }
    // eslint-disable-next-line no-console
    // click: (e) => console.log('clusterclick', e),
    // eslint-disable-next-line no-console
    // ready: (e) => console.log('ready', e)
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
      clusterOptions: { spiderfyOnMaxZoom: true, maxClusterRadius: 40, disableClusteringAtZoom: 16 }
    }
  },
  computed: {},
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    'v-marker-cluster': Vue2LeafletMarkerCluster
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

<style scoped>
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
</style>
