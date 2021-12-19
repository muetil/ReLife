import { createStore } from 'vuex'

const MaxStep=4

export default createStore({
  state: {
    name:'non',
    pec:[],
    pecName:[],
    abi:[],
    step:0
  },
  mutations: {
    nextStep(){
      this.state.step=(this.state.step+1)%MaxStep
    }
  },
  actions: {

  },
  modules: {

  },
  getters:{

  }
})
