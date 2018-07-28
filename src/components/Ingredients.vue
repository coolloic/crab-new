<template lang="pug">
  .ingredients
    .ingredients-header
      input#ingredients(type="checkbox" v-model="selectAll")
      label(for="ingredients") {{selectAllText}} 
      h3 {{title}}
    hr.bold
    ul
      li(v-for="ingredient in ingredients" :key="ingredients.name")
        .ingredients-item 
          input(:id="ingredient.name" :value="ingredient.name" type="checkbox" :name="ingredient.name" v-model="selected")
          label(:for="ingredient.name" v-if="ingredient.href"): a.external(:href="ingredient.href") {{ingredient.text}}
          label(:for="ingredient.name" v-else="ingredient.href") {{ingredient.text}}
    a.button.red {{print}}
</template>

<script>
export default {
  props: ['ingredients'],
  data(){
    return{
      title: '配料',
      selectAllText:'全选',
      print: '打印配料清单',
      selected: []
    }
  },
  computed: {
    selectAll: {
        get: function () {
            return this.ingredients ? this.selected.length == this.ingredients.length : false;
        },
        set: function (value) {
            var selected = [];

            if (value) {
                this.ingredients.forEach(function (ingredient) {
                    selected.push(ingredient.name);
                });
            }

            this.selected = selected;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="styl">
@import '../assets/stylus/colors.styl'
@import '../assets/stylus/mixins.styl'
.ingredients
  &-item
    display flex
  &-header
    font-size 22px
  h3
    font-weight bold
    line-height 30px
    float right
  ul
    list-style none 
    font-size 22px
    li
      line-height 30px
      padding 12px 0
      border-bottom: 1px solid rgba(0,0,0,.1)
  ul + a.button
    margin 30px 0
  input[type=checkbox]
    display none
  label
    position relative
    padding-left 40px
    cursor pointer
    flex-grow 1
    font-weight normal
    &:before
      content ''
      position absolute
      left 0
      top 0
      width 28px
      height 28px
      border 1px solid primary-color
    &:after
      content ''
      position absolute
      left 5px
      top 6px
      width 18px
      height 10px
      border-left 3px solid primary-color
      border-bottom 3px solid primary-color
      transform rotate(-45deg)
      opacity 0
  input[type=checkbox]:checked + label:after
    opacity 1
</style>
