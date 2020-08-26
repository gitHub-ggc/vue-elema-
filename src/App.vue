<template>
  <div id="app">
    <router-view></router-view>
    <footers v-if="$route.meta.footHidden"/>
  </div>
</template>

<script>
import footers from "./components/Footer/Footer.vue"

export default {
  name: 'App',
  components: {
    footers
  }
}
</script>


<style scope>
   *{
     margin:0;
     padding:0;
   }
</style>
