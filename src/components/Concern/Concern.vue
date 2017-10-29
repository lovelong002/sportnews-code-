<template>
  <div id="concern">
    <!--banner1-->
    <div>
      <a href="https://m.v.qq.com/play.html?&vid=g0368hz92n4&ptag=v.qq.com%23v.play.adaptor%232&mreferrer=https%3A%2F%2Fv.qq.com%2Fx%2Fpage%2Fg0368hz92n4.html&new=1">
        <div class="concern-banner" :style="{background:'url('+concernBannerPic+')',backgroundSize: 'cover'}"></div>
      </a>
    </div>
    <!--banner1-->


    <div class="concern-header">
      <span>赛后</span>
      <span>精彩回顾</span>
      <span>王者归来</span>
    </div>
    <div>
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="( val,index ) in listVal">
          <ul class="concern-content">
            <li v-for="( val,index ) in val" class="concern-content-list">
              <a :href="val.url">
                <ul class="concern-content-list-ul">
                  <li class="concern-content-list-pic">
                    <div :style="{background:'url('+val.pic+')',backgroundSize: 'cover'}">
                    </div>
                  </li>
                  <li class="concern-content-list-content">
                    <p v-text="val.content"></p>
                    <div>
                      <span v-text="val.time"></span>
                    </div>
                  </li>
                </ul>
              </a>

            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="footer-content" v-if="concernFooterVal">
      <p>～～～～亲,到底了哦～～～～</p>
    </div>

    <!--loading-->
    <div class="loading" v-if="concernLoadingVal">
      <span>加载中</span>
      <mt-spinner :type="3" color="rgb(38, 162, 255)" :size="30"></mt-spinner>
    </div>
    <!--loading-->
  </div>
</template>
<script>
  import Vue from 'vue'
  import {InfiniteScroll, Spinner} from 'mint-ui';

  Vue.component(Spinner.name, Spinner);
  Vue.use(InfiniteScroll);
  export default{
    data(){
      return {
        listVal: [],
        listValIndex: 0,
      }
    },
    created(){
      this.listVal.push(this.concernListVal[0])
    },
    computed: {
      concernListVal(){
        return this.$store.state.concernListVal.data.result.newsList
      },
      concernLoadingVal(){
        return this.$store.state.concernLoadingVal
      },
      concernBannerPic(){
        return this.$store.state.concernListVal.data.result.bannerPic
      },
      concernFooterVal(){
        return this.$store.state.concernFooterVal
      },
      concernScrollVal(){
        return this.$store.state.concernScrollVal
      }
    },
    watch: {
      listValIndex(){
        if (this.listValIndex == this.concernListVal.length - 1) {
          this.$store.commit('concernFooterVal', true)
        }
      }
    },
    activated(){
      window.scrollTo(0, this.concernScrollVal)
    },
    deactivated(){
      let scrollVal = document.documentElement.scrollTop || document.body.scrollTop
      this.$store.commit('concernScrollVal', scrollVal)
    },
    methods: {
      loadMore(){

        if (this.listValIndex < this.concernListVal.length - 1) {
          this.loading = true
          this.$store.commit('concernLoadingVal', true)
          setTimeout(() => {
            this.listValIndex++
            this.listVal.push(this.concernListVal[this.listValIndex])
            this.loading = false
            this.$store.commit('concernLoadingVal', false)
          }, 2000)
        }
      }
    }
  }
</script>
<style scoped>
  .concern-banner {
    width: 100%;
    height: 350px;
    position: absolute;
    left: 0;
    top: 80px;
  }

  .concern-header {
    margin-top: 430px;
    line-height: 80px;
    width: 100%;
    border-bottom: 2px solid #ccc;
    background: #26a2ff;
    text-align: center;
    position: relative;
    top: 0;
    left: 0;
  }

  .concern-header span {
    font-size: 40px;
    font-weight: bold;
    color: #fdfe09;
    font-style: italic;
  }

  .concern-header span:nth-child(1) {
    color: #fff;
    font-size: 45px;
    letter-spacing: 20px;
    font-weight: bolder;

    margin-right: 30px;
  }

  .concern-content {
  }

  .concern-content .concern-content-list {
    width: 97%;
    height: 220px;
    margin: 0 auto;
    border-bottom: 2px solid #ccc;

  }

  .concern-content-list-ul {
    display: flex;
  }

  .concern-content-list-ul li {
    position: relative;
    left: 0;
    top: 0;

  }

  .concern-content-list-ul li:nth-child(1) {
    flex: 1.5;
  }

  .concern-content-list-ul li:nth-child(2) {
    flex: 3;
    padding-bottom: 15px;
  }

  .concern-content-list-ul li:nth-child(2) p {
    font-size: 35px;
    line-height: 50px;
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.7);
  }

  .concern-content-list-ul li:nth-child(2) div {
    font-size: 35px;
    background: #26a2ff;
    width: 200px;
    padding: 10px 0 10px;
    text-align: center;
    border-radius: 50px;
    color: #fff;
    position: absolute;
    top: 150px;
    left: 240px;
  }

  .concern-content-list-pic div {
    width: 200px;
    height: 190px;
    margin-top: 15px;
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
