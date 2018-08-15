<template lang="pug">
  .banner
    .banner__figure
      .banner__figure__img(:style="{ backgroundImage: 'url(' + banner.img + ')' }")
    .banner__caption: .container
      a.tag.primary-color {{banner.tag}}
      h1 {{banner.title}}
      ul.list-inline
        li 
          svg.svg.replaced-svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve")
            path.clock(d="M28.1,27.2L22,21.3V10.4c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9v11.5c0.1,0.6,0.4,1.1,0.8,1.5l6.5,6.5  c0.7,0.7,1.9,0.7,2.6,0c0,0,0,0,0,0C28.8,29.1,28.8,27.9,28.1,27.2z M21,41C10,41,1,32,1,21C1,10,10,1,21,1s20,9,20,20l0,0  C41,32,32,41,21,41z M21,4.8C12.1,4.8,4.8,12.1,4.8,21c0,8.9,7.2,16.2,16.2,16.2S37.2,29.9,37.2,21C37.2,12.1,29.9,4.8,21,4.8z") 
          label {{banner.time}}
        li 
          svg.svg.replaced-svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve")
            path.cuttery(d="M19.6,1c-1.1,0-1.9,0.9-1.9,1.9v4.2c0,2.8-1,5.1-2.9,6.1V2.9C14.8,1.9,14,1,12.9,1S11,1.9,11,2.9v10.3  c-1.8-1-2.9-3.4-2.9-6.1V2.9C8.1,1.9,7.3,1,6.2,1S4.3,1.9,4.3,2.9v4.2c0,5,2.7,9.1,6.7,10.2V39c0,1.1,0.9,1.9,1.9,1.9  s1.9-0.9,1.9-1.9V17.3c4-1,6.7-5.2,6.7-10.2V2.9C21.5,1.9,20.6,1,19.6,1z M28.3,1c-1.1,0-2,0.8-2.1,1.9v36.2c0,1.1,0.9,1.9,1.9,1.9  s1.9-0.9,1.9-1.9V25.2c4.4-0.6,7.7-4.4,7.6-8.9v-6.2C37.6,5,33.4,1,28.3,1z M33.9,16.3c0,2-1.9,3.8-3.8,4.5V5.6  c1.9,0.7,3.8,2.5,3.8,4.5V16.3L33.9,16.3z")
          label {{banner.serves}}
        li 
          svg.svg.replaced-svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve")
            path.chef(d="M32.3,6.9c-0.7,0-1.4,0.1-2,0.4c-1.4-3.6-4.7-6.1-8.6-6.3v0h-1v0c-4,0.2-7.6,2.6-9.2,6.3C10.7,7,9.8,6.9,9,6.9  c-4.4,0-8,3.5-8,7.9c0,0,0,0.1,0,0.1c0.2,4.1,3.2,7.4,7.3,8v14c0,2.1,1.3,4.1,3.4,4.1h17.4c2.1,0,5.1-2,5.1-4.1v-14  c4-0.5,6.9-4,6.8-8C41,10.5,36.8,6.9,32.3,6.9z M32.3,19.3h-1.9v18h-3.8v-7.4c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9v7.4  h-2.9v-7.5c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9v7.5h-3.8v-18H8.8c-2.4-0.1-4.2-2-4.2-4.4c0.1-2.4,2-4.2,4.4-4.2  c0.6,0,1.1,0.1,1.7,0.4l0.2,0.1c0.6,0.4,1.3,0.5,2,0.4c0.5,0,1-0.3,1.3-0.7c0.2-0.5,0.4-1,0.5-1.6C15.5,6.1,18.8,4.1,22,5  c2.1,0.5,3.8,2.2,4.4,4.4c0.1,0.5,0.3,1.1,0.5,1.6c0.3,0.4,0.8,0.7,1.3,0.7c0.7,0.1,1.4-0.1,2-0.4l0.2-0.1c0.6-0.3,1.2-0.4,1.8-0.4  c2.4,0,4.3,1.9,4.3,4.2C36.5,17.3,34.6,19.2,32.3,19.3L32.3,19.3z")
          label {{banner.difficulty}}
</template>

<script>
export default {
  props: ['banner']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="styl">
@import '../assets/stylus/colors.styl'
.banner
  color primary-color
  position relative
  &__figure
    position relative
    width 100%
    height 0
    padding-top 75%
    @media md
      padding-top 500px
    @media lg
      padding-top 650px
    &__img
      position absolute
      width 100%
      height 100%
      background-size cover
      left 0
      top 0
  &__caption
    width 100%
    padding 20px 0
    @media md
      position absolute
      left 0
      bottom 5%
      color white
    a.tag + h1
      margin-top 15px
    h1 + ul
      margin-top 10px
    li + li
      margin-left 5px

</style>
