import Mock from "mockjs";
import index from "./index.json";


  // 请求该url，就可以返回newsList
  Mock.mock('/mock/news',"post", {code:0,data:index[0].name}) // 后面讲这个api的使用细节
  //搜索接口请求
  Mock.mock("/seach/dec","get",{code:0,data:index[0].seachDecC})
  //滑动数据接口请求
  Mock.mock("/api/betterScroll","get",{code:0,data:index[0].betterScroll})