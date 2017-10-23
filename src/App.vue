<template>
  <div id="app">
    <!--header-->
    <div class="header">
      <mt-header :title="selected" fixed>
        <!--这里需要配置返回到哪里的路由-->
        <mt-button icon="back" @click="goBack" slot="left" v-if="goBackVal">返回</mt-button>

      </mt-header>
    </div>
    <!--跳转到百度-->
    <div class="soso">
      <a href="https://m.baidu.com/?from=1012852s">搜一搜</a>
    </div>
    <!--跳转到百度-->

    <!--header-->

    <!--router-->

    <keep-alive>
      <router-view v-if="JSON.stringify(nbaData) !== '{}'"></router-view>
    </keep-alive>
    <!--router-->
    <div class="loadPage" v-if="JSON.stringify(nbaData) === '{}'">     <!--判断取回来的数据是否是一个空对象-->
      <p>亲～由于本网页面在国外,加载可能会久点哦～～加载中．．．</p>
      <mt-spinner :type="2" color="rgb(38, 162, 255)" :size="30"></mt-spinner>
    </div>


    <!--footer-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/1.png">
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/2.png">
        <span>发现</span>
      </mt-tab-item>
      <mt-tab-item id="关心">
        <img slot="icon" src="./assets/3.jpg">
        <span>关心</span>
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        <img slot="icon" src="./assets/0.png">
        <span>我的</span>
      </mt-tab-item>
    </mt-tabbar>
    <!--footer-->
    <!--loading-->
    <div class="loading" v-if="loadingVal">
      <span>加载中</span>
      <mt-spinner :type="3" color="rgb(38, 162, 255)" :size="30"></mt-spinner>
    </div>
    <!--loading-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Tabbar, TabItem, Spinner, Header} from 'mint-ui';

  Vue.component(Spinner.name, Spinner,Tabbar.name, Tabbar,Header.name, Header,TabItem.name, TabItem);


  export default {
    name: 'app',
    data() {
      return {
        selected: '首页',
        loadingPage: false,
        hideVal: true,


      }
    },
    created() {

      this.routerVal(this.$route.fullPath) //拿到当前的路由路径,进行下面的判断
      this.$store.dispatch('getDatas')
      this.$store.dispatch('findNewsval')
      this.$store.dispatch('findNbaVal')
      this.$store.dispatch('dataListVal')
      this.$store.dispatch('comVal')

    },

    computed: {
      nbaData() {
        return this.$store.state.nbaData
      },
      goBackVal(){
        return this.$store.state.goBackVal
      },
      pathName(){
        return this.$route.name
      },
      routerValBack(){   // 获取当前路由的全路径
          return this.$route.fullPath
      },
      loadingVal(){
          return this.$store.state.loading
      }
    },

    methods: {
      goBack () {
        this.$router.go(-1)
        this.$store.commit('turnOffGoBackVal')
      },

      routerVal(val){
        if( val.indexOf('home') !== -1 ){   //用indexof判断拿到的路由地址是不是home,如果不是home就返回-1
           this.selected = '首页'
       }else if( val.indexOf('find') !== -1 ){
         this.selected = '发现'
       }else if( val.indexOf('concern') !== -1 ){
         this.selected = '关心'
       }else if( val.indexOf('mine') !== -1 ){
         this.selected = '个人中心'
       }
      }

    },
    watch: {
      selected() {
        let routerVal = ''
        if (this.selected == '首页') {
          routerVal = '/home'
        } else if (this.selected == '发现') {
          routerVal = '/find'
        } else if (this.selected == '关心') {
          routerVal = '/concern'
        } else if (this.selected == '个人中心') {
          routerVal = '/mine'
        }
        this.$router.push({path: routerVal})

      },
      routerValBack(){
        this.routerVal(this.$route.fullPath)
        if( this.routerValBack === '/find'){  //如果当前的路由是/find,那么就加载到nba
            this.$router.push({path: this.$store.state.routerVal})

        }
      },

    },

  }
</script>

<style scoped>
  .header {
    z-index: 999;
  }

  .mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #26a2ff;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }

  .mint-header .mint-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit
  }

  .mint-header .mint-button::after {
    content: none;
  }

  .mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }

  .mint-header-button {
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
  }

  .mint-header-button > a {
    color: inherit;
  }

  .mint-header-button.is-right {
    text-align: right;
  }

  .mint-header-button.is-left {
    text-align: left;
  }

  .mint-header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .soso {
    width: 130px;
    border-radius: 20px;
    font-size: 30px;
    background: #ffffff;
    position: fixed;
    top: 9px;
    right: 13px;
    text-align: center;
    line-height: 60px;
    z-index: 999;
  }

  .soso a {
    text-decoration: none;
    color: #0a66ff;
  }

  .mint-tab-item span {
    font-size: 30px;
    box-sizing: border-box;
  }

  .mint-tabbar {
    border-top: 1px solid #ccc;
  }

  .mint-header {

    font-size: 35px;
    height: 80px;

  }

  .loadPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
    margin: 100px auto;

  }

  .loadPage p {
    color: #000;
    font-size: 30px;
    margin-left: 20px;
  }

  .loading {
    position: fixed;
    width: 400px;
    height: 100px;
    top: 1100px;
    left: 50%;
    margin-left: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading span {
    font-size: 30px;
    margin-right: 40px;
    color: #000;
  }
</style>
