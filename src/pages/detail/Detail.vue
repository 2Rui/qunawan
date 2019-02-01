<template>
    <div>
        <detail-banner :swipers="imgs"></detail-banner>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
      DetailBanner
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

</style>

