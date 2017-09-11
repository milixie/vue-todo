<template>
  <transition name="fade">
    <div class="mask">
      <div class="wrap">
        <p class="content">{{ msg }}</p>
        <div class="sure">
          <div class="cancel flex1 line-right" @click="cancel">取消</div>
          <div class="ok flex1" @click="ok">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert',
  props: ['msg'],
  methods: {
    ok () {
      this.$emit('status', true)
    },
    cancel () {
      this.$emit('status', false)
    }
  }
}
</script>

<style scoped>
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    margin-top: -50px;
    margin-left: -200px;
    min-height: 100px;
    background: #fff;
    border-radius: 6px;
    text-align: center;
  }
  .content {
    padding-top: 10px;
  }
  .sure {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    cursor: pointer;
  }
  .sure .line-right {
    border-right: 1px solid #ddd;
  }
  .flex1 {
    flex: 1;
  }
  .cancel {
    padding: 10px 0;
    color: dimgray;
  }
  .ok {
    padding: 10px 0;
    color: cornflowerblue;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>