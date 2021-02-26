<template>
  <div class="mobile-search-filters">
    <search-filters :need="need" @need-selected="(opt) => $emit('need-selected', opt)"></search-filters>
    <b-alert v-if="warning" v-model="showWarning" variant="warning" dismissible>{{ warning }}</b-alert>
  </div>
</template>

<script>
import SearchFilters from './SearchFilters'
export default {
  props: {
    need: String,
    warning: String
  },
  components: {
    SearchFilters
  },
  data() {
    return {
      showWarning: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-search-filters {
  padding: 10px 0;
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 1037;
  width: 100%;
  background: theme-color('secondary');

  .alert {
    position: absolute;
    top: 100%;
    margin: 20px 1.25rem;
    width: calc(100% - 2.5rem);
  }

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }

  @include media-breakpoint-up(md) {
    display: none;
  }
}
</style>
