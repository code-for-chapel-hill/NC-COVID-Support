<template>
  <div>
    <b-list-group class="list-group-flush back-to-list">
      <b-list-group-item variant="sideNav" button @click="$emit('close-details')" v-if="!snippet">
        <i class="fas fa-arrow-left" />
        {{ $t('label.backtolist') }}
      </b-list-group-item>
    </b-list-group>
    <b-list-group class="list-group-flush business-details" @click="expandBusinessDetails">
      <b-list-group-item variant="sideNav" :class="infotype + (snippet ? ' business-snippet' : '')">
        <div>
          <div class="mobile-expand" @click.stop="toggleExpand"></div>
          <div class="title">
            <i :class="businessIcon(business.marker)"></i>
            <div class="busName">
              <h5>{{ business.marker.gsx$providername.$t }}</h5>
              <span v-if="!!business.marker.gsx$provideraddloc.$t">{{ business.marker.gsx$provideraddloc.$t }}</span>
              <template v-if="!!business.marker.gsx$cuisine.$t">{{ business.marker.gsx$cuisine.$t }}</template>
            </div>
          </div>
          <div v-if="!snippet && getAddress(business.marker) !== ''">
            <b>{{ $t('label.address') }}:</b><br />
            {{ getAddress(business.marker) }}<br />

            <span class="list-item" @click.stop="getDirections">
              <icon-list-item icon="fa-directions" :title="$t('getdirections')" link="#" />
            </span>
            <p id="directions-options-expanded" v-if="directionsBool" class="directions-options list-item">
              <icon-list-item class="list-item" icon="fa fa-google" title="Google Maps" :link="googleDirectionsLink(business.marker)" />
              <icon-list-item
                class="list-item"
                v-if="iOS"
                icon="fa fa-apple"
                title="Apple Maps"
                :link="appleDirectionsLink(business.marker)"
              />
              <icon-list-item class="list-item" icon="fa-waze" iconSet="fab" title="Waze" :link="wazeDirectionsLink(business.marker)" />
            </p>
          </div>
          <p class="business-options" v-if="!snippet">
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$discountmedical != undefined && business.marker.gsx$discountmedical.$t == 1"
              icon="fa-user-md"
              :title="$tc('label.discountmedical', 1)"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$familymeal.$t == 1"
              icon="fa-user-friends"
              :title="$tc('category.family', 2)"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$mealstudent.$t == 1"
              icon="fa-school"
              :title="$tc('label.mealstudent', 1)"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$mealpublic.$t == 1"
              icon="fa-users"
              :title="$tc('label.mealpublic', 1)"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$freeproduce.$t == 1"
              icon="fa-apple-alt"
              :title="$tc('label.freeproduce', 1)"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$freegroceries != undefined && business.marker.gsx$freegroceries.$t == 1"
              icon="fa-shopping-basket"
              :title="$tc('label.freegroceries', 1)"
            />
            <icon-list-item class="list-item" v-if="business.marker.gsx$curbside.$t == 1" icon="fa-car" :title="$tc('label.curbside', 1)" />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$drivethru.$t == 1"
              icon="fa-car-side"
              :title="$t('label.drivethru')"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$orderonline.$t == 1"
              icon="fa-mouse"
              :title="$t('label.orderonline')"
            />
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$delivery.$t == 1"
              icon="fa-shipping-fast"
              :title="$t('label.delivery')"
            />
          </p>

          <p v-if="!snippet" class="business-actions">
            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$contact !== undefined && !!business.marker.gsx$contact.$t"
              icon="fa-phone-alt"
              :title="business.marker.gsx$contact.$t"
              :link="'tel:' + business.marker.gsx$contact.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$contactspanish !== undefined && !!business.marker.gsx$contactspanish.$t"
              icon="fa-phone-alt"
              :title="business.marker.gsx$contactspanish.$t + ' (' + $t('languages.es').toLowerCase() + ')'"
              :link="'tel:' + business.marker.gsx$contactspanish.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$weblink !== undefined && !!business.marker.gsx$weblink.$t"
              icon="fa-globe"
              :title="getDomain(business.marker.gsx$weblink.$t)"
              :link="business.marker.gsx$weblink.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$twitter !== undefined && !!business.marker.gsx$twitter.$t"
              icon="fa fa-twitter"
              :title="'@' + business.marker.gsx$twitter.$t"
              :link="'https://www.twitter.com/' + business.marker.gsx$twitter.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$instagram !== undefined && !!business.marker.gsx$instagram.$t"
              icon="fa fa-instagram"
              :title="'@' + business.marker.gsx$instagram.$t"
              :link="'https://www.instagram.com/' + business.marker.gsx$instagram.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$facebook !== undefined && !!business.marker.gsx$facebook.$t"
              icon="fa fa-facebook-square"
              :title="'Facebook'"
              :link="business.marker.gsx$facebook.$t"
            />

            <icon-list-item
              class="list-item"
              v-if="business.marker.gsx$email !== undefined && !!business.marker.gsx$email.$t"
              icon="fa-envelope"
              :title="getDomain(business.marker.gsx$email.$t)"
              :link="'mailto:' + business.marker.gsx$email.$t"
            />
          </p>
          <p v-if="snippet" class="business-actions">
            <span class="list-item" @click.stop="getDirections">
              <icon-list-item
                class="directions"
                :class="directionsBool ? 'selected' : 'a'"
                icon="fa-directions"
                :title="$t('getdirections_short')"
                link="#"
              />
            </span>
            <span @click.stop class="list-item">
              <icon-list-item
                v-if="business.marker.gsx$contact !== undefined && !!business.marker.gsx$contact.$t"
                icon="fa-phone-alt"
                :title="$t('call')"
                :link="'tel:' + business.marker.gsx$contact.$t"
              />
            </span>
            <span @click.stop class="list-item">
              <icon-list-item
                v-if="business.marker.gsx$weblink !== undefined && !!business.marker.gsx$weblink.$t"
                icon="fa-globe"
                :title="$t('website')"
                :link="business.marker.gsx$weblink.$t"
              />
            </span>
          </p>
          <p class="directions-options" id="directions-options-snippet" v-if="snippet && directionsBool" @click.stop>
            <icon-list-item class="list-item" icon="fa fa-google" title="Google Maps" :link="googleDirectionsLink(business.marker)" />
            <icon-list-item v-if="iOS" icon="fa fa-apple" title="Apple Maps" :link="appleDirectionsLink(business.marker)" />
            <icon-list-item icon="fa-waze" iconSet="fab" title="Waze" :link="wazeDirectionsLink(business.marker)" />
          </p>

          <opening-hours v-if="!snippet" :business="business.marker" :title="$t('label.openinghours')"></opening-hours>
          <opening-hours v-if="!snippet" :business="business.marker" :title="$t('label.seniorhours')" :senior="true"></opening-hours>

          <div v-if="!snippet">
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
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
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
    return {
      directionsBool: false
    }
  },
  props: {
    infotype: { type: String },
    icon: { type: String },
    business: Object,
    snippet: Boolean
  },
  methods: {
    getDomain(url) {
      var urlParts = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)
      return urlParts[0]
    },
    addressUrl(marker) {
      var address = marker.gsx$address.$t
      address = address.replace(/\s/g, '%20')
      var city = marker.gsx$city.$t.replace(/\s/g, '%20')
      var state = marker.gsx$state.$t.replace(/\s/g, '%20')
      address = address + '%2C%20' + city + '%2C%20' + state + '%20' + marker.gsx$zip.$t
      return address
    },
    appleDirectionsLink(marker) {
      return 'http://maps.apple.com/?q=' + marker.gsx$address.$t + '&ll=' + marker.gsx$lat.$t + '%2C' + marker.gsx$lon.$t
    },
    googleDirectionsLink(marker) {
      return 'https://www.google.com/maps/dir/?api=1&destination=' + this.addressUrl(marker)
    },
    wazeDirectionsLink(marker) {
      return 'https://www.waze.com/ul?ll=' + marker.gsx$lat.$t + '%2C' + marker.gsx$lon.$t + '&navigate=yes'
    },
    getDirections() {
      this.directionsBool = !this.directionsBool
      this.$emit('business-resize')
    },
    expandBusinessDetails() {
      if (this.snippet) {
        this.$emit('toggle-expanding-details')
      }
    },
    toggleExpand() {
      this.$emit('toggle-expanding-details')
    },
    businessIcon: businessIcon,
    getAddress: getAddress
  },
  computed: {
    getLastUpdatedDate() {
      return new Date(Date.parse(this.business.marker.gsx$lastupdate.$t)).toLocaleDateString()
    },
    iOS() {
      return /iPad|iPhone|iPod|Mac OS/.test(navigator.userAgent)
    },
    agent() {
      return navigator.userAgent
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-expand {
  display: block;
  width: 50px;
  margin: 0 auto;
  padding: 5px 0;
  top: -5px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    border: solid 1px #999;
  }

  @include media-breakpoint-up(md) {
    display: none;
  }
}

.business-details {
  max-height: calc(100vh);
  @include media-breakpoint-up(md) {
    max-height: calc(100vh - 174px);
  }
  overflow-y: auto;
  overflow-x: hidden;
}

#sidebar-wrapper.showExpandedDetails .business-details {
  max-height: calc(100vh - 36px);
  @include media-breakpoint-up(md) {
    max-height: calc(100vh - 174px);
  }
}

