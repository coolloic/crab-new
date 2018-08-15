<template lang="pug">
  .gallery
    gallery(:images="images" :index="index" @close="index = null")
    Slick(ref="slick" :options="slickOptions" @afterChange="handleAfterChange" @beforeChange="handleBeforeChange" @breakpoint="handleBreakpoint" @destroy="handleDestroy" @edge="handleEdge" @init="handleInit" @reInit="handleReInit" @setPosition="handleSetPosition" @swipe="handleSwipe" @lazyLoaded="handleLazyLoaded" @lazyLoadError="handleLazeLoadError")
      .image(v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', width: '100%', height: '300px' }")
</template>

<script>
  import VueGallery from 'vue-gallery';
  import Slick from 'vue-slick'
  const slickOptions = {
    centerMode: false,
    infinite: false,
    slidesToShow:  3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 600,
    prevArrow: '<div class="prev">&#10094;</div>',
    nextArrow: '<div class="next">&#10095;</div>'
  }
  const images = [require('../assets/images/product/product_1.jpg'),require('../assets/images/product/product_2.jpg'),require('../assets/images/product/product_3.jpg'),require('../assets/images/product/product_4.jpg')]

  export default {
    data: function () {
      return {
        images,
        index: null,
        slickOptions
      };
    },

    components: {
      'gallery': VueGallery,
      Slick
    },
    // All slick methods can be used too, example here
    methods: {
      next() {
          this.$refs.slick.next();
      },

      prev() {
          this.$refs.slick.prev();
      },

      reInit() {
          // Helpful if you have to deal with v-for to update dynamic lists
          this.$nextTick(() => {
              this.$refs.slick.reSlick();
          });
      },

      // Events listeners
      handleAfterChange(event, slick, currentSlide) {
      },
      handleBeforeChange(event, slick, currentSlide, nextSlide) {
      },
      handleBreakpoint(event, slick, breakpoint) {
      },
      handleDestroy(event, slick) {
      },
      handleEdge(event, slick, direction) {
      },
      handleInit(event, slick) {
      },
      handleReInit(event, slick) {
      },
      handleSetPosition(event, slick) {
      },
      handleSwipe(event, slick, direction) {
      },
      handleLazyLoaded(event, slick, image, imageSource) {
      },
      handleLazeLoadError(event, slick, image, imageSource) {
      }
    }
  }
</script> 
<style scoped lang="styl">
.image
  float left
  background-size cover
  background-repeat no-repeat
  background-position center center
  border 1px solid #ebebeb
  margin 0px
  cursor pointer
.slick-slide > div
  display flex
  min-height 300px
.blueimp-gallery>.next
  right 70px!important
</style>