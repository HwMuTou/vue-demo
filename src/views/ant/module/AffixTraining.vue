<template>
  <Affix :offset-bottom="bottom">
    <a-button icon="yuque"/>
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
