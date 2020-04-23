export function businessIcon(business) {
  switch (business.gsx$resource.$t) {
    case 'grocery':
      return 'fas fa-shopping-basket'
    case 'pharmacy':
      return 'fas fa-prescription'
    case 'pet':
      return 'fas fa-paw'
    case 'farm':
      if (business.gsx$farmersmarket.$t == 1) {
        return 'fas fa-store'
      }
      return 'fas fa-tractor'
    default:
  }

  var cuisine = business.gsx$cuisine.$t
  var item = cuisine.indexOf(',') > 0 ? cuisine.toLowerCase().substr(0, cuisine.indexOf(',')).trim() : cuisine.toLowerCase().trim()
  switch (item) {
    case 'burgers':
      return 'fas fa-hamburger'
    case 'cheese':
      return 'fas fa-cheese'
    case 'beer':
    case 'craft beer':
      return 'fas fa-beer'
    case 'pizza':
      return 'fas fa-pizza-slice'
    case 'mexican':
      return 'fas fa-pepper-hot'
    case 'wine':
      return 'fas fa-wine-glass-alt'
    case 'fish':
    case 'seafood':
      return 'fas fa-fish'
    case 'ice cream':
      return 'fas fa-ice-cream'
    case 'texan':
      return 'fas fa-hat-cowboy'
    case 'chicken':
      return 'fas fa-drumstick-bite'
    case 'sandwiches':
      return 'fas fa-bread-slice'
    case 'american':
      return 'fas fa-flag-usa'
    case 'vegan':
    case 'vegetarian':
      return 'fas fa-carrot'
    case 'market':
      return 'fas fa-store'
    default:
      return 'fas fa-utensils'
  }
}
