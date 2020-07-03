export const dayAny = 7

export const weekdays = [
  { day: 'any', pos: dayAny },
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

export const weekdayHours = [
  { day: 'monday' },
  { day: 'tuesday' },
  { day: 'wednesday' },
  { day: 'thursday' },
  { day: 'friday' },
  { day: 'saturday' },
  { day: 'sunday' }
]

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

export const needCategories = {
  categories: [
    {
      code: 'food',
      id: 1001,
      name: 'Food Resources',
      subcategories: [
        {
          code: 'restaurant',
          id: 1002,
          name: 'Restaurants'
        },
        {
          code: 'meal',
          id: 1004,
          name: 'Free meals'
        },
        {
          code: 'family',
          id: 1006,
          name: 'Prepared family meals'
        },
        {
          code: 'food_bev',
          id: 1003,
          name: 'Specialty food & beverage'
        },
        {
          code: 'grocery',
          id: 1005,
          name: 'Groceries'
        }
      ]
    },
    {
      code: 'farm',
      id: 1007,
      name: 'Farms & farmers markets'
    },
    {
      code: 'pharmacy',
      id: 1008,
      name: 'Pharmacy'
    },
    {
      code: 'pet',
      id: 1009,
      name: 'Pet supplies'
    }
  ],
  regions: ['Orange']
}
