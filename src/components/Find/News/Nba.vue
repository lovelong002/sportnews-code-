<template>
  <div id="nba">
    <!--banner-->

    <div class="top-bar">
      <div class="page-swipe">
        <mt-swipe :auto="3600" :show-indicators="false">
          <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
            <a :href="item.link">
              <div class="banner" :style="{background:'url('+item.img+')'}"></div>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>

    <!--banner-->
    <!--titleList-->
    <ul class="title-list">
      <li v-for="(val ,index) in findNbaVal.titleList">
        <a :href="val.url">
          <div class="title-list-content">
            <div class="title-list-title">
              <span v-text="val.player1"></span>
              <span>vs</span>
              <span v-text="val.player2"></span>
            </div>
            <div class="title-list-score">
              <div>
                <span v-text="val.player1score"></span>
                <span>-</span>
                <span v-text="val.player2score"></span>
              </div>
            </div>
            <div class="title-list-status">
              <p>
                <span v-text="val.status"></span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <!--titleList-->

    <!--Content-->
    <ul class="list-content">
      <li v-for="(val , index) in findNbaVal.contentList">
        <a :href="val.url">
          <ul class="list-content-ul">
            <li class="list-content-li">
              <div>
                <p v-text="val.content"></p>
              </div>
              <span v-text="val.answer"></span>
            </li>
          </ul>
        </a>
      </li>
    </ul>
    <!--Content-->
    <div class="footer-content">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem} from 'mint-ui';

  Vue.component(Swipe.name, Swipe, SwipeItem.name, SwipeItem);
  export default{
    data(){
      return {
        bannerList: [
          {
            'link': 'https://m.hupu.com/bbs/20538683.html',
            'img': 'static/find-nba-banner-01.png',
            'name': '01'
          },
          {
            'link': 'https://m.hupu.com/bbs/20534756.html',
            'img': 'static/find-nba-banner-02.png',
            'name': '02'
          }
        ],
      }
    },
    computed: {
      findNbaVal(){
        return this.$store.state.findNbaVal.data.result
      }
    },
    deactivated(){     //表示keep-alive将被停用的时候会调用这个钩子函数
      let pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop // 记录上下滚动位置
//      this.navScrollLeft = document.querySelector('.nav-wrap').scrollLeft  //左边滚动
        this.$store.commit('nbaPageScrollTop',pageScrollTop)
    },
    activated(){    //表示keep-alive被停用的时候会调用这个钩子函数

      window.scrollTo(0, this.$store.state.nbaPageScrollTop)   //上下滚动赋值
//      document.querySelector('.nav-wrap').scrollLeft = this.navScrollLeft //左右滚动赋值
    },
  }
</script>
<style scoped>
  #nba {
    padding-top: 190px;
  }

  /*banner*/
  .banner {
    height: 100%;
    background-size: cover !important;
  }

  .page-swipe {
    width: 100%;
  }

  .page-swipe .mint-swipe {
    height: 400px;
    color: #000000;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: blue;
    margin: 0 3px;
  }

  .mint-swipe-indicator.is-active {
    background: orangered;
  }

  /*titleList*/
  .title-list {

  }

  .title-list .title-list-content {
    width: 100%;
    height: 110px;
    display: flex;
    border-bottom: 2px solid #ccc;
  }

  .title-list li div{
    flex: 1;
  }

  .title-list li .title-list-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-list li .title-list-title span {
    font-size: 35px;

  }

  .title-list li .title-list-score {
    display: flex;
    align-items: center;
  }

  .title-list li .title-list-score div {
    font-size: 35px;
    background: red;
    width: 20px;
    line-height: 60px;
    border-radius: 50px;
    text-align: center;
    color: #fff;
  }

  .title-list li .title-list-status {
    display: flex;
    justify-content: flex-end;
  }

  .title-list li .title-list-status p {
    font-size: 30px;
    line-height: 100%;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-list li .title-list-status p span {
    display: inline-block;
    background: #0a66ff;
    padding: 20px;
    color: #fff;
  }

  /*titleList*/

  /*listContent*/
  .list-content li{
    width: 96%;
    margin: -1px auto 0;

  }
  .list-content li .list-content-ul li{
    width: 100%;
    padding:30px 0;
    border-top: 2px solid #ccc;
    color: #000;
  }
  .list-content li .list-content-ul li div p{
    font-size: 35px;
    line-height: 50px;
  }
  .list-content li .list-content-ul li span{
    font-size: 33px;
    color: rgba(0,0,0,0.5);
    margin-left: 500px;
  }
  /*listContent*/
  .footer-content {
    width: 100%;
    height: 60px;
    background: #ccc;
    font-size: 28px;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .footer-content p{
    background: #fff;
    width: 450px;
    line-height: 45px;
    border-radius: 40px;
    color: #ff0000;
  }
</style>

