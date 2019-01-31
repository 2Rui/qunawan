<template>
   <div class="wrap">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiper.length">
    <!-- slides -->
    <swiper-slide v-for="item in swiper" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: ['swiper'],
  data () {
        return {
             swiperOption: {
                autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap >>>.swiper-pagination-bullet-active
  background:#fff
.wrap
    width:100%
    overflow:hidden
    height:0
    padding-bottom:31.25%
    background:#eee
	.swiper-img
	 	width:100%
</style>


