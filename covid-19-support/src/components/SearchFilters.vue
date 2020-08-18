<template>
  <b-list-group class="need-day-group">
    <b-list-group-item variant="sideNav" class="need-type">
      <h6>{{ $t('sidebar.what-do-you-need') }}</h6>
      <b-dropdown :text="selection" block variant="primary" class="m-2">
        <div v-for="category in needOptionGroups.slice(1)" :key="category.id">
          <div v-if="category.label">
            <b-dropdown-group :id="category.label" :header="category.label">
              <div v-for="option in category.options" :key="option.value">
                <b-dropdown-item
                  @click.self="
                    emitter(option.value)
                    changeSelection(option.text)
                  "
                  >{{ option.text }}</b-dropdown-item
                >
              </div>
            </b-dropdown-group>
          </div>
          <b-dropdown-item
            @click.self="
              emitter(category.value)
              changeSelection(category.text)
            "
            >{{ category.text }}</b-dropdown-item
          >
        </div>
      </b-dropdown>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { needCategories } from '../constants'

export default {
  data() {
    return {
      locationData: location,
      showListing: this.showList,
      selection: 'Select a category...'
    }
  },
  props: {
    need: String
  },
  methods: {
    emitter(val) {
      this.$emit('need-selected', val)
    },
    changeSelection(val) {
      this.selection = val
    }
  },
  computed: {
    needOptionGroups() {
      const categories = needCategories.categories
      const needOptions = [{ value: 'none', text: this.$tc('label.selectacategory', 1) }]
      categories.forEach((category) => {
        if (category.subcategories != undefined) {
          const label = category.name
          const myOptions = []
          category.subcategories.forEach((subcategory) => {
            const text = 'category.' + subcategory.code
            myOptions.push({
              text: this.$t(text),
              value: subcategory.code
            })
          })
          needOptions.push({
            label: label,
            options: myOptions
          })
        } else {
          const text = 'category.' + category.code
          needOptions.push({
            text: this.$t(text),
            value: category.code
          })
        }
      })
      return needOptions
    },
    needOptions() {
      return [
        { value: 'selectacategory', text: this.$tc('label.selectacategory', 1) },
        { value: 'restaurant', text: this.$tc('category.restaurant', 2) },
        { value: 'meal', text: this.$tc('category.meal', 2) },
        { value: 'family', text: this.$tc('category.family', 2) },
        { value: 'farm', text: this.$tc('category.farm', 2) },
        { value: 'grocery', text: this.$tc('category.grocery', 2) },
        { value: 'pharmacy', text: this.$tc('category.pharmacy', 1) },
        { value: 'food_bev', text: this.$tc('category.food_bev', 2) },
        { value: 'pet', text: this.$t('category.pet') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  border: none !important;
  padding: 0 1.25rem;
  border-bottom: none;

  &.need-type {
    margin-bottom: 8px;
  }
}

.list-group-flush.need-day-group .list-group-item:first-child {
  padding-bottom: 1rem !important;
}
</style>
