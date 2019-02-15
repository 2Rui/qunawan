<template>
    <div class="header-cont">
        <div class="header-left">
            <span class="iconfont icon">&#xe606;</span>
        </div>
        <div class="header-input">
            <span class="iconfont icon">&#xe600;</span>
            输入城市游玩主题</div>
        <router-link to="/city" tag="div" class="header-right">{{this.$store.state.city}}
            <span class="iconfont icon">&#xe64a;</span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
@import '~@styles/mixins.styl'
.header-cont
    width:100%
    line-height:px2rem(86)
    height:px2rem(86)
    background:#eee
    display:flex
    felx-direction:row
    color:#fff
    background:$bgColor
    .header-input
       flex:1
       background:#fff
       height:.84rem
       border-radius:0.1rem
       line-height:.84rem
       margin-top:0.12rem
       margin-left:.2rem
       color:#ccc
       padding-left:.2rem
    .header-left
       width:0.64rem
       .icon
          margin-left:0.2rem
          text-align:center
          font-size:.4rem
    .header-right
       width:1.24rem
       text-align:center
       .icon
         font-size:.24rem
         margin-left:-.04rem
</style>

