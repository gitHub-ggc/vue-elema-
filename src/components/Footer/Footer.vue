<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item badge="3" icon="shop"  to="/msite">外卖</van-tabbar-item>
      <van-tabbar-item icon="search" to="/seach">搜索</van-tabbar-item>
      <van-tabbar-item icon="column" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data(){
        return{
            active: 0,
        }
    }
};
</script>
<style scope>
</style>