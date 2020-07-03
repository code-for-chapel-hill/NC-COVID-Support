<template>
  <div class="border-right" id="search-filter-wrapper">
    <div class="tab bg-dialogs border-right border-top border-bottom" @click="$emit('toggle')">
      <i class="fas fa-caret-down" />
    </div>

    <b-list-group class="need-day-group">
      <b-list-group-item variant="sideNav" class="need-type">
        <h6>{{ $t('sidebar.what-do-you-need') }}</h6>
        <b-form-select class="custom-select" :value="need" :options="needOptionGroups" @change="(opt) => $emit('need-selected', opt)" />
      </b-list-group-item>
      <b-list-group-item variant="sideNav">
        <h6>{{ $t('sidebar.when-do-you-need-it') }}</h6>
        <b-form-select :value="day" :options="dayOptions" @change="(opt) => $emit('day-selected', opt)" />
      </b-list-group-item>
    </b-list-group>

    <InfoPanel :infotype="'note'" :icon="'fa-info-circle'" v-if="location.currentBusiness == null || showListing">
      {{ $t('sidebar.info-about-us') }} <a href="#" @click="$bvModal.show('about-us')">{{ $t('sidebar.info-link-text') }}</a
      >{{ $t('sidebar.info-end-text') }}
    </InfoPanel>

    <InfoPanel :infotype="'handwash'" :icon="'fa-hands-wash'" v-if="filteredMarkers.length == 0">
      <b class="themeFont">{{ $t('sidebar.shopsafe') }}</b>
      <br />
      (1) {{ $t('sidebar.stayhome') }}<br />
      (2) {{ $t('sidebar.sixfeet') }}<br />
      (3) {{ $t('sidebar.washhands') }}<br />
    </InfoPanel>

    <BusinessDetails
      :infotype="'green'"
      :icon="'fa-tractor'"
      :business="location.currentBusiness"
      v-if="location.currentBusiness != null && showListing != true"
      @close-details="closeDetails"
    ></BusinessDetails>

    <results-list
      :filteredMarkers="highlightFilteredMarkers"
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
    highlightFilteredMarkers: Array,
    location: { locValue: Number, locId: String, isSetByMap: Boolean, currentBusiness: Object },
    showList: Boolean
  },
  computed: {
    // currentBusiness() {
    //   if (this.location == null) {
    //     return
    //   }
    //   return 0 + this.filteredMarkers.length > 0 && this.location.locValue > -1 ? this.filteredMarkers[this.location.locValue] : null
    // },
    needOptionGroups() {
      const categories = this.getNeedCategories().categories
      const needOptions = [{ value: 'none', text: this.$tc('label.selectacategory', 1) }]
      categories.forEach((category) => {
        if (category.subcategories != undefined) {
          const label = category.name
          const myOptions = []
          category.subcategories.forEach((subcategory) => {
            const text = 'category.' + subcategory.code
            myOptions.push({
              text: this.$t(text),
              value: subcategory.code
            })
          })
          needOptions.push({
            label: label,
            options: myOptions
          })
        } else {
          const text = 'category.' + category.code
          needOptions.push({
            text: this.$t(text),
            value: category.code
          })
        }
      })
      return needOptions
    },
    needOptions() {
      return [
        { value: 'selectacategory', text: this.$tc('label.selectacategory', 1) },
        { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
        { value: 'meal', text: this.$tc('category.meal', 2) },
        { value: 'family', text: this.$tc('category.family', 2) },
        { value: 'farm', text: this.$tc('category.farm', 2) },
        { value: 'grocery', text: this.$tc('category.grocery', 2) },
        { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
        { value: 'food_bev', text: this.$tc('category.food_bev', 2) },
        { value: 'pet', text: this.$t('category.pet') }
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
    getNeedCategories() {
      return {
        categories: [
          {
            code: 'food',
            id: 1001,
            name: 'Food Resources',
            subcategories: [
              {
                code: 'restaurant',
                id: 1002,
                name: 'Restaurants'
              },
              {
                code: 'meal',
                id: 1004,
                name: 'Free meals'
              },
              {
                code: 'family',
                id: 1006,
                name: 'Prepared family meals'
              },
              {
                code: 'food_bev',
                id: 1003,
                name: 'Specialty food & beverage'
              },
              {
                code: 'grocery',
                id: 1005,
                name: 'Groceries'
              }
            ]
          },
          {
            code: 'farm',
            id: 1007,
            name: 'Farms & farmers markets'
          },
          {
            code: 'pharmacy',
            id: 1008,
            name: 'Pharmacy'
          },
          {
            code: 'pet',
            id: 1009,
            name: 'Pet supplies'
          }
        ],
        regions: ['Orange']
      }
    },
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

<style lang="scss" scoped>
.custom-select {
  font-size: 0.8rem;
  cursor: pointer;
}

#search-filter-wrapper {
  transition: transform 0.25s ease-out;
  transform: translateX(-100%);
  z-index: 1035;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  background: theme-color('secondary');

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }

  @include media-breakpoint-up(md) {
    height: auto;
    width: $desktop-sidebar-width + 4px;
  }
}

#wrapper.toggled #search-filter-wrapper {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
}

.tab,
#wrapper.toggled .tab {
  z-index: 0;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);

  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);
  }
}

.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group {
  /* border-bottom: solid 1px rgba(0, 0, 0, 0.125); */
  padding: 0;
}

.list-group-item {
  border: none !important;
  padding: 0 1.25rem;
  border-bottom: none;

  &.need-type {
    margin-bottom: 8px;
  }
}

.list-group.need-day-group {
  padding: 1rem 0 0 0 !important;
}

.list-group-flush.need-day-group .list-group-item:first-child {
  padding-bottom: 1rem !important;
}

.side-nav {
  background: theme-color('secondary');
  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }
}

.tab {
  font-size: 0.8rem;
  width: 30px;
  height: 60px;
  position: absolute;
  top: 169px;
  z-index: 500;
  right: -27px;
  background: theme-color('secondary');
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }
}

#wrapper.toggled .tab i {
  transform: rotate(90deg);
}

.tab i {
  font-size: 1.5rem;
  color: theme-color('buttons');
  transform: rotate(-90deg);
  margin-top: 18px;
  margin-left: 7px;
}

@include media-breakpoint-up(sm) {
  .tab {
    margin-left: 0;
    font-size: 1rem;
  }
}
</style>
