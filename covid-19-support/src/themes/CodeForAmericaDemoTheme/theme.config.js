export const theme = {
  settings: {
    initialMapCenter: {
      lat: 39.8283,
      lng: -98.5795
    },
    initialMapZoom: 5
  },
  socialMedia: [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/readingdancer/NC-COVID-Support'
    }
  ],
  data: {
    spreadsheetUrl: 'https://spreadsheets.google.com/feeds/list/14XnTyhSqfRT7xh7QA4F9ydTU9x6wGiRiKMSieT5sG4o/1/public/values?alt=json'
  },
  maps: {
    normal: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
  }
}
