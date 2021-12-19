<template>
  <div id="remaker_plate" :style="{backgroundColor:backColor,color:contentColor}">
<!--    <router-view/>-->
    <RE_Route :step="nowStep"/>
  </div>

</template>

<script>
import RE_Start from "@/components/content/ReMaker/Children/RE_Start/RE_Start";
import RE_Gift from "@/components/content/ReMaker/Children/RE_Gift/RE_Gift";
import RE_Abi from "@/components/content/ReMaker/Children/RE_Abi/RE_Abi";
import RE_Life from "@/components/content/ReMaker/Children/RE_Life/RE_Life";
import RE_Route from "@/components/content/ReMaker/Children/RE_Route/RE_Route";
export default {
  name: "ReMaker",
  components: {RE_Route, RE_Life, RE_Abi, RE_Gift, RE_Start},
  props:{
    backColor:{
      type:String,
      default:'#222831'
    },
    contentColor:{
      type:String,
      default: 'white'
    }
  },
  data:function (){
    return{

    }
  },
  computed:{
    nowStep(){
      return this.$store.state.step
    }
  }
}
</script>

<style scoped>
#remaker_plate{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

</style>