export const theme = {
  settings: {
    initialMapCenter: {
      lat: 35.91371,
      lng: -79.057919
    }
  },
  data: {
    spreadsheetUrl: 'https://spreadsheets.google.com/feeds/list/1uBmMediCrxYl5qWqapbj4SOFTEXHoipE2oibMa2GTFo/1/public/values?alt=json'
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
