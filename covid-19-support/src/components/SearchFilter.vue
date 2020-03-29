<template>
  <div class="bg-light border-right" id="search-filter-wrapper">
    <div
      class="tab bg-light border-right border-top border-bottom"
      @click="$emit('toggle')"
    >
      <i class="fas fa-caret-square-down" />
    </div>

    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light">
        {{ $t('sidebar.what-do-you-need') }}
        <b-form-select
          :value="need"
          :options="needOptions"
          @change="(opt) => $emit('need-selected', opt)"
        />
      </div>
      <div class="list-group-item list-group-item-action bg-light">
        {{ $t('sidebar.when-do-you-need-it') }}
        <b-form-select
          :value="day"
          :options="dayOptions"
          @change="(opt) => $emit('day-selected', opt)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { weekdays } from '../constants'

export default {
  name: 'search-filter',
  props: {
    isFilterOpen: Boolean,
    need: String,
    day: Number
  },
  computed: {
    needOptions() {
      return [
        { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
        { value: 'meal', text: this.$tc('category.meal', 2) },
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
  }
}
</script>

<style scoped>
#search-filter-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  z-index: 1100;
}

.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group {
  width: 15rem;
}

.side-nav {
  background: #eee;
}

.tab {
  width: 40px;
  height: 60px;
  position: absolute;
  top: 388px;
  z-index: 500;
  left: 0;
  background: #fff;
  transition: left 0.25s ease-out;
  cursor: pointer;
}
.tab i {
  font-size: 2rem;
  color: #b5bfca;
  transform: rotate(-90deg);
  margin-top: 12px;
  margin-left: 4px;
}

@media (min-width: 768px) {
  .tab {
    margin-left: 0;
    top: 257px;
  }
}
</style>
