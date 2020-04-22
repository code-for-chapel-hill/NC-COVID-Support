export const weekdays = [
  { day: 'monday', pos: 1 },
  { day: 'tuesday', pos: 2 },
  { day: 'wednesday', pos: 3 },
  { day: 'thursday', pos: 4 },
  { day: 'friday', pos: 5 },
  { day: 'saturday', pos: 6 },
  { day: 'sunday', pos: 0 }
]

export const weekdaysJs = [
  { day: 'sunday' },
  { day: 'monday' },
  { day: 'tuesday' },
  { day: 'wednesday' },
  { day: 'thursday' },
  { day: 'friday' },
  { day: 'saturday' }
]

export const spreadsheetUrl =
  'https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json'

export const openStreetMapAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export const dayFilters = ['mon', 'tues', 'wed', 'thr', 'fri', 'sat', 'sun'].map((attr) => `gsx$${attr}`)
export const seniorDayFilters = ['mon', 'tues', 'wed', 'thr', 'fri', 'sat', 'sun'].map((attr) => `gsx$sp${attr}`)

export const booleanFilters = [
  'in-storepickup',
  'curbside',
  'specialhours',
  'mealstudent',
  'mealpublic',
  'familymeal',
  'orderonline',
  'payonline',
  'mustpreorder',
  'discountmedical',
  'delivery',
  'freeproduce',
  'freegroceries',
  'farmpick-up',
  'farmersmarket'
]
