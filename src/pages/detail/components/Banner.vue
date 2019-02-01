<template>
    <div>
    <div class="cont" @click="clickBanner">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"/>
      <div class="info">
          <p class="title">大连圣亚海洋世界</p>
          <div class="num"><span class="iconfont icon">&#xe67b;</span>39</div>
      </div>
    </div>
    <gallary :swiper="swipers" v-if="isGallary" @changeGallay="closeGallay"></gallary>
    </div>
</template>

<script>
import Gallary from '../../../commonn/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
      swipers: Array
  },
  data () {
      return {
          isGallary: false
      }
  },
  components: {
      Gallary
  },
  methods: {
      clickBanner () {
          this.isGallary = true
      },
      closeGallay () {
          this.isGallary = false
      }
  }
}
</script>

<style lang="stylus" scoped>
   .cont
     width:100%
     height:0
     overflow:hidden
     padding-bottom:55%
     position:relative
     img 
       width:100%
    .info
       position:absolute
       bottom:0
       left:0
       right:0
       background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
       display:flex
       padding:0 .3rem
       justify-content :space-between
       color:#fff
       line-height:.6rem
       .title
           flex:1
           font-size:.32rem
        .num
           padding:0 .3rem
           height:.32rem
           line-height:.32rem
           margin-top:.14rem
           border-radius:.2rem
           background:rgba(0,0,0,8)
           font-size:.24rem
            .icon
              font-size:.24rem  
</style>
