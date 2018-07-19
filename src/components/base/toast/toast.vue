<template>
  <div>
    <transition name="drop">
      <div class="toast" v-if="toast.isShow">
       {{toast.text}}
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      toast: {
        type: Object,
        default: {
          isShow: false,
          text: '提交成功'
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .toast
    position: fixed
    opacity: 1
    top: 40%
    left: 50%
    width: 160px
    padding: 4px
    z-index: 1008
    margin-top: -20px
    margin-left: -80px
    min-height: 34px
    line-height: 34px
    text-align: center
    background: rgba(59, 57, 74, 0.9)
    border-radius: 3px
    font-size: 16px
    color: #fff
  .drop-enter-active
    transition: all 1s ease-in-out
  .drop-leave-active
    transition: all 1s ease-in-out
  .drop-enter
    opacity: 0
  .drop-leave-active
    opacity: 0


</style>
