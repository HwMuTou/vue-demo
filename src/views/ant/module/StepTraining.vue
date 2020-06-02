<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="step in steps" :title="step.title" :key="step.title" :description="step.description">
        <a-icon slot="icon" :type="step.icon" />
      </a-step>
    </a-steps>
    <a-button-group>
      <a-button @click="goNextStep" type="primary"><a-icon type="left"/>下一步</a-button>
      <a-button @click="goPreviousStep" type="primary">上一步<a-icon type="right"/></a-button>
    </a-button-group>
  </div>
</template>

<script>
  export default {
    name: 'StepTraining',
    data () {
      return {
        current: 0,
        steps: [
          { title: 'dashboard', icon: 'dashboard', description: '<a-icon type="dashboard" />' },
          { title: 'database', icon: 'database', description: '<a-icon type="database" />' },
          { title: 'dislike', icon: 'dislike', description: '<a-icon type="dislike" />' }
        ]
      }
    },
    methods: {
      goNextStep () {
        this.current -= this.current > 0 ? 1 : 0
        this.currentStepNotification()
      },
      goPreviousStep () {
        this.current += this.current > 1 ? 0 : 1
        this.currentStepNotification()
      },
      currentStepNotification () {
        const step = this.steps[this.current]
        this.$notification.info({ message: step.title, description: step.description })
      }
    }
  }
</script>

<style scoped>

</style>
