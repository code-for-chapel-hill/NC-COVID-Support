<template>
  <span>
    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light backtolist" @click="$emit('close-details')">
        <i class="fas fa-arrow-left" />
        {{ $t('label.backtolist') }}
      </div>
    </div>
    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light" :class="infotype">
        <!-- <i class="fas" :class="icon" /> -->
        <div>
          <div class="title">
            <i :class="businessIcon(business)"></i>
            <div class="busName">
              <h5>{{ business.gsx$providername.$t }}</h5>
              <template v-if="!!business.gsx$cuisine.$t">{{ business.gsx$cuisine.$t }}</template>
            </div>
          </div>

          <b>{{ $t('label.address') }}:</b><br />
          <span v-if="!!business.gsx$provideraddloc.$t">{{ business.gsx$provideraddloc.$t }}, </span>{{ business.gsx$address.$t }},
          {{ business.gsx$city.$t }}, {{ business.gsx$state.$t }} {{ business.gsx$zip.$t }}<br />
          <span v-if="!!business.gsx$contact.$t" class="metaData">
            <b>{{ $t('label.phone') }}:</b> <a :href="'tel:' + business.gsx$contact.$t">{{ business.gsx$contact.$t }}</a>
            <br />
          </span>
          <span v-if="!!business.gsx$email.$t" class="metaData">
            <b>{{ $t('label.email') }}:</b> {{ business.gsx$email.$t }}<br />
          </span>
          <span v-if="!!business.gsx$instructions.$t || !!business.gsx$offers.$t || !!business.gsx$notes.$t"><br /></span>
          <span v-if="!!business.gsx$instructions.$t">
            <b>{{ $t('label.instructions') }}:</b><br />{{ business.gsx$instructions.$t }}
          </span>
          <span v-if="!!business.gsx$instructions.$t && !!business.gsx$offers.$t"><br /></span>
          <span v-if="!!business.gsx$offers.$t">
            <b>{{ $t('label.offers') }}:</b><br />{{ business.gsx$offers.$t }}
          </span>
          <span v-if="(!!business.gsx$instructions.$t || !!business.gsx$offers.$t) && !!business.gsx$notes.$t"><br /></span>
          <span v-if="!!business.gsx$notes.$t">
            <b>{{ $t('label.notes') }}:</b><br />{{ business.gsx$notes.$t }}
          </span>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'BusinessDetails',
  data() {
    return {}
  },
  props: {
    infotype: { type: String },
    icon: { type: String },
    business: Object
  },
  methods: {
    businessIcon: function (business) {
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
        //           { value: 'none', text: this.$tc('label.selectacategory', 1) },
        // { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
        // { value: 'meal', text: this.$tc('category.meal', 2) },
        // { value: 'family', text: this.$tc('category.family', 2) },
        // { value: 'farm', text: this.$tc('category.farm', 2) },
        // { value: 'grocery', text: this.$tc('category.grocery', 2) },
        // { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
        // { value: 'pet', text: this.$tc('category.petsupplies', 2) }
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
  }
}
</script>

<style scoped>
.backtolist {
  font-size: 0.8rem;
}
.backtolist i {
  margin-right: 0.375rem;
}
.backtolist:hover {
  background: rgba(0, 0, 0, 0.05) !important;
  cursor: pointer;
}
.title {
  margin: 0 0 0.75rem 0;
  display: inline-block;
}

.busName {
  margin-left: 54px;
  width: 208px;
}
.metaData {
  margin-top: 0.375rem;
  display: block;
}

.green {
  font-size: 0.8rem;
  color: #666;
}

.title i {
  font-size: 3rem;
  color: #75c759;
  margin: 7px 10px 7px 0;
  float: left;
}

.green > div {
  /* display: inline-block; */
  width: 260px;
}
</style>
