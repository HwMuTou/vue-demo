<template>
  <a-row>
    <h2>
      getCount: {{ count }}
    </h2>
    <Button type="primary" @click="Increment">Add</Button>
  </a-row>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { Button } from 'ant-design-vue'

  export default {
    name: 'CountAdd',
    computed: {
      ...mapGetters(['count'])
    },
    methods: {
      ...mapActions(['Increment'])
    },
    components: {
      Button
    }
  }
</script>

<style scoped>

</style>
