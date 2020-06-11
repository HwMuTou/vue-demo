<template>
  <div class="m-editor">
    <MonacoEditor :value="value"/>
  </div>
</template>

<script>
  import MonacoEditor from '@/components/Editor/MonacoEditor'
  import CodeDemo from '@/views/monaco/CodeDemo'

  export default {
    name: 'Editor',
    data: function () {
      return {
        value: CodeDemo.code
      }
    },
    components: {
      MonacoEditor
    }
  }
</script>

<style scoped>

  .m-editor {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }
</style>
