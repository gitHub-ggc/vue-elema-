<template>
  <div id="seach">
    <van-nav-bar
      title="搜索"
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
    />
   <div style="margin-bottom:10px;">
      <input v-model="seachValue" placeholder="请输入商家或美食名称" />
      <van-button type="primary" @click="handSubmint()">提交</van-button>
   </div>
    <div style="padding:5px;border-bottom:1px solid #ccc;height:68px;" v-for="item in submitArry" :key="item">
      <div style="width:60px;height:60px;float:left;">
        <img src="~@/assets/images/5.jpg" width="100%" height="100%" alt="">
      </div>
      <div style="float:left;margin-left:10px;font-size:14px;">
        <div>{{item}}</div>
        <div style="margin:5px 0">
          <span>月#</span>&nbsp;
          <span>671 快</span>
        </div>
        <div>
          20元起送/帮送10$20公里
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
           seachValue:'' ,
           title:"",
           submitArry:[]
        }
    },
    methods: {
    onClickLeft() {
      history.back()
    },
    async handSubmint(){
     const data=await axios.get("/seach/dec");
     console.log(data.data.data);
     this.submitArry=data.data.data;
    }
  },
};
</script>
<style scope>
 #seach .van-nav-bar{
     background:#009475;
 }
 #seach .van-icon-arrow-left{
     color:#fff;
 }
 #seach .van-nav-bar__text{
     color:#fff;
 }
 #seach .van-nav-bar__title{
     color:#fff;
 }
 #seach input{
     margin:5px;
     padding:5px;
     width:80%;
     border:0;
     background-color:#F3F2F3;
     font-size:10px;
 }
#seach .van-button{
    height: 23px;  
}
#seach .van-button--normal{
  padding:10px;
}
</style>