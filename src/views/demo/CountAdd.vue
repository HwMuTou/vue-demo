<template>
  <div
    :style="{overflow: 'hidden',
             position: 'relative',
             height: '70vh'
    }">

    <h2>
      getCount: {{ count }}
    </h2>
    <Button type="primary" @click="Increment">Add</Button>
    <br>
    <Button type="primary" @click="show">Show Model</Button>

    <a-drawer
      :visible="visible"
      placement="bottom"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <H1>hello, i am drawer Modal</H1>
    </a-drawer>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { Button } from 'ant-design-vue'

  export default {
    name: 'CountAdd',
    data: function () {
      return {
        visible: false
      }
    },
    computed: {
      ...mapGetters(['count'])
    },
    methods: {
      ...mapActions(['Increment']),
      onClose () {
        this.visible = false
      },
      show () {
        this.visible = true
      }
    },
    components: {
      Button
    }
  }
</script>

<style scoped>

</style>
