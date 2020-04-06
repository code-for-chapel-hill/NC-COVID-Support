<template>
  <b-navbar toggleable="lg" type="dark" variant="info" id="topnav">
    <b-navbar-brand href="#">
      {{ $t('title') }}
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right @click="$bvModal.show('about-us')">
          {{ $t('about.linktext') }}
        </b-nav-item>
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <i class="fas fa-globe-americas" aria-hidden="true" />
            <span v-html="language" class="language" />
          </template>
          <b-dropdown-item href="#" v-for="item in languages" v-bind:key="item.iso">
            <div v-html="item.name" @click="$emit('language-selected', item)"></div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    language: String
  },
  data() {
    return {
      languages: [
        { iso: 'en', name: 'English' },
        { iso: 'es', name: 'Espa&#241;ol' },
        { iso: 'fr', name: 'Fran&#231;ais' },
        { iso: 'ko', name: '한국어' },
        { iso: 'ar', name: 'عربى' },
        { iso: 'ja', name: '日本人' },
        { iso: 'zh', name: '中文' }
      ]
    }
  }
}
</script>

<style>
#topnav {
  position: absolute;
  width: 100%;
  z-index: 1038;
}

.navbar-brand {
  margin-right: 2px !important;
  font-size: 0.95rem !important;
}

.language {
  padding: 0 5px;
}

@media (min-width: 768px) {
  .navbar-brand {
    margin-right: 2px !important;
    font-size: 1.25rem !important;
  }
}
</style>
