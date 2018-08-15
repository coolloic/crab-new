<template lang="pug">
  #app
    //- .nav
      //- router-link(to="/") Home
      //- router-link(to="/about") About
    router-view
    Footer
</template>
<script>
import Footer from '@/components/Footer'
export default{
  components:{
    Footer
  }
}
</script>
<style lang="styl">
@import '/assets/stylus/colors.styl'
body
  background-color #f0f3ef
body,h1,h2,h3,h4,h5,p,label,a
  padding 0
  margin 0
  font-family Roboto, Helvetica, Arial, sans-serif
h1
  font-size 37px
  @media sm
    font-size 62px
section
  padding 15px 0
  max-width 100vw
  overflow hidden
  @media lg
    padding 50px 0
hr.bold
  border-top 2px solid #000
  margin 2rem 0
ul
  padding 0
  margin 0
.svg
  width 25px
  height 25px
  margin-right 3px
  transform translateY(4px)
  path
    fill primary-color
    @media md
      fill white
a,li,p
  font-size 22px
  transition .3s
a
  color currentColor
  text-decoration none
  display inline-block
  cursor pointer
  &:hover,&:focus,&:visited
    text-decoration none
    color white
  &.external
    color primary-color
    background-color white
    display inline-block;
    border 1px solid primary-color
    padding 0 5px
    border-radius 3px
    @media md
      &:hover
        background-color primary-color
        color white
  &.button
    color white
    border 1px solid white
    padding 20px 28px
    background-color rgba(255,255,255,0.2)
    border-radius 3px
    &.red
      color primary-color
      border-color primary-color
      @media md
        &:hover
          background-color primary-color
          color white
.nav
  position fixed
  left 0 
  top 0
  z-index 1
  color white
.tag
  background-color transparent
  color white
  border 1px solid white
  padding 3px 10px
  border-radius 20px
  margin-right 5px
  margin-bottom 5px
  &:hover
    text-decoration none
  @media md
    font-size 18px
    &:hover
      background-color primary-color
      color #fff
  &.primary-color
    color primary-color
    border-color primary-color
    @media md
      color white
      border-color white
.home 
  .slick-dots li button:before
    font-size 20px
  .slick-dots li.slick-active button:before 
    opacity 0.75
    color primary-color
  .prev
    color primary-color
    position absolute
    top 38%
    left -2em
    font-size 36px
    cursor pointer
  .next
    color #ee4122
    position absolute
    top 38%
    right -2em
    font-size 36px
    cursor pointer
.slick-dots
  bottom -30px
.slick-list
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
</style>
