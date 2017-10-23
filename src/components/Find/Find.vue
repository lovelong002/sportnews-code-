<template>
  <div id="find">
    <div class="header">

      <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="navbar-size">NBA</span></mt-tab-item>
        <mt-tab-item id="2"><span class="navbar-size">新闻</span></mt-tab-item>
        <mt-tab-item id="3"><span class="navbar-size">数据</span></mt-tab-item>
        <mt-tab-item id="4"><span class="navbar-size">社区</span></mt-tab-item>
      </mt-navbar>

    </div>
    <div class="router-view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import { Navbar, TabItem } from 'mint-ui';

  Vue.component(Navbar.name, Navbar,TabItem.name, TabItem);
  export default{
      data(){
          return{
            nba:false,
            news:false,
            datas:false,
            com:false,
            selected:'1',
            pageScrollTop: 0
          }
      },
    watch:{
          selected(){

              if( this.selected == '1' ){
                this.$router.push({path:'/find/nba'})
                this.selected = '1'
              }else if( this.selected == '2' ){
                  this.$router.push({path:'/find/news'})

              }else if( this.selected == '3' ){
                this.$router.push({path:'/find/datas'})

              }else if( this.selected == '4'){
                  this.$router.push({path:'/find/com'})
              }
            this.$store.commit('routerVal',this.$route.fullPath)
          },
      pathName(){
              if( this.pathName == 'Nba'){
                  this.selected = '1'
              }else if( this.pathName == 'News'){
                this.selected = '2'
              }else if( this.pathName == 'Datas'){
                this.selected = '3'
              }else if( this.pathName == 'Com'){
                this.selected = '4'
              }
      }
    },
    deactivated(){     //表示keep-alive将被停用的时候会调用这个钩子函数
      this.pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop // 记录上下滚动位置
//      this.navScrollLeft = document.querySelector('.nav-wrap').scrollLeft  //左边滚动
      console.log(this.pageScrollTop);
    },
    activated(){    //表示keep-alive被停用的时候会调用这个钩子函数
      this.$router.push({path:this.$store.state.routerVal})
//      if( this.$store.state.routerVal == ''){
//          this.$router.push({path:'/find/nba'})
//      }
//      window.scrollTo(0, this.pageScrollTop)   //上下滚动赋值
//      document.querySelector('.nav-wrap').scrollLeft = this.navScrollLeft //左右滚动赋值
    },
    computed:{
      newsVal(){
          return this.$store.state.findNews.data.result
      },
      pathName(){
          return this.$route.name
      }
    },
    methods:{

    },

  }
</script>
<style scoped>


  .mint-navbar {
    display: -webkit-box;
    display: -ms-flexbox;
    position: fixed;
    text-align: center;
    top: 80px;
    left: 0;
    width: 100%;
    height:95px;
    align-items: center;
    border-bottom: 2px solid #ccc;
    background: white;
    z-index: 999;
    padding-top: 20px;
    /*box-sizing: border-box;*/
    /*background:green;*/
  }
  .mint-navbar .mint-tab-item{

    color: orangered;
    line-height: 23px ;
    margin-top: -35px;
    box-sizing: border-box;
    /*background: blue;*/

  }

 /* .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 9px solid #26a2ff;
  }*/



  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid orangered;
    border-top:none;
  }

.navbar-size{
  font-size: 38px;
}
/*  .router-view{
    padding: 0 15px;
  }*/


</style>
