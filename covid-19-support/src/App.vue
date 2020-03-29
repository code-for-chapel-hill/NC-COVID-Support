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
                    <b-nav-item right>
                        <b-icon icon="question-diamond" aria-hidden="true" @click="$bvModal.show('about-us')"></b-icon>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-modal id="about-us" centered scrollable>
            <template v-slot:modal-title>
                {{$t('about.title')}}
            </template>
            <b-card no-body>
                <b-tabs card>
                    <b-tab :title="$t('about.partners')">
                        <p>
                            {{$t('about.info')}}
                        </p>
                        <ul>
                            <li><a href="https://www.orangecountync.gov/1710/Visitors-Bureau" target="_blank">{{$t('about.orgs.bureau')}}</a></li>
                            <li><a href="http://www.downtownchapelhill.com/" target="_blank">{{$t('about.orgs.partnership')}}</a></li>
                            <li><a href="https://locallistnc.com/" target="_blank">{{$t('about.orgs.localistnc')}}</a></li>
                            <li><a href="https://www.carolinafarmstewards.org/on-farm-pickups/" target="_blank">{{$t('about.orgs.farmstewards')}}</a></li>
                        </ul>
                    </b-tab>
                    <b-tab :title="$t('about.getinvolved')">
                        <p>
                            {{$t('about.devhelp.info')}}
                        </p>
                        <ol>
                            <li>{{$t('about.devhelp.step1')}}</li>
                            <li>{{$t('about.devhelp.step2')}}</li>
                            <li>{{$t('about.devhelp.step3')}}</li>
                        </ol>
                        <p>
                            {{$t('about.devhelp.dupsite')}}
                        </p>
                        <i18n path="about.devhelp.devnote" tag="p">
                            <a href="https://github.com/code-for-chapel-hill/COVID-Support-For-CH" target="_blank">{{$t('about.devhelp.source')}}</a>
                            <a href="https://github.com/codeforamerica/codeofconduct" target="_blank">{{$t('about.devhelp.conduct')}}</a>
                        </i18n>
                    </b-tab>
                    <b-tab :title="$t('about.contact')">
                        <i18n path="about.contactus.info" tag="p">
                            <a href="https://www.meetup.com/Triangle-Code-for-America/" target="_blank">{{$t('about.orgs.chb')}}</a>
                            <a href="https://www.codeforamerica.org/" target="_blank">{{$t('about.orgs.cfa')}}</a>
                            <a href="mailto:codeforchapelhill@gmail.com" target="_blank">{{$t('about.contactus.email')}}</a>
                        </i18n>
                    </b-tab>
                </b-tabs>
            </b-card>
            <template v-slot:modal-footer>
                <b-button @click="$bvModal.hide('about-us')" right>{{$t('about.close')}}</b-button>
            </template>
        </b-modal>

        <div class="d-flex" id="wrapper" :class="{'toggled' : tab}">
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="tab bg-light border-right border-top border-bottom" @click="tab = !tab"><i class="fas fa-caret-square-down"></i></div>
                <div class="list-group list-group-flush">
                    <div class="list-group-item list-group-item-action bg-light">
                        {{$t('sidebar.what-do-you-need')}}
                        <b-form-select v-model="userneed" :options="needOptions"></b-form-select>
                    </div>
                    <div class="list-group-item list-group-item-action bg-light">
                        {{$t('sidebar.when-do-you-need-it')}}
                        <b-form-select v-model="userday" :options="dayOptions"></b-form-select>
                    </div>

                </div>
            </div>
            <div id="page-content-wrapper">
                <highlights :valueBoxes="boxValues" :class="{'toggled' : tab}"/>
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
    import Highlights from "./components/Highlights.vue";

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

    function countFeature(filteredMarkers, feature) {
        var cntFeature = 0;
        if (filteredMarkers !== null) {
                filteredMarkers.forEach(c => { if (c.gsx$accesstype.$t.indexOf(feature) > -1) {
                    cntFeature = cntFeature + 1;
                }
            });
        }
        return cntFeature;
    }

    function countBoolean(filteredMarkers, fieldName) {
        var cntBool = 0;
        if (filteredMarkers !== null) {
                filteredMarkers.forEach(c => { if (c['gsx$' + fieldName].$t == "1") {
                    cntBool = cntBool + 1;
                }
            });
        }
        return cntBool;
    }
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
            Highlights
        },
        data() {
            return {
                entries: null,
                map: null,
                tileLayer: null,
                layers: [],
                sheetUrl: 'https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json',
                userneed: 'restaurant',
                userday: new Date().getDay(),
                tab: true,
                language: {
                    name : 'English', iso: 'en'
                },
                name: 'BootstrapVue',
                show: true,
                languages: [
                    { name: 'English', iso: 'en' },
                    { name: 'Espa&#241;ol', iso: 'es' },
                    { name: 'Fran&#231;ais', iso: 'fr' },
                    { name: '한국어', iso: 'ko' }
                ],
                zoom: 13,
                center: latLng(35.91371,-79.057919),                
                // url: 'https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=TxvhrAmR6qR1BMLNZjOj',
                // attribution:
                //     '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                // url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=TxvhrAmR6qR1BMLNZjOj',
                // attribution:
                //     '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                //withPopup: latLng(47.41322, -1.219482),
                //withTooltip: latLng(47.41422, -1.250482),
                currentZoom: 9,
                currentCenter: latLng(35.91371,-79.057919),
                showParagraph: true,
                mapOptions: {
                    minZoom: 7,
                    zoomSnap: 0.5
                },
                showMap: true
            }
        },
        mounted() {
        this.editZoomControl();
        },
        methods: {
            editZoomControl() {
            const zoomControl = this.$el.querySelector('.leaflet-top.leaflet-left');
            zoomControl.className = 'leaflet-bottom leaflet-right';
            },
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
            countPickup() {
                return countFeature(this.filteredMarkers, 'pick-up');
            },
            countDriveUp() {
                return countFeature(this.filteredMarkers, 'drive-up');
            },
            countSenior() {
                return countFeature(this.filteredMarkers, 'senior shopping hours');
            },
            countFreeStudentMeal() {
                return countBoolean(this.filteredMarkers, 'mealstudent');
            },
            countPublicMeal() {
                return countBoolean(this.filteredMarkers, 'mealpublic');
            },            
            countFamilyMeal() { // Family meal kits to purchase
                return countBoolean(this.filteredMarkers, 'mealfamily');
            },
            countOrderOnline() {
                return countBoolean(this.filteredMarkers, 'orderonline');
            },   
            countDiscountMedical() {
                return countBoolean(this.filteredMarkers, 'discountmedical');
            },    
            countDelivery() {
                return countBoolean(this.filteredMarkers, 'delivery');
            },
            countProduce() {
                return countBoolean(this.filteredMarkers, 'freeproduce');
            },
            countGroceries() {
                return countBoolean(this.filteredMarkers, 'freegroceries');
            },
            filteredMarkers() {
                var filterMarks;
                
                if (this.entries == null) {
                    filterMarks = null;
                } else {
                    filterMarks = this.entries.filter(c => c.gsx$resource.$t == this.userneed && c.gsx$status.$t == 'active');   

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
            boxValues() {
                switch (this.userneed) {
                    case "grocery":
                        return [
                            { icon: 'fa-mouse', title: this.$t('label.orderonline'), value: this.countOrderOnline, color: '' },
                            { icon: 'fa-car', title: this.$t('label.curbsidepickup'), value: this.countPickup + this.countDriveUp, color: '' },
                            { icon: 'fa-shipping-fast', title: this.$t('label.delivery'), value: this.countDelivery, color: '' },
                            { icon: 'fa-history', title: this.$t('label.seniorshopping'), value: this.countSenior, color: '' }
                        ]                

                    case "restaurant":
                        return [
                            { icon: 'fa-mouse', title: this.$t('label.orderonline'), value: this.countOrderOnline, color: '' },
                            { icon: 'fa-car', title: this.$t('label.curbsidepickup'), value: this.countPickup + this.countDriveUp, color: '' },
                            { icon: 'fa-user-md', title: this.$t('label.discounts'), value: this.countDiscountMedical, color: '' },
                            { icon: 'fa-shipping-fast', title: this.$t('label.delivery'), value: this.countDelivery, color: '' }
                        ]                

                    case "family": // Family Meal Kits
                        return [
                            { icon: 'fa-mouse', title: this.$t('label.orderonline'), value: this.countOrderOnline, color: '' },
                            { icon: 'fa-car', title: this.$t('label.curbsidepickup'), value: this.countPickup + this.countDriveUp, color: '' },
                            { icon: 'fa-shipping-fast', title: this.$t('label.delivery'), value: this.countDelivery, color: '' },
                            { icon: 'fa-history', title: this.$t('label.discounts'), value: this.countSenior, color: '' }
                        ]                

                    case "meal": // Free Meals
                        return [
                            { icon: 'fa-users', title: this.$t('label.opentopublic'), value: this.countPublicMeal, color: '' },
                            { icon: 'fa-school', title: this.$t('label.mealsforstudents'), value: this.countFreeStudentMeal, color: '' },
                            { icon: 'fa-apple-alt', title: this.$t('label.freeproduce'), value: this.countProduce, color: '' },
                            { icon: 'fa-shopping-basket', title: this.$t('label.freegrocery'), value: this.countGroceries, color: '' }
                        ]                

                    case "pharmacy":
                        return [
                            { icon: 'fa-mouse', title: this.$t('label.orderonline'), value: this.countOrderOnline, color: '' },
                            { icon: 'fa-car', title: this.$t('label.curbsidepickup'), value: this.countPickup + this.countDriveUp, color: '' },
                            { icon: 'fa-history', title: this.$t('label.seniorshopping'), value: this.countSenior, color: '' },
                            { icon: 'fa-shipping-fast', title: this.$t('label.delivery'), value: this.countDelivery, color: '' }
                        ]                

                    case "pet":
                        return [
                            { icon: 'fa-mouse', title: this.$t('label.orderonline'), value: this.countOrderOnline, color: '' },
                            { icon: 'fa-car', title: this.$t('label.curbsidepickup'), value: this.countPickup + this.countDriveUp, color: '' },
                            { icon: 'fa-user-md', title: this.$t('label.discounts'), value: this.countDiscountMedical, color: '' },
                            { icon: 'fa-shipping-fast', title: this.$t('label.delivery'), value: this.countDelivery, color: '' }
                        ]                 
                }
            },
            needOptions() {
                return [
                    { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
                    { value: 'meal', text: this.$tc('category.meal', 2) },
                    { value: 'grocery', text: this.$tc('category.grocery', 2) },
                    { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
                    { value: 'pet', text: this.$tc('category.petsupplies', 2) }
                    // { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) }
                    // ,{ value: 'childcare', text: this.$t('category.childcare') }
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

    .language {
        padding:0 5px;
    }

    #topnav {
        position: absolute;
        width: 100%;
        z-index: 1200;
    }

    .navbar-brand {
        margin-right: 2px !important;
        font-size: 1rem !important;
    }

    @media (min-width: 768px) {
        .navbar-brand {
            margin-right: 2px !important;
            font-size: 1.25rem !important;
        }
    }

    .bv-example-row {
        height: calc(100% - 124px);
    }
    @media (min-width: 768px)
    {
        .bv-example-row {
            height: calc(100% - 116px);
        }
    }


    #sidebar-wrapper, #page-content-wrapper {
        padding-top: 56px;
        box-sizing: border-box;
    }
    .tab {
        width: 40px;
        height: 60px;
        position: absolute;
        top: 388px;
        z-index: 500;
        left: 0;
        background: #fff;
        transition: left .25s ease-out;
    }
    .tab i {
        font-size: 2rem;
        color: #B5BFCA;
        transform: rotate(-90deg);
        margin-top: 12px;
        margin-left: 4px;
    }

        #wrapper.toggled .tab {
        left: 15rem;
    }

    #wrapper.toggled .tab i {
        transform: rotate(90deg);
    }
@media (min-width: 768px)
{
    .tab {
        margin-left: 0;
        top: 257px;
    }
}

    .map {
        width: auto;
        height: 100%;
        top: 0;
        padding: 0;
        /* margin-left: 8px;
        margin-right: 8px; */
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
        z-index: 1100;
    }

        #sidebar-wrapper .sidebar-heading {
            padding: 0.875rem 1.25rem;
            font-size: 1.2rem;
        }

        #sidebar-wrapper .list-group {
            width: 15rem;
        }

    #page-content-wrapper {
        width:100%;
        height:100%;
        position:absolute;
    }

    #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        #sidebar-wrapper {
            /* margin-left: 0; */
        }

        #page-content-wrapper {
            min-width: 0;
        }

        #wrapper.toggled #sidebar-wrapper {
            /* margin-left: -15rem; */
        }
    }
</style>

