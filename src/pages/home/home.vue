<template>
    <div>
       <home-header></home-header>
    </div>
</template>

<script>
// 使用 他依赖的组件 是局部组件
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
  .home {
    font-size:30px;
  }
</style>


