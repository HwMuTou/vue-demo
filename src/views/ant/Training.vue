<template>
  <div>
    <a-row :gutter="[32,8]">
      <a-col span="24">
        <StepTraining/>
      </a-col>
    </a-row>
    <a-row :gutter="[32,8]">
      <a-col span="24">
        <DropdownTraining/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import StepTraining from '@/views/ant/module/StepTraining'
  import DropdownTraining from '@/views/ant/module/DropdownTraining'

  export default {
    name: 'Train',
    components: { StepTraining, DropdownTraining }
  }
</script>

<style scoped>

</style>
