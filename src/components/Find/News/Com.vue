<template>
  <div id="nba">
    <div class="title">
      <p>步入社区,享受NBA的天堂</p>
      <ul class="title-left">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="title-right">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="content">
      <div class="content-hot">
        <p class="content-hot-title">
          <span>热门版块</span>
        </p>
        <ul class="content-hot-text">
          <li v-for="(val,index) in comVal.hot">
            <a :href="val.url">
              <p v-text="val.title"></p>
            </a>
            <span v-text="val.tie"></span>
          </li>
        </ul>
      </div>
      <div class="content-nba">
        <p class="content-nba-title"><span>NBA论坛</span></p>
        <div class="content-nba-content">
          <p class="content-nba-common"><span>主板</span></p>
          <ul class="content-nba-content-main">
            <li v-for="(val,index) in comVal.NBAmain">
              <a :href="val.url">
                <p v-text="val.title"></p>
              </a>
              <span v-text="val.tie"></span>
            </li>
          </ul>
          <p class="content-nba-common"><span>球队分区</span></p>
          <ul class="content-nba-content-team">
            <li v-for="(val,index) in comVal.NBAteam">
              <a :href="val.url">
                <p v-text="val.title"></p>
              </a>
              <span v-text="val.tie"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-content">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    computed: {
      comVal(){
        return this.$store.state.comVal.data.result
      }
    }
  }
</script>
<style scoped>
  .title {
    width: 100%;
    line-height: 80px;
    margin-top: 195px;
    border-bottom: 2px solid #ccc;
    text-align: center;
    background: #0a66ff;
    position: relative;
    top: 0;
    left: 0;
  }

  .title p {
    font-size: 38px;
    font-style: italic;
    color: #fff;
    letter-spacing: 5px;

  }

  .title li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 15px;
  }

  .title .title-left li {
    background: #12ff3c;
    position: absolute;
  }

  .title .title-left li:nth-child(1) {
    top: 10px;
    left: -5px;
  }

  .title .title-left li:nth-child(2) {
    top: 23px;
    left: 10px;
  }

  .title .title-left li:nth-child(3) {
    top: 32px;
    left: 28px;
  }

  .title .title-left li:nth-child(4) {
    top: 35px;
    left: 45px;
  }

  .title .title-left li:nth-child(5) {
    top: 35px;
    left: 65px;
  }

  .title .title-left li:nth-child(6) {
    top: 35px;
    left: 86px;
  }

  .title .title-right li {
    background: #ff2f16;
    position: absolute;
  }

  .title .title-right li:nth-child(1) {
    bottom: 12px;
    right: 10px;
  }

  .title .title-right li:nth-child(2) {
    bottom: 26px;
    right: 25px;
  }

  .title .title-right li:nth-child(3) {
    bottom: 32px;
    right: 43px;
  }

  .title .title-right li:nth-child(4) {
    bottom: 35px;
    right: 60px;
  }

  .title .title-right li:nth-child(5) {
    bottom: 35px;
    right: 80px;
  }

  .title .title-right li:nth-child(6) {
    bottom: 35px;
    right: 98px;
  }

  /*content*/
  .content {

  }

  .content-hot {

  }

  .content-hot .content-hot-title {
    height: 80px;
    border-bottom: 2px dashed  #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-hot .content-hot-title span{
    font-size: 35px;
    line-height: 65px;
    width: 280px;
    text-align: center;
    background: #ff0000;
    color: #fff;
    border-radius: 30px;
    letter-spacing: 5px;
  }
  .content-nba-content-main, .content-hot-text{
    overflow: hidden;
  }
   .content-hot-text li{
    float: left;
    width: 33%;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
   .content-hot-text li p{
    font-size: 33px;
    padding: 20px 0px;
    color: #0a66ff;
     margin-top: 18px;

  }
   .content-hot-text li span{
    font-size: 25px;
    color: rgba(0,0,0,0.6);
  }
  .content-nba .content-nba-title {
    height: 90px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-nba .content-nba-title span{
    font-size: 35px;
    line-height: 65px;
    width: 280px;
    text-align: center;
    background: #0a66ff;
    color: #fff;
    border-radius: 30px;
    letter-spacing: 5px;
  }
  .content-nba-content{
    width: 97%;
    margin: 0 auto;
  }
  .content-nba-content .content-nba-common{
    line-height: 60px;
    border-bottom: 2px solid #ccc;
  }
  .content-nba-content .content-nba-common span{
    font-size: 30px;
    margin-left: 20px;
    color: rgba(0,0,0,0.7);
  }
  .content-nba-content-main{
    overflow: hidden;
  }
  .content-nba-content-main li{
    float: left;
    width: 33%;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
  .content-nba-content-main li p{
    font-size: 33px;
    padding: 20px 0px;
    color: deeppink;
    margin-top: 18px;
  }
  .content-nba-content-main li span{
    font-size: 25px;
    color: rgba(0,0,0,0.6);
  }
  .content-nba-content-team{
    overflow: hidden;
    margin-bottom: 30px;
  }
  .content-nba-content-team li{
    float: left;
    width: 33%;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
  .content-nba-content-team li p{
    font-size: 33px;
    padding: 20px 0px;
    color: #0ada18;
    margin-top: 18px;
  }
  .content-nba-content-team li span{
    font-size: 25px;
    color: rgba(0,0,0,0.6);
  }

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
