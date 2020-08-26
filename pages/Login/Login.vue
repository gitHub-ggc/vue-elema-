<template>
  <div id="login">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <h2 style="color:#00886b;text-align:center;margin:30px 0;font-size:30px;">硅谷外卖</h2>
    <van-form ref="dunxingForm" id="0" @submit="onSubmit">
    <van-tabs v-model="active">
      <!-- <van-form ref="dunxingForm" id="0" @submit="onSubmit"> -->
         <van-tab title="短信登入">
           <van-cell-group>
             <div style="position: relative">
               <van-field name="a"  type="number" v-model="text_value" placeholder="手机号" :rules="[{ required: true,trigger:'onChange',message: '请填写用户名' }]" />
               <div ref="mybox" class="yanzheng" :id="colorStyle ? 'abc':''" :class="colorStyle ? 'ccc':''" @click="handYanZheng()">{{title}}</div>
             </div>
             <van-field  name="b" type="password" v-model="text_value2" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
           </van-cell-group>
         </van-tab>
       <!-- </van-form> -->
      <van-tab  title="密码登入" :id="text_values">
          <van-cell-group>
          <van-field name="c" :rules="[{ required: true,trigger:'onChange',message: '请填写用户名' }]" type="text" v-model="text_value4" placeholder="手机/邮箱/用户名" />
          <div style="position: relative;">
              <van-field name="d" :rules="[{ required: true, message: '请填写密码' }]" ref="pwd" :type="text_type" v-model="text_value3" placeholder="密码"/>
              <van-switch @change="switchChange()" style="position: absolute;top:12px;right:50px" v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
          </div>
          <van-field name="f" :rules="[{ required: true, message: '请填写' }]" style="number" v-model="text_value5" placeholder="验证码" /> 
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <p style="font-size:12px;width:80%;margin:10px auto;">温馨提示:未注册硅谷外卖账号的手机号,登录时将自动注册,且代表已同意 
        <span style="color:#00886b">用户服务协议</span>
    </p>
    <div style="text-align:center;margin-top:40px;">
        <van-button  type="primary" style="border-radius:4px;padding:10px 150px;font-size:20px;">登录</van-button>
    </div>
   </van-form>
    <p style="text-align:center;margin-top:20px;color:#999;font-size:12px;">关于我们</p>
  </div>
</template>
<script>
import {requireDuanXing} from "../../http/http";
export default {
  data() {
    return {
      active: 0,
      text_value: "",
     text_value2: "",
     checked: true,
    text_value3: "",
    text_value4: "",
    text_value5: "",
    colorStyle:false,
    title:"获取验证码",
    time:60,
    showPwd:false,
    text_type:"password"
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    checkPhone(mes){ 
     if((/^1[3456789]\d{9}$/.test(mes))){ 
        this.colorStyle=true;
        return false; 
      }else{
        this.colorStyle=false;
        return false; 
      }
    },
   handYanZheng(){
      this.colorStyle=false;
       var that=this;
       if(this.text_value ==""){
         return;
       }
       var timeName=setInterval(function(){
        that.time=that.time-1;
        that.title="已发送("+that.time+")"
        if(that.time==0){
          clearInterval(timeName);
          that.time=60;
          that.colorStyle=true;
          that.title="重新获取";
          return;
        }
      },1000)
   },
   switchChange(){
     this.showPwd=!this.showPwd;
     if(this.showPwd){
       this.text_type="text";
     }else{
      this.text_type="password";
     } 
   },
    onSubmit() {
       const res=requireDuanXing(this.text_value,this.text_value2);
       var id=res.code;
       if(id==0){
         localStorage.setItem("usePhone",res.phone);
         localStorage.setItem("usePwa",res.password);
         this.text_value="";
         this.text_value2="";
         this.$router.push("/profile")
       }else{
         this.$toast("手机号码或者密码错误");
       }
       if(id==1){
         localStorage.setItem("usePhone",res.phone);
         localStorage.setItem("usePwa",res.password); 
       }
    },
   },
  computed:{
    text_values(){
      let all=this.text_value
      this.checkPhone(all)
      return all;
    }
  }
};
</script>
<style scope>
#login .van-nav-bar .van-icon {
  color: #ccc;
  font-size: 25px;
}
#login .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0;
}
.van-tabs--line .van-tabs__wrap {
  padding: 0 100px;
}
.van-tabs__line {
  transition-duration: 0s !important;
}
#login .van-tabs__nav--line {
  padding-bottom: 10px;
}
#login .van-tab--active {
  color: #00886b;
  font-weight: 900;
}
#login .van-cell{
   margin:0 auto;
   width:80%;
   border:1px solid #ccc;
   margin-top:10px;
}
#login .van-switch{
    height: 20px;
    width:50px;
}
#login .van-switch .van-switch__node{
    height: 20px;
    width:20px;
}
.yanzheng{
  position: absolute;
  right:50px;
  top:12px;
  font-size:12px;
  color:#ccc
}
#abc{
  color:#000;
}
.ccc{
  color:#ccc;
}
</style>