<template>
  <div id="REL_Plate">
    <div id="REL_Content">
      <div id="REL_AbiPlate">
        <ol class="REL_AbiItem" v-for="(value,index) in abisName">
          <li>{{value}}</li><li>{{abis[index]}}</li>
        </ol>
      </div>
      <div id="REA_LifeShow" @click="nextStep">
        <div class="REA_LifeStep" v-for="(step,index) in lifeStep">
          {{index}}岁：{{step}}
        </div>
      </div>
      <div id="REA_BtnPlate">
        <buttom id="REA_BtnAuto" @click="autoLife">
          自动播放
        </buttom>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RE_Life",
  props:{
    abisName:{
      type:Object,
      default:["体质", "家境", "相貌", "智力"]
    }
  },
  data:function (){
    return{
      abis:[],
      axObj:null,
      cID:0,
      lifeStep:[],
      alive:true
    }
  },
  created() {
    this.abis=this.$store.state.abi
    axios.defaults.withCredentials=true
    this.axObj=axios.create({
      baseURL:'http://localhost:8840',
      timeout:5000
    })
    this.axObj({
      method:'post',
      url:'/start',
      data:{
        Name:this.$store.state.name,
        Pec:this.$store.state.pec,
        Abi:this.abis,
      }
    }).then(res=>{
      this.cID=res.data.ID
      console.log(res)
    })
  },
  methods:{
    autoLife(){

    },
    nextStep(){
      if(!this.alive){
        return
      }
      this.axObj({
        method:'post',
        url:'/next',
        data:{
          ID:this.cID
        }
      }).then(res=>{
        if(res.data["Success"]){
          this.lifeStep.push(res.data["Describe"])
        }else {
          this.alive=false
        }
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
}
ol{
  padding: 0;
  margin: 0;
}
#REL_Plate{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: inherit;
  text-align: center;
}
#REL_Content{
  margin: 0 auto;
  width: 800px;
  height: 100%;
}
#REL_AbiPlate{
  width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 0.5rem 1rem;
}
.REL_AbiItem{
  margin: 0.1rem 2px;
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content:center ;
  border: 1px #ccc solid;
  border-radius: 0.3rem;
}
.REL_AbiItem>li:first-child{
  font-size: 1.2rem;
  background-color: inherit;
  padding-top: 0.2rem;
}
.REL_AbiItem>li:last-child{
  font-size: 1.2rem;
  background-color: #eee;
  color: #666;
  padding: 0 0.2rem 0;
}
#REA_LifeShow{
  width: 600px;
  margin: 0 auto;
  height: 500px;
  border-radius: 0.2rem;
  border: 1px #9b9b9b solid;
  background-color: #393E46;
  color: #EEEEEE;
  overflow: hidden;
  text-align: left;
  word-break: break-all;
}
.REA_LifeStep{
  background-color: #4a5361;
  box-shadow: #eeeeee 0 0 0.4rem;
  color: #EEEEEE;
  font-size: 1.2rem;
  margin-top: 0.6rem;
  padding: 0.2rem 0 0.2rem 4rem;
  word-break: break-all;
  cursor: default;
}
#REA_BtnPlate{
  margin-top: 2rem;
}
#REA_BtnAuto{
  border-radius: .3rem;
  padding: .6rem;
  border: #EEEEEE 1px solid;
  cursor: pointer;
  transition: .3s all linear;
}
#REA_BtnAuto:hover{
  background-color: #ff7878;
}
</style>