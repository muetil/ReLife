<template>
  <div id="appContent">
    <div id="mainContent">
      <div id="left">
        <side-item-list/>
      </div>
      <div id="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-size: 20px;
}
#appContent{
  position: relative;
  top:0;
  left: 0;
  height: 100vh;
}

#mainContent{
  margin: 0 auto;
  height: 100%;
  width: 1200px;
  box-sizing: border-box;
}
#left{
  height: 100%;
  width: 96px;
  float: left;
  box-sizing: border-box;
  padding-top: 66px;
}
#right{
  display: flex;
  height: 100%;
  width: 1100px;
  float: left;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid #dedcdc;
  overflow: hidden;
}
</style>
<script>
import TitleBar from "@/components/common/TitleBar/TitleBar";
import SideItemList from "@/components/common/SideItemList/SideItemList";
import ReMaker from "@/components/content/ReMaker/ReMaker";
export default {
  components: {ReMaker, SideItemList, TitleBar}
}

document.title='实验项目安放处'
</script>