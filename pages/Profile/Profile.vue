<template>
  <div id="profile">
    <van-nav-bar title="我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="myNews">
        <div class="icons">
            <van-icon name="manager" />
        </div>
        <div class="my_message" v-if="showPhone==false">
            <div class="login" @click="profile_login()">登入/注册</div>
            <div>
                <van-icon name="graphic" class="mobile"/>
                <span>暂无绑定手机号</span>
            </div>
        </div>
        <div v-else class="profile_login" style="display:inline-block;padding-top:5px">
           <van-icon style="font-size:20px;color:red;vertical-align: middle;" name="graphic" class="mobile"/>
              <span style="font-size:12px;color:#fff;">15879106402</span> 
        </div>
        <div style="float:right;margin-top:10px;color:#fff">
            <van-icon name="arrow" />
        </div>
    </div>
    <div class="price">
        <div class="price_yu">
            <span class="yue">0.00</span><span>元</span>
            <div >
                <span >我的余额</span>
            </div>
        </div>
        <div class="price_yu">
            <span class="youhui">0</span><span>个</span>
            <div>
                <span>我的优惠</span>
            </div>
        </div>
        <div class="price_yu">
            <span class="jifen">0</span><span>个</span>
            <div>
                <span>我的积分</span>
            </div>
        </div>
    </div>
    <div class="newList">
        <ul>
            <li>
              <van-icon name="comment-o"  style="vertical-align: bottom;margin-right:5px;"/> 
              <span style="font-size:12px;">我的订单</span>
              <van-icon class="jiantuo" name="arrow" style="float:right;" />
            </li>
            <li>
              <van-icon name="balance-list-o"  style="vertical-align: bottom;margin-right:5px;"/> 
              <span style="font-size:12px;">积分商城</span>
              <van-icon class="jiantuo" name="arrow" style="float:right;" />
            </li>
            <li>
              <van-icon name="vip-card-o"  style="vertical-align: bottom;margin-right:5px;"/> 
              <span style="font-size:12px;">硅谷外卖会员卡</span>
              <van-icon class="jiantuo" name="arrow" style="float:right;" />
            </li>
            <li>
              <van-icon name="bar-chart-o"  style="vertical-align: bottom;margin-right:5px;"/> 
              <span style="font-size:12px;">服务中心</span>
              <van-icon class="jiantuo" name="arrow" style="float:right;" />
            </li>
        </ul>
    </div>
    <div v-if="showPhone==true" style="text-align:center;margin-top:10px;">
        <van-button @click="goOut()" style="border-radius:5px;width:90%;" type="warning">退出</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        showPhone:false
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    profile_login(){
        this.$router.push("/login")
    },
    initLogin(){
      var useName=localStorage.getItem("usePhone");
      var usePwa=localStorage.getItem("usePwa");
      if(useName && usePwa){
        this.showPhone=true;
      }
    },
    goOut(){
        this.showPhone=false;
        localStorage.removeItem("usePhone");
        localStorage.removeItem("usePwa");
    }
  },
  created(){
      this.initLogin()
  }
};
</script>
<style scope>
#profile .van-nav-bar {
  background: #009475;
}
#profile .van-icon-arrow-left {
  color: #fff;
}
#profile .van-nav-bar__text {
  color: #fff;
}
#profile .van-nav-bar__title {
  color: #fff;
}
#profile .van-card{
    background-color:#009475;
}
#profile .van-card:not(:first-child){
    margin-top:2px;
}
.myNews{
    padding:20px 10px;
    height: 40px;
    /* line-height: 40px; */
    background-color:#009475
}
.myNews .icons{
    float:left;
    font-size:40px;
    color:#fff;
    margin-right:10px;
}
.myNews .my_message{
    float:left;
    font-size:12px;
    color:#fff;
    margin-top:5px;
}
.my_message .login{
    margin-bottom: 5px;;
}
.my_message .mobile{
    font-size:10px;
}
.my_message span{
    font-size:7px;
}
.price{
    padding:10px 0;
    border-bottom:1px solid #FBFAFB;
}
.price .price_yu{
    display:inline-block;
    width:33%;
    text-align: center;
    border-right: 1px solid #FBFAFB;
    font-size:12px;
}
.price .price_yu .yue{
    font-size:20px;
    color:#ED9B29;
}
.price .price_yu .youhui{
    font-size:20px;
    color:red;
}
.price .price_yu .jifen{
    font-size:20px;
    color:green;
}
.newList ul li{
   padding:15px 5px;
   margin:0 5px;
   border-bottom: 1px solid #E5E4E5;
}
.newList .jiantuo{
    color:#E5E4E5;
}
.profile_login .van-icon{
    color:#fff;
}
</style>