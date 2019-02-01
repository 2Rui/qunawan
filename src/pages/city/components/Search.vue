<template>
   <div>
    <div class="cont">
      <input type="text" placeholder="输入城市名字或者拼音" class="search" v-model="value"/>
    </div>
    <div class="search-cont" ref="search" v-show="isSearch">
      <ul>
        <li v-for="item of result" :key="item.id" class="search-item border-bottomm" @click="tapCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!result.length">没有检索到数据</li>
      </ul>
    </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: ['city'],
  data () {
    return {
      value: '',
      timer: null,
      result: [],
      isSearch: false
    }
  },
  mounted () {
    // 搜索区域的显示部分 要用v-show ，把dom渲染完成，但是隐藏起来 这样scroll不会报错
    // 组件挂在到页面，渲染完成调用的函数
     this.scroll = new Bscroll(this.$refs.search)
  },
  // updated () {
  //    console.log('数据更新完成')
  //  },
  watch: {
    value () {
      // value发生变化时执行
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
         this.getResult()
      }, 100)
    }
  },
  methods: {
    getResult () {
      // console.log('开始执行'+this.value)
      let result = []
      const value = this.value
      if (!value) {
         this.result = []
         this.isSearch = false
         return 
      }
      // 循环数据
      for (var i in this.city) {
          const nowCity = this.city[i]
          nowCity.forEach((item, index) => {
             if (item['spell'].includes(value) || item['name'].includes(value)) {
                result.push(item)
             }
          })
      }
      this.result = result
      this.isSearch = true
    },
    tapCity (city) {
          // 通过dispatch 方法调用actions
          // this.$store.dispatch('changeCity', city)
          // 因为没有异步方法，组件可以直接用commit方法调用mutations
          this.$store.commit('changeCity', city)
          this.$router.push('/')
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.cont
  width: 100%;
  background:$bgColor;
  height: .72rem;
  padding:0 0.1rem;
  box-sizing: border-box;
  input 
    width: 100%
    height:.62rem
    line-height:.62rem
    border-radius 0.06rem
    padding:0 .1rem
    box-sizing:border-box
    text-align:center
    color:#666
.search-cont
  width:100%
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
  z-index:999
  overflow:hidden
  background:#eee
  .search-item
    line-height:.62rem
    padding-left:.2rem
    color:#666
    background:#fff
</style>
