<template>
  <div class="valuebox poppins" :class="{ selected: selected }" @click="selected = !selected">
    <span class="number">{{ content.value }}</span>
    <span class="title">{{ content.title }}</span>
    <i class="fas" v-bind:class="content.icon"></i>
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
    content: {
      title: { type: String },
      value: { type: Number },
      icon: { type: String }
    }
  }
}
</script>

<style scoped lang="scss">
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

.number {
  position: relative;
  top: 14px;
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
  font-size: 0.8rem;
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

.valuebox {
  i.fas {
    font-size: 2em;
    opacity: 0.1;
    position: absolute;
    right: 13px;
    top: 13px;
  }

  &.bg-blue {
    background-color: #2eb7cb;
  }

  &.bg-green {
    background-color: #566ca9;
  }

  &:hover {
    // background-color: #52aa36 !important;
    i {
      opacity: 0.3;
    }
    cursor: pointer;
  }

  &.selected {
    background: #52aa36;
    i {
      opacity: 1;
    }
  }
}

@media (min-width: 768px) {
  .valuebox i.fas {
    font-size: 4.5em;
    right: 25px;
    top: 24px;
  }
}
</style>
