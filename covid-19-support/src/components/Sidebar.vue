<template>
  <div class="border-right" id="sidebar-wrapper">
    <div class="tab bg-dialogs border-right border-top border-bottom" @click="$emit('toggle')">
      <i class="fas fa-caret-down" />
    </div>

    <div class="sidebar-top">
      <search-filters
        class="search-filters"
        :day="day"
        :need="need"
        @need-selected="(opt) => $emit('need-selected', opt)"
        @day-selected="(opt) => $emit('day-selected', opt)"
      />

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
    </div>

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
import BusinessDetails from './BusinessDetails.vue'
import InfoPanel from './InfoPanel.vue'
import ResultsList from './ResultsList.vue'
import SearchFilters from './SearchFilters.vue'

export default {
  name: 'sidebar',
  components: {
    BusinessDetails,
    InfoPanel,
    ResultsList,
    SearchFilters
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

<style lang="scss" scoped>
.custom-select {
  font-size: 0.8rem;
  cursor: pointer;
}

#sidebar-wrapper {
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
    width: $tablet-sidebar-width;
  }

  @include media-breakpoint-up(lg) {
    width: $desktop-sidebar-width;
  }
}

#wrapper.toggled #sidebar-wrapper {
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

.sidebar-top {
  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.search-filters {
  padding: 1rem 0 0 0 !important;
}

.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group {
  /* border-bottom: solid 1px rgba(0, 0, 0, 0.125); */
  padding: 0;
}

.side-nav {
  background: theme-color('secondary');

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }
}

.tab {
  font-size: 1rem;
  width: 30px;
  height: 60px;
  position: absolute;
  top: 169px;
  z-index: 500;
  right: -27px;
  margin-left: 0;
  cursor: pointer;
  background: theme-color('secondary');

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }

  @include media-breakpoint-down(sm) {
    display: none;
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
</style>
