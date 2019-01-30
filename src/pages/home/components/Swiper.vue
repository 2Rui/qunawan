<template>
   <div class="wrap">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in list" :key="index">
        <img :src="item" class="swiper-img"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
        return {
             swiperOption: {
                // autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination'
            },
            list: [
                'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
                'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg',
                'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap >>>.swiper-pagination-bullet-active
  background:#fff
.wrap
 overflow:hidden
 width:100%
 height:0
 padding-bottom:31.25%
 background :#eee
  .swiper-img
    width:100%
</style>


