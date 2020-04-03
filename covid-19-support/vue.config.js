module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/COVID-Support-For-CH/' : '/',
  publicPath: '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
