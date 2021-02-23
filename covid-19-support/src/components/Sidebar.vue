<template>
  <aside>
    <div class="sh" @click="toggleListing()" v-if="showLists">
      <span>{{ showListLabel }}</span>
    </div>

    <div class="border-right" id="sidebar-wrapper" :class="expandedDetails">
      <div class="tab bg-dialogs border-right border-top border-bottom" @click="$emit('toggle')">
        <i class="fas fa-caret-down" />
      </div>

      <div>
        <div class="sidebar-top">
          <search-filters class="search-filters" :need="need" @need-selected="(opt) => $emit('need-selected', opt)" />

          <info-panel :infotype="'note'" :icon="'fa-info-circle'" v-if="location.currentBusiness == null || showLists">
            {{ $t('sidebar.info-about-us') }} <a href="#" @click="$bvModal.show('about-us')">{{ $t('sidebar.info-link-text') }}</a
            >{{ $t('sidebar.info-end-text') }}
          </info-panel>

          <info-panel :infotype="'handwash'" :icon="'fa-hands-wash'" v-if="filteredMarkers.length == 0">
            <b class="themeFont">{{ $t('sidebar.shopsafe') }}</b>
            <br />
            (1) {{ $t('sidebar.stayhome') }}<br />
            (2) {{ $t('sidebar.sixfeet') }}<br />
            (3) {{ $t('sidebar.washhands') }}<br />
          </info-panel>
        </div>

        <div @click="toggleExpandingDetails()">
          <business-details
            :infotype="'green'"
            :icon="'fa-tractor'"
            :business="location.currentBusiness"
            :snippet="businessSnippet"
            v-if="location.currentBusiness != null && showLists !== true"
            @close-details="$emit('close-details')"
          ></business-details>
        </div>
      </div>

      <results-list
        :filteredMarkers="highlightFilteredMarkers"
        :location="location"
        @location-selected="(val) => $emit('location-selected', val)"
        v-if="showLists"
      />
    </div>
  </aside>
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
  props: {
    isFilterOpen: Boolean,
    need: String,
    filteredMarkers: Array,
    highlightFilteredMarkers: Array,
    location: { locValue: Number, locId: String, isSetByMap: Boolean, currentBusiness: Object },
    showList: Boolean
  },
  data() {
    return {
      showListsVal: this.showList,
      showExpandedDetails: false
    }
  },
  computed: {
    expandedDetails() {
      var cssClass = []

      if (this.showExpandedDetails) {
        cssClass.push('showExpandedDetails')
      }

      if (this.location.currentBusiness) {
        cssClass.push('business')
      }

      return cssClass.join(' ')
    },
    showLists() {
      return this.showListsVal
    },
    showListLabel() {
      return this.showExpandedDetails ? 'Show Map' : 'Show List'
    },
    businessSnippet() {
      return (this.$screen.xs || this.$screen.sm) && !this.showExpandedDetails
    }
  },
  methods: {
    toggleExpandingDetails() {
      this.showExpandedDetails = !this.showExpandedDetails
    },
    toggleListing() {
      this.showListsVal = true
      this.showExpandedDetails = !this.showExpandedDetails
    }
  },
  watch: {
    showList(val) {
      this.showListsVal = val
    }
  }
}
</script>

<style lang="scss" scoped>
.sh {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2000;
  background: white;
  padding: 2px 10px;
  box-shadow: 0px 0px 4px #999;
  margin-right: calc(2.5% + 4px);
  margin-bottom: 4px;

  @include media-breakpoint-up(md) {
    display: none;
  }
}
.custom-select {
  font-size: 0.8rem;
  cursor: pointer;
}

#sidebar-wrapper {
  transition: transform 0.25s ease-out;
  transform: translateY(calc(100vh - 132px));
  z-index: 1035;
  max-height: 100vh;
  margin-left: 2.5%;
  margin-right: 2.5%;
  width: 95%;
  height: 100vh;
  background: theme-color('secondary');
  z-index: 1037;

  &.business {
    @include media-breakpoint-down(sm) {
      transform: translateY(calc(100vh - 332px));
    }
  }

  &.showExpandedDetails {
    @include media-breakpoint-down(sm) {
      transform: translateY(-92px) !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }

  @include media-breakpoint-up(sm) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  @include media-breakpoint-up(md) {
    height: auto;
    width: $tablet-sidebar-width;
    transform: translateX(-100%);
  }

  @include media-breakpoint-up(lg) {
    width: $desktop-sidebar-width;
  }
}

#wrapper.toggled #sidebar-wrapper {
  // transform: translateY(calc(100vh - 215px));

  // &.showExpandedDetails {
  //   transform: translateY(-97px);
  //   @include media-breakpoint-up(md) {
  //     transform: translateX(0);
  //   }
  // }

  @include media-breakpoint-up(md) {
    transform: translateX(0);
  }
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
  padding: 0.6rem 0 0 0 !important;
  @include media-breakpoint-up(sm) {
    padding: 3.5rem 0 0 0 !important;
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
