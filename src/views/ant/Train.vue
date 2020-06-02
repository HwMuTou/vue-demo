<template>
  <a-row>
    <a-col :span="24">
      <StepTrain/>
    </a-col>
  </a-row>
</template>

<script>
  import StepTrain from '@/views/ant/module/StepTrain'
  export default {
    name: 'Train',
    components: { StepTrain }
  }
</script>

<style scoped>

</style>
