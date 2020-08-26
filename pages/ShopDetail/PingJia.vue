<template>
    <div id="pingjai">
        <div style="padding:20px 0;border-top:1px solid #ccc;margin-top:10px;border-bottom:1px solid #ccc;height:75px">
            <div style="float:left;padding:0 10px;border-right:1px solid #ccc;">
                <div style="text-align:center;font-size:30px;color:#E4A851">3.5</div>
                <div style="text-align:center;font-size:15px;font-weight:900;">综合评分</div>
                <div style="text-align:center;font-size:15px;color:#ccc;">高于周边商家69.2%</div>
            </div>
            <div style="float:left;">
                <div style="padding:0 10px;margin-bottom:3px">
                    <span style="font-weight:900;font-size:15px;">服务态度</span><van-rate v-model="value" /><span style="color:#e4a851;font-weight:900;">4.1</span>
                </div>
                <div style="padding:0 10px;margin-bottom:3px">
                    <span style="font-weight:900;font-size:15px;">商品评分</span><van-rate v-model="value" /><span style="color:#e4a851;font-weight:900;">4.3</span>
                </div>
                <div style="padding:0 10px">
                    <span style="font-weight:900;font-size:15px;">送达时间</span><span style="margin-left:15px;color:#ccc;">28分钟</span>
                </div>
            </div>
        </div>
        <div style="height:20px;background-color:#F4F4F8;border-bottom:1px solid #ccc;"></div>
        <div style="padding:20px;border-bottom:1px solid #ccc;">
            <div style="margin-bottom:40px;">
                <van-button @click="handle2(2)" style="font-weight:900;background:#DBDCDF;" :class="numData==2 ? 'sss' : ''">全部 24</van-button>
                <van-button @click="handle2(1)" style="margin:0 15px;font-weight:900;background:#DBDCDF;border:0;color:#333;" :class="numData==1 ? 'sss' : ''">满意 18</van-button>
                <van-button @click="handle2(0)" style="font-weight:900;background:#DBDCDF;border:0;color:#333;" :class="numData==0 ? 'sss' : ''">不满意 6</van-button>
            </div>
            <div>
                <van-icon name="passed" color="#009475" style="font-size:30px;vertical-align: middle;" />
                <span style="margin-left:15px;font-size:10px;color:#ccc;">只看有内容的评价</span>
            </div>
        </div>
        <div style="padding-bottom:100px;">
         <div style="padding:20px;" v-for="(item,i) in fileArr" :key="i">
            <div style="height:50px;">
                <div style="width:30px;height:30px;float:left;border-radius:50%;margin-right:15px;">
                    <img src="~@/assets/images/5.jpg" alt="" width="100%" height="100%" style="border-radius:50%;">
                </div>
                <div style="float:left;">
                    <div>3*********c</div>
                    <van-rate class="aa" style="margin-right:10px;margin-left:0;" v-model="value" /><span style="color:#ccc;">3.0</span>
                </div>
                <div style="float:right;color:#ccc;">{{dataTime | data-format}}</div>
            </div>
            <div style="margin-left:40px;font-weight:900;font-size:15px;">
                不错,粥很好喝,我经常吃这一家,非常棒,以后也经常来.
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            value:3,
            numData:2,
            pinJiaArr:18,
            dataTime:1469281964000
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
         axios.post('/mock/news').then((res)=>{
                console.log(res.data)
            })
        },
        handle2(mes){
            this.numData=mes;
        }
    },
    computed:{
        fileArr(){
          let fileNumber
          if(this.numData==2){
            fileNumber=this.pinJiaArr;
          }else if(this.numData==1){
             fileNumber=5; 
          }else if(this.numData==0){
             fileNumber=1;
          }
           return fileNumber; 
     
        }
    }
    
} 
</script>
<style scope> 
#pingjai{
    height: 100%;
    overflow:scroll;
}
.van-rate{
    margin:0 15px;
}
  #pingjai .van-rate__icon{
    font-size:20px;
  } 
  .van-rate__icon--full {
    color: #f90 !important;
}
#pingjai .aa .van-rate__icon{
    font-size:12px;
}
.sss{
    background:#009475 !important;
}
</style>