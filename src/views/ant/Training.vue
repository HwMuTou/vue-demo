<template>
  <a-row>
    <a-col :span="24">
      <StepTraining/>
    </a-col>
  </a-row>
</template>

<script>
  import StepTraining from '@/views/ant/module/StepTraining'
  export default {
    name: 'Train',
    components: { StepTraining }
  }
</script>

<style scoped>

</style>
