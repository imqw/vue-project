<template>
  <div id="pageQuiNav">
    <qui-nav v-on:navClickEvent="demo1"></qui-nav>
  </div>
</template>

<script>
import quiNav from '../components/quiNav.vue'

export default {
  name: 'pageQuiNav',
  components: {
    'qui-nav': quiNav
  },
  methods: {
    demo1 (item, index) {
      console.log(item.text + index)
    }
  }
}
</script>

<style scoped>

</style>
