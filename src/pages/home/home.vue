<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
       <home-reco></home-reco>
       <home-weekend></home-weekend>
    </div>
</template>

<script>
// 使用 他依赖的组件 是局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeReco from './components/Recomend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReco,
    HomeWeekend
  }
}
</script>

<style scoped>
  .home {
    font-size:30px;
  }
</style>


