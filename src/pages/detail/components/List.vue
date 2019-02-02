<template>
    <div class="cont">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="title">
                <span class="icon iconfont"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="indent">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
// 递归组件 
export default {
  name: 'DetailList',
  props: {
      list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height:.8rem
    font-size: 0.32rem
    padding:0 .2rem
  .indent
      padding:0 .2rem
</style>
