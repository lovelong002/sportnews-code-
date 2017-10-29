<template>
  <div id="nba">
    <!--newsBanner1-->
    <div class="news-banner1">
      <div class="news-banner">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
          <li v-for="(val,index) in newsListVal1">
            <ul>
              <li v-for="(val,index) in val" class="nba-list">
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
          </li>
        </ul>
        <div class="footer-content-wrap">
          <div class="footer-content" v-if="newsFooterVal">
            <p>～～～～亲,到底了哦～～～～</p>
          </div>
        </div>

      </div>
    </div>
    <!--newsBanner1-->


    <!--loading-->
    <div class="loading" v-if="newsLoadingVal">
      <span>加载中</span>
      <mt-spinner :type="3" color="rgb(38, 162, 255)" :size="30"></mt-spinner>
    </div>
    <!--loading-->

  </div>
</template>
<script>
  import Vue from 'vue'
  import {InfiniteScroll} from 'mint-ui';
  Vue.use(InfiniteScroll);
  export default{
    data(){
      return {
        newsListVal1: [],
        newsListValIndex: 0,
        smallnewsListValIndex: 0,
      }
    },
    computed: {
      newsVal(){
        return this.$store.state.findNews.data.result.newsList
      },
      newsLoadingVal(){
        return this.$store.state.newsLoadingVal
      },
      newsFooterVal(){
        return this.$store.state.newsFooterVal
      },
      newsScrollVal(){
        return this.$store.state.newsScrollVal
      }
    },
    watch: {
      newsListValIndex(){
        if (this.newsListValIndex == this.newsVal.length - 1) {
          this.$store.commit('newsFooterVal', true)
        }
      }
    },
    created(){
      this.newsListVal1.push(this.newsVal[0])
    },
    activated(){
      window.scrollTo(0, this.newsScrollVal)
    },
    deactivated(){
      let scrollVal = document.documentElement.scrollTop || document.body.scrollTop
      this.$store.commit('newsScrollVal', scrollVal)
    },
    methods: {
      loadMore(){
        if (this.newsListValIndex < this.newsVal.length - 1) {
          this.loading = true
          this.$store.commit('newsLoadingVal', true)
          setTimeout(() => {
            this.newsListValIndex++
            this.newsListVal1.push(this.newsVal[this.newsListValIndex])
            this.$store.commit('newsLoadingVal', false)
            this.loading = false
          },2000)
        }
      }
    }

  }
</script>
<style scoped>


.news-banner{
  position: absolute;
  top: 194px;
  left: 0;
}
  .nba-list {
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
    margin-top: 20px;
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
.footer-content-wrap{
  padding-bottom:115px;
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
