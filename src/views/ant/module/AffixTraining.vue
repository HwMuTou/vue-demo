<template>
  <Affix :offset-bottom="bottom">
    <a-button icon="yuque"/> Bottom 50 基于 js 实现的粘性布局
  </Affix>
</template>

<script>
  import { Affix } from 'ant-design-vue'

  export default {
    name: 'AffixTraining',
    components: { Affix },
    data () {
      return {
        bottom: 50
      }
    }
  }
</script>

<style scoped>

</style>
