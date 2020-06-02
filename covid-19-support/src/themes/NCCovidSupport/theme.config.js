export const theme = {
  settings: {
    initialMapCenter: {
      lat: 35.91371,
      lng: -79.057919
    },
    initialMapZoom: 10
  },
  socialMedia: {
    twitter: 'nccovidsupport',
    instagram: 'nccovidsupport',
    facebook: 'https://www.facebook.com/nccovidsupport',
    github: 'https://github.com/code-for-chapel-hill/NC-COVID-Support'
  },
  data: {
    spreadsheetUrl: 'https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json'
  },
  maps: {
    normal: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
  }
}
