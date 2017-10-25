<!--<template>
  <div id="nba">
    &lt;!&ndash;banner&ndash;&gt;

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

    &lt;!&ndash;banner&ndash;&gt;
    &lt;!&ndash;titleList&ndash;&gt;
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
    &lt;!&ndash;titleList&ndash;&gt;

    &lt;!&ndash;Content&ndash;&gt;
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
    &lt;!&ndash;Content&ndash;&gt;
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
</style>-->

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
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <li v-for="(val,index) in nbaContentList">
        <ul class="list-content">
          <li v-for="(val , index) in val">
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
      </li>
    </ul>

    <!--Content-->
    <div class="footer-content" v-if="nbaFooterVal">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>
    <!--loading-->
    <div class="loading" v-if="nbaLoadingVal">
      <span>加载中</span>
      <mt-spinner :type="3" color="rgb(38, 162, 255)" :size="30"></mt-spinner>
    </div>
    <!--loading-->
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem, InfiniteScroll} from 'mint-ui';

  Vue.use(InfiniteScroll)
  Vue.component(Swipe.name, Swipe, SwipeItem.name, SwipeItem);
  export default{
    data(){
      return {
        bannerList: [
          {
            'link': 'https://m.hupu.com/bbs/20538683.html',
            'img': 'static/find/nba/find-nba-banner-01.png',
            'name': '01'
          },
          {
            'link': 'https://m.hupu.com/bbs/20534756.html',
            'img': 'static/find/nba/find-nba-banner-02.png',
            'name': '02'
          }
        ],
        nbaContentList: [],
        nbaContentListIndex: 0,

      }
    },

    computed: {
      findNbaVal(){
        return this.$store.state.findNbaVal.data.result
      },
      nbaLoadingVal(){
        return this.$store.state.nbaLoadingVal
      },
      nbaFooterVal(){
        return this.$store.state.nbaFooterVal
      },
      nbaScrollVal(){
        return this.$store.state.nbaScrollVal
      }
    },

    created(){
      this.nbaContentList.push(this.findNbaVal.contentList[0])

    },
    activated(){    //表示进入该组件的时候会调用这个钩子函数
      window.scrollTo(0, this.nbaScrollVal)   //上下滚动赋值
//      document.querySelector('.nav-wrap').scrollLeft = this.navScrollLeft //左右滚动赋值
    },
    deactivated(){     //表示离开该组件时候会调用这个钩子函数
      let scrollVal = document.documentElement.scrollTop || document.body.scrollTop // 记录上下滚动位置
//      this.navScrollLeft = document.querySelector('.nav-wrap').scrollLeft  //左边滚动
      this.$store.commit('nbaScrollVal', scrollVal)

    },
    watch: {
      nbaContentListIndex(){
        if (this.nbaContentListIndex == this.findNbaVal.contentList.length - 1) {
          this.$store.commit('nbaFooterVal', true)
        }
      }
    },
    methods: {
      loadMore(){

        if (this.nbaContentListIndex < this.findNbaVal.contentList.length - 1) {
          this.loading = true;
          this.$store.commit('nbaLoadingVal', true)

          setTimeout(() => {
            this.nbaContentListIndex++
            this.nbaContentList.push(this.findNbaVal.contentList[this.nbaContentListIndex])
//              that.loading = false
            this.$store.commit('nbaLoadingVal', false)
          }, 2000)
        }
      }
    }
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

  .title-list li div {
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
  .list-content li {
    width: 96%;
    margin: -1px auto 0;

  }

  .list-content li .list-content-ul li {
    width: 100%;
    padding: 30px 0;
    border-top: 2px solid #ccc;
    color: #000;
  }

  .list-content li .list-content-ul li div p {
    font-size: 35px;
    line-height: 50px;
  }

  .list-content li .list-content-ul li span {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.5);
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

  .loading {
    position: fixed;
    width: 400px;
    height: 100px;
    bottom: 95px;
    left: 50%;
    margin-left: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .loading span {
    font-size: 30px;
    margin-right: 40px;
    color: #000;
  }
</style>
