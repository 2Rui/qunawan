<template>
    <div class="alphabet">
        <div class="cont" @touchstart.prevent="onStart" @touchmove="onMove" @touchend="onEnd">
          <div v-for="(item,index) of alps" :key="index" class="item" @click="onClick" :ref="item">{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CityAlp',
  props: {
      alps: Array
  },
  data () {
      return {
          isStart: false,
          timer: null,
          startY: 0
      }
  },
  updated () { // 页面数据更新 同时已经渲染到页面上
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
      onClick (e) {
          // 兄弟组件之间传值  使用bus
          this.bus.$emit('clickApl', e.target.innerText)
      },
      onStart () {
         this.isStart = true
      },
      onMove (e) {
          if (this.isStart) {
             if (this.timer) {
                 clearTimeout(this.timer)
             }
             // 定时器 
             this.timer = setTimeout(() => {
                var moveY = e.touches[0].clientY - this.startY - 79
                var now = Math.floor(moveY / 20)
                console.log(now)
                if (now >= 0 && now < this.alps.length) {
                  this.bus.$emit('clickApl', this.alps[now])
               }
             }, 16)
          }
      },
      onEnd () {
        this.isStart = false
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
  .alphabet
      width:.6rem
      position:absolute
      top:1.58rem
      right:0
      bottom:0
      display:flex
      align-items:center
      .cont
          width:100%
         .item
            line-height:.4rem
            width:100%
            text-align:center
            color:$bgColor
</style>
