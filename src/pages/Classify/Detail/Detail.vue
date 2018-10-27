<template>
  <section>
    <div class="listMenu">
      <div class="inner">
        <ul class="inner_ul">
          <li class="item" :class="{active:index===detailIndex}" v-for="(nav,index) in nav_data" :key="index" @click="detail(index)">
            <a href="javascript:;">{{nav.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <section class="list_Right" v-if="nav_data.length">
      <div class="header_img" v-for="(nav,index) in nav_data" :key="index" v-if="index===detailIndex">
        <img :src="nav.wapBannerUrl" alt="">
        <ul class="list_Right_list">
          <li v-for="(sub,index) in nav.subCateList" :key="index" >
            <img :src="sub.wapBannerUrl" alt="">
            <p>{{sub.name}}</p>
          </li>
        </ul>
      </div>

    </section>
  </section>

</template>

<script>

  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  import index from '../../../router/index'

  export default {
    data () {
      return {
        detailIndex:0
      }
    },

    computed: {
      ...mapState(['nav_data'])
    },
    methods:{
      detail(index){
        this.detailIndex=index
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'

  .listMenu
    /*margin-top 88px*/
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
      background-color rgba(0, 0, 0, .15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      padding-top 20px
      overflow hidden
      .inner_ul
        height 100%
        padding-bottom 138px
        > .item
          width 100%
          height 76px
          line-height 76px
          text-align center
          color $on
          border none
            > a
              font-size 36px
              line-height 76px
              font-weight 700
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
            > a
              font-size 36px
              line-height 76px
              font-weight 700
              color $on
          + .item
            margin-top 20px
          > a
            display block
            color #333333
            font-size 28px
            line-height 56px
            ellipsis()


  .list_Right
    position absolute
    top 88px
    right 60px
    width 528px
    height 1176px

    box-sizing border-box
    padding 30px 30px 21px 30px

    .header_img
      width 528px
      height 192px
      background-image: url(http://yanxuan.nosdn.127.net/0ec3c89f9ecd8df2d2469a587078be7a.jpg?imageView&thumbnail=0x196&quality=75);
      background-size: cover;
      border-radius: 4px;
      margin-bottom 32px
      img
        width 100%
        height 100%
      .list_Right_list
        width 588px
        height 824px
        box-sizing border-box
        li
          width 144px
          height 216px
          float left
          padding-right 34px
          img
            width 144px
            height 144px
          p
            width 144px
            height 72px
            color #333333
            text-align center



</style>