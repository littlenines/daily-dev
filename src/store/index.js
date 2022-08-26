import { createStore } from 'vuex'
import navigation from './modules/navigation'
import desktop from './modules/desktop'

export default createStore({
  modules: {
    navigation,
    desktop
  }
})
