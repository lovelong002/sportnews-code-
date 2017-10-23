<template>
  <div id="about" >
   <div class="about-wrap">
     <div class="top">
       <p>以下为此项目所用技术栈</p>
     </div>
     <ul>
       <li>
         <p>使用Vue-cli构建项目</p>
         <span></span>
       </li>
       <li>
         <p>使用Vue.js 2.0</p>
         <span></span>
       </li>
       <li>
         <p>Vue-router实现路由处理</p>
         <span></span>
       </li>
       <li>
         <p>使用Vuex进行状态管理</p>
         <span></span>
       </li>
       <li>
         <p>Vue-resource异步请求数据</p>
         <span></span>
       </li>
       <li>
         <p>axios异步请求调试数据</p>
         <span></span>
       </li>
       <li>
         <p>使用mint-ui组件</p>
         <span></span>
       </li>
       <li>
         <p>使用手淘flexible2.0方案实现可伸缩布局</p>
         <span></span>
       </li>
       <li>
         <p>mockjs实现前后端分离开发</p>
         <span></span>
       </li>
     </ul>
   </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{}
      }
  }
</script>
<style scoped>
  .about-wrap{
    margin-top: 120px;
  }
  .top p{
    width: 600px;
    line-height: 100px;
    background: #ffa500;
    color: #fff;
    font-size: 44px;
    border-radius: 50px;
    text-align: center;
    margin: 0 auto 40px;
  }
  .about-wrap ul li{
    font-size: 35px;
    line-height: 80px;
    border-bottom: 2px dashed #ccc;
    padding-left: 45px;
    color: rgba(0,0,0,0.7);
    position: relative;
    top: 0;
    left: 0;
  }
  .about-wrap ul li:nth-child(1){
    border-top: 2px dashed #ccc;
  }
  .about-wrap ul li span{
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 50%;
    margin-top:-10px;
    left: 10px;
    border-radius: 100% ;
  }
</style>
