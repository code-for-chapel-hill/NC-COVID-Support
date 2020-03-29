export const countFeature = (filteredMarkers = [], feature) =>
  (filteredMarkers || []).reduce(
    (total, c) =>
      c.gsx$accesstype.$t.indexOf(feature) > -1 ? total + 1 : total,
    0
  )

export const countBoolean = (filteredMarkers, fieldName) =>
  (filteredMarkers || []).reduce(
    (total, c) => (c['gsx$' + fieldName].$t == '1' ? total + 1 : total),
    0
  )
