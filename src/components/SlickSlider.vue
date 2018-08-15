<template lang="pug">
  Slick(ref="slick" :options="slickOptions" @afterChange="handleAfterChange" @beforeChange="handleBeforeChange" @breakpoint="handleBreakpoint" @destroy="handleDestroy" @edge="handleEdge" @init="handleInit" @reInit="handleReInit" @setPosition="handleSetPosition" @swipe="handleSwipe" @lazyLoaded="handleLazyLoaded" @lazyLoadError="handleLazeLoadError")
    img(v-for="product in products" :src="product.img")
</template>

<script>
import Slick from 'vue-slick'
const slickOptions = {
  centerMode: false,
  infinite: true,
  slidesToShow:  3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  speed: 600,
  prevArrow: '<div class="prev">&#10094;</div>',
  nextArrow: '<div class="next">&#10095;</div>',
  responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
  ]
}
export default {
  name: 'SlickSlider',
  props: ['products'],
  data(){
    return {
      slickOptions
    }
  },
  components: {
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
    }

  //   // Events listeners
  //   handleAfterChange(event, slick, currentSlide) {
  //       console.log('handleAfterChange', event, slick, currentSlide);
  //   },
  //   handleBeforeChange(event, slick, currentSlide, nextSlide) {
  //       console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
  //   },
  //   handleBreakpoint(event, slick, breakpoint) {
  //       console.log('handleBreakpoint', event, slick, breakpoint);
  //   },
  //   handleDestroy(event, slick) {
  //       console.log('handleDestroy', event, slick);
  //   },
  //   handleEdge(event, slick, direction) {
  //       console.log('handleEdge', event, slick, direction);
  //   },
  //   handleInit(event, slick) {
  //       console.log('handleInit', event, slick);
  //   },
  //   handleReInit(event, slick) {
  //       console.log('handleReInit', event, slick);
  //   },
  //   handleSetPosition(event, slick) {
  //       console.log('handleSetPosition', event, slick);
  //   },
  //   handleSwipe(event, slick, direction) {
  //       console.log('handleSwipe', event, slick, direction);
  //   },
  //   handleLazyLoaded(event, slick, image, imageSource) {
  //       console.log('handleLazyLoaded', event, slick, image, imageSource);
  //   },
  //   handleLazeLoadError(event, slick, image, imageSource) {
  //       console.log('handleLazeLoadError', event, slick, image, imageSource);
  //   }
  }
}
</script>
<style scoped lang="styl">
@import '../assets/stylus/colors.styl'
@import '../../node_modules/slick-carousel/slick/slick.css'
@import '../../node_modules/slick-carousel/slick/slick-theme.css'
</style>

