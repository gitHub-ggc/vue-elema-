<template>
  <div id="dianCan">
    <div class="title">{{headTitle}}</div>
    <div ref="wrapper">
      <div class="left">
        <router-link to>
          <div class="left_title" @click="handLeft(0,$event)" :class="(isAction==0 ?'curent':'')">优惠</div>
        </router-link>
        <router-link to>
          <div class="left_title" @click="handLeft(1,$event)" :class="(isAction==1 ?'curent':'')">折扣</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(2,$event)"
            :class="(isAction==2 ?'curent':'')"
          >皮蛋肉粥</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(3,$event)"
            :class="(isAction==3 ?'curent':'')"
          >红烧鱼头1</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(4,$event)"
            :class="(isAction==4 ?'curent':'')"
          >红烧鱼头2</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(5,$event)"
            :class="(isAction==5 ?'curent':'')"
          >红烧鱼头3</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(6,$event)"
            :class="(isAction==6 ?'curent':'')"
          >红烧鱼头4</div>
        </router-link>
        <router-link to>
          <div
            class="left_title"
            @click="handLeft(7,$event)"
            :class="(isAction==7 ?'curent':'')"
          >红烧鱼头5</div>
        </router-link>
      </div>
    </div>
    <div class="right">
      <div class="shopCade" v-for="(item,index) in 16" :key="index">
        <div class="boxImg" @click="handImg()">
          <img src="~@/assets/images/5.jpg" alt />
        </div>
        <div class="boxRight">
          <div style="font-weight:900;color:#333;">{{name}}</div>
          <div style="color:#ccc">兰州</div>
          <div style="color:#ccc;font-size:12px;">
            <span style="margin-right:20px;">月销售91份</span>
            <span>好评度100%</span>
          </div>
          <div style="margin-top:5px;">
            <span style="margin-left:70px;font-size:15px;color:red">$ 9</span>
            <span class="add" @click="handAdd(index)">+</span>
            <span class="num" v-if="isShowSub1>=0">{{getNum(index)}}</span>
            <span class="sub" @click="handSub($event)" v-if="isShowSub2>=1">-</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footers" v-if="isShowFooter">
      <van-icon name="shopping-cart" />
      <div style="margin-top:5px;float:left;">
        <div style="margin-left:90px;color:#fff;">$ 0</div>
        <span style="margin-left:75px;font-size:15px;color:#656B76;">配送费 $4元</span>
      </div>
      <div
        style="color:#fff;float:right;font-size:15px;padding:15px 20px;background-color:#2C333C"
      >$ 20元起送</div>
    </div>
     
  </div>
</template> 
<script>
// import BScroll from "better-scroll";
// import BScroll from '@better-scroll/core'
import eventBus from "../../src/components/EventBas/EventBus";
export default {
  data() {
    return {
      isAction: 0,
      titleArr: [
        "折扣",
        "皮蛋肉粥",
        "红烧鱼头",
        "红烧鱼头",
        "红烧鱼头",
        "红烧鱼头",
        "红烧鱼头"
      ],
      name: "",
      headTitle: "",
      scrollY: 0,
      tops: [],
      n1:0,
      n2:1,
      n3:2,
      n4:3,
      num: [0,1,3,4,2,5,6,7,8,9],
      isShowSub1: 0,
      isShowSub2: 0,
      isShowFooter:true
    };
  },
  methods: {
    handLeft(mes, el) {
      this.isAction = mes;
      this.name = el.target.innerText;
      this.headTitle = el.target.innerText;
    },
    handLeftInit() {
      this.isAction = 0;
      this.name = "优惠";
      this.headTitle = "优惠";
      eventBus.$on("myBorther",(mes)=>{
          this.isShowFooter=mes;
      })
    },
    handAdd(mes) {
      if(mes==1){
        this.isShowSub2++;
        this.num++;
        this.isShowSub1++;
      }
    },
    handSub(el) {
      console.log(666, el);
      this.isShowSub--;
      this.num--;
    },
    handImg(){
       this.isShowFooter=false;
       eventBus.$emit("myFun","true");
    },
    getNum(mes){
        if(mes == 1){
           return this.n1;
        }else if(mes == 2){
          return this.n2;
        }else if(mes == 3){
          return this.n3;
        }else if(mes == 0){
          return this.n4+5;
        }
    }
  },
  created() {
    this.handLeftInit();
  },
  components:{
      
  }
};
</script>
<style scope>
#dianCan {
  position: relative;
  height: 600px;
}
.title {
  font-size: 12px;
  background-color: #f4f4f8;
  margin-top: 10px;
  padding: 10px 100px;
  color: #ccc;
}
.left {
  position: absolute;
  margin-top: 5px;
  top: 0;
  height: 700px;
}
.left_title {
  font-size: 12px;
  padding: 20px 20px;
  background: #f4f4f8;
  color: #333;
  font-weight: 900;
}
.curent {
  background: #fff;
  color: teal;
}
.right {
  margin-left: 100px;
  height: 100%;
  overflow: scroll;
}
.shopCade {
  margin-top: 20px;
  margin-bottom: 30px;
}
.boxImg {
  width: 60px;
  height: 60px;
  float: left;
  margin-right: 10px;
}
.boxImg > img {
  width: 100%;
  height: 100%;
}
.add {
  color: #fff;
  background-color: teal;
  float: right;
  margin-right: 30px;
  padding: 3px 7px;
  border-radius: 50%;
  font-size: 20px;
}
.num {
  color: #000;
  float: right;
  margin-right: 30px;
  font-size: 20px;
}
.sub {
  color: #fff;
  background-color: teal;
  float: right;
  margin-right: 30px;
  padding: 1px 8px;
  border-radius: 50%;
  font-size: 20px;
}
.footers {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #141d28;
  width: 100%;
  height: 50px;
}
#dianCan .van-icon {
  color: #fff;
  padding: 15px;
  background: #29333d;
  border-radius: 50%;
  border: 5px solid #141d28;
  position: absolute;
  top: -20px;
  font-size: 20px;
  left: 15px;
}
</style>