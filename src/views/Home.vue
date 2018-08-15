<template lang="pug">
  .home
    Banner(v-for="banner in banners" :key="banner.id" :banner="banner")
    section: .container
      h2.headline {{banners[0].title}}
      .row
        .col-md-4.col-sm-12
          Ingredients(:ingredients="ingredients")
        .col-md-8.col-sm-12
          Progress(:steps="steps")
          Procedure(:procedures="procedures")
    section: .container
      h2.headline 专业团队
      .row
        each val in [1,2,3]
          .col-lg-4: Staff(:staff="staff")
    section: .container
      h2.headline 菜品品鉴
      SlickSlider(:products="products")
      SlickSliderGallery(:images="images")
    section: .container
      h2.headline 最新资讯
      .row
        each val in [1,2,3]
          .col-lg-4: BlogTile(:blog="blog")
    section: .container
      h2.headline 盘海食谱
      ImageBadge(:itb="imageBadge" :isImageTop="true")
    section: .container
      ImageBadge(:itb="imageBadge" :isImageLeft="true")
    section: .container
      ImageBadge(:itb="imageBadge" :isImageRight="true")
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Ingredients from '@/components/Ingredients'
import Procedure from '@/components/Procedure'
import SlickSlider from '@/components/SlickSlider'
import SlickSliderGallery from '@/components/SlickSliderGallery'
import ImageBadge from '@/components/ImageBadge'
import BlogTile from '@/components/BlogTile'
import Staff from '@/components/Staff'
import Progress from '@/components/Progress'
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
const blog={title: '盘海部落亲情赞助爱卡论坛',date:'May 13, 2018',author:{href:'/blogs',name:'JEFFERSON'},comment:{number:'2条',href:'#'},desc: 'What goes into a blog post? Helpful, industry-specific content that: 1) gives readers a useful takeaway, and 2) shows you’re…',href:'/blogs',img:require('../assets/images/52.jpg')}
const staff = {name:'黄毅',title:'总经理',img:require('../assets/images/49.jpg'),avatar:require('../assets/images/avatar.jpg')}
const step ={number: '01',title: '',desc:'将螃蟹肚子朝上，先剥去底部的软盖',img:require('../assets/images/product/product_1.jpg')}
const step1 = {number: '02',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step2 = {number: '03',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step3 = {number: '04',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step4 = {number: '05',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step5 = {number: '06',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step6 = {number: '07',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step7 = {number: '08',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step8 = {number: '09',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const step9 = {number: '10',title: '',desc:'再翻过来剥开正面的大壳盖，用手将腮、白及边上的毛边等部位去除干净，撇下两个大蟹钳，用刀背拍出裂隙，然后将身躯从中一分为二',img:require('../assets/images/product/product_2.jpg')}
const steps = [step,step1,step2,step3,step4,step5,step6,step7,step8,step9]
export default {
  name: 'home',
  data(){
    return {
      banners,
      ingredients,
      procedures,
      products,
      images,
      imageBadge,
      blog,
      staff,
      steps
    }
  },
  components: {
    Banner,
    Ingredients,
    Procedure,
    SlickSlider,
    SlickSliderGallery,
    ImageBadge,
    BlogTile,
    Staff,
    Progress
  },
}
</script>
<style scoped lang="styl">
  @import '../assets/stylus/colors.styl'
  .headline
    position relative
    width 300px
    max-width 100vw
    height 45px
    font-size 28px
    font-weight normal
    text-align center
    line-height 45px
    padding 0 50px
    margin 0 auto 20px
    overflow hidden
    color #222
    &:before,&:after
      content ''
      position absolute
      width 50px
      height 3px
      display block
      background #222
      top 19px
    &:before
      left 0px
    &:after
      right 0px
</style>

