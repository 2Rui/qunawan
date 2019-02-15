// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.bus = new Vue()

// 适配
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
var htmlDom = document.getElementsByTagName('html')[0]
htmlDom.style.fontSize = htmlWidth / 10 + 'px'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
