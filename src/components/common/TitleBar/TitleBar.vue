<template>
  <div id="titleBar" :style="{backgroundColor:color}">
    <div id="titleBar_content">
      <p id="titleBar_title">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props:{
    color:{
      type:String,
      default:'black'
    },
    title:{
      type:String,
      default: '标题'
    }
  }
}
</script>

<style scoped>
#titleBar{
  width: 100%;
  height: 48px;
}
#titleBar_content{
  height: 100%;
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#titleBar_title{
  height: 42px;
  line-height: 42px;
  font-size: 22px;
  font-weight: bolder;
  color: white;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
}

</style>