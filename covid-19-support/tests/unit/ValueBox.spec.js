// ValueBox.test.js

// Import the `shallowMount()` method from the test utils
// and the component you want to test
import { shallowMount } from '@vue/test-utils'
import ValueBox from '@/components/ValueBox.vue'

describe('ValueBox.vue Tests', () => {
  const content = {
    title: 'test title',
    value: '12',
    icon: 'fa-mobile'
  }

  it('ValueBox should be un-selected by default', () => {
    const wrapper = shallowMount(ValueBox, {
      propsData: { content }
    })
    expect(wrapper.classes('selected')).toBe(false)
  })

  it('ValueBox should be selected when a user clicks it', async () => {
    const wrapper = shallowMount(ValueBox, {
      propsData: { content }
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.classes('selected')).toBe(true)
  })
})
