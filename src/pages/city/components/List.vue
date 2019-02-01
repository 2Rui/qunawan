<template>
    <div class="container" ref="container">
        <div>
       <div class="area">
          <div class="title border-topbottom">您的位置</div>
          <div class="cont">
            <div class="item">北京</div>
          </div>
       </div>
       <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="cont">
            <div class="item" v-for="item of hot" :key="item.id">{{item.name}}</div>
          </div>
       </div>
       <div>
       <div class="area" v-for="(value,key,index) of city" :key="index">
          <div class="title border-topbottom" :ref="key">{{key}}</div>
          <div class="cont">
              <div class="list-item border-bottom" v-for="item of value" :key="item.id">{{item.name}}</div>
          </div>
       </div>
       </div>
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
      hot: Array,
      city: Object
  },
  mounted () {
      // document.querySelector('.container')
      this.scroll = new BScroll(this.$refs.container)
      // 监听到兄弟传来的事件
      this.bus.$on('clickApl', (val) => {
          console.log(this.$refs) // 是个对象 当前vue实例上的所有加有ref的dom项
          // 通过循环加上的ref每一项是数组 如this.$refs[A] 是是一个数组
          const elem = this.$refs[val][0]
           this.scroll.scrollToElement(elem)
      })
  },
  watch: {
      city () {
          //  city发生变化，执行的函数
          console.log('监听到city发生变化了')
      }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
    	&:before
    		border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
.container
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    .title
        line-height:.54rem
        padding-left:0.2rem
        background:#eee
        color:#666
        font-size:.26rem
    .cont 
        box-sizing:border-box
        width:100%
        padding:.1rem
        display:flex
        flex-wrap:wrap
        justify-content:flex-start
        padding-right:.6rem
      .item
            padding: 0.15rem 0.2rem
            border: .02rem solid #ccc
            border-radius: 0.06rem
            width: 30%
            box-sizing: border-box
            text-align: center
            margin:.1rem
      .list-item
            width:100%
            line-height:.76rem
            color:#666
            padding-left:.1rem
</style>

