<template>
    <div>
        <div class="shangjia_title">
            <h2>配送信息</h2>
            <div>
                <span class="shangjia_span1">硅谷转送</span>
                <span class="shangjia_span2">由离家配送配送配送,约28分钟送达,距离</span>
                <div style="margin-top:5px;font-size:14px">1000m</div>
            </div>
            <div style="font-size:15px;margin-top:10px;font-weight:900;">配送费 $ 4</div>
        </div>
        <div style="overflow:scroll;height:450px;">
            <div style="font-weight:900;font-size:14px;margin:10px;">活动与服务</div>
            <div style="margin:10px;" v-for="item in 16" :key="item">
                <span style="background-color:green;font-size:12px;padding:3px;margin-right:10px;">最新</span>
                <span style="font-size:12px;color:#000">删用户下单立减17元(不限制其他服务限制)</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
           console.log(this) 
        }
    }
}
</script>
<style scope>
   .shangjia_title{
       margin-top:7px;
       padding:20px;
       border-bottom: 20px solid #ccc;
       border-top:1px solid #ccc;
   } 
   .shangjia_title h2{
       font-size:20px;
       margin-bottom:10px;
   }
   .shangjia_span1{
     background-color:blue;
     padding:5px 2px;
     font-size:12px;
     color:#fff;
     border-radius: 4px;
     margin-right:15px;
   }
   .shangjia_span2{
       font-size:15px;
   }
</style>