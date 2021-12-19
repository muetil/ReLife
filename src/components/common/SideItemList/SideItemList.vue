<template>
  <div id="SideItemList">
    <a class="SideItem" v-for="item in itemList" :href="item.route">{{item.name}}</a>
  </div>
</template>

<script>
export default {
  name: "SideItemList",
  props:{
    itemList:{
      type:Array,
      default:[
        {name:'重开模拟器',route:'/'},
        {name:'其它',route: '/'}
      ]
    }
  }
}
</script>

<style scoped>
#SideItemList{
  width: 96px;
  background-color: #acacb1;
/*  border-radius: 16px 0 0 16px;*/
  overflow: hidden;
}
.SideItem{
  display: block;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 16px;
  color: white;
}
.SideItem:hover{
  background-color: black;
}
</style>