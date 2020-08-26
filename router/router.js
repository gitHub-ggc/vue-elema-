import Vue from "vue";
import vueRouter from "vue-router";
const Msite = ()=>import("../pages/Msite/Msite.vue")
import Profile from "../pages/Profile/Profile.vue"
import Order from "../pages/Order/Order.vue"
import Seach from "../pages/Seach/Seach.vue";
import Login from "../pages/Login/Login.vue";
import ShopDetail from "../pages/ShopDetail/ShopDetail.vue"
import PingJai from "../pages/ShopDetail/PingJia.vue"
import ShangJai from "../pages/ShopDetail/ShangJai.vue"
import DianCan from "../pages/ShopDetail/DianCan.vue"
const BetterScroll = ()=>import("../pages/Better_scroll/Better_scroll.vue")
Vue.use(vueRouter);
const router=new vueRouter({
    routes:[
      {
          path:"/",
          redirect:"/msite",
          meta:{
              footHidden:true
          }
        },
        {
          path:"/betterScroll",
          component:BetterScroll
        },
      {
          path:"/seach",
          component:Seach,
          meta:{
            footHidden:true
        }
        },
      {
          path:"/profile",
          component:Profile,
          meta:{
            footHidden:true
        }
        },
      {
          path:"/order",
          component:Order,
          meta:{
            footHidden:true
        }
        },
      {
          path:"/msite",
          component:Msite,
          meta:{
            footHidden:true
        }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                footHidden:false
            }
        },{
          path:"/shopDetail/:id",
          component:ShopDetail,
          meta:{
            footHidden:false
          },
          children:[
            {
              path:"/dianCan",
              component:DianCan
            },
            {
              path:"/pingJia",
              component:PingJai
            },
            {
              path:"/shangJai",
              component:ShangJai
            },
            {
              path:"/",
              redirect:"/dianCan"
            }
          ]
        }
    ]
})
export default router 
