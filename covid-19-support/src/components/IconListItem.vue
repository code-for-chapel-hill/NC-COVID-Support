<template>
  <div>
    <template v-if="link != ''">
      <div class="iconListItem">
        <div class="ilIcon">
          <i class="fas" v-bind:class="icon"></i>
        </div>
        <div class="ilTitle">
          <a :href="link">
            <span class="title">{{ title }}</span>
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="iconListItem">
        <div class="ilIcon">
          <i class="fas" v-bind:class="icon"></i>
        </div>
        <div class="ilTitle">
          <span class="title">{{ title }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IconListItem',
  data() {
    return {
      selected: false
    }
  },
  props: {
    title: { type: String },
    link: { type: String },
    icon: { type: String }
  }
}
</script>

<style>
.iconListItem div {
  display:inline-block;
  line-height: 1.2rem;
  vertical-align: middle;
  margin: 0.25rem 0;
}
.ilIcon {
  font-size: 1.2rem;
  width: 28px;
}
.ilTitle {
  width: 215px;
}
</style>
