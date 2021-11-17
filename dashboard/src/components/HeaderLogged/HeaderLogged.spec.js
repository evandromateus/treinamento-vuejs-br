import { shallowMount } from '@vue/test-utils'
import HeaderLogged from '.'
import { routes } from '../../router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged/>', () => {
  it('Should render header logged correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should render 3 dots when there\'s no user logged', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('Should render username when user is logged', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Evandro'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Evandro (sair)')
  })
})