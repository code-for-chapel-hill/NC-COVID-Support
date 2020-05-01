module.exports = {
  publicPath: process.env.NODE_ENV === 'production' && process.env.VUE_APP_THEME === 'AmericanDemoTheme' ? '/NC-COVID-Support/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
          // create alias for white label SCSS variable files
          'vueAppTheme': "../themes/" + process.env.VUE_APP_THEME,
      }
    }
  },
  css: {
    loaderOptions: {
     sass: {
      prependData: `
       @import "./node_modules/bootstrap/scss/_functions.scss";
       @import "~bootstrap/scss/variables";
       @import "~bootstrap/scss/mixins";
       @import './src/scss/Mixins.scss';
       @import "./src/themes/${process.env.VUE_APP_THEME !== undefined ? process.env.VUE_APP_THEME : "NCCovidSupport"}/SCSS/custom.scss";
      `}
    }
  }
}
