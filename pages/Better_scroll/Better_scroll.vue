<template>
    <div class="Scroll" ref="wrapper">
        <div>
            <p v-if="dome==0">演示效果</p>
            <p  v-else>实际效果</p>
            <div v-for="item in list" :key="item.id" class="better_for">
                <p>{{item.id}}</p>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
   data(){
       return{
           list:[],
           scroll:null,
           dome:0
       }
   },
    created(){
       this.init()
   },
   mounted(){
    
   },
   methods:{
       async init(){
          const data=await axios.get("/api/betterScroll");
          if(data.data.code==0){
            this.list=data.data.data;
            this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.wrapper,{
            scrollY:true ,//默认就是这个,可以不用配置
            click:true,//余旭点击事件
            pullDownRefresh:{  //下拉加载
                threshold:100,  //下拉距离
                stop:50 //停止位置
            },
            pullUpLoad:{  //
               threshold:50,//上拉加载
               
            }
           });
           this.scroll.on("pullingDown",()=>{ //下拉刷新触发事件
               axios.get("/api/betterScroll").then(()=>{
                   console.log(222)
                   this.scroll.finishPullDown();//数据取回后的效果
                    this.dome=1;
               })
           });
           this.scroll.on("pullingUp",()=>{ //上拉加载触发事件
               axios.get("/api/betterScroll").then(()=>{
                   console.log(1)
               })
           })
         })
          }
       },
      
    
   }
}
</script>
<style scope>
.Scroll{
    height: 700px;
    border-bottom: 1px solid red;
    overflow: hidden;
}
  .better_for{
      border-bottom:1px solid #ccc;
      height: 100px;
  }  
</style>