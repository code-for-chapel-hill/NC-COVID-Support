<template>
  <div class="resultWrapper">
    <div ref="results" class="resultList">
      <div
        v-for="(item, index) in filteredMarkers"
        v-bind:key="index"
        class="resultItem"
        :class="{ selected: index == location.locValue }"
        :ref="'result' + index"
        @click="$emit('location-selected', { locValue: index, isSetByMap: false })"
      >
        <span class="resultTitle">
          <a v-bind:href="item.gsx$weblink.$t">{{ item.gsx$providername.$t }}</a>
        </span>
        <span class="resultAddress">
          <span v-if="!!item.gsx$cuisine.$t">{{ item.gsx$cuisine.$t }}<br /></span>
          <template v-if="!!item.gsx$provideraddloc.$t">{{ item.gsx$provideraddloc.$t }}, </template>{{ item.gsx$address.$t }},
          {{ item.gsx$city.$t }}
        </span>
        <template v-if="item.gsx$curbside.$t == 1"><i class="fas fa-car" /></template>
        <template v-if="item.gsx$orderonline.$t == 1"><i class="fas fa-mouse" /></template>
        <template v-if="item.gsx$delivery.$t == 1"><i class="fas fa-shipping-fast" /></template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsList',
  data() {
    return {
      selected: false
    }
  },
  props: {
    filteredMarkers: Array,
    location: { locValue: Number, isSetByMap: Boolean }
  },
  watch: {
    location: function (locationVal) {
      if (locationVal.isSetByMap) {
        var top = this.$refs['result' + locationVal.locValue][0].offsetTop - 330
        this.$refs['results'].scrollTo(0, top)
      }
    }
  }
}
</script>

<style>
.resultList {
  max-height: calc(100vh - 330px);
  overflow-y: auto;
}
.resultItem {
  padding: 10px;
  display: block;
  height: 100px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.125);
  background: #fff;
}
.resultItem:hover {
  background: #f8f9fa !important;
  cursor: pointer;
}

.resultItem.selected {
  background: #dffafe !important;
}

.resultItem a {
  color: #000;
}

.resultItem i {
  margin-right: 8px;
  color: #63a2e7;
}

.resultTitle {
  font-size: 1.05rem;
}
.resultAddress {
  font-size: 0.8rem;
  display: block;
  width: 17rem;
}
</style>
