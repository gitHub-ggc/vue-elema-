// 接口请求函数
export function getGitData(){
    return [
        {id:1,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:2,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:3,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:4,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:5,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:6,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:7,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
        {id:8,src:"https://img.yzcdn.cn/vant/apple-1.jpg",title:"华为手机"},
    ]
}
//商品列表数据请求
export function getShopListRequit(){
    return [
        {pingjia:1.6},
        {pingjia:2.6},
        {pingjia:1.2},
        {pingjia:1.9},
        {pingjia:5.6},
        {pingjia:4.7},
        {pingjia:4.4},
        {pingjia:3.6},
        {pingjia:1.6},
        {pingjia:2.5},
    ]
}
//短信登入
export function requireDuanXing(phone,paw){
    if(phone =="15879106402" && paw == "123456"){
        return {code:"0",phone:"1579106402",password:"123456"};
    }
  
}