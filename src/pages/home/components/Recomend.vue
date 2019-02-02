<template>
    <div>
        <div class="title">热销推荐</div>
        <div class="cont">
            <router-link tag="div" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of reco" :key="item.id">
                    <img :src="item.imgUrl" class="img-box"/>
                <div class="right">
                    <p class="right-title">{{item.title+';'+item.id}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <button>详情</button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeReco',
  props: {
      reco: {
          type: Array
      }
  },
  data () {
      return {

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


