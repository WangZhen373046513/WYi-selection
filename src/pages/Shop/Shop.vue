<template>
  <div class="shopCart">
    <header class="header">
      <span class="logo">购物车</span>
      <div class="right">
        <a href="javascript:;">领券</a>
      </div>
    </header>
    <ul class="explain">
      <li class="expItem">
        <i class="service-icon"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <i class="service-icon"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <i class="service-icon"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <div class="txtBtn" @click="$router.replace('/profile')">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .shopCart
    position relative
    height 100%
    .header
      height: 88px
      padding: 0 30px
      line-height: 88px
      text-align: center;
      background-color: #fff;
      position relative
      overflow hidden
      >.logo
        font-size: 36px
        text-align center
        line-height 88px
        vertical-align middle
        margin-top -20px
      >.right
        position: absolute;
        top: 0;
        right: 30px
        font-size: 30px
        >a
          margin-right: 30px
          color: #B4282D
    >h3
      font-size 36px
      line-height 88px
    >.explain
      z-index 1
      height 70px
      padding 0 30px
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      >.expItem
        display flex
        align-items center
        font-size 24px
        color #666666
        >i
          display inline-block
          width 10px
          height 10px
          font-size 10px
          background-repeat no-repeat
          color #d9d9d9
          margin-right 8px
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);

    .cart
      position absolute
      top -50px
      right 0
      bottom 0
      left 0
      margin auto
      height 300px
      text-align center
      >.img
        display inline-block
        width 248px
        height 248px
        margin-bottom 8px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
        background-position center
        background-size cover
        background-repeat no-repeat
      >.txt
        font-size 28px
        line-height 1
        color #7f7f7f
        >.inner
          margin-top -20px
          >.txtCon
            margin-bottom 50px
            line-height 1
            font-size 28px
            color #999999
          >.txtBtn
            margin auto
            width 480px
            height 92px
            font-size 30px
            line-height 92px
            color #ffffff
            background-color $on
            border-radius 4px
</style>