<template>
  <div class="header-title">
    <h2>这是一个任务列表</h2>
    <p>您共有 {{ lists.length }} 个任务</p>
    <p>您已经完成了 {{ done }} 个</p>
    <p>您还需要完成 {{ undo }} 个</p>
  </div>
</template>

<script>
  export default {
    name: 'header-title',
    props: ['lists'],
    data () {
      return {

      }
    },
    computed: {
      done () {
        return this.lists.filter(lis => lis.is_finished === true).length
      },
      undo () {
        return this.lists.filter(lis => lis.is_finished === false).length
      }
    }
  }
</script>

<style scoped>
  .header-title {
  }
</style>