<template>
  <div class="resultWrapper">
    <div class="resultList">
      <div v-for="(item, index) in filteredMarkers" v-bind:key="index" class="resultItem">
        <span class="resultTitle">
          <a v-bind:href="item.gsx$weblink.$t">{{ item.gsx$providername.$t }}</a>
        </span>
        <span class="resultAddress">
          <span v-if="!!item.gsx$cuisine.$t">{{ item.gsx$cuisine.$t }} - </span>
          <template v-if="!!item.gsx$provideraddloc.$t">{{ item.gsx$provideraddloc.$t }}, </template>{{ item.gsx$address.$t }},
          {{ item.gsx$city.$t }}
        </span>
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
    filteredMarkers: Array
  }
}
</script>

<style>
.resultList {
  max-height: calc(100vh - 229px);
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

.resultItem a {
  color: #000;
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
