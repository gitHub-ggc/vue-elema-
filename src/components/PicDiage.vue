<template>
    <div id="picDilag" v-if="isShowPicDiage" @click="handDec()">
        <div class="picDilag_item">
            <div>
                <img src="~@/assets/images/5.jpg" alt="" width="100%">
            </div>
            <div class="picDilag_title">南瓜粥</div>
            <div class="picDilag_dec">
                <span class="picDilag_span1">月售91份</span>
                <span>好评率100%</span>
            </div>
            <div class="picDilag_footer">
                <span class="picDilag_span4">$ 9</span>
                <span class="picDilag_span5">ss</span>
            </div>
        </div>
    </div>
</template>
<script>
import eventBus from "../../src/components/EventBas/EventBus"
export default {
   data(){
       return{
           isShowPicDiage:false
       }
   },
   methods:{
      handDec(){
         this.isShowPicDiage=false; 
         eventBus.$emit("myBorther","true")
      },
      bbtn(){
          eventBus.$on("myFun",(mes)=>{
              this.isShowPicDiage=mes;
          })
      } 
   },
   created(){
       this.bbtn()
   } 
}
</script>
<style scope>
 #picDilag{
     position: absolute;
     top:0;
     left:0;
     right: 0;
     bottom: 0;
     background-color:rgba(0, 0, 0, .5);
     z-index: 999;
 }   
 .picDilag_item{
     background-color:#fff;
     width:80%;
     position:absolute;
     top:35%;
     left:50%;
     transform: translateX(-50%);    
 }
 .picDilag_title{
     font-weight: 900;
     font-size:15px;
     margin-top:10px;
     margin-left:10px;
 }
 .picDilag_dec{
   margin-left:10px;
   font-size:12px;
   color:#999;
 }
 .picDilag_span1{
     margin-right:10px;
 }
 .picDilag_footer{
     margin:20px 0 10px 10px;
 }
 .picDilag_span4{
     color:red;
 }
 .picDilag_span5{
     float:right;
     margin-right:10px;
 }
</style>