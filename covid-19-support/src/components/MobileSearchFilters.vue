<template>
  <search-filters class="mobile-search-filters" :need="need" @need-selected="(opt) => $emit('need-selected', opt)"></search-filters>
</template>

<script>
import SearchFilters from './SearchFilters'
export default {
  props: {
    need: String
  },
  components: {
    SearchFilters
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

  @media (prefers-color-scheme: dark) {
    background: theme-color('secondaryDark');
  }

  @include media-breakpoint-up(md) {
    display: none;
  }
}
</style>
