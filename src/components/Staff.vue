<template lang="pug">
  .staff
    .staff-figure: .staff-figure__img(:style="{backgroundImage: 'url('+staff.img+')'}")
    .staff-caption
      .staff-avatar: .staff-avatar__img(:style="{backgroundImage: 'url('+staff.avatar+')'}")
      h3 {{staff.name}}
      p {{staff.title}}
</template>
<script>
export default{
  props:['staff']
}
</script>
<style lang="styl">
@import '../assets/stylus/colors.styl'
.staff
  border-radius 5px
  background-color white
  margin-bottom 15px
  overflow hidden
  box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
  &-avatar
    position absolute
    left 50%
    top 0
    width 120px
    height 120px
    background-color 50%
    margin-left -60px
    margin-top -60px
    background-color #fff
    border-radius 50%
    border 5px solid #fff
    overflow hidden
    &__img
      position absolute
      left 0
      top 0
      background-size cover
      background-position center
      width 100%
      height 100%
  &-caption
    position relative
    padding 90px 30px 30px
    h3
      color primary-color
    h3,p
      text-align center
    h3 + p
      margin-top 15px
  &-figure
    position relative
    padding-bottom 56.25%
    height 0
    width 100%
    border-radius 5px 5px 0 0
    &__img
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-size cover
      background-position center
</style>