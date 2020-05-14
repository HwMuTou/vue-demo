<template>
  <div>
    <H2>{{ stopwatch.time.hour }}:{{ stopwatch.time.minute }}:{{ stopwatch.time.second }}</H2>

    <Button @click="Start">开始</Button>
    <Button @click="Stop">停止</Button>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Stopwatch',
    computed: {
      ...mapGetters(['stopwatch'])
    },
    methods: {
      ...mapActions(['Start', 'Stop'])
    }
  }
</script>
