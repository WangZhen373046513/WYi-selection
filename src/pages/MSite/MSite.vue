<template>
  <section class="homeContiner">
    <header class="header">
      <div class="logo-search">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="search-icon"></i>
          <span>搜索商品，共13018款好物</span>
        </div>
      </div>
    </header>
    <div class="hdScorllX">
      <div class="hdScorllItem">
        <span>推荐</span>
        <span>居家</span>
        <span>鞋包</span>
        <span>服裝</span>
        <span>推荐</span>
        <span>推荐</span>
        <span>推荐</span>
        <span>推荐</span>
        <span>推荐</span>
        <span>推荐</span>
        <span>推荐</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
      </div>
    </div>
    <div class="g-grow">
      <div class="item">
        <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png">
        <span>111111111</span>
      </div>
    </div>
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
  .homeContiner
    width 100%
    height 100%
    display flex
    position relative
    .header
      width 100%
      height 88px
      background #ffffff
      display flex
      flex-direction column
      .logo-search
        width 100%
        height 88px
        display flex
        flex-flow row nowrap
        align-items center
        padding: 16px 30px
        > .logo
          width: 140px
          height: 40px
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          display: inline-block;
          margin-right 20px
          background-size: cover;
          background-position: center
        > .search
          width 532px
          height 56px
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          background-color: #ededed;
          border-radius: 5px;
          > .search-icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width 28px
            height 28px
            margin-right 10px
          > span
            color: #666
            font-size 22px
    .hdScorllX {
      width 1592px;
      height 60px
      overflow hidden;
      background #ffffff;
      display flex;
      padding 0 18px
      position absolute
      left 0
      top 88px
      .hdScorllItem {
        width 100%
        height 60px
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width  88px
          height 60px
          text-align center;
          line-height 60px
          flex-shrink 0
          flex-wrap: nowrap;
          padding 0 16px
          font-size 30px
          &.active {
            padding: 0 0 12px 0;
            border-bottom: 3px solid #b4282d;
            color: #b4282d;
          }
        }
      }
    }

    .swiper-container
      width 100%
      height 400px
      z-index 100
      background red
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          img
            width 100%
            height 400px
            display inline-block

    .g-grow{
      width 100%
      height 72px
      background: #fff;
      justify-content: space-between;
      .item{
        display flex
        width 100%
        height: 72px
        margin-left: 15/@rem;
        img{
          display flex
          width: .42667*75/@rem;
          vertical-align: middle;
        }
        span{
          font-size: .32*75/@rem;
          color: #333;
          line-height: .42667*75/@rem;
          vertical-align: middle;
          margin-left: -15/@rem;
        }
      }
    }


</style>