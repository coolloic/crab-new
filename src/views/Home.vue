<template lang="pug">
  .home
    Banner(v-for="banner in banners" :key="banner.id" :banner="banner")
    section: .container: .row
      .col-md-4.col-sm-12
        Ingredients(:ingredients="ingredients")
      .col-md-8.col-sm-12
        Procedure(:procedures="procedures")
    section: .container
      SlickSlider(:products="products")
    section: .container
      ImageBadge(:itb="imageBadge" :isImageTop="true")
    section: .container
      ImageBadge(:itb="imageBadge" :isImageLeft="true")
    section: .container
      ImageBadge(:itb="imageBadge" :isImageRight="true")
    section: .container
      SlickSliderGallery(:images="images")
    Footer
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Ingredients from '@/components/Ingredients'
import Procedure from '@/components/Procedure'
import SlickSlider from '@/components/SlickSlider'
import SlickSliderGallery from '@/components/SlickSliderGallery'
import Footer from '@/components/Footer'
import ImageBadge from '@/components/ImageBadge'

const banners = [{
  id:1,
  tag: '咖喱蟹',
  title: '泰式椰香咖喱蟹',
  time: '30分钟',
  serves: '3人份',
  img: require('../assets/images/product/product_1.jpg'),
  difficulty: '简单'
}]
const ingredients = [
  {name: 'spring-onion',text: '香葱'},
  {name: 'onion',text:'洋葱'},
  {name: 'chili',text:'辣椒'},
  {name: 'celery',text:'芹菜'},
  {name: 'coconut',text:'椰浆'},
  {name: 'curry',text:'咖喱膏'},
  {name: 'egg',text:'蛋黄'},
  {name: 'crab',text:'500g 斯里兰卡青蟹',href:'#'}
]
const procedures = [`螃蟹洗净 ，切口处稍蘸一些生粉。`,`入油锅炸一下盛出备用。`,`倒掉多余的油，留底油爆香葱 洋葱，辣椒和芹菜。`,`倒掉多余的油，留底油爆香葱 洋葱，辣椒和芹菜。`,`椰浆和蛋黄拌在一起搅拌均匀 汤沸腾后倒入液体。`]

const products = [{img: require('../assets/images/product/product_1.jpg'),title:'Product 1'},{img: require('../assets/images/product/product_2.jpg'),title:'Product 2'},{img: require('../assets/images/product/product_3.jpg'),title:'Product 3'},{img: require('../assets/images/product/product_4.jpg'),title:'Product 4'},{img: require('../assets/images/product/product_5.jpg'),title: 'Product t'}]
const images = [require('../assets/images/product/product_1.jpg'),require('../assets/images/product/product_2.jpg'),require('../assets/images/product/product_3.jpg'),require('../assets/images/product/product_4.jpg')]
const imageBadge = {title: '盘海食谱',tags:[ {href:'#',text:'秘制香辣蟹'},{href:'#',text:'香辣蟹'},{href:'#',text:'加州香辣蟹'},{href:'#',text:'干锅香辣蟹'},{href:'#',text:'香辣蟹腿配米饭'},{href:'#',text:'炒香辣蟹'},{href:'#',text:'香辣蟹爪'}],desc: '原料：螃蟹1只（仅为演示做法，你可以多做几只，其他原料和调料需稍作调整）青椒1个克 红椒1个 姜3片 大蒜6瓣  葱3片  干辣椒约3根  花椒约40粒...',img:require('../assets/images/gradient.jpg'),href:'/blogs'}

export default {
  name: 'home',
  data(){
    return {
      banners,
      ingredients,
      procedures,
      products,
      images,
      imageBadge
    }
  },
  components: {
    Banner,
    Ingredients,
    Procedure,
    SlickSlider,
    SlickSliderGallery,
    Footer,
    ImageBadge
  },
}
</script>
<style scoped lang="styl">
</style>

