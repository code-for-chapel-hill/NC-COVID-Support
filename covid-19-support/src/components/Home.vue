<template>
    <div class="home">
        <b-navbar toggleable="lg" type="dark" variant="info" id="topnav">
            <b-navbar-brand href="#">
                {{$t('title')}}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <b-icon icon="gear-fill" aria-hidden="true"></b-icon> <span v-html="language.name" class="language"></span>
                        </template>
                        <b-dropdown-item href="#" v-for="item in languages" v-bind:key="item.iso"><div v-html="item.name" @click="changeLanguage(item)"></div></b-dropdown-item>
                    </b-nav-item-dropdown>

                    <!--<b-nav-item-dropdown right>
                         Using 'button-content' slot
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>-->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="d-flex" id="wrapper">
            <div class="bg-light border-right" id="sidebar-wrapper">
                <!--<div class="sidebar-heading">Start Bootstrap </div>-->
                <div class="list-group list-group-flush">
                    <div class="list-group-item list-group-item-action bg-light">
                        {{$t('sidebar.what-do-you-need')}}
                        <b-form-select v-model="userneed" :options="needOptions"></b-form-select>
                    </div>
                    <div class="list-group-item list-group-item-action bg-light">
                        {{$t('sidebar.when-do-you-need-it')}}
                        <b-form-select v-model="userday" :options="dayOptions"></b-form-select>
                    </div>
                    <!--<div class="list-group-item list-group-item-action bg-light">
                        Resource type
                        Free resources
                        Paid resources
                    </div>
                    <div class="list-group-item list-group-item-action bg-light">
                        Access
                        Pick-up
                        Drive-up
                        Delivery
                    </div>
                    <div class="list-group-item list-group-item-action bg-light">
                        Times available
                        Morning
                        Afternoon
                        Evening
                        24 hour
                    </div>-->
                </div>
            </div>
            <div id="page-content-wrapper">
                <b-container class="bv-example-row px-0" fluid>
                    <div class="map">
                        <l-map v-if="showMap"
                               :zoom="zoom"
                               :center="center"
                               :options="mapOptions"
                               style="height: 100%; width:100%"
                               @update:center="centerUpdate"
                               @update:zoom="zoomUpdate">
                            <l-tile-layer :url="url"
                                          :attribution="attribution" />
                            <l-marker :lat-lng="latLong(item.gsx$lat.$t,item.gsx$lon.$t)" v-for="(item,index) in filteredMarkers" v-bind:key="index">
                                <l-popup>
                                    <div>
                                        <a v-bind:href="item.gsx$weblink.$t">{{item.gsx$provider.$t}}</a>
                                        <p v-show="showParagraph">
                                            <b>Address:</b> {{item.gsx$address.$t}}, {{item.gsx$city.$t}}, {{item.gsx$state.$t}} {{item.gsx$zip.$t}}<br/>
                                            <span v-if="!isNullEmpty(item.gsx$details1.$t)"><b>Phone:</b>  {{item.gsx$contact.$t}}<br/></span>
                                            <span v-if="!isNullEmpty(item.gsx$details1.$t)"><b>Notes:</b><br/>{{item.gsx$details1.$t}}</span>
                                            <span v-if="!isNullEmpty(item.gsx$details2.$t)"><br/>{{item.gsx$details2.$t}}</span>
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
            </div>
        </div>
    </div>

</template>

<script>
    // If you need to reference 'L', such as in 'L.icon', then be sure to
    // explicitly import 'leaflet' into your component
    //import L from 'leaflet';
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

    import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

    export default {
        name: 'Home',
        props: {
            msg: String
        },
          watch: {
        currentPage: 'fetchData'
         },
        created: function () {
            this.fetchData()
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip
        },
        data() {
            return {
                entries: null,
                map: null,
                tileLayer: null,
                layers: [],
                sheetUrl: 'https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json',
                userneed: 'meal',
                userday: new Date().getDay(),
                language: {
                    name : 'English', iso: 'en'
                },
                name: 'BootstrapVue',
                show: true,
                languages: [
                    { name: 'English', iso: 'en' },
                    { name: 'Espa&#241;ol', iso: 'es' },
                    { name: 'Fran&#231;ais', iso: 'fr' }
                ],
                zoom: 13,
                center: latLng(36.0613527,-79.12061721),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                //withPopup: latLng(47.41322, -1.219482),
                //withTooltip: latLng(47.41422, -1.250482),
                currentZoom: 9,
                currentCenter: latLng(36.0613527,-79.12061721),
                showParagraph: true,
                mapOptions: {
                    zoomSnap: 0.5
                },
                showMap: true
            }
        },
        mounted() {

        },
        methods: {
            isNullEmpty(str) {
                str !== null && str !== '' ? false : true;
            },
            latLong(lat, lng) {
                return latLng(lat, lng);
            },
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            innerClick() {
                alert("Click!");
            },
            changeLanguage: function (item) {
                this.language = item;
                this.$root.updateLang(item.iso);
            },
            fetchData: function () {
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('GET', this.sheetUrl )
                xhr.onload = function () {        
                self.entries = JSON.parse(xhr.responseText)
                self.entries = self.entries.feed.entry        
                }
                xhr.send()
            }
        },
        computed: {
            filteredMarkers() {
                return this.entries == null ? null : this.entries.filter(c => c.gsx$resource.$t == this.userneed);
            },
            needOptions() {
                return [
                    { value: 'meal', text: this.$tc('category.meal', 2) },
                    { value: 'grocery', text: this.$tc('category.grocery', 2) },
                    { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
                    { value: 'childcare', text: this.$t('category.childcare') }
                ]
            },
            dayOptions() {
                return [
                    { value: '1', text: this.$t('dayofweek.monday') },
                    { value: '2', text: this.$t('dayofweek.tuesday') },
                    { value: '3', text: this.$t('dayofweek.wednesday') },
                    { value: '4', text: this.$t('dayofweek.thursday') },
                    { value: '5', text: this.$t('dayofweek.friday') },
                    { value: '6', text: this.$t('dayofweek.saturday') },
                    { value: '0', text: this.$t('dayofweek.sunday') }
                ]
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html, body, #wrapper {
        height: 100%;
    }
    .language {
        padding:0 5px;
    }

    #topnav {
        position: absolute;
        width: 100%;
    }

    .bv-example-row {
        height: 100%;
    }

    #sidebar-wrapper, #page-content-wrapper {
        padding-top: 56px;
        box-sizing: border-box;
    }

    .map {
        width: 100%;
        height: 100%;
        top: 0;
        padding: 0;
    }

    .side-nav {
        background: #eee;
    }

    #sidebar-wrapper {
        min-height: 100vh;
        margin-left: -15rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }

        #sidebar-wrapper .sidebar-heading {
            padding: 0.875rem 1.25rem;
            font-size: 1.2rem;
        }

        #sidebar-wrapper .list-group {
            width: 15rem;
        }

    #page-content-wrapper {
        min-width: 100vw;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            margin-left: 0;
        }

        #page-content-wrapper {
            min-width: 0;
            width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
        }
    }
</style>

