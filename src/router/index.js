import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 路由实例的一些方法
  scrollBehavior (to, from, savedPosition) { // 解决拖动时多个页面互相影响的问题当换到新路由，想要页面滚到顶部
    return { x: 0, y: 0 }
   }
})
