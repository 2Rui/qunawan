<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
    </div>
</template>

<script>
// 使用 他依赖的组件 是局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>
  .home {
    font-size:30px;
  }
</style>


