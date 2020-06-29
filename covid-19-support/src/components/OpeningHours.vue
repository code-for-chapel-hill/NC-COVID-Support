<template>
  <div class="openhours" v-if="days.length > 0">
    <div class="oh-title">
      <b>{{ title }}</b>
    </div>
    <table>
      <tr v-for="(item, index) in days" :key="index">
        <!-- <i class="fas" :class="icon" /> -->
        <td class="oh-name">{{ item.name }}</td>
        <td :class="item.class"><span v-html="item.val"></span></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { dayFilters, seniorDayFilters, weekdayHours } from '../constants'
export default {
  name: 'OpeningHours',
  data() {
    return {}
  },
  props: {
    title: { type: String },
    infotype: { type: String },
    icon: { type: String },
    senior: { type: Boolean },
    business: { type: Object },
    day: { type: String }
  },
  computed: {
    days() {
      var myDays = []
      var cnt = 0

      if (this.senior) {
        seniorDayFilters.forEach((attr, index) => {
          var dayName = this.$t(`dayofweek.${weekdayHours[index].day}`)
          switch (this.business[attr].$t.length) {
            case 0:
              // myDays.push({ name: dayName, val: this.$t('label.normalhours') })
              // cnt++
              break
            case 1:
              // if (this.business[attr].$t == '0') {
              //   myDays.push({ name: dayName, val: this.$t('label.closed') })
              // } else {
              //   // myDays.push({ name: dayName, val: this.$t('label.normalhours') })
              //   // cnt++
              // }
              break
            default:
              myDays.push({ name: dayName, val: this.business[attr].$t.replace(',', '<br/>') })
              cnt++
              break
          }
        })
      } else {
        dayFilters.forEach((attr, index) => {
          var dayName = this.$t(`dayofweek.${weekdayHours[index].day}`)
          switch (this.business[attr].$t.length) {
            case 0:
              // myDays.push({ name: dayName, val: this.$t('label.normalhours') })
              // cnt++
              break
            case 1:
              if (this.business[attr].$t == 0) {
                myDays.push({ name: dayName, val: this.$t('label.closed'), class: 'closed' })
              } else {
                // myDays.push({ name: dayName, val: this.$t('label.normalhours') })
                // cnt++
              }
              cnt++
              break
            default:
              myDays.push({ name: dayName, val: this.business[attr].$t.replace(',', '<br/>') })
              cnt++
              break
          }
        })
      }

      if (cnt == 0) {
        return myDays.push({ name: this.$t('label.allweek'), val: this.$t('label.closed') })
      }

      return myDays
    }
  }
}
</script>

<style lang="scss">
.openhours {
  margin-bottom: 10px;
}
.oh-name {
  padding-right: 20px;
  vertical-align: top;
}
.closed {
  color: theme-color('danger');
  @media (prefers-color-scheme: dark) {
    color: theme-color-level('danger', 2);
  }
}
</style>
