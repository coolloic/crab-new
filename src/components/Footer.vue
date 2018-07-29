<template lang="pug">
  .footer: .container: .row
    .col-sm-6.text-left: p {{copy}}
    .col-sm-6.text-right: ul.list-inline
      li(v-for="link,index in links" :id="index") 
        a(:href="link.href") {{link.text}}

</template>
<script>
const links = [
  {text:'免责条款',href:'#'},
  {text:'隐私策略',href:'#'},
  {text:'联系我们',href:'#'}
]
export default {
  data (){
    return{
      copy: '©2018 盘海部落',
      links
    }
  }
}
</script>
<style lang="styl" scoped>
@import '../assets/stylus/colors.styl'
.footer
  color #fff
  background-color black
  padding 15px 0
  a,p
    font-size 14px
  p
    line-height 31px
  a
    position relative
    display inline-block
    &:after
      content ''
      position absolute
      left 50%
      bottom 0
      height 1px
      width 0
      background-color white
      transform translateX(-50%)
      transition .3s;
    &:hover
      color white
    &:hover:after
      width 100%
  a
    text-align left
    @media md
      text-align right
      display: inline-block
      li + li
        margin-left: 8px
  .text-right
    @media xs
      text-align left
  .col-md-6.pull-left + .col-md-6
    float left
    margin-top 5px
    @media sm
      float right
      margin-top 0px
</style>