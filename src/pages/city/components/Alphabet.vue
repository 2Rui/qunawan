<template>
    <div class="alphabet">
        <div class="cont">
          <div v-for="(item,index) of alps" :key="index" class="item" @click="onClick">{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CityAlp',
  props: {
      alps: Array
  },
  methods: {
      onClick (e) {
          // 兄弟组件之间传值  使用bus
          console.log(e.target.innerText)
          this.bus.$emit('clickApl',e.target.innerText)
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
