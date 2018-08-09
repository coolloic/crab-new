<template lang="pug">
  .steps
    Step(v-for="step,index in steps" :step="step" :key="index" :isContainerWidth="false")
</template>
<script>
import Step from '@/components/Step'
export default{
  props:['steps'],
  components: {
    Step
  }
}
</script>