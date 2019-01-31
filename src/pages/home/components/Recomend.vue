<template>
    <div>
        <div class="title">热销推荐</div>
        <div class="cont">
            <div class="item border-bottom" v-for="item of recommendList" :key="item.id">
                    <img :src="item.imgUrl" class="img-box"/>
                <div class="right">
                    <p class="right-title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <button>详情</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeReco',
  data () {
      return {
          recommendList: [
              {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
            title: '故宫',
            desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        }
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@styles/mixins.styl'
      .title
         line-height:.4rem
         text-indent:.2rem
         background:#eee
         padding:.2rem
     .cont
         width:100%
         .item
             width:100%
             height:1.9rem
             display:flex
             .img-box
                 width:1.7rem
                 height:1.7rem
                 padding:0.1rem
              .right
                  flex:1
                  display:flex
                  flex-direction:column
                  padding:.1rem
                  overflow:hidden
                  .right-title
                     line-height:.54rem
                     font-size:.32rem
                     font-weight:bold
                     ellipsis()
                   .desc
                       line-height:.4rem
                       color:#ccc
                    button 
                      background:#ff9300
                      border-radius:.06rem
                      padding :.1rem
                      color :#fff
                      margin-top :.1rem
                      line-height :.44rem
                      width:2rem
</style>


