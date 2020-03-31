<template>
  <div class="valuebox" :class="{ selected: selected }">
    <span class="number">{{ value }}</span>
    <span class="title">{{ title }}</span>
    <i class="fas" v-bind:class="icon"></i>
  </div>
</template>

<script>
export default {
  name: 'ValueBox',
  data() {
    return {
      selected: false
    }
  },
  props: {
    title: { type: String },
    value: { type: Number },
    icon: { type: String }
  }
}
</script>

<style scoped>
.valuebox {
  height: 50px;
  padding: 0 8px;
  margin: 4px 4px;
}
@media (min-width: 768px) {
  /* margin: 8px 4px; */
  .valuebox {
    height: 100px;
    padding: 20px;
  }
}
.number,
.title {
  color: #fff;
}
.title {
  margin-left: 8px;

  position: absolute;
  line-height: 1.1rem;
  margin-top: 8px;
  margin-right: 24px;
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  .title {
    line-height: 1.2rem;
    margin-top: -6px;
    font-size: 1.1rem;
    left: 15px;
    bottom: 15px;
  }
  .number {
    font-size: 2em;
    margin-top: 14px;
    display: inline-block;
    position: absolute;
    top: 0;
  }
}
@media (min-width: 1200px) {
  .title {
    line-height: 1.5rem;
    margin-top: 12px;
    font-size: 1.2rem;
  }
}

.number {
  font-size: 2em;
}
.valuebox i.fas {
  font-size: 2em;
  opacity: 0.1;
  position: absolute;
  right: 13px;
  top: 13px;
}
@media (min-width: 768px) {
  .valuebox i.fas {
    font-size: 4.5em;
    right: 25px;
    top: 24px;
  }
}
.valuebox.bg-blue {
  background-color: #63a2e7 !important;
}
.valuebox.bg-green {
  background-color: #75c759 !important;
}
.valuebox.bg-green:hover {
  background-color: #52aa36 !important;
  cursor: pointer;
}
.valuebox.bg-blue:hover {
  background-color: #4189da !important;
  cursor: pointer;
}
.valuebox.valuebox.selected i {
  opacity: 0.3;
}
</style>
