<template lang="pug">
  .procedures
    h3 {{title}}
    hr.bold
    ol
      li(v-for="(procedure,index) in procedures" :key="index") {{procedure}}
</template>

<script>
export default {
  props: ['procedures'],
  data(){
    return{
      title: '烹饪步骤'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="styl">
@import '../assets/stylus/colors.styl'
.procedures
  h3
    font-weight bold
    line-height 31px
  ol
    padding-left 20px
    margin 0
  li
    padding 12px 0
</style>
