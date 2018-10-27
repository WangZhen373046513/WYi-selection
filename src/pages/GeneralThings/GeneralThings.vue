<template>
  <section class="eneralThings">
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
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(item, index) in category_data.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="ItemList">
      <ul class="item_list">
        <li v-for="(item,index) in category_data.column" :key="index">
          <a>
            <div class="img-warp">
              <img :src="item.picUrl">
            </div>
            <div class="item-name">
              <span>{{item.title}}</span>
            </div>
          </a>
        </li >
      </ul>
    </div>

    <div class="recommend" v-if="category_data.recommend">
      <div class="title">{{category_data.recommend.name}}</div>
      <div class="Major">
        <div class="itemMajor">
          <a href="javascript:;">
            <img :src="category_data.recommend.Item[0].picUrl">
            <span class="title_name">严选推荐</span>
            <div class="info">
              <div class="line1">
                <div class="Linetitle">{{category_data.recommend.Item[0].title}}</div>
                <div class="price">{{category_data.recommend.Item[0].priceInfo}}元起</div>
              </div>
              <div class="line2">{{category_data.recommend.Item[0].subTitle}}</div>
            </div>
          </a>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <img class="photo_img" :src="category_data.recommend.Item[1].avatar" alt="">
              <span class="topicTitle">{{category_data.recommend.Item[1].nickname}}</span>
            </div>
            <div class="lin3">{{category_data.recommend.Item[1].title}}</div>
            <div class="line2">
              <div class="cont">{{category_data.recommend.Item[1].subTitle}}</div>
            </div>
          </div>
          <div class="topicPic">
            <img :src="category_data.recommend.Item[1].picUrl" alt="">
            <div class="topicTag">
              <div class="tag">{{category_data.recommend.Item[1].typeName}}</div>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <img class="photo_img" :src="category_data.recommend.Item[2].avatar" alt="">
              <span class="topicTitle">{{category_data.recommend.Item[2].nickname}}</span>
            </div>
            <div class="lin3">{{category_data.recommend.Item[2].title}}</div>
            <div class="line2">
              <div class="cont">{{category_data.recommend.Item[2].subTitle}}</div>
            </div>
          </div>
          <div class="topicPic">
            <img :src="category_data.recommend.Item[2].picUrl" alt="">
            <div class="topicTag">
              <div class="tag">{{category_data.recommend.Item[2].typeName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'

  import {mapState}from 'vuex'

  export default {
    data () {
      return {}
    },
    mounted(){
      this.$store.dispatch('getTopicData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })
    },
    computed:{
      ...mapState(['category_data'])
    },
    methods:{
      _initScroll(){
        new BScroll('.ItemList', {
          click: true,
          scrollX: true, // 水平滑动
        })
      }

    },

    watch:{
      category_data(value){
      this.$nextTick(()=>{
        this._initScroll()
        new Swiper('.swiper-container', {
          loop: true, // 循环模式
          centeredSlides:true,

        })

      })
    }


    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
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

  .swiper-container
    margin-top: 88px
    background #ffffff
    .swiper-wrapper
      padding 24px 0
      .swiper-slide
        display flex
        justify-content center
        align-items center
        img
          width: 690px
          position: relative;
        .content
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          display flex
          align-items center
          justify-content center
          flex-direction column
          width 466px
          height 198px
          background-color rgba(255, 255, 255, .9)
          .subTitle
            position relative
            font-size 20px
            color #7f7f7f
            line-height 30px
            padding  0 8px
            &:before,&:after
              content ''
              position absolute
              top 0
              bottom 0
              margin auto
              width 24px
              height 1px
              background-color #999999
            &:before
              left -24px
            &:after
              right -24px
          .title
            font-size 32px
            line-height 48px
            color #333333
            margin-top 16px
            font-weight 700
          .desc
            font-size 24px
            color #333333
            line-height 36px
            margin-top 4px
  .ItemList
    width 100%
    height: 286px
    overflow hidden
    display flex
    .item_list
      display flex
      justify-content center
      align-items center
      padding 32px 30px 28px 30px
      margin-bottom 20px
      background-color: #fff;
      li
        width 164px
        height 210px
        margin-right 24px
        float: left;
        position: relative
        overflow: hidden
        a
          height 100%
          width 100%
          .img-warp
            width 164px
            height 164px
            margin-bottom 22px
            img
              width 100%
              height 100%
          .item-name
            width 184px
            height 24px
            text-align center
            span
              width 100%
              height 100%





  .recommend
    padding 0 30px 40px
    margin-bottom 20px
    background #ffffff
    .title
      width 690px
      height 120px
      line-height 120px
      font-size 32px
      text-align center
    .Major
      margin-bottom 30px
      .itemMajor
        margin-bottom 30px
        position relative
        color #333333
        border 1px solid #d9d9d9
        border-radius 8px
        overflow hidden
        .title_name
          padding: 0 .21333rem;
          height: .48rem;
          line-height: .48rem;
          background-color: rgba(255,255,255,.9);
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          color: #333;
          position absolute
          top 15px
          left 15px
        img
          height 386px
          border-radius 8px 8px 0 0
        .info
          box-sizing border-box
          padding 24px 20px 67px
          border solid 1px #eeeeee
          color #333333
          .line1
            margin-bottom 30px
            display flex
            justify-content space-between
            align-items center
            line-height 1.2
            height 43px
            .Linetitle
              flex 1
              margin-right 170px
              font-size 36px
              ellipsis()
            .price
              line-height 1
              font-size 32px
              text-align center
              min-width 115px
          .line2
            font-size 28px
            color #7f7f7f
            line-height 1.2
            ellipsis()
    .items
      display flex
      background #ffffff
      color #333333
      border 1px solid #d9d9d9
      box-sizing border-box
      border-radius 4px
      margin-bottom 30px
      .topicInfo
        flex 1
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        position relative
        padding-left 20px
        padding-right 30px
        border solid 1px #eeeeee
        .line1
          margin-bottom 14px
          display flex
          align-items center
          padding-right 100px
          line-height 1.2
          box-sizing border-box
          .photo_img
            width 46px
            height 46px
            border-radius 100%
            padding 10px
          >.topicTitle
            height 38px
            ellipsis()
            font-size 14px
            margin-right 30px
        .line
          font-size 56px
          color #333333
        .line2
          .cont
            font-size 24px
            line-height 1.5
            margin 25px 0
            color #7f7f7f
            display -webkit-box
            display block
            -webkit-line-clamp: 2;
            ellipsis()
      .topicPic
        position relative
        width 280px
        height 272px
        overflow hidden
        img
          width 100%
        >.topicTag
          position absolute
          top 10px
          left 10px
          height 36px
          font-size 0
          >.tag
            display inline-block
            padding 0 16px
            height 34px
            font-size 24px
            line-height 34px
            border 1px solid #d9d9d9
            border-radius 20px
            color #333333
            background-color rgba(255,255,255,.9)
      &:last-child
        margin-bottom 0
</style>