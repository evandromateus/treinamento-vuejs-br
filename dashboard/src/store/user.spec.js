import useStore from '../hooks/useStore'
import { cleanCurrentUser, setCurrentUser, setApiKey, resetUserStore } from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })
  it('Should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Evandro' })
    expect(store.User.currentUser.name).toBe('Evandro')
  })

  it('Should set api_key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('Should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Evandro' })
    expect(store.User.currentUser.name).toBe('Evandro')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})