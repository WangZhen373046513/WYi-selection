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
      <ul class="hdScorllItem" ref="picsUl">
        <li v-for="(item,index) in home_data. headCateList" :key="index" ref="hdScorll" @click="listIndex(index)" :class="{active:index===itemIndex}">{{item.name}}</li>
      </ul>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus,index) in home_data.focusList" :key="index">
          <img :src="focus.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <ul class="g-grow">
      <li class="item" v-for="(policyDesc,index) in home_data.policyDescList" :key="index">
        <img :src="policyDesc.icon">
        <div class="item_i">
          <span>{{policyDesc.desc}}</span>
        </div>
      </li>
    </ul>
    <div class="brand">
      <div class="brand-header">
        <a>
          <span>品牌制造商直供</span>
          <i class="right-icon"></i>
        </a>
      </div>
      <div class="brand-goods">
        <ul>
          <li class="goods" v-for="(tag,index) in tagData" :key="index">
            <a>
              <div class="content-goods">
                <h4>{{tag.name}}</h4>
                <div class="price">
                  <span class="price1">{{tag.floorPrice}}</span>
                  <span class="price2">元起</span>
                </div>
                <i class="shangxin-icon" v-show="tag.newOnShelf"></i>
              </div>
              <img :src="tag.picUrl" >
            </a>
          </li >

        </ul>
      </div>
    </div>
    <div class="move new">
      <a href="javascript:;" class="moveCont">
        <span class="title">新品首发</span>
        <div class="all">
          <span>查看全部</span>
          <i class="arrow-right"></i>
        </div>
      </a>
    </div>
    <div class="ItemList">
      <ul class="ItemList_m">
        <li v-for="(newItem,index) in home_data.newItemList" :key="index">
          <a>
            <div class="img-warp">
              <img :src="newItem.listPicUrl">
            </div>
            <div class="item-name">
              <span>新品</span>
            </div>
            <div class="item-desc ellipsis " >
              <span class="ellipsis">{{newItem.name}}</span>
            </div>
            <div class="item-desc1">
              <span>{{newItem.simpleDesc}}</span>
            </div>
            <div class="item-price">
              <span class="maney">￥</span>
              <span class="lost">{{newItem.retailPrice}}</span>
            </div>
          </a>
        </li >
        <li class="item-more">
          <a>
            <span>查看全部</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="countDown">
      <a href="javascript:;">
        <div class="itemLeft">
          <div class="title">严选限时购</div>
          <div class="countNum">
            <span class="time">00</span>
            <span class="colon">:</span>
            <span class="time">11</span>
            <span class="colon">:</span>
            <span class="time">22</span>
          </div>
          <div class="nextTitle">下一场 22:00  开始</div>
        </div>
        <div class="itemRight">
          <img src="http://yanxuan.nosdn.127.net/aeca8aad2aac86569da37aa5bfd16e37.png?imageView&quality=85&thumbnail=330x330" alt="">
          <div class="price">
            <span class="now">¥42</span>
            <span class="old">¥49</span>
          </div>
        </div>
      </a>
    </div>
    <div class="weal">
      <a href="javascript:;"></a>
    </div>
    <nav class="goodsSale">
      <div class="g_header">
        <a href="javascript:;">
          <span>专题精选</span>
          <i></i>
        </a>
      </div>
      <div class="topic-items">
        <div class="topicScrollBox">
          <ul>
            <li v-for="(topic,index) in home_data.topicList" :key="index">
              <a href="javascript:;">
                <img :src="topic.scenePicUrl">
              </a>
              <div class="item-price">
                <h4>{{topic.title}}</h4>
                <span>{{topic.priceInfo}}元起</span>
              </div>
              <div class="item-info">{{topic.subtitle}}</div>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    <CartList v-for="(cate,index) in home_data.cateList"  v-if="home_data.cateList" :cateData="cate" :key="index"/>
    <div class="copyright">
      <div class="content">
        <div class="bd">
          <a href="javascript:;" class="goApp">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="desc">
          <span>网易公司版权所有 © 1997-2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'

  import CartList from './CartList/CartList.vue'

  import {mapState}from 'vuex'





  export default {
    data () {
      return {
        itemIndex:0

      }
    },


    components:{
      CartList
    },
    mounted(){
      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })

    },


    computed:{
      ...mapState(['home_data']),

      //截取4个专题精选内容
      tagData(){
        if(this.home_data.tagList){
          const tagData =this.home_data.tagList.splice(0,4)
          return tagData
        }else {
          return
        }
      }
    },

    methods:{
      listIndex(index){
        this.itemIndex=index
      },

      _initScroll(){
        new BScroll('.hdScorllX', {
          click: true,
          scrollX: true, // 水平滑动
        })
        new BScroll('.ItemList', {
          click: true,
          scrollX: true, // 水平滑动
        })
        new BScroll('.topicScrollBox', {
          click: true,
          scrollX: true, // 水平滑动
        })
      }
    },
    watch:{
      home_data(value){
        this.$nextTick(()=>{
          this._initScroll()

          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            centeredSlides:true,
            autoplay: {
              delay: 3000,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })



        })

      }

    }

  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .homeContiner
    width 100%
    height 100%
    /*display flex*/
    position relative
    .header
      width 100%
      height 88px
      position fixed
      top 0
      left 0
      z-index 5
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

    .hdScorllX
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      display: flex;
      padding: 0 0 12px 0;
      margin-top 100px
      .hdScorllItem
        display: flex;
        justify-content: space-between;
        align-items: center;
        li
          width: 144px;
          height 60px
          text-align: center;
          line-height 60px
          flex-shrink:0;
          flex-wrap:nowrap;
          vertical-align middle
          display block
          padding 0 16px
          font-size: 28px
          &.active
            padding: 0 0 12px 0;
            border-bottom: 3px solid #b4282d;
            color: #b4282d;

    .swiper-container
      width 100%
      overflow hidden
      margin-top 0
      .swiper-wrapper
        height 400px
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          img
            display inline-block
            width 100%
            height 100%
      .swiper-pagination
         span.swiper-pagination-bullet-active
          background #02a774
    .g-grow
      width 100%
      height 72px
      background #fff
      display flex
      margin-bottom 20px
      .item
        display flex
        width 100%
        height 72px
        padding 0 20px
        justify-content space-between
        align-items center
        img
          display flex
          width 28px
          height 28px
          justify-content center
          align-items center
        .item_i
          width 100%
          height 100%
          span
            font-size 14px
            color: #333
            line-height 72px
            margin-left 3px


    .brand
      background-color #fff
      .brand-header
        width 100%
        height 110px
        display flex
        flex-flow: row nowrap;
        align-items center
        justify-content: center;
        font-size 35px
        > a
          display flex
          flex-flow row nowrap
          color #333
          justify-content: center;
          align-items center
          vertical-align: middle;
          .right-icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 30px;
            height: 30px;
            margin-left 10px

      .brand-goods
        width 100%
        height 100%
        margin-bottom 20px

        ul
          width 100%
          height 468px
          margin 0 16px
          overflow hidden
          margin-bottom 8px
          .goods
            float left
            width 356px
            height 236px
            background-color #f4f4f4
            display inline-block
            position relative
            margin 0 8px 8px 0
            overflow hidden
            a
              width 100%
              height 100%
              .content-goods
                width 355px
                height 135px
                padding 20px 0 0 20px
                h4
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  color: #333;
                  font-size 28px
                  line-height: .45333rem;
                  margin-bottom 10px
                .price1
                  color: #333;
                  font-size: .37333rem;
                  line-height: .45333rem;
                .price2
                  color: #333;
                  font-size: .32rem;
                  line-height: .45333rem;
              .shangxin-icon
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png)
                height: 32px
                width: 64px
                display: inline-block;
                vertical-align: middle;
                margin-top 10px
                background-repeat: no-repeat;
                background-size: 100% 100%;
                z-index 1
              img
                width 100%
                height 100%
                position absolute
                top 0
                left 0

    .move
      width 100%
      height 260px
      margin-bottom 32px
      /*background-color #fff !important*/
      display flex
      justify-content center
      align-items center
      &.new
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
        background-size 750px 260px
        a
          text-align center
          color #fff
          .title
            width 144px
            height 41px
            font-size 36px
            color: #8BA0B6;
        .all
          display flex
          justify-content center
          align-items center
          width 240px
          height 56px
          background #d8e5f1
          margin-top 32px
          span
            font-size 28px
            color: #8BA0B6;
          .arrow-right
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
            width 10px
            height 22px
            background-repeat no-repeat
            margin-left 10px
    .ItemList
      height: 460px
      background-color: #fff;
      overflow hidden
      display flex
      .ItemList_m
        display flex
        justify-content center
        align-items center
        flex-flow: row nowrap;
        padding 0
        li
          width 278px
          height 100%
          margin-left: 30px;
          float: left;
          position: relative
          overflow: hidden
          margin-right 0
          a
          .img-warp
            width 280px
            height 280px
            img
              width 100%
              height 100%
              background-color: #f4f4f4;


          .item-name
            width 92px
            height 30px
            background-color #f48f18
            text-align center
            margin 14px 0 10px 16px
            span
              width 100%
              height 100%
              color #fff


          .item-desc
            width 371px
            height 31px

            span
              width 100%
              height 100%
              color #333
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              padding 0 10px
              margin 10px 0
          .item-desc1
            width 371px
            height 31px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            span
              width 100%
              height 100%
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              padding 0 10px
              margin-bottom 14px
          .item-price
            width 280px
            height 27px
            span
              color: #b4282d;
              font-family: PingFangSC-Regular;

        .item-more
          width 278px
          height 280px
          display: block;
          border: 5px solid #F4F4F4;
          margin: 0 30px
          line-height: 280px
          text-align: center;
          margin-bottom 146px
          a
            width 100%
            height 100%
            span
              width 100%
              height 100%
              font-size: 30 px
              color: #666




    .countDown
      width 100%
      box-sizing border-box
      height 320px
      padding 30px 40px 30px 56px
      margin-bottom 20px
      background #ffffff
      overflow hidden
      a
        display block
        width 100%
        height 100%
        clearFix()
      .itemLeft
        float left
        padding-top 40px
        .title
          font-size 36px
          line-height 36px
          margin-bottom 24px
          letter-spacing 12px
          color #333333
        .countNum
          display inline
          font-size 0
          .time
            display inline-block
            font-size 32px
            text-align center
            width 62px
            height 56px
            line-height 56px
            border-radius 4px
            color #ffffff
            background #444444
          .colon
            display inline-block
            color #333333
            font-size 30px
            font-weight 700
            width 20px
            text-align center
        .nextTitle
          margin-top 40px
          color #333333
          font-size 24px
          height 24px
          line-height 24px
      .itemRight
        width: 320px
        height 320px
        position relative
        float right
        img
          width 100%
          height 100%
        .price
          width 96px
          height 96px
          position absolute
          background-color rgba(244,143,24,.95)
          border-radius 50%
          bottom 36px
          right 20px
          color #ffffff
          text-align center
          display flex
          flex-direction column
          justify-content center
          span
            font-size 24px

    .weal
      width 100%
      height 300px
      margin-bottom 20px
      overflow hidden
      a
        width 100%
        height 100%
        display block
        background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    .goodsSale
      width 100%
      background #ffffff
      .g_header
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 110px
        a
          color #333333
          span
            font-size 32px

          i
            display inline-block
            width 30px
            height 30px
            margin-left 10px
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;



      .topic-items
        width 100%
        height 453px
        box-sizing border-box
        padding:0 30px 36px 30px
        overflow: hidden
        .topicScrollBox
          width 100%
          height 100%
          display flex
          >ul
            display flex
            flex 1
            flex-shrink: 0
            >li
              display flex
              flex-flow: row nowrap
              flex-direction column
              margin-right: 21px
              >a
                display: block;
                width: 575px
                margin-bottom: 16px
                border-radius: 8px
                overflow: hidden
                >img
                  display block
                  width 100%
                  height 100%
              >.item-price
                height: 41px
                margin-bottom: 3px
                zoom: 1;
                >h4
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 410px
                  height 41px
                  float: left;
                  font-size: 16px
                >span
                  float: right;
                  font-size: 16px
                  color: #b4282d;
              >.item-info
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 575px
                height 36px
                font-size: 16px;
                color: #7F7F7F;



    .copyright
      border-top 1px solid rgba(0,0,0,.15);
      background-color #414141
      margin-bottom 98px
      .content
        text-align center
        padding 54px 20px 28px 20px
        .bd
          a
            display inline-block
            width 170px
            height 60px
            border: 1px solid #999;
            color #ffffff
            font-size 24px
            line-height 62px
            &.goApp
              margin-right 50px
        .desc
          width 100%
          height 64px
          margin-top: 36px
          color #999999
          line-height 32px
          span
            font-size 24px
</style>