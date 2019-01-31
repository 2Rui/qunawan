<template>
        <div class="header">
            <router-link to="/" tag="span" class="iconfont back">&#xe606;</router-link>
            城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
  .header
      width: 100%
      height:$headerHeight
      line-height:$headerHeight
      text-align:center
      color:#fff
      font-size:.32rem
      background:$bgColor
      position:relative
      .back
          width:.64rem
          font-size:.4rem
          text-align:center
          display:block
          position:absolute
          top:0
          left:0
</style>
