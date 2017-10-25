<template>
  <div id="mine">
    <div class="page-actionsheet">
      <div class="title">
        <span>请选择登录方式 :</span>
      </div>

      <div class="login">
        <div class="xinlang-login login-common" @click="toShow"></div>
        <div class="weixin-login login-common" @click="toShow"></div>
        <div class="phone-login login-common" @click="toShow"></div>
        <div class="qq-login login-common" @click="toShow"></div>
        <div class="login-more" @click="toShow">更多登录方式 &nbsp;>>></div>
      </div>
      <mt-popup
        v-model="showVal"
        position="right">
        <div class="login-content">
          <div class="login-hint" v-show="turnVal">
            <p>请输入正确的账号或密码</p>
          </div>
          <div class="login-user">
            <span>账号 : </span>
            <input type="text" placeholder="手机号 / QQ账号 / 微信号 / 微博账号" v-model="userVal">
          </div>
          <div class="login-password">
            <span>密码 : </span>
            <input type="text" placeholder="密码" v-model="passWordVal">
          </div>
          <div class="login-submit">
            <input type="submit" value="登录" @click="toLogin">
          </div>
          <div class="login-footer">
            <p>注册一个新账号</p>
            <p>忘记密码</p>
          </div>
        </div>
      </mt-popup>
    </div>
    <div class="message">
      <span>消息通知</span>
      <span>></span>
    </div>
    <div class="buying">
      <span>火爆商城</span>
      <span>></span>
      <span>邀请好友得200元现金奖励</span>
    </div>
    <div class="jindong">
      <span>京东特供</span>
      <span>></span>
      <span>新人领188元现金红包</span>
    </div>
    <div class="user">
      <span>用户反馈</span>
      <span>></span>
    </div>
    <div class="set">
      <span>系统设置</span>
      <span>></span>
    </div>
    <div class="about" @click="toAbout">
      <span>关于本项目</span>
      <span>></span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  import {Popup} from 'mint-ui';
  Vue.component(Popup.name, Popup);

  export default {
    data(){
      return {
        showVal: false,
        turnVal: false,
        userVal: '',
        passWordVal: '',
        bb: ''
      }
    },
    methods: {
      toShow(){
        this.showVal = true
      },
      toLogin(){
        if (this.userVal !== '') {
          const test = /^1[3|4|5|7|8][0-9]{9}$/
          if (!test.test(this.userVal) || this.passWordVal == '') {
            this.turnVal = true
          } else {
            this.turnVal = false
            return
          }
        }
      },
      toAbout(){
        this.$router.push({path: '/about'})
        this.$store.commit('goBackVal')
      }
    },
    watch: {
      userVal(){
        if (this.userVal == '') {
          this.turnVal = false
        }
      }
    }
  }
</script>
<style scoped>
  .title {
    margin-top: 80px;
    width: 100%;
    line-height: 90px;
    border-bottom: 2px solid #ccc;
  }

  .title span {
    font-size: 35px;
    background: #26a2ff;
    color: #fff;
    width: 300px;
    height: 60px;
    margin-left: 20px;
    padding: 10px 20px;
    border-radius: 30px;
  }

  .login {
    width: 100%;
    height: 330px;
    margin-top: 20px;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    border-bottom: 8px solid #ccc;
  }

  .login .login-common {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    position: absolute;
    top: 10px;

  }

  .phone-login {
    background: url("../../assets/weixin.jpg");
    background-size: cover;
    left: 20px;
  }

  .qq-login {
    background: url("../../assets/xinlang.jpg");
    background-size: cover;
    left: 204px;
  }

  .weixin-login {
    background: url("../../assets/phone.png");
    background-size: cover;
    left: 390px;
  }

  .xinlang-login {
    background: url("../../assets/qq.jpg");
    background-size: cover;
    right: 20px;
  }

  .login-more {
    margin: 220px auto 0;
    width: 60%;
    line-height: 80px;
    background: #26a2ff;
    color: #fff;
    border-radius: 40px;
    font-size: 35px;
    text-align: center;
  }

  .login-content {
    width: 750px;
    height: 450px;
    background: #fff;

  }

  .login-content .login-password, .login-content .login-user {
    margin: 100px auto 0px;
    height: 80px;
    width: 730px;
    border-radius: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-content .login-password input, .login-content .login-user input {
    font-size: 30px;
    margin-left: 15px;
    line-height: 65px;
    width: 550px;
    padding-left: 22px;
    box-sizing: border-box;
    border-radius: 40px;
    border: 1px solid blue;
    outline: none;
    color: #000;
  }

  .login-content .login-password span, .login-content .login-user span {
    font-size: 45px;
  }

  .login-content .login-password {
    margin-top: 20px;
  }

  .login-content .login-submit input {
    display: block;
    margin: 50px auto 0px;
    width: 700px;
    height: 60px;
    background: #26a2ff;
    color: #ffffff;
    text-align: center;
    border-radius: 60px;
    outline: none;
    letter-spacing: 15px;
    padding-left: 15px;
    font-size: 40px;
  }

  .login-footer {
    width: 700px;
    line-height: 60px;
    margin: 20px auto;
    font-size: 35px;
    color: red;
  }

  .login-footer p:nth-child(1) {
    float: left;
    margin-left: 20px;

  }

  .login-footer p:nth-child(2) {
    float: right;
    margin-right: 20px;
  }

  .login-hint p {
    font-size: 35px;
    text-align: center;
    width: 460px;
    line-height: 55px;
    background: red;
    color: #ffffff;
    border-radius: 40px;
    position: absolute;
    top: 25px;
    left: 50%;
    margin-left: -230px;
  }

  .message, .buying, .jindong, .user, .set, .about {
    width: 97%;
    line-height: 120px;
    margin: 0 auto;
    font-size: 38px;
    color: rgba(0, 0, 0, 0.9);
    position: relative;
    top: 0;
    left: 0;
  }

  .message span:nth-child(1), .buying span:nth-child(1), .jindong span:nth-child(1), .user span:nth-child(1), .set span:nth-child(1), .about span:nth-child(1) {
    margin-left: 20px;
  }

  .message span:nth-child(2), .buying span:nth-child(2), .jindong span:nth-child(2), .user span:nth-child(2), .set span:nth-child(2) {
    margin-left: 490px;
    color: rgba(0, 0, 0, 0.7);
  }

  .about span:nth-child(2) {
    margin-left: 450px;
    color: rgba(0, 0, 0, 0.7);
  }

  .buying, .jindong, .set {
    border-top: 2px dashed #ccc;
  }

  .about, .user {
    border-top: 8px solid #ccc;
  }

  .buying span:nth-child(3), .jindong span:nth-child(3) {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    right: 120px;
  }
</style>
