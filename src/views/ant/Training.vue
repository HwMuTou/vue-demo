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
    <a-row :gutter="[32,8]">
      <a-col span="24">
        <AffixTraining/>
      </a-col>
    </a-row>
    <a-row :gutter="[32,8]">
      <a-col span="24">
        <PaginationTraining/>
      </a-col>
    </a-row>
    <a-row :gutter="[32,8]">
      <a-col span="24">
        <EmailAutoComplete/>
      </a-col>
    </a-row>
    <a-row :gutter="[32,8]">
      <a-col span="6">
        <TimelineTraining/>
      </a-col>
      <a-col span="6">
        <TreeTraining/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import StepTraining from '@/views/ant/module/StepTraining'
  import DropdownTraining from '@/views/ant/module/DropdownTraining'
  import AffixTraining from '@/views/ant/module/AffixTraining'
  import PaginationTraining from '@/views/ant/module/PaginationTraining'
  import EmailAutoComplete from '@/views/ant/module/EmailAutoComplete'
  import TimelineTraining from '@/views/ant/module/TimelineTraining'
  import TreeTraining from '@/views/ant/module/TreeTraining'

  export default {
    name: 'Train',
    components: {
      TreeTraining,
      StepTraining,
      DropdownTraining,
      AffixTraining,
      PaginationTraining,
      EmailAutoComplete,
      TimelineTraining
    }
  }
</script>

