<template>
       <div class="container">
		<router-link tag="div" to="/" class="detail-back" v-show="showAbs">
			<i class="iconfont detail-icon">&#xe606;</i>
		</router-link>
		<div class="detail-title" v-show="!showAbs" :style="styobj">
			<router-link tag="div" to="/" class="title-back">
				<i class="iconfont detail-icon">&#xe606;</i>
			</router-link>
             景点介绍
		</div>
	</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
      return {
          showAbs: true,
          styobj: {
              opacity: 0
          }
      }
  },
  activated () {
      // 用keep-alive包裹的，会多activated与deactivated生命周期函数，每次进入出去都会执行的一个钩子函数
     window.addEventListener('scroll', this.handleScroll, true)
  },
  deactivated () {
     window.removeEventListener('scroll')
  },
  methods: {
      handleScroll () {
          const top = document.documentElement.scrollTop
          console.log(top)
          if (top > 60) {
           this.showAbs = false
           if (top < 140) {
             const opacity = top / 140
             this.styobj = {opacity: opacity}
           }
          } else {
           this.showAbs = true
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
   @import '~@styles/varibles.styl'
    .detail-back
            width:.8rem
            height:.8rem
            position:absolute
            top:.2rem
            left:.2rem
            line-height:.8rem
            border-radius:.4rem
            text-align:center
            background:rgba(0,0,0,0.8)
            color:#fff
            z-index:100
            .detail-icon
                font-size:.4rem
        .detail-title
            position:fixed
            top:0
            left:0
            right:0
            background:$bgColor
            height:.86rem
            text-align:center
            line-height:.86rem
            color:#fff
            font-size:.32rem
            z-index:200
            .title-back
                display:inline-block
                width:.64rem
                float:left
                font-size:.4rem
</style>
