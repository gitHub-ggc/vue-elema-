<template>
    <div id="shopDetail">
        <div class="heads">
            <van-nav-bar  left-arrow @click-left="onClickLeft" />
        </div>
       <div class="box">
           <div class="box2"></div>
       </div>
       <div style="text-align:center;margin-top:60px;">
           <span style="background-color:yellow;padding:5px;font-size:12px">品牌</span>
           <span style="font-weight:900;margin:0 10px;font-size:20px;">嘉禾一品 (温都水城)</span>
           <van-icon name="play" style="vertical-align: middle;"/>
       </div>
       <div style="text-align:center;margin:10px;font-size:15px;font-weight:700">
           <span>3.5 月售30份 送达约23分钟 楼高1000m</span>
       </div>
       <div style="text-align:center;font-size:14px;">
           <span style="padding:2px;background:green;font-size:12px;">消息</span>
           <span style="margin:0 10px;">新用户下单立减17元(不与其它累加...)</span>
           <span>8个优惠</span>
           <span id="triangle-down"></span>
       </div>
       <div class="spanStyle" style="text-align:center;font-size:15px;margin-top:15px;">
           <router-link to="/dianCan"><span @click="handTag(1)" :class="(showCurrent==1? 'current' : '')">点餐</span></router-link>
           <router-link to="/pingJia"><span @click="handTag(2)" :class="(showCurrent==2? 'current' : '')" style="margin:0 100px;">评价</span></router-link>
           <router-link to="/shangJai"><span @click="handTag(3)" :class="(showCurrent==3? 'current' : '')" style>商家</span></router-link>
       </div>
       <PicDiage />
       <keep-alive>
         <router-view></router-view>
       </keep-alive> 
    </div>
</template>
<script>
import PicDiage from '../../src/components/PicDiage'
export default {
    data(){
        return{
          showCurrent:1,
        }
    },
    created(){
        // this.$router.push("/dianCan");
    },
    methods:{
        onClickLeft(){
            this.$router.push("/msite");
        },
        handTag(mes){
          this.showCurrent=mes;
        }
    },
    components:{
        PicDiage
    }
}
</script>
<style scope>
 #shopDetail{
     overflow: hidden;
     height: 700px;
 }
 #shopDetail .heads{
     height: 44px;
     width:100%;
     background: url("~@/assets/images/5.jpg")  no-repeat;
     background-size: 100% auto;
 } 
 #shopDetail .van-nav-bar{
   background-color:transparent;
 }
 #shopDetail .van-nav-bar .van-icon {
    color: #fff;
    font-size:25px;
}
.box{
    position:absolute;
    top:20px;
    left:40%;
    background:#fff;
    width:80px;
    height: 80px;
    box-sizing: border-box;
    padding:20px;
    border:1px solid #999;
}
.box2{
    background:red;
    width:40px;
    height: 40px;
}
#triangle-down {
    display:inline-block;
    margin-left:5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
    padding-bottom:3px;
}
.current{
    color:teal !important;
    font-weight: 900;
    padding-bottom:5px;
    border-bottom: 3px solid teal;
}
.spanStyle span{
  color:#ccc
}
</style>