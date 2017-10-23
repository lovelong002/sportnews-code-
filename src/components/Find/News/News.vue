<template>
  <div id="nba">
    <ul>
      <li v-for="(val,index) in newsVal.newsList" class="nba-list">
        <a :href="val.url">
          <ul class="nba-content">
            <li :style="{background:'url('+val.pic+')',backgroundSize: 'cover'}">
            </li>
            <li>
              <p v-text="val.content"></p>
              <div>
                <span v-text="val.author"></span>
                <span v-text="val.time"></span>
              </div>
            </li>
          </ul>
        </a>
      </li>
    </ul>
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
      newsVal(){
        return this.$store.state.findNews.data.result
      }
    }

  }
</script>
<style scoped>
  #nba{
    margin-top: 194px;
  }
  .nba-list{
    width: 96%;
    margin: 0 auto;
  }
  .nba-content {
    height: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-top: 2px solid #ccc;
  }

  .nba-content li:nth-child(1) {
    flex: 2.5;
    width: 170px;
    height: 170px;
  }

  .nba-content li:nth-child(2) {
    flex: 7.5;
    padding-left: 25px;
    padding-right: 10px;
    margin-top: -8px;
    position: relative;
    top: 0;
    left: 0;
  }

  .nba-content li:nth-child(2) p {
    font-size: 40px;
    line-height: 50px;
    /*margin-bottom: -10px;*/
    margin-top:20px;
  }

  .nba-content li:nth-child(2) span {
    font-size: 30px;
    color: #ccc;
    display: inline-block;
    background: dodgerblue;
    color: #fff;
    line-height: 35px;
    padding: 5px 10px;
    border-radius: 30px;
    margin-bottom: 20px;
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
