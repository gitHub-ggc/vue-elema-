<template>
    <div>
       <ul>
               <li @click="upShopDatail(i)" style="height:88px;padding:10px 0;border-bottom:1px solid #ccc" v-for="(item,i) in that" :key="i">
                    <div class="img_box" style="height:88px;width:88px;float:left;">
                        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" width="100%" height="100%" alt="">
                    </div>
                     <div class="shopList_text" style="float:left;margin-left:10px;">
                        <span style="background-color:yellow;font-size:12px;">品牌</span>
                        <span style="font-weight:700;margin-left:5px;">锄禾日当午,汗滴禾...</span>
                        <div style="margin:10px 0;">
                            <van-rate v-model="rate_value" />
                            <span style="font-size:15px;margin:10px;color:pink">{{item.pingjia}}</span>
                            <span style="font-size:15px;">月销售106单</span>
                        </div>
                        <div>
                            <span style="font-size:15px;">$20起送 / 派送费5元</span>
                        </div>
                     </div>
                     <div class="shopList_right" style="float:right;padding-top:10px;">
                         <span style="font-size:12px;">保&nbsp;准&nbsp;好</span>
                         <div style="font-size:12px;color:green;margin-top:15px;">聚划算</div>
                     </div>
                </li>
               
            </ul> 
    </div>
</template>
<script>
export default {
    props:{
        that:Array
    },
   data(){
       return{
        rate_value:3,
       }
   },
   methods:{
       upShopDatail(mes){
           this.$router.push("/shopDetail/"+mes+"")
       }
   } 
}
</script>
<style scope>
.shopList .van-rate__icon{
    font-size:12px;
}
.shopList .van-rate__icon--full {
    color: yellow;
}
</style>