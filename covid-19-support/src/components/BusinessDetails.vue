<template>
  <span>
    <b-list-group class="list-group-flush">
      <b-list-group-item variant="sideNav" button class="backtolist" @click="$emit('close-details')">
        <i class="fas fa-arrow-left" />
        {{ $t('label.backtolist') }}
      </b-list-group-item>
    </b-list-group>
    <b-list-group class="list-group-flush business-details">
      <b-list-group-item variant="sideNav" :class="infotype">
        <div>
          <div class="title">
            <i :class="businessIcon(business.marker)"></i>
            <div class="busName">
              <h5>{{ business.marker.gsx$providername.$t }}</h5>
              <span v-if="!!business.marker.gsx$provideraddloc.$t">{{ business.marker.gsx$provideraddloc.$t }}</span>
              <template v-if="!!business.marker.gsx$cuisine.$t">{{ business.marker.gsx$cuisine.$t }}</template>
            </div>
          </div>
          <p v-if="getAddress(business.marker) !== ''">
            <b>{{ $t('label.address') }}:</b><br />
            {{ getAddress(business.marker) }}
          </p>
          <p>
            <icon-list-item
              v-if="business.marker.gsx$discountmedical != undefined && business.marker.gsx$discountmedical.$t == 1"
              icon="fas fa-user-md"
              :title="$tc('label.discountmedical', 1)"
            />
            <icon-list-item v-if="business.marker.gsx$familymeal.$t == 1" icon="fas fa-user-friends" :title="$tc('category.family', 2)" />
            <icon-list-item v-if="business.marker.gsx$mealstudent.$t == 1" icon="fas fa-school" :title="$tc('label.mealstudent', 1)" />
            <icon-list-item v-if="business.marker.gsx$mealpublic.$t == 1" icon="fas fa-users" :title="$tc('label.mealpublic', 1)" />
            <icon-list-item v-if="business.marker.gsx$freeproduce.$t == 1" icon="fas fa-apple-alt" :title="$tc('label.freeproduce', 1)" />
            <icon-list-item
              v-if="business.marker.gsx$freegroceries != undefined && business.marker.gsx$freegroceries.$t == 1"
              icon="fas fa-shopping-basket"
              :title="$tc('label.freegroceries', 1)"
            />
            <icon-list-item v-if="business.marker.gsx$curbside.$t == 1" icon="fas fa-car" :title="$tc('label.curbside', 1)" />
            <icon-list-item v-if="business.marker.gsx$drivethru.$t == 1" icon="fas fa-car-side" :title="$t('label.drivethru')" />
            <icon-list-item v-if="business.marker.gsx$orderonline.$t == 1" icon="fas fa-mouse" :title="$t('label.orderonline')" />
            <icon-list-item v-if="business.marker.gsx$delivery.$t == 1" icon="fas fa-shipping-fast" :title="$t('label.delivery')" />
          </p>

          <p>
            <icon-list-item
              v-if="business.marker.gsx$contact !== undefined && !!business.marker.gsx$contact.$t"
              icon="fas fa-phone-alt"
              :title="business.marker.gsx$contact.$t"
              :link="'tel:' + business.marker.gsx$contact.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$contactspanish !== undefined && !!business.marker.gsx$contactspanish.$t"
              icon="fas fa-phone-alt"
              :title="business.marker.gsx$contactspanish.$t + ' (' + $t('languages.es').toLowerCase() + ')'"
              :link="'tel:' + business.marker.gsx$contactspanish.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$weblink !== undefined && !!business.marker.gsx$weblink.$t"
              icon="fas fa-globe"
              :title="getDomain(business.marker.gsx$weblink.$t)"
              :link="business.marker.gsx$weblink.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$twitter !== undefined && !!business.marker.gsx$twitter.$t"
              icon="fa fa-twitter"
              :title="'@' + business.marker.gsx$twitter.$t"
              :link="'https://www.twitter.com/' + business.marker.gsx$twitter.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$instagram !== undefined && !!business.marker.gsx$instagram.$t"
              icon="fa fa-instagram"
              :title="'@' + business.marker.gsx$instagram.$t"
              :link="'https://www.instagram.com/' + business.marker.gsx$instagram.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$facebook !== undefined && !!business.marker.gsx$facebook.$t"
              icon="fa fa-facebook-square"
              :title="'Facebook'"
              :link="business.marker.gsx$facebook.$t"
            />

            <icon-list-item
              v-if="business.marker.gsx$email !== undefined && !!business.marker.gsx$email.$t"
              icon="fas fa-envelope"
              :title="getDomain(business.marker.gsx$email.$t)"
              :link="'mailto:' + business.marker.gsx$email.$t"
            />
          </p>

          <opening-hours :business="business.marker" :title="$t('label.openinghours')"></opening-hours>
          <opening-hours :business="business.marker" :title="$t('label.seniorhours')" :senior="true"></opening-hours>

          <template v-if="business.marker.gsx$instructions !== undefined && !!business.marker.gsx$instructions.$t">
            <p>
              <b>{{ $t('label.instructions') }}:</b><br />{{ business.marker.gsx$instructions.$t }}
            </p>
          </template>
          <template v-if="business.marker.gsx$offers !== undefined && !!business.marker.gsx$offers.$t">
            <p>
              <b>{{ $t('label.offers') }}:</b><br />{{ business.marker.gsx$offers.$t }}
            </p>
          </template>
          <template v-if="business.marker.gsx$notes !== undefined && !!business.marker.gsx$notes.$t">
            <p>
              <b>{{ $t('label.notes') }}:</b><br />{{ business.marker.gsx$notes.$t }}
            </p>
          </template>

          <p class="updated" v-if="getLastUpdatedDate != 'Invalid Date'">
            {{ $t('label.details-last-updated') }}: {{ getLastUpdatedDate }}
          </p>
        </div>
      </b-list-group-item>
    </b-list-group>
  </span>
</template>

<script>
import OpeningHours from './OpeningHours.vue'
import IconListItem from './IconListItem.vue'
import { businessIcon, getAddress } from '../utilities'
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
    businessIcon: businessIcon,
    getAddress: getAddress
  },
  computed: {
    getLastUpdatedDate: function () {
      return new Date(Date.parse(this.business.marker.gsx$lastupdate.$t)).toLocaleDateString()
    }
  }
}
</script>

<style scoped lang="scss">
.business-details {
  max-height: calc(100vh - 237px);
  overflow-y: auto;
  overflow-x: hidden;
}
.backtolist {
  font-size: 0.8rem;

  i {
    margin-right: 0.375rem;
  }

  // &:hover {
  //   background: rgba(0, 0, 0, 0.05) !important;
  //   cursor: pointer;
  // }
}

.title {
  margin: 0 0 0.75rem 0;
  display: inline-block;

  i {
    font-size: 3rem;
    color: theme-color('quinary');
    margin: 7px 10px 7px 0;
    float: left;
    @media (prefers-color-scheme: dark) {
      color: theme-color-level('quinary', 5);
    }
  }
}

.busName {
  margin-left: 54px;
  width: 208px;
}

.green {
  font-size: 0.8rem;
  // color: #666;

  & > div {
    width: 243px;
  }
}

.updated {
  color: #aaa;
}
</style>
