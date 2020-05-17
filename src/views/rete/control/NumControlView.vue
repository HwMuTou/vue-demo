<template>
  <label>
    <input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop=""/>
  </label>
</template>

<script>
  import { NodeEditor } from 'rete'

  export default {
    props: {
      readonly: { type: Boolean, default: false },
      emitter: { type: NodeEditor, required: true },
      ikey: { type: String, required: true },
      getData: { type: Function, required: true },
      putData: { type: Function, required: true }
    },
    name: 'NumControlView',
    data () {
      return {
        value: 0
      }
    },
    methods: {
      change (event) {
        this.value = event.target.value
        this.update()
      },
      update () {
        if (this.ikey) {
          this.putData(this.ikey, this.value)
        }
        this.emitter.trigger('process')
      }
    },
    mounted () {
      this.value = this.getData(this.ikey)
    }
  }
</script>

<style scoped>

</style>
