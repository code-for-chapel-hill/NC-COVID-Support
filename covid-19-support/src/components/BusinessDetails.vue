<template>
  <span>
    <div class="list-group list-group-flush">
      <div class="list-group-item list-group-item-action bg-light backtolist" @click="$emit('close-details')">
        <i class="fas fa-arrow-left" />
        {{ $t('label.backtolist') }}
      </div>
    </div>
    <div class="list-group list-group-flush business-details">
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

          <p>
            <b>{{ $t('label.address') }}:</b><br />
            <span v-if="!!business.gsx$provideraddloc.$t">{{ business.gsx$provideraddloc.$t }}, </span>{{ business.gsx$address.$t }},
            {{ business.gsx$city.$t }}, {{ business.gsx$state.$t }} {{ business.gsx$zip.$t }}
          </p>
          <template v-if="!!business.gsx$contact.$t">
            <p>
              <b><i class="fas fa-phone-alt"></i></b> <a :href="'tel:' + business.gsx$contact.$t">{{ business.gsx$contact.$t }}</a>
            </p>
          </template>
          <template v-if="!!business.gsx$weblink.$t">
            <p>
              <b><i class="fas fa-globe"></i></b> <a :href="business.gsx$weblink.$t">{{ getDomain(business.gsx$weblink.$t) }}</a>
            </p>
          </template>
          <template v-if="!!business.gsx$email.$t">
            <p>
              <b><i class="far fa-envelope"></i></b> <a :href="'mailto:' + business.gsx$email.$t">{{ business.gsx$email.$t }}</a>
            </p>
          </template>

          <opening-hours :business="business" :title="$t('label.openinghours')"></opening-hours>

          <opening-hours :business="business" :title="$t('label.seniorhours')" :senior="true"></opening-hours>

          <template v-if="!!business.gsx$instructions.$t">
            <p>
              <b>{{ $t('label.instructions') }}:</b><br />{{ business.gsx$instructions.$t }}
            </p>
          </template>
          <template v-if="!!business.gsx$offers.$t">
            <p>
              <b>{{ $t('label.offers') }}:</b><br />{{ business.gsx$offers.$t }}
            </p>
          </template>
          <template v-if="!!business.gsx$notes.$t">
            <p>
              <b>{{ $t('label.notes') }}:</b><br />{{ business.gsx$notes.$t }}
            </p>
          </template>
          <p class="updated">Details last updated: {{ business.gsx$lastupdate.$t }}</p>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import OpeningHours from './OpeningHours.vue'

export default {
  name: 'BusinessDetails',
  components: {
    OpeningHours
  },
  data() {
    return {}
  },
  props: {
    infotype: { type: String },
    icon: { type: String },
    business: Object
  },
  methods: {
    getDomain: function (url) {
      var urlParts = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)
      return urlParts[0]
    },
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
.business-details {
  max-height: calc(100vh - 273px);
  overflow-y: auto;
}
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

.green {
  font-size: 0.8rem;
  color: #666;
}

.updated {
  color: #aaa;
}

.title i {
  font-size: 3rem;
  color: #75c759;
  margin: 7px 10px 7px 0;
  float: left;
}

.green > div {
  /* display: inline-block; */
  width: 243px;
}
</style>
