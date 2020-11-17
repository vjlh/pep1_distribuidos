import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep:1,
    temporaryPassData:[]
  },
  mutations: {
    setCurrentStep(state, newValue){
      state.currentStep = newValue
    },
    setTemporaryPassData(state, newData){
      state.temporaryPassData = newData 
    }
  },
  actions: {
  },
  modules: {
  }
})
