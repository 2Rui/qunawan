<template>
    <div>
       <home-header></home-header>
       <home-swiper :swiper="swiperList"></home-swiper>
       <home-icons :icons="iconList"></home-icons>
       <home-reco :reco="recommendList"></home-reco>
       <home-weekend :week="weekendList"></home-weekend>
    </div>
</template>

<script>
// 使用 他依赖的组件 是局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeReco from './components/Recomend'
import HomeWeekend from './components/Weekend'
import { getUser } from '@/api/user/userinfo'
// import axios from 'axios'
export default {
  name: 'Home',
  data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReco,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      // getUser().then(res => {
      //    this.getHomeInfoSucc(res)
      // })
      getUser().then(this.getHomeInfoSucc)
      // axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // endLoading()
      var data0 = res.data
      console.log(data0)
      this.swiperList = data0.swiperList
      this.iconList = data0.iconList
      this.weekendList = data0.weekendList
      this.recommendList = data0.recommendList
     // 处理返回的数据 axios请求返回的时promise对象，所有用then接收，传递一个回调函数作为参数
    }
  }
}
</script>

<style scoped>
  .home {
    font-size:30px;
  }
</style>


