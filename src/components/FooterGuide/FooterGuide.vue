<template>
  <footer class="footer">
    <div class="footer_guide">
      <a href="javascript:;" @click="goTo('/msite')" :class="{on:$route.path==='/msite'}">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" @click="goTo('/generalthings')" :class="{on:$route.path==='/generalthings'}">
        <i class="iconfont icon-fangkuaidagou-weixuanzhong"></i>
        <span>识物</span>
      </a>
      <a href="javascript:;" @click="goTo('/classify')" :class="{on:$route.path==='/classify'}">
        <i class="iconfont icon-chouti"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" @click="goTo('/shop')" :class="{on:$route.path==='/shop'}">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:;" @click="goTo('/profile')" :class="{on:$route.path==='/profile'}">
        <i class="iconfont icon-renwu"></i>
        <span>个人</span>
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
     goTo(path){
       this.$router.replace(path)
     }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer
    width 100%
    height 98px
    position fixed
    bottom 0
    left 0
    right 0
    z-index 5
    background-color #fafafa
    border-top 1px solid #d9d9d9
    .footer_guide
      width 100%;
      height 100%;
      display flex;
      justify-content  space-around;
      align-items  center;
      a
        display flex
        flex-direction column
        justify-content center
        align-items center
        &.on
          color $on
        .iconfont
          font-size 45px
        span
          font-size 14px
          display block
          margin-top 5px



</style>