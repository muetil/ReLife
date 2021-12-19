<template>
  <div id="REA_Plate">
    <div id="REA_Content">
      <div id="REA_Title1">调整初始属性</div>
      <div id="REA_Title2">可用属性点：{{restPoint}}</div>
      <div id="REA_AbiPlate">
        <div class="REA_AbiItem" v-for="(value,index) in abiItem">
          <span>{{value}}</span>
          <div>
            <button @click="abiAdj(index,-1)">-</button>
            <input type="number" v-model='abisNum[index]' @input="change(index)">
            <button @click="abiAdj(index,1)">+</button>
          </div>
        </div>
      </div>
      <div id="REA_GiftPlate">
        <div id="REA_GTitle">
          已选天赋
        </div>
        <div class="REA_Gift" v-for="gift in this.$store.state.pecName">{{gift[0]}}</div>
        <div id="REA_BtnPlate">
          <button id="REA_Random" @click="abiRandom">随机分配</button>
          <button id="REA_Start" @click="newLife">开始新人生</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createApp} from "vue";

export default {
  name: "RE_Abi",
  props:{
    abiNum:{
      type:Number,
      default:20
    },
    abiItem:{
      type:Array,
      default: [
          '智力','颜值','体质','家境'
      ]
    },
  },
  data:()=>{
    return{
      abisNum:null,
      test:'',
      gifts:null
    }
  },
  created() {
    this.abisNum=new Array(this.abiItem.length).fill(0)
    this.gifts=this.$store.state.pecName
    // console.log(this.gifts)
  },
  computed:{
    totalAbi(){
      return this.abisNum.reduce((pre,n)=>pre+n,0)
    },
    restPoint(){
      return this.abiNum-this.totalAbi
    }
  },
  methods:{
    change(index){
      if(this.abisNum[index]===""){
        this.abisNum[index]=0
        return
      }
      if(this.totalAbi>this.abiNum){
        this.abisNum[index]=this.abiNum-(this.totalAbi-this.abisNum[index])
      }
    },
    abiAdj(index,dir){
      if(this.abisNum[index]===0&&dir===-1){
        return
      }
      this.abisNum[index]=this.abisNum[index]+dir
      if(this.totalAbi>this.abiNum){
        this.abisNum[index]=this.abiNum-(this.totalAbi-this.abisNum[index])
      }
    },
    abiRandom(){
      let len=this.abisNum.length-1,rest=0,min=0,temp
      rest=this.abiNum
      for(let i=0,abi=0;i<len;i++){
        abi=Math.ceil(Math.random()*(10<rest?10:rest))
        temp=rest-(len-i)*10
        min=temp>0?temp:0
        if (temp!==0){
          abi=min>abi?min:abi
        }
        this.abisNum[i]=abi
        rest-=abi
      }
      this.abisNum[len]=rest
    },
    newLife(){
      this.$store.state.abi=this.abisNum
      this.$store.commit('nextStep')
    }
  },
}
</script>

<style scoped>
/*去数字输入框箭头*/
/*chrome*/
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
/*firefox*/
input[type='number']{
  -moz-appearance: textfield;
}

#REA_Plate{
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
#REA_Content{
  margin: 0 auto;
  width: 800px;
  height: 100%;
}
#REA_Title1{
  margin-top:12px;

  font-size: 2rem;
  font-weight: bolder;
}
#REA_AbiPlate{
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 460px;
}
.REA_AbiItem{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.REA_AbiItem span{
  line-height: 50px;
  font-size: 2rem;
  margin-right: 10px;
}
.REA_AbiItem input{
  width: 2.2rem;
  height: 2.2rem;
  background-color: inherit;
  border: solid 2px white;
  color: #EEEEEE;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}
.REA_AbiItem button{
  border:solid 2px white;
  border-radius: 100%;
  margin: 0 12px;
  background-color: inherit;
  color: white;
  padding: 2px 8px;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
  transition: linear all 0.5s;
}
.REA_AbiItem button:hover{
  opacity: .5;
}
#REA_GiftPlate{
  margin: 0 auto;
  width: 420px;
}
#REA_GTitle{
  font-size: 1.6rem;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 4px;
  cursor: default;
}
.REA_Gift{
  font-size: 1.6rem;
  font-weight: normal;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #898686;
  margin-top: 6px;
  transition: 0.3s linear all;
  cursor: pointer;
}
.REA_Gift:hover{
  color: #6e6969;
  background-color: #dedcdc;
}
#REA_BtnPlate{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
#REA_BtnPlate>button{
  width: 50%;
  margin: 0.5rem 1rem 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #393E46;
  border: 1px #EEEEEE solid;
  border-radius: 0.2rem;
  color: #EEEEEE;
  font-size: 1rem;
  transition: 0.3s linear all;
  cursor: pointer;
}
#REA_BtnPlate>button:hover{
  background-color: #d98167;
}
</style>