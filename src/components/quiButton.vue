<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot><!--重点在这里-->
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  name: 'quiButton',
  props: {
    msg: {
      default: '下载'
    }
  },
  methods: {
    btnClickEvent: function () {
      /**
       * 子组件调用父类方法 $emit
       */
      this.$emit('btnClickEvent')
    }
  }
}
</script>

<style scoped>
  @import "./css/reset.import.css";
  @import "./css/qui-btn.import.css";

</style>
