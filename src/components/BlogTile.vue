<template lang="pug">
  .blog-tile
    .blog-tile__figure
      .blog-tile__figure__img(:style="{backgroundImage: 'url('+blog.img+')'}")
    .blog-tile__body
      h3: a(:href="blog.href") {{blog.title}}
      hr
      p(v-html="blog.desc")
      a.blog-tile__link(href="blog.href"): i.fa.fa-angle-right
    .blog-tile__footer
      ul.list-inline
        li.blog-tile__date: a 
          i.fa.fa-calendar
          p {{blog.date}}
        li.blog-tile__author: a(:href="blog.author.href")
          i.fa.fa-user 
          p {{blog.author.name}}
        li.blog-tile__comment: a(:href="blog.comment.href")
          i.fa.fa-comments 
          p {{blog.comment.number}}
</template>
<script>
export default{
  props:['blog']
}
</script>
<style lang="styl" scoped>
@import '../assets/stylus/colors.styl'
.blog-tile
  box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
  border 0
  word-wrap break-word
  background-color #fff
  background-clip border-box
  border 1px solid rgba(0,0,0,.125)
  border-radius 5px
  overflow hidden
  margin-top 30px
  .list-inline
    margin-left initial
  &__figure
    position relative
    left 0
    top 0
    padding-bottom 56.25%
    height 0
    width 100%
    overflow hidden
    &__img
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-size cover
      background-position center
      @media lg
        &:hover
          transition .3s
          transform scale(1.05)
  &__body
    position relative
    flex 1 1 auto
    padding 30px 15px
    @media md
      padding 30px
    h3 + p
      margin-top 15px
    p
      font-size 16px
  &__link
    box-shadow 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)
    position absolute
    right 10%
    top 0
    width 47px
    height 47px
    border-radius 50%
    background-color primary-color
    color #fff
    display inline-block
    margin-top -24px
    transition .3s
    i
      font-size 30px
      position absolute
      left 50%
      top 50%
      transform translateX(-50%) translateY(-50%)
      transform-orgin center
    @media lg
      &:hover
        box-shadow 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)
  &__footer
    /*text-align center*/
    padding 15px
    @media md
      padding 15px 30px
    background-color primary-color
    color #fff
    li
      margin-bottom 5px
    li + li
      margin-left 5px
    i
      margin-right 3px
      line-height 14px
    a,p
      display inline-block
      position relative
      font-size 14px
    li,a
      font-size 14px
    a
      position relative
      display inline-block
      &:after
        content ''
        position absolute
        bottom 0
        width 0
        height 1px
        background-color white
        left 50%
        transform translateX(-50%)
        transition .3s
      &:hover:after
        width 100%

.blog-tile__comment a
  position relative
  .counter
    -webkit-box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
    box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
    position absolute
    z-index 2
    right 0
    top 0
    margin-top 0
    margin-left -23px
    -webkit-border-radius 10em
    border-radius 10em
    padding 1px 7px
    background-color #ee4122
    font-size 11px
    color #fff
    transform translateX(100%)
</style>
