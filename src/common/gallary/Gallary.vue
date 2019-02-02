<template>
    <div class="gallary" @click="closeGallary">
        <div class="cont">
            <swiper :options="swiperOption" ref="mySwiper" v-if="swiper.length">
            <swiper-slide v-for="(item,index) in swiper" :key="index">
                <img :src="item" class="swiper-img"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
      swiper: {
          type: Array, // 注意 props的属性是数组或者对象 default默认值要写成函数return
          default () {
					return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']
				}
      }
  },
  data () {
      return {
          swiperOption: {
             pagination: '.swiper-pagination',
             paginationType: 'fraction',
             observeParents: true, // observer这两个属性解决 v-show这个组件时，宽度计算的问题  这里可以用v-if就不会出现问题
             observer: true
          }
      }
  },
  methods: {
      closeGallary () {
          this.$emit('changeGallay')
      }
  }
}
</script>

<style lang="stylus" scoped>
  .cont >>> .swiper-container
   overflow:inherit
  .gallary
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    background:rgba(0,0,0,0.9)
    display:flex
    align-items:center
    z-index:1000
    .cont
      width:100%
      height:0
      padding-bottom:100%
      .swiper-img
         width:100%
      .swiper-pagination
         color:#fff
         bottom:-1rem
</style>
