import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuexStore } from '@/store'
import { routes } from '@/router'
import HomeSearchBar from './HomeSearchBar.vue'

let wrapper
let store
let router

describe('HomeSearchBar', () => {
  beforeEach(() => {
    store = createVuexStore()
    router = createRouter({
      history: createWebHashHistory(process.env.BASE_URL),
      routes,
    })
    wrapper = mount(HomeSearchBar, {
      global: { plugins: [store, router] },
    })
  })

  it('HomeSearchBar is exist', () => {
    expect(true).toBe(true)
  })
})