<template>
    <div class="cont">
        <div class="title">周末去那玩</div>
        <div class="item" v-for="item of week" :key="item.od">
            <div class="img-box">
             <img :src="item.imgUrl" class="item-img"/>
            </div>
            <div class="info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: ['week']
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl'
.cont 
   width:100%
   .title
      line-height:.4rem
      text-indent:.2rem
      background:#eee
      padding:.2rem
     .item
        display:flex
        flex-direction :column
        justify-content :center
        .img-box
           width:100%
           height:0
           overflow:hidden
           padding-bottom:37.05%
           .item-img
                width:100%
        .info
           padding:.2rem
           .item-title
                line-height:.54rem
                font-size:.32rem
                font-weight:bold
                ellipsis()
            .item-desc
                line-height:.4rem
                color:#ccc
</style>
