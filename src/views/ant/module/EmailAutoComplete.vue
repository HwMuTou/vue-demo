<template>
  <AutoComplete
    :dataSource="dataSource"
    @search="onSearch"
  />
</template>

<script>
  import { AutoComplete } from 'ant-design-vue'

  export default {
    name: 'EmailAutoComplete',
    components: { AutoComplete },
    props: {
      hosts: {
        type: Array[String],
        default () {
          return ['@163.com', '@qq.com', '@126.com', '@mail.com']
        }
      }
    },
    data () {
      return {
        dataSource: []
      }
    },
    methods: {
      onSearch (searchText) {
        this.dataSource = this.hosts.map(it => searchText + it)
      }
    }
  }
</script>

<style scoped>

</style>
