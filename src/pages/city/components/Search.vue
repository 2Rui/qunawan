<template>
    <div class="cont">
      <input type="text" placeholder="输入城市名字或者拼音" class="search"/>
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
