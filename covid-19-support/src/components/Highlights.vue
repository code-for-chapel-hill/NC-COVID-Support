<template>
  <div class="row highlights" v-if="valueBoxes[0] != null">
    <div class="col-6 col-md-3 order-md-1">
      <value-box :content="valueBoxes[0]" class="bg-blue" />
    </div>
    <div class="col-6 col-md-3 order-md-2">
      <value-box :content="valueBoxes[1]" class="bg-green" />
    </div>
    <div class="col-6 col-md-3 order-md-4">
      <value-box :content="valueBoxes[2]" class="bg-green" />
    </div>
    <div class="col-6 col-md-3 order-md-3">
      <value-box :content="valueBoxes[3]" class="bg-blue" />
    </div>
  </div>
</template>

<script>
import ValueBox from './ValueBox.vue'

export const countFeature = (filteredMarkers = [], feature) =>
  (filteredMarkers || []).reduce((total, c) => (c.gsx$accesstype.$t.indexOf(feature) > -1 ? total + 1 : total), 0)

export const countBoolean = (filteredMarkers, fieldName) =>
  (filteredMarkers || []).reduce((total, c) => (c['gsx$' + fieldName].$t == '1' ? total + 1 : total), 0)

export default {
  name: 'Highlights',
  components: {
    ValueBox
  },
  props: {
    need: String,
    filteredMarkers: Array
  },
  methods: {
    buildBoxValue(labelId, icon, count, pluralize = false) {
      const label = `label.${labelId}`
      return {
        icon,
        color: '',
        value: count,
        title: pluralize ? this.$tc(label, count) : this.$t(label)
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
      return this.buildBoxValue('curbsidepickup', 'fa-car', this.countCurbside, true)
    },
    deliveryValueBox() {
      return this.buildBoxValue('delivery', 'fa-shipping-fast', this.countDelivery)
    },
    onFarmPickupValueBox() {
      return this.buildBoxValue('onfarmpickup', 'fa-tractor', this.countFarmPickUp, true)
    },
    farmersMarketValueBox() {
      return this.buildBoxValue('farmersmarket', 'fa-store', this.countFarmersMarket, true)
    },
    seniorShoppingValueBox() {
      return this.buildBoxValue('seniorshopping', 'fa-history', this.countSenior)
    },
    medicalDiscountsValueBox() {
      return this.buildBoxValue('discounts', 'fa-user-md', this.countDiscountMedical, true)
    },
    openToPublicValueBox() {
      return this.buildBoxValue('opentopublic', 'fa-users', this.countPublicMeal, true)
    },
    freeStudentMealsValueBox() {
      return this.buildBoxValue('mealsforstudents', 'fa-school', this.countFreeStudentMeal, true)
    },
    freeProduceValueBox() {
      return this.buildBoxValue('freeproduce', 'fa-apple-alt', this.countProduce, true)
    },
    freeGroceryValueBox() {
      return this.buildBoxValue('freegrocery', 'fa-shopping-basket', this.countGroceries, true)
    },
    mustPreOrderValueBox() {
      return this.buildBoxValue('mustpreorder', 'fa-phone', this.countMustPreOrder, true)
    },
    valueBoxes() {
      switch (this.need) {
        case 'grocery':
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
          return [null, null, null, null]
      }
    }
  }
}
</script>

<style>
.highlights {
  margin: 4px !important;
  transition: height 0.25s ease-out;
  height: 116px;
}

.highlights div.col-md-3 {
  padding: 0 !important;
}

@media (min-width: 768px) {
  .highlights {
    height: 108px;
  }
}
</style>
