<template>
  <div class="bg-light border-right" id="search-filter-wrapper">
    <div class="tab bg-light border-right border-top border-bottom" @click="$emit('toggle')">
      <i class="fas fa-caret-down" />
    </div>

    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light">
        {{ $t('sidebar.what-do-you-need') }}
        <b-form-select :value="need" :options="needOptions" @change="(opt) => $emit('need-selected', opt)" />
      </div>
      <div class="list-group-item list-group-item-action bg-light">
        {{ $t('sidebar.when-do-you-need-it') }}
        <b-form-select :value="day" :options="dayOptions" @change="(opt) => $emit('day-selected', opt)" />
      </div>
    </div>

    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light note">
        <i class="fas fa-info-circle" /><div>
        {{ $t('sidebar.info-about-us') }} <a href="#" @click="$bvModal.show()">{{ $t('sidebar.info-link-text') }}</a
        >{{ $t('sidebar.info-end-text') }}</div>
      </div>
    </div>

    <div class="list-group list-group-flush" v-if="filteredMarkers.length == 0">
      <div class="list-group-item list-group-item-action bg-light handwash">
        <i class="fas fa-hands-wash"></i>
        <div>
        <b>{{$t('sidebar.shopsafe')}}</b></br>
        (1) {{$t('sidebar.stayhome')}}</br>
        (2) {{$t('sidebar.sixfeet')}}</br>
        (3) {{$t('sidebar.washhands')}}</br>
      </div>
      </div>
    </div>

    <results-list :filteredMarkers="filteredMarkers" :location="location" @location-selected="passLocation" />
  </div>
</template>

<script>
import { weekdays } from '../constants'
import ResultsList from './ResultsList.vue'

export default {
  name: 'search-filter',
  components: {
    ResultsList
  },
  data() {
    return {
      locationData: location
    }
  },
  props: {
    isFilterOpen: Boolean,
    need: String,
    day: Number,
    filteredMarkers: Array,
    location: { value: Number, isSetByMap: Boolean }
  },
  computed: {
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
        // { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) }
        // { value: 'childcare', text: this.$t('category.childcare') }
      ]
    },
    dayOptions() {
      return weekdays.map((day, index) => ({
        value: index,
        text: this.$t(`dayofweek.${day}`)
      }))
    }
  },
  methods: {
    passLocation: function (val) {
      console.log('SearchFilter (75): passLocation' + val.isSetByMap)
      this.locationData = val
      this.$emit('location-selected', val)
    }
  },  
  watch: {
    locationData: function (locationVal) {
      console.log('SearchFilter (82): watch ' + locationVal.isSetByMap)
    }
  }
}
</script>

<style scoped>
.note, .handwash {
  font-size: 0.8rem;
  color: #666;
}

.note i, .handwash i {
  font-size: 3rem;
  color: #ffb71c;
  margin: 7px 10px 0 0;
  float: left;
}

.handwash i {
  color: #FF2C1C;
}

.note div, .handwash div {
display: inline-block;
width: 195px;
}

#search-filter-wrapper {
  margin-left: -300px;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  z-index: 1035;
  max-height: 100vh;
}

#wrapper.toggled #search-filter-wrapper {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group {
  width: 300px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.125);
}

.list-group-item {
  border: none !important;
}

.side-nav {
  background: #eee;
}

.tab {
  font-size: 0.8rem;
  width: 20px;
  height: 60px;
  position: absolute;
  top: 169px;
  z-index: 500;
  left: 0;
  background: #fff;
  transition: left 0.25s ease-out;
  cursor: pointer;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);
}

#wrapper.toggled .tab {
  box-shadow: 12px 0px 14px 0px rgba(0, 0, 0, 0.3);
  left: 300px;
}

#wrapper.toggled .tab i {
  transform: rotate(90deg);
}
.tab i {
  font-size: 1.5rem;
  color: #b5bfca;
  transform: rotate(-90deg);
  margin-top: 18px;
  margin-left: 2px;
}

@media (min-width: 768px) {
  .tab {
    margin-left: 0;
    font-size: 1rem;
  }
}
</style>
