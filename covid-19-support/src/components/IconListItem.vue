<template>
  <div>
    <template v-if="link != ''">
      <div class="iconListItem">
        <div class="ilIcon">
          <div class="leafletIcon" v-if="leafletIcon" v-html="generateIcon"></div>
          <i v-bind:class="iconStr" v-if="icon != ''"></i>
          <img :src="image" v-if="icon == null || icon == ''" />
        </div>
        <div class="ilTitle">
          <a :href="link" v-if="link != null && link != ''">
            <slot>
              <span class="title">{{ title }}</span>
            </slot>
          </a>
          <slot>
            <span class="title" v-if="link == null || link == ''">{{ title }}</span>
          </slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="iconListItem">
        <div class="ilIcon">
          <div class="leafletIcon" v-if="leafletIcon" v-html="generateIcon"></div>
          <i v-bind:class="iconStr" v-if="icon != ''"></i>
          <img :src="image" v-if="image != ''" />
        </div>
        <div class="ilTitle">
          <slot>
            <span class="title">{{ title }}</span>
          </slot>
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
    leafletIcon: { type: Object },
    title: { type: String },
    link: { type: String },
    icon: { type: String },
    image: { type: String },
    iconSet: { type: String }
  },
  computed: {
    generateIcon() {
      return this.leafletIcon.createIcon().outerHTML
    },
    iconStr() {
      if (this.iconSet != null && this.iconSet != undefined) {
        return this.iconSet + ' ' + this.icon
      }
      return 'fas ' + this.icon
    }
  }
}
</script>

<style lang="scss">
.iconListItem {
  > div {
    display: inline-block;
    line-height: 1.2rem;
    vertical-align: middle;
    margin: 0.25rem 0;
  }

  a {
    color: theme-color('warning');

    @media (prefers-color-scheme: dark) {
      color: theme-color-level(warning, 5);
    }
  }

  .leafletIcon {
    margin: 0 0 0 0 !important;

    & .leaflet-marker-icon {
      position: static;
      margin: 0 0 0 0 !important;
      width: 32px !important;
      height: 44px !important;
    }
  }
}

.ilIcon {
  font-size: 1.2rem;
  width: 33px;
}

.ilTitle {
  min-width: 160px;
}
</style>
