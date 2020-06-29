<template>
  <div class="row highlights" v-if="valueBoxes[0] != null">
    <div class="col-6 col-md-3 order-md-1">
      <value-box :content="valueBoxes[0]" class="bg-tertiary" @box-selected="boxSelected" />
    </div>
    <div class="col-6 col-md-3 order-md-2">
      <value-box :content="valueBoxes[1]" class="bg-quaternary" @box-selected="boxSelected" />
    </div>
    <div class="col-6 col-md-3 order-md-4">
      <value-box :content="valueBoxes[2]" class="bg-quaternary" @box-selected="boxSelected" />
    </div>
    <div class="col-6 col-md-3 order-md-3">
      <value-box :content="valueBoxes[3]" class="bg-tertiary" @box-selected="boxSelected" />
    </div>
  </div>
</template>

<script>
import ValueBox from './ValueBox.vue'

export const countFeature = (filteredMarkers = [], feature) =>
  (filteredMarkers || []).reduce((total, c) => (c.marker.gsx$accesstype.$t.indexOf(feature) && c.oc > -1 ? total + 1 : total), 0)

export const countBoolean = (filteredMarkers, fieldName) =>
  (filteredMarkers || []).reduce((total, c) => (c.marker['gsx$' + fieldName].$t == '1' && c.oc ? total + 1 : total), 0)

export default {
  name: 'Highlights',
  components: {
    ValueBox
  },
  props: {
    need: String,
    filteredMarkers: Array,
    highlightFilters: Array
  },
  methods: {
    boxSelected: function (content) {
      this.$emit('box-selected', content)
    },
    buildBoxValue(labelId, icon, count, pluralize = false) {
      const label = `label.${labelId}`
      var selected = this.highlightFilters !== undefined ? this.highlightFilters.includes(labelId) : ''

      return {
        icon,
        value: count,
        title: pluralize ? this.$tc(label, count) : this.$t(label),
        need: labelId,
        selected: selected
      }
    }
  },
  computed: {
    countPickup() {
      return countBoolean(this.filteredMarkers, 'in-storepickup')
    },
    countCurbside() {
      return countBoolean(this.filteredMarkers, 'curbside')
    },
    countSenior() {
      return countBoolean(this.filteredMarkers, 'specialhours')
    },
    countFreeStudentMeal() {
      return countBoolean(this.filteredMarkers, 'mealstudent')
    },
    countPublicMeal() {
      return countBoolean(this.filteredMarkers, 'mealpublic')
    },
    countFamilyMeal() {
      // Family meal kits to purchase
      return countBoolean(this.filteredMarkers, 'familymeal')
    },
    countOrderOnline() {
      return countBoolean(this.filteredMarkers, 'orderonline')
    },
    countPayOnline() {
      return countBoolean(this.filteredMarkers, 'payonline')
    },
    countMustPreOrder() {
      return countBoolean(this.filteredMarkers, 'mustpreorder')
    },
    countDiscountMedical() {
      return countBoolean(this.filteredMarkers, 'discountmedical')
    },
    countDelivery() {
      return countBoolean(this.filteredMarkers, 'delivery')
    },
    countProduce() {
      return countBoolean(this.filteredMarkers, 'freeproduce')
    },
    countGroceries() {
      return countBoolean(this.filteredMarkers, 'freegroceries')
    },
    countFarmPickUp() {
      return countBoolean(this.filteredMarkers, 'farmpick-up')
    },
    countFarmersMarket() {
      return countBoolean(this.filteredMarkers, 'farmersmarket')
    },
    orderOnlineValueBox() {
      return this.buildBoxValue('orderonline', 'fa-mouse', this.countOrderOnline)
    },
    curbsidePickupValueBox() {
      return this.buildBoxValue('curbside', 'fa-car', this.countCurbside, true)
    },
    deliveryValueBox() {
      return this.buildBoxValue('delivery', 'fa-shipping-fast', this.countDelivery)
    },
    onFarmPickupValueBox() {
      return this.buildBoxValue('farmpick-up', 'fa-tractor', this.countFarmPickUp, true)
    },
    farmersMarketValueBox() {
      return this.buildBoxValue('farmersmarket', 'fa-store', this.countFarmersMarket, true)
    },
    seniorShoppingValueBox() {
      return this.buildBoxValue('specialhours', 'fa-history', this.countSenior)
    },
    medicalDiscountsValueBox() {
      return this.buildBoxValue('discountmedical', 'fa-user-md', this.countDiscountMedical, true)
    },
    openToPublicValueBox() {
      return this.buildBoxValue('mealpublic', 'fa-users', this.countPublicMeal, true)
    },
    freeStudentMealsValueBox() {
      return this.buildBoxValue('mealstudent', 'fa-school', this.countFreeStudentMeal, true)
    },
    freeProduceValueBox() {
      return this.buildBoxValue('freeproduce', 'fa-apple-alt', this.countProduce, true)
    },
    freeGroceryValueBox() {
      return this.buildBoxValue('freegroceries', 'fa-shopping-basket', this.countGroceries, true)
    },
    mustPreOrderValueBox() {
      return this.buildBoxValue('mustpreorder', 'fa-phone', this.countMustPreOrder, true)
    },
    valueBoxes() {
      switch (this.need) {
        case 'grocery':
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.deliveryValueBox, this.seniorShoppingValueBox]
        case 'food_bev':
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.deliveryValueBox, this.seniorShoppingValueBox]
        case 'restaurant':
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.medicalDiscountsValueBox, this.deliveryValueBox]
        case 'family': // Family Meal Kits
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.deliveryValueBox, this.mustPreOrderValueBox]
        case 'farm': // Farms
          return [this.curbsidePickupValueBox, this.onFarmPickupValueBox, this.farmersMarketValueBox, this.orderOnlineValueBox]
        case 'meal': // Free Meals
          return [this.openToPublicValueBox, this.freeStudentMealsValueBox, this.freeProduceValueBox, this.freeGroceryValueBox]
        case 'pharmacy':
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.seniorShoppingValueBox, this.deliveryValueBox]
        case 'pet':
          return [this.orderOnlineValueBox, this.curbsidePickupValueBox, this.medicalDiscountsValueBox, this.deliveryValueBox]
        default:
          return [null, null, null, null, null]
      }
    }
  }
}
</script>

<style lang="scss">
.highlights {
  margin: 4px !important;
  transition: height 0.25s ease-out;
  height: 116px;

  div.col-md-3 {
    padding: 0 !important;
  }
}

#wrapper.toggled .highlights {
  transition: margin-left 0.25s ease-out;
  @media (min-width: 768px) {
    margin-left: 294px !important;
  }
}

@media (min-width: 768px) {
  .highlights {
    height: 108px;
  }
}
</style>
