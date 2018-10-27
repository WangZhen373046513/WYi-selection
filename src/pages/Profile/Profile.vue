<template>
  <div class="personal">
    <header>
      <div class="row">
        <div class="home" @click="$router.push('/msite')"></div>
        <div class="logo"></div>
        <div class="right">
          <div class="search">
            <a href="javascript:;">
              <i></i>
            </a>
          </div>
          <div class="cart">
            <a href="javascript:;">
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="cont">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btns">
        <div class="btn">
          <i></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist">
          <i></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i></i>
      </div>
    </div>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="wChart"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="qq"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="weiBo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>



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
.personal
  width 100%
  height 100%
  box-sizing border-box
  padding-top 88px
  background #f2f5f4
  position relative
  header
    height 88px
    position fixed
    left 0
    top 0
    right 0
    z-index 5
    background #fafafa
    &:after
      content ''
      position absolute
      left 0
      bottom 0
      width 100%
      height 1px
      background-color #d9d9d9
      transform scaleY(0.5)
    .row
      box-sizing border-box
      width 750px
      height 88px
      padding-left 24px
      padding-right: 16px
      overflow hidden
      display flex
      align-items center
      justify-content space-between
      position relative
      >.home
        width 48px
        height 44px
        display inline-block
        vertical-align middle
        background-position: 0 -82px;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        font-size 48px
        background-size 172px 398px
      .logo
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        width 172px
        height 54px
        display inline-block
        vertical-align middle
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
        background-repeat no-repeat
        background-size 172px 398px
        background-position: 0px -132px;
      .right
        box-sizing border-box
        text-align center
        a
          display inline-block
          width 64px
          height 64px
        .search
          margin-right 20px
          float left
          i
            width 64px
            height 64px
            display block
            background-repeat: no-repeat;
            vertical-align middle
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-size 172px 398px
            background-position: 0px -330px;
        .cart
          float left
          i
            width 64px
            height 64px
            display block
            background-repeat: no-repeat;
            vertical-align middle
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png);
            background-size 172px 398px
            background-position: 0 -1px;
  .cont
    >.logo
      text-align center
      padding 120px 0
      >img
        width 300px
        height 104px
    >.btns
      padding 0 42px
      >.btn
        margin-bottom 40px
        text-align center
        border-radius 6px
        width 100%
        height 86px
        line-height 86px
        vertical-align middle
        font-size 28px
        color #ffffff
        border 1px solid $on
        background-color $on
        &.dist
          background-color #f2f5f4
          color $on
        >i
          width 40px
          height: 40px
          box-sizing border-box
          font-size 40px
          vertical-align inherit
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);

          &.space
            margin-right 10px
    >.quickLoign
      color #333333
      font-size 28px
      width 100%
      text-align center
      >i
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
        font-size 28px
        margin-right 16px
        margin-left 4px
        color #333333
  .otherLogin
    position absolute
    width 100%
    height 60px
    left 0
    bottom 60px
    text-align center
    .itemOther
      height 26px
      border-right 1px solid #979797
      display inline-block
      text-align center
      color #979797
      padding 0 60px
      font-size 26px
     >i
        font-size 26px
  /*  .wChart
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…jfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=) no-repeat;
   .qq
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…B4H3DKhatTPnbtuuPfwRuoBPWsN10pw/ooYwmXu/CXAAMA+zyBlSoNLhoAAAAASUVORK5CYII=) no-repeat;
   .weiBo
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…LSvOdNiBHfZ2H5SP+L89cZrgkU/KEdZDjIcJBhd/otwADLKFf6Fop5QwAAAABJRU5ErkJggg==) no-repeat;
   &:last-child
     border-right none*/
</style>