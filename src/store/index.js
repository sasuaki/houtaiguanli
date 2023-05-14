import Vue from 'vue'
import Vuex from 'vuex'

import moduleUser from './module/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'my_user':moduleUser
  },
  getters
})
