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
    <section class="main">
      <div class="listMenu">
        <div class="inner">
          <ul>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">推荐专区</a>
            </li>
          </ul>
        </div>
      </div>

    </section>

  </section>





</template>

<script>
  export default {
    data () {
      return {}
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .list
    margin-bottom 100px
    height 100%
    background #ffffff
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
          font-size 28px
          background-color #ededed
          border-radius 8px
          >.icon
            display inline-block
            vertical-align middle
            width: 28px
            height 28px
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat no-repeat
            margin-right 10px
          >.placeholder
            font-size 27px
            color #666666
    .main
      margin-top 88px
      .listMenu
        position fixed
        top 88px
        left 0
        bottom 0
        z-index 4
        width 162px
        background-color #ffffff
        &:after
          content ''
          position absolute
          background-color rgba(0,0,0,.15)
          top 0
          bottom 0
          width 1px
          -webkit-transform-origin 100% 50% 0
          transform-origin 100% 50% 0
          right 0
      .inner
        width 100%
        max-height 1104px
        padding-top 40px
        overflow hidden
        >ul
          padding-bottom 138px
          >.item
            width 100%
            height 76px
            line-height 76px
            text-align center
            border none
              >a
                font-size 36px
                line-height 76px
                font-weight 700
                color $on
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width: 6px
                background-color $on
              >a
                font-size 36px
                line-height 76px
                font-weight 700
                color $on
            +.item
              margin-top 20px
            >a
              display block
              color #333333
              font-size 28px
              line-height 56px
              ellipsis()


</style>