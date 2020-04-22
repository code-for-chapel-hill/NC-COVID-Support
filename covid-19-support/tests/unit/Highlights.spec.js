// Highlights.spec.js

// Import the `shallowMount()` method from the test utils
// and the component you want to test
import { shallowMount } from '@vue/test-utils'
import ValueBox from '@/components/Highlights.vue'

describe('Highlights.vue Tests', () => {
  it('Highlights should be un-selected by default', () => {
    const wrapper = shallowMount(ValueBox, {
      propsData: { need: 'farm', filteredMarkers: [] },
      mocks: {
        $t: (msg) => msg,
        $tc: (msg) => msg
      }
    })
    expect(wrapper.classes('selected')).toBe(false)
  })
})
