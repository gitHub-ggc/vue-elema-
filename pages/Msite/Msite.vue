<template>
  <div id="msite">
    <div class="head">
      <router-link to="/seach" style="color:#fff;font-size:20px;"><van-icon name="search" style="font-size:20px;vertical-align: middle;" /></router-link>
      <span style="display:inline-block;margin:0 90px;">昌平区北七家宏福...</span>
      <span v-if="showLogin==false">登入/</span>
      <span v-if="showLogin==false">注册</span>
      <span v-else>ggc</span>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
      <van-swipe-item v-for="(item3,i) in arr" :key="i">
        <van-grid :border="false" :column-num="4" :gutter="30">
          <van-grid-item v-for="item in gitData" :key="item.id">
            <div>
              <van-image :src="item.src" />
              <span style="font-size:10px;margin-top:10px;">{{item.title}}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <div class="shopping" style="padding:10px;">
        <div style="font-size:15px;color:#ccc;margin-bottom:10px;">
            <van-icon name="wap-nav" style="vertical-align: middle;margin-right:5px;" />
            <router-link to="/betterScroll">
              <span>附近商家</span>
            </router-link>
        </div>
        <div class="shopList">
           <shopList :that="shopListData" />
        </div>
    </div>
  </div>
</template>
<script>
import { getGitData,getShopListRequit } from "../../http/http";
import shopList from "../../src/components/ShopList";
export default {
  data() {
    return {
      gitData: [],
      arr:[1,2,3,4],
      shopListData:[],
      showLogin:false
    };
  },
  created() {
    this.getGit();
    this.getShopListData();
    this.initShowLogin();
  },
  methods: {
    getGit() {
      this.gitData = getGitData();
    },
    getShopListData(){
        this.shopListData=getShopListRequit();
    },
    initShowLogin(){
      var usePhone=localStorage.getItem("usePhone");
      if(usePhone){
        this.showLogin=true;
      }
    }
  },
  components: {
      shopList
  },
  computed: {}
};
</script>
<style scope>
.head {
  height: 44px;
  background-color: #009475;
  line-height: 44px;
  padding: 0 5px;
  color: #fff;
  font-size: 15px;
}
.van-grid-item__content {
  padding: 5px 8px !important;
}
.van-grid-item {
  margin-top: 0 !important;
}
.van-grid{
   border-bottom:1px solid #ccc ;
   padding-bottom:20px;
}
.van-swipe__indicator{
    background-color:#000 !important;
}

</style>