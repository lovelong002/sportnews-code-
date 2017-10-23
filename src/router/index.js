
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Find from '@/components/Find/Find'
import Concern from '@/components/Concern/Concern'
import Mine from '@/components/Mine/Mine'
import Nba from '@/components/Find/News/Nba'
import Com from '@/components/Find/News/Com'
import Datas from '@/components/Find/News/Datas'
import News from '@/components/Find/News/News'
import About from '@/components/About/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      name:'Home',
  component:Home,
    },
    {
      path:'/find',
      name:'Find',
      // redirect:'/find/nba',
      component:Find,
      children:[
        {
          path:'/find/nba',
          name:'Nba',
          component:Nba
        },
        {
          path:'/find/news',
          name:'News',
          component:News
        },
        {
          path:'/find/com',
          name:'Com',
          component:Com
        },
        {
          path:'/find/datas',
          name:'Datas',
          component:Datas
        }
      ]
    },
    {
      path:'/concern',
      name:'Concern',
      component:Concern
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'/about',
      name:'About',
      component:About
    }
  ]
})
