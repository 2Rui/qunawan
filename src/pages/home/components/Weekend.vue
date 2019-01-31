<template>
    <div class="cont">
        <div class="title">周末去那玩</div>
        <div class="item">
            <img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" class="item-img"/>
            <div class="info">
            <p class="item-title">北京温泉排行榜</p>
            <p class="item-desc">细数北京温泉，温暖你的冬天</p>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
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
