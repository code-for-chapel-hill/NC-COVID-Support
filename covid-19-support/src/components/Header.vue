<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" id="topnav">
    <b-navbar-brand href="#">
      <slot></slot>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            variant="buttons"
            type="button"
            onclick="window.open('https://forms.gle/fWiCg2z5CRx9ukGu7','_blank')"
            ><i class="fas fa-plus-square" aria-hidden="true" /> {{ $t('about.devhelp.addbusiness') }}</b-button
          >
        </b-nav-item>

        <b-nav-item right @click="$bvModal.show('about-us')">
          {{ $t('about.linktext') }}
        </b-nav-item>
        <b-nav-item right class="icons">
          <b-link href="https://www.facebook.com/nccovidsupport">
            <i class="fab fa-facebook-square"></i>
          </b-link>
          <b-link href="https://twitter.com/nccovidsupport">
            <i class="fab fa-twitter"></i>
          </b-link>
          <b-link href="https://instagram.com/nccovidsupport">
            <i class="fab fa-instagram"></i>
          </b-link>
          <b-link href="https://github.com/code-for-chapel-hill/NC-COVID-Support">
            <i class="fab fa-github"></i>
          </b-link>
        </b-nav-item>
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <i class="fas fa-globe-americas" aria-hidden="true" />
            <span v-html="language" class="language" />
          </template>
          <b-dropdown-item href="#" v-for="item in languages" v-bind:key="item.iso">
            <span :title="$t('languages.' + item.iso)"
              ><div v-html="item.name" :lang="item.iso" @click="$emit('language-selected', item)"></div
            ></span>
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
        { iso: 'zh', name: '中文' },
        { iso: 'ms', name: 'ဗမာ' }
      ]
    }
  }
}
</script>

<style lang="scss">
#topnav {
  position: absolute;
  width: 100%;
  z-index: 1038;
}

.navbar-brand {
  margin-right: 2px !important;
  font-size: 0.95rem !important;
  padding: 0.2rem 0 !important;
  font-weight: 600;
}

.add-business {
  float: right;
}

.language {
  padding: 0 5px;
}

.navbar-nav {
  margin-bottom: 16px !important;
}

.nav-item {
  margin: auto 0;
  text-align: right;
}

.navbar-nav > li > .dropdown-menu {
  background-color: $nav-dropdown-bg;
  text-align: right;
  @media (prefers-color-scheme: dark) {
    background-color: $nav-dropdown-bg-dark;
  }
}

.navbar-nav > li > .dropdown-menu a {
  color: $nav-dropdown;
  @media (prefers-color-scheme: dark) {
    color: $nav-dropdown-dark;
  }
}

.btn-buttons {
  @media (prefers-color-scheme: light) {
    color: $button-text !important;
  }
}

.navbar-nav > li > .dropdown-menu a:hover {
  background-color: $nav-dropdown-bg-hover;
  @media (prefers-color-scheme: dark) {
    background-color: $nav-dropdown-bg-hover-dark;
  }
}

@media (min-width: 768px) {
  .navbar-nav {
    margin-bottom: 0 !important;
  }
  .navbar-brand {
    margin-right: 2px !important;
    font-size: 1.25rem !important;
  }
}

.ncblue {
  color: $teal;
}

.icons a {
  color: rgba(255, 255, 255, 0.5);
  margin-left: 5px;
  margin-right: 5px;
}

.icons a:hover {
  color: rgba(255, 255, 255, 0.75);
}
</style>
