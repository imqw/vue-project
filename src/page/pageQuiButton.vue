<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn v-on:btnClickEvent="doSth"  msg="我可以点击"></qui-btn>
  </div>
</template>

<script>
import quiBtn from '../components/quiButton.vue'
export default {
  name: 'pageQuiButton',
  components: {
    'qui-btn': quiBtn
  },
  methods: {
    doSth: function () {
      alert('你点击了组件的click:btnClickEvent')
    }
  }
}
</script>

<style scoped>

</style>
