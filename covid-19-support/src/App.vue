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
                <div class="row highlights">
                    <div class="col-6 col-md-3">                    
                        <value-box icon="fa-utensils" v-bind:title="$t('label.freemeals')" value="30" class="bg-blue"/>
                    </div>
                    <div class="col-6 col-md-3">                    
                        <value-box icon="fa-car" v-bind:title="$t('label.curbsidepickup')" value="76" class="bg-green"/>
                    </div>
                    <div class="col-6 col-md-3">              
                        <value-box icon="fa-history" v-bind:title="$t('label.seniorshopping')" value="8" class="bg-blue"/>
                    </div>
                    <div class="col-6 col-md-3">                    
                        <value-box icon="fa-user-md" v-bind:title="$t('label.discounts')" value="0" class="bg-green"/> 
                    </div>
               </div>
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
                                        <a v-bind:href="item.gsx$weblink.$t">{{item.gsx$providername.$t}}</a>
                                        <p v-show="showParagraph">
                                            <b>{{$t('label.address')}}:</b> <span v-if="!isNullEmpty(item.gsx$provideraddloc.$t)">{{item.gsx$provideraddloc.$t}}, </span>{{item.gsx$address.$t}}, {{item.gsx$city.$t}}, {{item.gsx$state.$t}} {{item.gsx$zip.$t}}<br/>
                                            <span v-if="!isNullEmpty(item.gsx$contact.$t)"><b>{{$t('label.phone')}}:</b>  {{item.gsx$contact.$t}}<br/></span>
                                            <span v-if="!isNullEmpty(item.gsx$instructions.$t) || !isNullEmpty(item.gsx$offers.$t)"><hr/></span>
                                            <span v-if="!isNullEmpty(item.gsx$instructions.$t)"><b>{{$t('label.instructions')}}:</b><br/>{{item.gsx$instructions.$t}}</span>
                                            <span v-if="!isNullEmpty(item.gsx$instructions.$t) && !isNullEmpty(item.gsx$offers.$t)"><br/></span>
                                            <span v-if="!isNullEmpty(item.gsx$offers.$t)"><b>{{$t('label.offers')}}:</b><br/>{{item.gsx$offers.$t}}</span>
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
    import ValueBox from "./components/ValueBox.vue";

   // If you need to reference 'L', such as in 'L.icon', then be sure to
    // explicitly import 'leaflet' into your component
    //import L from 'leaflet';
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

    import { latLng, Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
    export default {
        name: 'app',
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
            LTooltip,
            ValueBox
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
                str = str.trim();
                return str !== null && str !== "" ? false : true;
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
                var filterMarks;
                
                if (this.entries == null) {
                    filterMarks = null;
                } else {
                    filterMarks = this.entries.filter(c => c.gsx$resource.$t == this.userneed);   

                    switch (this.userday) {
                        case '0':
                            filterMarks = filterMarks.filter(c => c.gsx$sun.$t !== '0');
                            break;
                        case '1':
                            filterMarks = filterMarks.filter(c => c.gsx$mon.$t !== '0');
                            break;
                        case '2':
                            filterMarks = filterMarks.filter(c => c.gsx$tues.$t !== '0');
                            break;
                        case '3':
                            filterMarks = filterMarks.filter(c => c.gsx$wed.$t !== '0');
                            break;
                        case '4':
                            filterMarks = filterMarks.filter(c => c.gsx$thr.$t !== '0');
                            break;
                        case '5':
                            filterMarks = filterMarks.filter(c => c.gsx$fri.$t !== '0');
                            break;
                        case '6':
                            filterMarks = filterMarks.filter(c => c.gsx$sat.$t !== '0');
                            break;
                    
                        default:
                            break;                        
                    }
                }

                return filterMarks;
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

<style>
   html, body, #wrapper {
        height: 100%;
    }
    .highlights {
        margin-left: 4px !important;
        margin-right: 4px !important;
    }

    .highlights div.col-md-3 {
        padding:0 !important;
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

