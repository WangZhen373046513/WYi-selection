<template>
  <section class="list">
    <header class="search">
      <div class="inner">
        <div class="ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共9723款好物</span>
        </div>
      </div>
    </header>
    <Detail/>


  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  import Detail from './Detail/Detail.vue'

  export default {
    data () {
      return {}
    },

    components:{
      Detail
    },
    mounted () {
      this.$store.dispatch('getNavData', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['nav_data'])
    },
    methods:{
      _initScroll(){
        new BScroll('.listMenu', {
          click: true,
        })
      }

    },

    watch:{
      nav_data(value){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }

    }

  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .list
    padding-bottom 100px
    box-sizing border-box
    height 100%
    background #ffffff
    overflow hidden
    .search
      position fixed
      top 0
      left 0
      z-index 5
      width 100%
      height 88px
      .inner
        display flex
        align-items center
        padding 0 30px
        width 100%
        height 88px
        position relative
        background-color #ffffff
        &:after
          content ''
          position: absolute
          background-color #d9d9d9
          left 0
          width 100%
          height 1px
          transform-origin 50% 100% 0
          bottom 0
        .ipt
          width 690px
          display flex
          align-items center
          justify-content center
          height 56px
          font-size 41px
          background-color #ededed
          border-radius 8px
          > .icon
            display inline-block
            vertical-align middle
            width: 28px
            height 28px
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat no-repeat
            background-size 28px
            margin-right 10px
          > .placeholder
            font-size 27px
            color #666666



</style>