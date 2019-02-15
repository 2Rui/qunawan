<template>
    <div class="icons">
       <swiper :options="swiperOption">
           <swiper-slide v-for="(pageArray,index) in newList" :key="index">
                <div v-for="item in pageArray" :key="item.id" class="iconBox">
                     <div class="imgbox">
                     <img :src="item.imgUrl" class="img"/>
                     </div>
                     <p class="desc">{{item.desc}}</p>
                </div>
           </swiper-slide>
       </swiper>
    </div>
</template>

<script>
export default { 
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data () {
      return {
          swiperOption: {

          }
      }
  },
  computed: {
     newList () {
         var newArray = []
          // 处理数据，解析为两个数组，分别为第一页 第二页
          this.icons.forEach((item, index) => {
             var page = Math.floor(index / 8)
             if (!newArray[page]) {
                newArray[page] = []
             }
                newArray[page].push(item)
          })
          return newArray
     }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    @import '~@styles/mixins.styl'
  .icons >>>.swiper-container
    width:100%
  .icons
    width:100%
    height:0
    overflow:hidden
    padding-bottom:50%
    .iconBox
      width:25%
      height:0
      overflow:hidden
      padding-bottom:25%
      position:relative
      text-align:center
      float:left
      .imgbox
        text-align:center
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .img
           height:100%
      .desc
        position:absolute
        left:0
        right:0
        bottom:0
        text-align:center
        color:$darkTextColor
        height:px2rem(37.5)
        line-height:px2rem(37.5)
        ellipsis()
</style>

