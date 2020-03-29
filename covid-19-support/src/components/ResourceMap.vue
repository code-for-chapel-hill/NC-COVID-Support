<template>
<b-container class="bv-example-row px-0" fluid>
    <div class="map">
        <l-map v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 100%; width:100%"
            @update:center="val => center = val"
            @update:zoom="val => zoom = val">
            <l-tile-layer
                :url="url"
                :attribution="attribution" />
            <l-marker
                :lat-lng="latLng(item.gsx$lat.$t,item.gsx$lon.$t)"
                v-for="(item,index) in filteredMarkers" v-bind:key="index">

                <l-popup>
                    <div>
                        <a v-bind:href="item.gsx$weblink.$t">{{item.gsx$providername.$t}}</a>
                        <p v-show="showParagraph">
                            <b>{{$t('label.address')}}:</b> <span v-if="!!item.gsx$provideraddloc.$t">{{item.gsx$provideraddloc.$t}}, </span>{{item.gsx$address.$t}}, {{item.gsx$city.$t}}, {{item.gsx$state.$t}} {{item.gsx$zip.$t}}<br/>
                            <span v-if="!!item.gsx$contact.$t"><b>{{$t('label.phone')}}:</b>  {{item.gsx$contact.$t}}<br/></span>
                            <span v-if="!!item.gsx$instructions.$t || !!item.gsx$offers.$t"><hr/></span>
                            <span v-if="!!item.gsx$instructions.$t"><b>{{$t('label.instructions')}}:</b><br/>{{item.gsx$instructions.$t}}</span>
                            <span v-if="!!item.gsx$instructions.$t && !!item.gsx$offers.$t"><br/></span>
                            <span v-if="!!item.gsx$offers.$t"><b>{{$t('label.offers')}}:</b><br/>{{item.gsx$offers.$t}}</span>
                        </p>
                    </div>
                </l-popup>

            </l-marker>
            <!--<l-marker :lat-lng="withTooltip">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                    <div @click="innerClick">
                        I am a tooltip
                        <p v-show="showParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                            Donec finibus semper metus id malesuada.
                        </p>
                    </div>
                </l-tooltip>
            </l-marker>-->
        </l-map>
    </div>
</b-container>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { latLng, Icon } from 'leaflet';

import { openStreetMapAttribution as attribution } from '../constants';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: 'ResourceMap',
    props: {
        filteredMarkers: Array
    },
    mounted() {
        this.editZoomControl();
    },
    methods: {
        editZoomControl() {
            const zoomControl = this.$el.querySelector('.leaflet-top.leaflet-left');
            zoomControl.className = 'leaflet-bottom leaflet-right';
        },
        latLng
    },
    data() {
        return {
            center: latLng(35.91371,-79.057919),
            zoom: 13,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            showParagraph: true,
            mapOptions: { zoomSnap: 0.5 },
            showMap: true,
            attribution
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LTooltip,
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
</style>
