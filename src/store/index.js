import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import vueResource from 'vue-resource';
Vue.use(vuex)
Vue.use(vueResource)
const store = new vuex.Store({
  state: {
    nbaData: {},
    nbaDataList: {},
    findNews:{},
    goBackVal: false,
    loadingVal:'',
    findNbaVal:{},
    dataListVal:{},
    comVal:{},
    routerVal:'/find/nba',
    nbaPageScrollTop:'',
    loading:false
  },
  mutations: {
    haveDatas( state, val ){
      state.nbaData = val
    },
    haveDatasList( state, val ){
      state.nbaDataList = val
    },
    findNewsVal( state,val ){
      state.findNews = val
    },
    findNbaVal( state,val ){
      state.findNbaVal = val
    },
    dataListVal( state,val ){
      state.dataListVal = val
    },
    comVal( state,val ){
      state.comVal = val
    },
    goBackVal( state,val ){
      state.goBackVal = true
    },
    turnOffGoBackVal( state ,val){
      state.goBackVal = false
    },
    routerVal( state,val ){
      state.routerVal = val
    },
    nbaPageScrollTop( state,val ){
      state.nbaPageScrollTop = val
    },
    loading( state,val ){
      state.loading = val
    }
  },
  actions: {
    getDatas(store, val){
      Vue.http({
        url: 'https://op.juhe.cn/onebox/basketball/nba',
        params: {
          key: 'a8abfa1e921d5f46fac3eff086a30e0a',
        },
        method: 'jsonp'
      }).then(response => {
        store.commit('haveDatas', response.body.result)
        store.commit('haveDatasList', response.body.result.list[0])
      }, error => {
        console.log(error);
      })
    },
    findNewsval(store , val){
      axios.get('https://www.nbaNews/find/news/002')
        .then(response => {
        store.commit('findNewsVal',response)
      })
        .catch(err => {
        console.log(err);
      })
    },
    findNbaVal( store , val ){
      axios.get('https://www.nbaNews/find/nba/001')
        .then(response => {
          store.commit('findNbaVal',response)
        }).catch(error => {
        console.log(error);
      })
    },
    dataListVal( store , val ){
      axios.get('https://www.nbaNews/find/datas/003')
        .then(response => {
          store.commit('dataListVal',response)
        })
        .catch(error => {
          console.log(error);
        })
    },
    comVal( store,val ){
      axios.get('https://www.nbaNews/find/com/004')
        .then(response => {
          store.commit('comVal',response)
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  getters: {}
})

export default store
