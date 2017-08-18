//1.0 导入相关包
import Vue from 'vue';
import vueRouter from 'vue-router'
// import vueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$axios = axios;


//1.0.2 导入mui相关的css
import '../statics/mui/css/mui.css';
import '../statics/mui/css/icons-extra.css'

// import '../statics/mui/js/mui.min.js'


import mintUI from 'mint-ui'
Vue.use(mintUI);
// Vue.use(axios)


//导入mint-ui的css
import 'mint-ui/lib/style.min.css';

//导入我们自己定义好的全局样式，可以用来覆盖mint-ui和mui中的样式
import '../statics/css/site.css';

//2.0 在Vue中加载vueRouter 
Vue.use(vueRouter);
// Vue.use(vueResource);  //使用vueResource 对象才能自动在Vue对象实例上挂在一个$http

//2.0.1 在Vue上注册一个全局过滤器名称叫做 tolowercase1
Vue.filter('tolowercase',function(input){
  return input.toLowerCase() +'  ->from global';
});


//3.0 定义路由规则对象
import App from './App.vue'
import Home from './components/Home/Home.vue';
import member from './components/member/member.vue';
import shopcar from './components/shopcar/shopcar.vue';
import search from './components/search/search.vue';

let router = new vueRouter({
  linkActiveClass:'mui-active',
  routes:[
    //表示浏览器如果访问的是http://localhost:3008/#/ 或者http://localhost:3008这种形式
    //则直接跳转到http://localhost:3008/#/Home，那么vue-router就会自动加载Home
    {name:'root',path:'/',redirect:'/Home'}, 
    {name:'home',path:'/Home',component:Home},
    {name:'member',path:'/member',component:member},
    {name:'shopcar',path:'/shopcar',component:shopcar},
    {name:'search',path:'/search',component:search}
  ]
});

//4.0 使用router
new Vue({
  el:'#app',
  router,
  render:c=>c(App)
});