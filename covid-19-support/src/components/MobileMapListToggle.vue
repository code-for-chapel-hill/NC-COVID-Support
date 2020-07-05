<template>
  <div class="map-list-toggle">
    <button @click="$emit('toggle')">Show {{ isFilterOpen ? 'Map' : 'List' }}</button>
  </div>
</template>

<script>
export default {
  props: {
    isFilterOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.map-list-toggle {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 42px;
  z-index: 1037;
  width: 100%;

  button {
    @include button-variant($gray-500, $gray-500);
    width: 100%;
    height: 100%;
  }

  @include media-breakpoint-up(md) {
    display: none;
  }
}
</style>
