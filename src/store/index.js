import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      city: '北京'
  },
//   actions: { // 主要进行异步操作与批量的同步操作
//       changeCity (ctx,city) {
//           ctx.commit('changeCity', city)
//       }
//   },
  mutations: {
      changeCity (state, city) {
        state.city = city
      }
  }
})
