<template>
  <div id="home">
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

    <!--title-->
    <div class="title">
      <p><span class="title-number">NBA-2K15</span><span class="title-text">火爆登场</span></p>
    </div>
    <!--title-->
    <!--newsList-->
    <div class="news">
      <ul class="news-ul" v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="60">
        <li class="news-time" v-for="(val,index) in nbaData">
          <div class="news-time-box">
            <p class="news-time-text">
              <span>2017-</span>{{val.title}}
              <span v-text="status[index]"></span>
            <ul class="circle left">
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
            </ul>
            <ul class="circle right">
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
              <li :style="{background:color[colorIndex]}"></li>
            </ul>
            </p>
          </div>
          <ul>
            <li class="news-list" v-for="(val,index) in val['tr']">
              <a :href="val.link1url">
                <ul class="news-content">
                  <li>
                    <span v-text="val.player1"></span>
                    <img :src="val.player1logo" alt="logo">
                  </li>
                  <li>
                    <p v-text="val.score"></p>
                    <p>
                      <span v-text="val.time"></span>
                    </p>
                  </li>
                  <li>
                    <img :src="val.player2logo" alt="logo">
                    <span v-text="val.player2"></span>
                  </li>
                </ul>
              </a>

            </li>
          </ul>
        </li>
      </ul>

    </div>
    <!--newsList-->
    <div class="footer-content">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import {Navbar, TabItem, InfiniteScroll, Swipe, SwipeItem} from 'mint-ui';

  Vue.component(Navbar.name, Navbar, TabItem.name, TabItem, Swipe.name, Swipe, SwipeItem.name, SwipeItem);
  Vue.use(InfiniteScroll)


  export default {
    name: 'HelloWorld',
    data() {
      return {
        bannerList: [
          {
            'link': 'http://sports1.sina.cn',
            'img': 'static/nba.png',
            'name': 'NAB'
          },
          {
            'link': 'http://sports.sina.cn/cba',
            'img': 'static/cba.png',
            'name': 'CBA'
          },
          {
            'link': 'http://sports.sina.cn/laliga/index.d.html',
            'img': 'static/eastja.png',
            'name': '西甲'
          },
          {
            'link': 'http://sports.sina.cn/premierleague/index.d.html',
            'img': 'static/englishsuper.png',
            'name': '英超'
          }
        ],
        color: ['#ccc', 'skyblue', 'greenyellow', 'pink'],
        status: ['已结束', '直播中', '未开赛'],
        colorIndex: 0,
        loading: false,
        nbaData: [],
        nbaDataIndex: 0
      }
    },
    computed: {
      nbaDataAll() {
        return this.$store.state.nbaData.list
      },


    },
    created () {
      this.nbaData.push(this.nbaDataAll[0])  //当实例一创建就将后台返回的第0个数据添加到nbaData中,被渲染
    },
    methods: {
      loadMore() {


        if (this.nbaDataIndex < this.nbaDataAll.length - 1) { //判断
          this.loading = true; //表示继续加载,往下走
          this.$store.commit('loading',true)
        let that = this
         /* setTimeout( () => {
            this.nbaDataIndex++
          this.nbaData.push(this.nbaDataAll[this.nbaDataIndex])  ////添加第n个数据
          this.loading = false;  //停止往下走
          this.$store.commit('loading',false)
          }, 1000)*/
         setTimeout(function () {
           that.nbaDataIndex++
           that.nbaData.push(that.nbaDataAll[that.nbaDataIndex])  ////添加第n个数据
           that.loading = false;  //停止往下走
           that.$store.commit('loading',false)
         },1000)


        }



      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .banner {
    height: 100%;
    background-size: cover !important;
  }

  .page-swipe {
    height: 300px;
    width: 100%;
    margin-top: 80px;

  }

  .page-swipe .mint-swipe {
    height: 300px;
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

  /*title*/
  .title {
    width: 100%;
    border-top: 5px solid #ccc;
    line-height: 80px;
    overflow: hidden;
    background: deepskyblue;
    text-align: center;
    font-size: 45px;
  }

  .title .title-number {
    font-weight: bold;
    margin-right: 20px;
    color: #fff;
  }

  .title .title-text {
    color: #fdfe09;
    font-weight: bold;
  }

  /*News*/

  .news-ul {
    width: 100%;
  }

  .news-time {
    width: 100%;
  }

  .news-list {
    width: 100%;
    border-top: 2px solid #ccc;
    box-sizing: border-box;
    height: 230px;
  }

  .news-list .news-content {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }

  .news-list .news-content li {
    flex: 1;
  }

  .news-list .news-content li:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .news-list .news-content li:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .news-list .news-content li span {
    font-size: 35px;
  }

  .news-list .news-content li:nth-child(1) img {
    width: 80px;
    margin-left: 10px;
  }

  .news-list .news-content li:nth-child(3) img {
    width: 80px;
    margin-right: 10px;
  }

  .news-list .news-content li:nth-child(2) p:nth-child(1) {
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: bold;
    box-sizing: border-box;
    padding-top: 60px;
  }

  .news-list .news-content li:nth-child(2) p:nth-child(2) {
    display: flex;
    justify-content: center;
    font-size: 20px;
    background: #ffa500;
    margin-bottom: -40px;
    margin-top: 40px;
    line-height: 60px;
    color: #fff;
    border-radius: 40px;
  }

  /*news的时间*/
  .news-time .news-time-box {
    height: 130px;
    border-top: 2px solid #ccc;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
  }

  .news-time .news-time-box .news-time-text {
    height: 110px;
    width: 530px;
    background: #fff;
    font-size: 35px;
    font-weight: bold;
    margin: 10px auto;
    -webkit-border-radius: 70px;
    -moz-border-radius: 70px;
    border-radius: 70px;
    text-align: center;
  }

  .news-time .news-time-box .news-time-text span:nth-child(1) {
    display: inline-block;
    font-size: 35px;
    font-weight: bold;
    margin-top: 15px;
  }

  .news-time .news-time-box .news-time-text span:nth-child(2) {
    display: block;
    font-size: 30px;
    color: #fff;
    background: deepskyblue;
    width: 160px;
    line-height: 40px;
    margin: 10px auto 0px;
    border-radius: 40px;
  }

  .news-time .circle li {
    width: 9px;
    height: 9px;
    margin-top: 7px;
    background: white;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .news-time .left {
    float: left;
    margin-top: -80px;
    margin-left: 30px;
  }

  .news-time .right {
    float: right;
    margin-top: -80px;
    margin-right: 30px;
  }

  .footer-content {
    width: 100%;
    height: 60px;
    background: #ccc;
    font-size: 28px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-content p {
    background: #fff;
    width: 450px;
    line-height: 45px;
    border-radius: 40px;
    color: #ff0000;
  }


</style>
