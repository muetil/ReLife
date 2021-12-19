<template>
  <RE_Start v-if="step===0"/>
  <RE_Gift v-if="step===1"/>
  <RE_Abi v-if="step===2"/>
  <RE_Life v-if="step===3"/>
</template>

<script>
import RE_Start from "@/components/content/ReMaker/Children/RE_Start/RE_Start";
import RE_Gift from "@/components/content/ReMaker/Children/RE_Gift/RE_Gift";
import RE_Life from "@/components/content/ReMaker/Children/RE_Life/RE_Life";
import RE_Abi from "@/components/content/ReMaker/Children/RE_Abi/RE_Abi";
export default {
  name: "RE_Route",
  components: {RE_Abi, RE_Life, RE_Gift, RE_Start},
  props:{
    step:{
      type:Number,
      default:0
    }
  }
}
</script>

<style scoped>

</style>