.back-to-list {
  display: block;
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
  width: 100%;

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
  min-width: 208px;
}

.green {
  font-size: 0.8rem;
  // color: #666;

  & > div {
    width: 100%;
  }
}

.updated {
  color: #aaa;
  margin-bottom: 3rem;
  @include media-breakpoint-up(sm) {
    margin-bottom: 0;
  }
}

.directions-options {
  background: $directions-background;

  @media (prefers-color-scheme: dark) {
    background: $directions-background-dark;
  }
}

.business-snippet {
  @include media-breakpoint-down(sm) {
    .business-options {
      .list-item {
        display: inline-block;
      }

      ::v-deep .iconListItem {
        display: inline-block;

        .ilTitle {
          display: none;
        }
      }
    }

    .business-actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .list-item {
        display: inline-block;
        flex: 1 0 auto;

        &:not(:last-child) {
          margin-right: 8px;
        }

        .directions {
          position: relative;

          ::v-deep .iconListItem {
            background-color: theme-color-level('quaternary');
            color: $white;

            a {
              color: inherit;
              text-decoration: none !important;
            }
          }

          &.selected {
            ::v-deep .iconListItem {
              border-bottom: none;
            }

            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 10px;
              bottom: -10px;
              left: 0;
              background: theme-color-level('quaternary');
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;
            }
          }
        }
      }

      ::v-deep .iconListItem {
        width: 100%;
        display: inline-block;
        background: $white;
        padding: 2px 6px;
        border: 1px solid #ddd;

        a {
          color: theme-color-level('quaternary');
        }

        .ilIcon {
          width: auto;
          margin-right: 4px;
        }

        .ilTitle {
          min-width: 0;
        }
      }
    }

    .directions-options {
      background-color: white;
      border: 1px solid #ddd;
      padding: 10px 6px;
      display: flex;
      margin-bottom: 4px;
      outline: 1px solid theme-color-level('quaternary');
      outline-offset: -2px;

      > div {
        flex: 1 0 auto;
      }

      ::v-deep .iconListItem {
        //background-color: transparent;

        .ilIcon {
          width: auto;
          margin-right: 4px;
          //color: $white;
        }
        .ilTitle {
          min-width: 0;
          width: auto;
          a {
            color: theme-color-level('quaternary');
          }
        }
      }
    }
  }
}
</style>
