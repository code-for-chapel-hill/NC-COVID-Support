<template>
  <div class="valuebox themeFont" :class="{ selected: content.selected }" @click="$emit('box-selected', { need: content.need })">
    <div class="number">{{ content.value }}</div>
    <div class="title" :class="{ ten: content.value > 9, hundred: content.value > 99, thousand: content.value > 999 }">
      {{ content.title }}
    </div>
    <i class="fas" v-bind:class="content.icon" v-if="content.icon != ''"></i>
  </div>
</template>

<script>
export default {
  name: 'ValueBox',
  props: {
    content: {
      title: String,
      value: Number,
      icon: String,
      need: String,
      selected: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
/*! purgecss start ignore */
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
  position: absolute;
  left: 10px;
}

.number,
.title {
  //color: #fff;
  align-items: center;
  display: flex;
  height: 50px;
  line-height: 1.2rem;
  font-size: 1rem;
}
.title {
  position: absolute;
  margin-right: 24px;
  z-index: 3;
  left: 26px;
}

.title.ten {
  left: 36px;
}
.title.hundred {
  left: 46px;
}
.title.thousand {
  left: 56px;
}
@media (min-width: 768px) {
  .title {
    line-height: 1.3rem;
    font-size: 1.1rem;
    left: 18px !important;
    bottom: 10px;
  }
  .number {
    font-size: 2em;
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 18px !important;
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
    z-index: 2;
  }

  &.bg-blue {
    background-color: #2eb7cb;
    @media (prefers-color-scheme: dark) {
      background-color: #1b6c79;
    }
  }

  &.bg-green {
    background-color: #566ca9;
    @media (prefers-color-scheme: dark) {
      background-color: #344268;
    }
  }

  &:hover {
    // background-color: #52aa36 !important;
    i {
      opacity: 0.3;
    }
    cursor: pointer;
  }

  &.selected {
    background: theme-color('success') !important;
    i {
      opacity: 0.5;
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
/*! purgecss end ignore */
</style>
