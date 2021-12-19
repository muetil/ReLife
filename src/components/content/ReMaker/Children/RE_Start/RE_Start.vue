<template>
  <div id="RE_Start_Content">
    <div id="TitlePlate">
      <div id="RETitle">
          {{title}}
      </div>
      <div id="RESubTitle">
        {{subTitle}}
      </div>
      <a id="RESBtn" @click="next">
        立即重开
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RE_Start",
  props:{
    title:{
      type:String,
      default:"人生重开模拟器"
    },
    subTitle:{
      type:String,
      default:"这垃圾人生一秒也不想呆了"
    }

  },
  methods:{
    next:function (){
      this.$store.commit('nextStep')
      /*console.log(this.$store.state.step)*/
    }
  }
}
</script>

<style scoped>
#RE_Start_Content{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#TitlePlate{
  width: 500px;
}
#RETitle{
  font-size: 3rem;
  font-weight: 700;
  color: #EEEEEE;
}
#RESubTitle{
  font-size:1.5rem;
  font-weight:normal;
}
#RESBtn{
  display: block;
  margin: 2rem auto 0 auto;
  padding: 0.5rem 1.5rem;
  font-size: 1.6rem;
  color: white;
  width: 160px;
  border-radius: 0.2rem;
  border: #EEEEEE solid 1px;
  cursor: pointer;
  transition:all linear 0.5s ;
  font-weight: bold;
}
#RESBtn:hover{
  background-color: #ff7878;
}
</style>