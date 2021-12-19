<template>
  <div id="RE_Gift_Plate">
    <div id="Re_Gift_Title">
      天赋抽卡
    </div>
<!--    <button id="RGBtn" @click.stop="getGift" v-if="!isGetGift">开始抽卡</button>-->
    <div id="REGList" v-if="isGetGift">
      <button v-for="(gift,index) in gifts.slice(0,10)" :class="[levelClass[gift[1]],'REGItem',
      {selected:selectList.indexOf(index)!==-1}]" @click="selectItem(index)">{{gift[0]}}</button>
      <button id="RE_ConBtn" @click="lifeStart">{{btnContent}}</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

const giftNum=2

export default {
  name: "RE_Gift",
  props:{
    gifts:{
      type:Array,
      default:[
/*          ['半神',2],
          ['命悬一线',0],
          ['智多星',0],
          ['老司机',0],
          ['先天免疫',0],
          ['班中红人',0],
          ['生如夏花',0],
          ['仙风道骨',2],
          ['遗传疾病',0],*/
      ]
    }
  },
  data:()=>{
    return{
      isGetGift:false,
      selectList:[],
      levelClass:['low','high','highest','wonder'],
      btnContent:'请选择'+giftNum+'个',
      giftsNum:[],
      giftsIndex:[],
    }
  },
  beforeMount() {
    //获取天赋
    axios({
      url:'http://localhost:8840/gifts'
    }).then(res=>{
      let data=res.data
      this.gifts.splice(0)
      for(let key in data) {
        this.giftsIndex.push(parseInt(key))
        this.gifts.push([data[key],0])
      }
      this.isGetGift=true
    })

  },
  methods:{
    selectItem(index){
/*      console.log(index)*/
      if(this.selectList.indexOf(index)!==-1){
        this.selectList=this.selectList.filter(item=>item!==index)
        this.btnContent='请选择'+giftNum+'个'
      }else {
        if(this.selectList.length<giftNum){
          this.selectList.push(index)
          if(this.selectList.length===giftNum){
            this.btnContent='开始新人生'
          }
        }else {
          //TODO 超量提醒
          console.log('只能选择'+giftNum+'个天赋')
        }
      }
/*      console.log(this.selectList)*/
    },
    lifeStart(){
      //开始人生
      if(giftNum===this.selectList.length){
        let pec=[],pecName=[]
        for(let i=0;i<giftNum;i++){
          pec.push(this.giftsIndex[this.selectList[i]])
          pecName.push(this.gifts[this.selectList[i]])
        }
        this.$store.state.pec=pec
        this.$store.state.pecName=pecName
/*        console.log(this.$store.state.pec)
        console.log(this.$store.state.pecName);*/
        this.$store.commit('nextStep')
      }

    }
  }
}
</script>

<style scoped>
.REGItem.highest{
  background-color: #ffa07a;
}
button{
  border: #EEEEEE solid 1px;
}
#RE_Gift_Plate{
  overflow-y: scroll;
  height: 100%;
  width: 100%;
}
#Re_Gift_Title{
  margin: 40px auto 0 auto;
  width: 300px;
  font-size: 1.6rem;
  font-weight: bolder;
  text-align: center;
}
#RGBtn{
  margin: 160px auto 0 auto;
  width: 100px;
  padding: 10px 0 10px 0;
  transition:all linear 0.5s ;
  font-size: 1.2rem;
  font-weight: bolder;
  display: block;
  background-color: inherit;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
}
#RGBtn:hover{
  background-color: #ff7878;
}
#REGList{
  margin: 60px auto 0 auto;
  display: flex;
  width: 400px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.REGItem{
  width: 100%;
  padding: 4px 0 4px 0;
  margin: 10px auto;
  transition:all linear 0.5s ;
  font-size: 1.2rem;
  font-weight: bolder;
  display: block;
  background-color: #464646;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
}
#REGList>.REGItem:hover,#REGList>.selected.REGItem{
  background-color: #898686;
}
#REGList>.REGItem.highest:hover,#REGList>.selected.REGItem.highest{
  background-color: #eea286;
  color: black;
}
#RE_ConBtn{
  width: 100%;
  padding: 4px 0 4px 0;
  margin: 30px auto;
  transition:all linear 0.5s ;
  font-size: 1.6rem;
  font-weight: bolder;
  display: block;
  background-color: inherit;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
}
#RE_ConBtn:hover{
  background-color: #ff7878;
}

</style>