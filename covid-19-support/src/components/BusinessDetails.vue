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
            <i :class="businessIcon(business.marker)"></i>
            <div class="busName">
              <h5>{{ business.marker.gsx$providername.$t }}</h5>
              <template v-if="!!business.marker.gsx$cuisine.$t">{{ business.marker.gsx$cuisine.$t }}</template>
            </div>
          </div>
          <p>
            <b>{{ $t('label.address') }}:</b><br />
            <span v-if="!!business.marker.gsx$provideraddloc.$t">{{ business.marker.gsx$provideraddloc.$t }}, </span
            >{{ business.marker.gsx$address.$t }}, {{ business.marker.gsx$city.$t }}, {{ business.marker.gsx$state.$t }}
            {{ business.marker.gsx$zip.$t }}
          </p>

          <p>
            <icon-list-item v-if="business.marker.gsx$discountmedical.$t == 1" icon="fas fa-user-md" :title="$tc('label.discounts', 1)" />
            <icon-list-item v-if="business.marker.gsx$familymeal.$t == 1" icon="fas fa-user-friends" :title="$tc('category.family', 2)" />
            <icon-list-item v-if="business.marker.gsx$mealstudent.$t == 1" icon="fas fa-school" :title="$tc('label.mealsforstudents', 1)" />
            <icon-list-item v-if="business.marker.gsx$mealpublic.$t == 1" icon="fas fa-users" :title="$tc('label.opentopublic', 1)" />
            <icon-list-item v-if="business.marker.gsx$freeproduce.$t == 1" icon="fas fa-apple-alt" :title="$tc('label.freeproduce', 1)" />
            <icon-list-item
              v-if="business.marker.gsx$freegroceries.$t == 1"
              icon="fas fa-shopping-basket"
              :title="$tc('label.freegrocery', 1)"
            />
            <icon-list-item v-if="business.marker.gsx$curbside.$t == 1" icon="fas fa-car" :title="$tc('label.curbsidepickup', 1)" />
            <icon-list-item v-if="business.marker.gsx$drivethru.$t == 1" icon="fas fa-car-side" :title="$t('label.drivethru')" />
            <icon-list-item v-if="business.marker.gsx$orderonline.$t == 1" icon="fas fa-mouse" :title="$t('label.orderonline')" />
            <icon-list-item v-if="business.marker.gsx$delivery.$t == 1" icon="fas fa-shipping-fast" :title="$t('label.delivery')" />
          </p>
          <p>
            <icon-list-item
              v-if="!!business.marker.gsx$contact.$t"
              icon="fas fa-phone-alt"
              :title="business.marker.gsx$contact.$t"
              :link="'tel:' + business.marker.gsx$contact.$t"
            />

            <icon-list-item
              v-if="!!business.marker.gsx$weblink.$t"
              icon="fas fa-globe"
              :title="getDomain(business.marker.gsx$weblink.$t)"
              :link="business.marker.gsx$weblink.$t"
            />

            <icon-list-item
              v-if="!!business.marker.gsx$email.$t"
              icon="fas fa-envelope"
              :title="getDomain(business.marker.gsx$email.$t)"
              :link="'mailto:' + business.marker.gsx$email.$t"
            />
          </p>
          <opening-hours :business="business.marker" :title="$t('label.openinghours')"></opening-hours>

          <opening-hours :business="business.marker" :title="$t('label.seniorhours')" :senior="true"></opening-hours>

          <template v-if="!!business.marker.gsx$instructions.$t">
            <p>
              <b>{{ $t('label.instructions') }}:</b><br />{{ business.marker.gsx$instructions.$t }}
            </p>
          </template>
          <template v-if="!!business.marker.gsx$offers.$t">
            <p>
              <b>{{ $t('label.offers') }}:</b><br />{{ business.marker.gsx$offers.$t }}
            </p>
          </template>
          <template v-if="!!business.marker.gsx$notes.$t">
            <p>
              <b>{{ $t('label.notes') }}:</b><br />{{ business.marker.gsx$notes.$t }}
            </p>
          </template>
          <p class="updated">Details last updated: {{ business.marker.gsx$lastupdate.$t }}</p>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import OpeningHours from './OpeningHours.vue'
import IconListItem from './IconListItem.vue'
export default {
  name: 'BusinessDetails',
  components: {
    OpeningHours,
    IconListItem
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
