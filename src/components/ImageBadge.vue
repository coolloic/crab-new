<template lang="pug">
  .recipe(:class="{'img-right': isImageRight,'img-left':isImageLeft}" v-if="isImageRight")
    .recipe-caption
      h2 {{itb.title}}
      .tag-listing.light
        span(v-for="tag,index in itb.tags" :key="index") {{tag.text}}
      p {{itb.desc}}
      a.button.red {{more}}
    .recipe-figure
      .recipe-figure__img(:style="{backgroundImage: 'url('+itb.img+')'}")
  .recipe(:class="{'img-right': isImageRight,'img-left':isImageLeft}" v-else="isImageRight || isImageTop")
    .recipe-figure
      .recipe-figure__img(:style="{backgroundImage: 'url(' + itb.img + ')'}")
    .recipe-caption
      h2 {{itb.title}}
      .tag-listing.light
        span(v-for="tag,index in itb.tags" :key="index") {{tag.text}}
      p {{itb.desc}}
      a.button.red {{more}}
</template>
<script>
export default{
  props:['itb','isImageRight','isImageLeft','isImageTop'],
  data(){
    return {
      more: '更多食谱'
    }
  }
}
</script>
<style lang="styl" scoped>
@import '../assets/stylus/colors.styl'
.recipe
  &-figure
    position relative
    height 0
    padding-bottom 56.25%
    width 100%
    overflow hidden
    box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
    border-radius 5px
    @media md
      padding-bottom 40%
    cursor pointer
    &__img
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-size cover
      background-position center
      overflow hidden
      box-shadow 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)
      transition .15s
      &after
        content ''
        background linear-gradient(to right ,rgba(0,0,0,.3),rgba(255,255,255,.1))
        width 100%
        height 100%
        position absolute
        left 0
        top 0
    @media lg
      &:hover
        .recipe-figure__img
          transition .2s
          transform scale(1.05)
        .play-btnbefore
          background-color #fff
        .play-btnafter
          border-left 20px solid primary-color
  &-caption
    position relative
    background-color #fff
    box-shadow 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)
    margin 0 4%
    padding 30px 15px
    @media md
      padding 30px
    margin-top -30px
    z-index 1
    border-radius 5px
    h2
      color primary-red
    h4
      color sec-color
    p
      color #000
      line-height 1.5
    p + .button
      margin-top 20px
      text-align right
    h2 + .tag-listing
      margin-top 10px
    .tag-listing + p
      margin-top 15px
  &.img-right
    display table
    width 100%
    .recipe-figure
      display table-caption
    .recipe-caption
      display block
      margin -30px 4% 0
  @media md
    &.img-left,&.img-right
      display table
      width 100%
      .recipe-figure
        display table-cell
        vertical-align center
        width 50%
        border-radius 5px 0 0 5px
      .recipe-caption
        display table-cell
        vertical-align middle
        margin-top 0
        width 50%
        border-radius 0 5px 5px 0
    &.img-right
      .recipe-figure
        border-radius 0 5px 5px 0
      .recipe-caption
        border-radius 5px 0 0 5px
  &.blog
    i
      margin-right 3px
    ul a,ul p
      font-size 16px
      color primary-color
    .recipe-caption
      text-align center
      h2
        color #000
        text-align center
      h2 + ul
        margin-top 20px
    .recipe-content p
      font-size 18px
      font-weight normal
    .recipe-caption + .recipe-content
      margin-top 30px
      p + p
        margin-top 15px

.tag-listing
  color @primary-var
  font-size 18px
  span
    margin-right 5px
    margin-bottom 5px
    border-radius 20px
    border 1px solid primary-var
    padding 3px 8px
    display inline-block
    cursor pointer
    color primary-var
    @media lg
      &:hover
        background-color primary-var
        color #fff
  &.light
    color primary-color
    span
      border 1px solid primary-color
      color primary-color
      @media lg
        &:hover
          background-color primary-color
          color #fff
    &.banner
      span
        @media md
          border 1px solid #fff
          color #fff
</style>
