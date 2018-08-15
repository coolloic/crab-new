<template lang="pug">
.step(:class="{'col-md-6':isContainerWidth}"): .step__wrapper
  .step__header
    .step__header__number
      span {{step.number}}
    .step__title.hidden-xs.hidden-sm
      span.title {{step.desc}}
  .step__body
    p.hidden-lg.hidden-md(v-if="step.desc") {{step.desc}}
    .step__figure
      .step__figure__img(:style="{backgroundImage: 'url(' + step.img + ')'}")
</template>
<script>
export default{
  props:['step','isContainerWidth']
}
</script>
<style lang="styl">
@import '../assets/stylus/colors.styl'
.step
  border 1px solid rgba(191, 191, 191, 0.4)
  border-top 0
  &__wrapper
    background-color #46b8e9
  &:nth-child(2n) &__wrapper
    background-color #3ee9d1
  &:nth-child(3n) &__wrapper
    background-color #ce43eb
  &:nth-child(4n) &__wrapper
    background-color #4d92eb
  &:nth-child(5n) &__wrapper
    background-color #56b8e9
  &:nth-child(6n) &__wrapper
    background-color #D279f4
  &:nth-child(7n) &__wrapper
    background-color #ED5565
  &:nth-child(8n) &__wrapper
    background-color #FC6E51
  &:nth-child(9n) &__wrapper
    background-color #FFCE54
  &:nth-child(10n) &__wrapper
    background-color #A0D468
  &:nth-child(11n) &__wrapper
    background-color #48CFAD
  &:nth-child(12n) &__wrapper
    background-color #4FC1E9
  &__header
    position relative
    display flex
    align-items center
    color white
    font-weight 400
    &__number
      display inline
      float left
      margin 15px
      padding 10px
      font-size 35px
      line-height 35px
      font-weight 600
      background rgba(0, 0, 0, 0.17)
  &__title
    .title
      display block
      font-size 24px
  &__body
    background-color #fff
    padding 15px
    p
      margin-bottom 15px
    img
      max-width 100%
  &__figure
    position relative
    padding-top 75%
    height 0 
    width 100%
    @media md
      padding-top 56.25%
    @media lg
      padding-top 56.25%
    &__img
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-size cover
</style>