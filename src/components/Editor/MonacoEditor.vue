<template>
  <div class="monaco-c-editor">
  </div>
</template>

<script>
  import * as monaco from 'monaco-editor'

  export default {
    name: 'MonacoEditor',
    props: {
      value: { type: String, default: '' }
    },
    mounted () {
      const value = this.value
      monaco.editor.create(this.$el, {
        value: value,
        language: 'mysql',
        theme: 'vs-dark'
      })
    }
  }
</script>

<style scoped>
  .monaco-c-editor {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
