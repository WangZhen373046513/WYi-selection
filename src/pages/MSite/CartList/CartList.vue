<template>
  <div class="goodsShow" v-if="home_data.cateList">
    <h3>{{cateData.name}}好物</h3>
    <ul class="list" >
      <li class="item"  v-for="(item,index) in itemList" :key="index" >
        <a href="javascript:;">
          <img :src="item.listPicUrl" alt="">
          <div class="desc">{{item.simpleDesc}}</div>
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.couponPrice}}</div>
        </a>
      </li>
      <li class="cate-more" :key='8'>
        <a href="javascript:;">
          <p>更多{{cateData.name}}好物</p>
          <i class="right-icon"></i>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>

  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    props:{
      cateData:Object
    },
    computed:{
      ...mapState(['home_data']),

      itemList(){
        return this.cateData.itemList.splice(0,7)
      },
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .goodsShow
    width 100%
    margin-bottom 20px
    h3
      width 100%
      height 120px
      line-height 120px
      text-align: center
      font-size 28px
      color #333333
    .list
      width 100%
      z-index 0
      overflow hidden
      padding-bottom 0

      .item
        float left
        overflow hidden
        width 345px
        height 562px
        background #ffffff
        &:nth-child(odd)
          padding 0 10px 33px 20px
        &:nth-child(even)
          padding 0 20px 33px 10px
        a
          display block
          height 504px
          font-size 0
          overflow hidden
          img
            width: 345px
            height 345px
            border-radius 4px  0 0 4px
            background-color #f4f4f4
          .desc
            width 345px
            padding 20px 10px
            background-color #f1ece2
            border-radius 0 4px 4px 0
            color #9f8a60
            letter-spacing 0
            line-height 30px
            font-size 24px
            ellipsis()
          .name
            margin-top 10px
            padding 0 10px
            color #333333
            font-size 27px
            line-height 48px
            ellipsis()
          .price
            line-height 1
            font-size 32px
            color $on
            padding 0 10px
          &.move
            border-radius 4px
            padding 128px 0
            box-sizing border-box
            display flex
            flex-direction column
            align-items center
            justify-content center
            background #f4f4f4
            height 416px
            p
              color #333333
              font-size 32px
              line-height 32px
              margin-bottom 50px
            i
              display block
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png);
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 100%
              width 66px
              height 66px !important

      .cate-more
        height 414px
        a
          height 100%
          width 100%
          padding 128px 0

          p
            font-size 20px
          .right-icon
            width 67px
            height 67px
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;


</style>