<template>
    <div class="loader-wrapper"  v-show="show">
      <div class="loader">
        <img class="load-img" src="./loading.gif"/>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'v-loading',
        props: {
            show: {
                type: Boolean
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loader-wrapper
    position: fixed
    width: 100%
    height: 100%
    max-width: 640px
    z-index: 1008
    .loader
      position: absolute
      top: calc(45% - 2.5em)
      left: calc(50% - 2.5em)
      width: 5em
      height: 5em
      z-index 1009
      .load-img
        width: 100%
        height: 100%
        border-radius: 25px
</style>
