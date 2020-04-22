<template>
  <div class="bg-light border-right" id="search-filter-wrapper">
    <div class="tab bg-light border-right border-top border-bottom" @click="$emit('toggle')">
      <i class="fas fa-caret-down" />
    </div>

    <div class="list-group list-group-flush need-day-group">
      <div class="list-group-item list-group-item-action bg-light">
        <h6>{{ $t('sidebar.what-do-you-need') }}</h6>
        <b-form-select :value="need" :options="needOptions" @change="(opt) => $emit('need-selected', opt)" />
      </div>
      <div class="list-group-item list-group-item-action bg-light">
        <h6>{{ $t('sidebar.when-do-you-need-it') }}</h6>
        <b-form-select :value="day" :options="dayOptions" @change="(opt) => $emit('day-selected', opt)" />
      </div>
    </div>

    <InfoPanel :infotype="'note'" :icon="'fa-info-circle'" v-if="currentBusiness == null || showListing">
      {{ $t('sidebar.info-about-us') }} <a href="#" @click="$bvModal.show('about-us')">{{ $t('sidebar.info-link-text') }}</a
      >{{ $t('sidebar.info-end-text') }}
    </InfoPanel>

    <InfoPanel :infotype="'handwash'" :icon="'fa-hands-wash'" v-if="filteredMarkers.length == 0">
      <b class="poppins">{{ $t('sidebar.shopsafe') }}</b>
      <br />
      (1) {{ $t('sidebar.stayhome') }}<br />
      (2) {{ $t('sidebar.sixfeet') }}<br />
      (3) {{ $t('sidebar.washhands') }}<br />
    </InfoPanel>

    <BusinessDetails
      :infotype="'green'"
      :icon="'fa-tractor'"
      :business="currentBusiness"
      v-if="currentBusiness != null && showListing != true"
      @close-details="closeDetails"
    ></BusinessDetails>

    <results-list
      :filteredMarkers="filteredMarkers"
      :location="location"
      @location-selected="passLocation"
      v-if="showListing"
      :selected-day="day"
    />
  </div>
</template>

<script>
import { weekdays } from '../constants'
import BusinessDetails from './BusinessDetails.vue'
import InfoPanel from './InfoPanel.vue'
import ResultsList from './ResultsList.vue'

export default {
  name: 'search-filter',
  components: {
    BusinessDetails,
    InfoPanel,
    ResultsList
  },
  data() {
    return {
      locationData: location,
      showListing: this.showList
    }
  },
  props: {
    isFilterOpen: Boolean,
    need: String,
    day: Number,
    filteredMarkers: Array,
    location: { locValue: Number, isSetByMap: Boolean },
    showList: Boolean
  },
  computed: {
    currentBusiness() {
      if (this.location == null) {
        return
      }
      return 0 + this.filteredMarkers.length > 0 && this.location.locValue > -1 ? this.filteredMarkers[this.location.locValue] : null
    },
    needOptions() {
      return [
        { value: 'none', text: this.$tc('label.selectacategory', 1) },
        { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
        { value: 'meal', text: this.$tc('category.meal', 2) },
        { value: 'family', text: this.$tc('category.family', 2) },
        { value: 'farm', text: this.$tc('category.farm', 2) },
        { value: 'grocery', text: this.$tc('category.grocery', 2) },
        { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
        { value: 'pet', text: this.$tc('category.petsupplies', 2) }
      ]
    },
    dayOptions() {
      return weekdays.map((i) => ({
        value: i.pos,
        text: this.$t(`dayofweek.${i.day}`)
      }))
    },
    tabtitle() {
      return this.isFilterOpen ? this.$t('sidebar.close-panel') : this.$t('sidebar.open-panel')
    }
  },
  methods: {
    closeDetails: function () {
      this.showListing = true
    },
    passLocation: function (val) {
      this.locationData = val
      this.showListing = false
      this.$emit('location-selected', val)
    }
  },
  watch: {
    day: function () {
      this.locationData = null
      this.showListing = true
    },
    need: function (val) {
      this.locationData = null
      if (val == 'none') {
        this.showListing = false
      } else {
        this.showListing = true
      }
    },
    location: function () {
      this.showListing = false
    }
  }
}
</script>

<style scoped>
.custom-select {
  font-size: 0.8rem;
}

#search-filter-wrapper {
  margin-left: -290px;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  z-index: 1035;
  max-height: 100vh;
  max-width: 290px;
}

#wrapper.toggled #search-filter-wrapper {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group {
  width: 290px;
  /* border-bottom: solid 1px rgba(0, 0, 0, 0.125); */
  padding: 0;
}

.list-group-item {
  border: none !important;
  padding: 0 1.25rem;
  border-bottom: none;
}

.list-group.need-day-group {
  padding: 1rem 0 0 0 !important;
}

.list-group-flush.need-day-group .list-group-item:first-child {
  padding-bottom: 1rem !important;
}

.side-nav {
  background: #eee;
}

.tab {
  font-size: 0.8rem;
  width: 30px;
  height: 60px;
  position: absolute;
  top: 169px;
  z-index: 500;
  left: 0;
  background: #fff;
  transition: left 0.25s ease-out;
  cursor: pointer;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}

#wrapper.toggled .tab {
  box-shadow: 12px 0px 14px 0px rgba(0, 0, 0, 0.4);
  left: 290px;
}

#wrapper.toggled .tab i {
  transform: rotate(90deg);
}
.tab i {
  font-size: 1.5rem;
  color: #ee8842;
  transform: rotate(-90deg);
  margin-top: 18px;
  margin-left: 7px;
}

@media (min-width: 768px) {
  .tab {
    margin-left: 0;
    font-size: 1rem;
  }
}
</style>
