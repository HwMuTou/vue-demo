<template>
  <Pagination
    v-model="current"
    :total="500"
    show-size-changer
    show-quick-jumper
    :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
  />
</template>

<script>
  import { Pagination } from 'ant-design-vue'

  export default {
    name: 'PaginationTraining',
    components: {
      Pagination
    },
    data () {
      return {
        current: 2
      }
    }
  }
</script>

<style scoped>

</style>
