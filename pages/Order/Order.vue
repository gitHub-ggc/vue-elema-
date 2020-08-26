<template>
  <div id="order">
    <van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-empty description="登入后查看外卖订单" />
    <div class="order_loginBtn">
        <van-button type="primary">立即登入</van-button>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    methods: {
    onClickLeft() {
      history.back()
    },
  },
};
</script>
<style scope>
#order .van-nav-bar{
     background:#009475;
 }
 #order .van-icon-arrow-left{
     color:#fff;
 }
 #order .van-nav-bar__text{
     color:#fff;
 }
 #order .van-nav-bar__title{
     color:#fff;
 }
 #order .van-empty{
     padding-bottom: 5px;
 }
 #order .van-empty__description{
     margin:0;
     padding:0;
     font-size:10px;
 }
 .order_loginBtn{
     text-align: center;
 }
.order_loginBtn .van-button{
    height: 30px;  
    font-size:10px;
}
</style>