<template>
  <Timeline>
    <Item v-for="item in items" :key="item.title" color="red">
      <a-icon slot="dot" :type="item.icon" />
      This is timeline. {{ item.title }}
    </Item>
  </Timeline>
</template>

<script>
  import { Timeline } from 'ant-design-vue'

  const { Item } = Timeline

  export default {
    name: 'TimelineTraining',
    components: { Timeline, Item },
    data () {
      return {
        items: [
          { title: 1, icon: 'plus-circle' },
          { title: 2, icon: 'pause-circle' },
          { title: 3, icon: 'clock-circle' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
