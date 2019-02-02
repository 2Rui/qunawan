<template>
    <div>
        <detail-header></detail-header>
        <detail-banner :swipers="gallaryImgs" :img="bannerImg" :title="sightName"></detail-banner>
        <detail-list :list="categoryList"></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
      DetailBanner,
      DetailHeader,
      DetailList
  },
  data () {
      return {
          gallaryImgs: [],
          categoryList: [],
          bannerImg: '',
          sightName: ''
      }
  },
  mounted () {
      // 当前组件所在点的路由对象 包括fullPath: "/detail/0001" name: "Detail" params: {id: "0001"} path: "/detail/0001" query: {}
      console.log(this.$route.params.id)
      this.getBannerInfo()
  },
  methods: {
      getBannerInfo () {
          axios.get('/api/detail.json', {
              params: {
                id: this.$route.params.id
              }
          }).then(this.getBannerInfoSucc)
      },
      getBannerInfoSucc (res) {
         const data = res.data.data
         this.categoryList = data.categoryList
         this.gallaryImgs = data.gallaryImgs
         this.bannerImg = data.bannerImg
         this.sightName = data.sightName
      }
  }

}
</script>

<style lang="stylus" scoped>
   .cont
    width:100%
    height:70rem
</style>

