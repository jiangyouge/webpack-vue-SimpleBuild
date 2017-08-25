<template> 
  <div class="app">
  <!-- 整个系统的头部 -->
  <mt-header fixed title="vuejs内容管理系统"></mt-header>
  
  <!-- 路由占位，将来所有的组件都是替换这个位置来实现页面的跳转
  这也是一个单页系统的实现 -->
  <router-view></router-view>

  <!-- 整个系统的底部 -->
  <nav  class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/Home">
      <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </router-link>

    <router-link class="mui-tab-item" to="/member">
    <span class="mui-icon mui-icon-contact">
        
      </span>
      <span class="mui-tab-label">会员</span>
    </router-link>

    <router-link class="mui-tab-item" to="/shopcar">
    <span class="mui-icon mui-icon-home">
      <span class="mui-badge">9</span>
    </span>
      <span class="mui-tab-label">购物车</span>
    </router-link>

    <router-link class="mui-tab-item" to="/search">
      <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
  </div>
</template>

<script>


  export default{
    // data(){
    //   return {

    //   }
    // }   
  }

</script>

<style>
  
</style>