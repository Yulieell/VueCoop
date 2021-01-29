import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    membre:false,
    token:false
  },
  mutations: {
    setMembre(state, membre){
      state.membre = membre;
    },
    setToken(state, token){
      state.token = token;
    }       
  },
  actions: {
  },
  plugins: [vuexLocal.plugin],
  modules: {
  }
})
