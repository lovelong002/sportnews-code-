<template>
  <div id="nba">
    <div class="title">
      <p><span>NBA</span>经典数据排行榜</p>
    </div>
    <ul class="circle-left">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="circle-right">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="east">
      <ul class="east-title">
        <li>东部排行</li>
        <li>胜</li>
        <li>负</li>
        <li>胜场差</li>
        <li>胜率</li>
        <li>近况</li>
      </ul>
      <ul class="list-content" v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="0">
        <li v-for="(val,index) in dataListVal.eastList">
          <a :href="val.url">
            <ul class="content-list">
              <li class="number">
                <span v-text="val.num"></span>
                <span v-text="val.name"></span>
              </li>
              <li><span v-text="val.win"></span></li>
              <li><span v-text="val.false"></span></li>
              <li><span v-text="val.value"></span></li>
              <li><span v-text="val.winner"></span></li>
              <li><span v-text="val.status"></span></li>
            </ul>
          </a>

        </li>
      </ul>
    </div>

    <div class="west" v-if="dataShowVal">
      <ul class="west-title">
        <li>西部排行</li>
        <li>胜</li>
        <li>负</li>
        <li>胜场差</li>
        <li>胜率</li>
        <li>近况</li>
      </ul>
      <ul class="list-content">
        <li v-for="(val,index) in dataListVal.westList">
          <a :href="val.url">
            <ul class="content-list">
              <li class="number">
                <span v-text="val.num"></span>
                <span v-text="val.name"></span>
              </li>
              <li><span v-text="val.win"></span></li>
              <li><span v-text="val.false"></span></li>
              <li><span v-text="val.value"></span></li>
              <li><span v-text="val.winner"></span></li>
              <li><span v-text="val.status"></span></li>
            </ul>
          </a>

        </li>
      </ul>
    </div>

    <div class="footer-content">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import {InfiniteScroll} from 'mint-ui';
  Vue.use(InfiniteScroll);

  export default{
    data(){
      return {}
    },
    computed: {
      dataListVal(){
        return this.$store.state.dataListVal.data.result
      },
      dataShowVal(){
        return this.$store.state.dataShowVal
      },
      dataScrollVal(){
        return this.$store.state.dataScrollVal
      }
    },
    activated(){
      window.scrollTo(0, this.dataScrollVal)
    },
    deactivated(){
      let scrollVal = document.documentElement.scrollTop || document.body.scrollTop
      this.$store.commit('dataScrollVal', scrollVal)
    },
    methods: {
      loadMore(){
        this.loading = true
        this.$store.commit('dataShowVal', true)
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .title {
    width: 100%;
    line-height: 80px;
    position: absolute;
    top: 195px;
    left: 0;
    border-bottom: 2px solid #ccc;
    text-align: center;
  }

  .title p {
    font-size: 35px;
    font-style: italic;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 5px;
  }

  .title p span {
    color: red;
    font-size: 40px;
    margin-right: 10px;
  }

  .circle-left {
    position: absolute;
    top: 228px;
    left: 40px;
    display: flex;
    flex-direction: row;
  }

  .circle-left li {
    width: 15px;
    height: 15px;
    background: #0a66ff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .circle-right {
    position: absolute;
    top: 228px;
    right: 40px;
    display: flex;
    flex-direction: row;
  }

  .circle-right li {
    width: 15px;
    height: 15px;
    background: #ffa500;
    border-radius: 50%;
    margin-left: 15px;
  }

  /*east-title*/
  .east-title {
    display: flex;
    flex-direction: row;
    margin-top: 278px;
  }

  .east-title li:nth-child(1) {
    flex: 1.8;
  }

  .east-title li {
    flex: 1;
    line-height: 70px;
    font-size: 30px;
    background: #0a66ff;
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .east-title li + li {
    border-left: 2px solid #ccc;
  }

  /*west-list*/

  .west-title {
    display: flex;
    flex-direction: row;
  }

  .west-title li:nth-child(1) {
    flex: 1.8;
  }

  .west-title li {
    flex: 1;
    line-height: 70px;
    font-size: 30px;
    background: #ed4040;
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .west-title li + li {
    border-left: 2px solid #ccc;
  }

  /*east-content-list*/
  .content-list {

  }

  .content-list {
    display: flex;
    flex-direction: row;
  }

  .content-list li:nth-child(1) {
    flex: 1.8;
  }

  .content-list li {
    flex: 1;
    line-height: 100px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #ccc;
    color: rgba(0, 0, 0, 0.8);
  }

  .number {
    display: flex;
  }

  .number span {
    flex: 1;
  }

  .number span:nth-child(1) {
    margin-left: 20px;
  }

  .number span:nth-child(2) {
    margin-left: -65px;
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
