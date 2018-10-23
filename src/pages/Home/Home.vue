<template>
  <div class="g-bd">
    <div  class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"></div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg">
      <span  class="downloadBtn"></span>
      <a href="javascript:;" class="backWapBtn" @click="$router.push('/msite')"></a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .g-bd
    width 100%
    height 100%
    background #e3e3e2
    .g-row
      width 100%
      position relative
      img
        width 100%
        margin 0 auto
        display block
      .downloadBtn
        width 420px;
        height 100px;
        position absolute
        top 88px
        left 150px
      .backWapBtn
        width 320px;
        height 32px
        position absolute
        top 230px
        left 200px


</style>