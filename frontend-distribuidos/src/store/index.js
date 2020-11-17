import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep:1,
    temporaryPassData:[],
    snackBar:{status:false, color:"success", msg:"Se ha generado el permiso exitosamente", timeout:4000}
  },
  mutations: {
    setCurrentStep(state, newValue){
      state.currentStep = newValue
    },
    setTemporaryPassData(state, newData){
      state.temporaryPassData = newData 
    },
    setSnackBar(state, newValue){
      state.snackBar.color = newValue.color
      state.snackBar.msg = newValue.msg
      state.snackBar.status = true
    }
  },
  actions: {
  },
  modules: {
  }
})
