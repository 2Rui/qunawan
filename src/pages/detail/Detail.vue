<template>
    <div>
        <detail-header></detail-header>
        <detail-banner :swipers="imgs"></detail-banner>
        <div class="cont"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
      DetailBanner,
      DetailHeader
  },
  data () {
      return {
          imgs: []
      }
  },
  mounted () {
      this.getBannerInfo()
  },
  methods: {
      getBannerInfo () {
          axios.get('/api/detail.json').then(this.getBannerInfoSucc)
      },
      getBannerInfoSucc (res) {
          console.log(res)
         this.imgs = res.data.data.gallaryImgs
      }
  }

}
</script>

<style lang="stylus" scoped>
   .cont
    width:100%
    height:70rem
    background:pink
</style>

