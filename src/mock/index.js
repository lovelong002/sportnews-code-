import Mock from 'mockjs'

Mock.mock('https://www.nbaNews/find/nba/001', {
  "reason": "查询成功",
  "status": "200",
  "result": {
    'title': "NBA体育新闻",
    'titleList': [
      {
        "status": "已结束",
        "player1": "湖人",
        "player1score": "132",
        'player2': '太阳',
        'player2score': '130',
        'url':'https://m.hupu.com/nba/game/recap_153061.html'
      },
      {
        "status": "已结束",
        "player1": "勇士",
        "player1score": "128",
        'player2': '鹈鹕',
        'player2score': '120',
        'url':'https://m.hupu.com/nba/game/recap_153060.html'
      },
      {
        "status": "已结束",
        "player1": "国王",
        "player1score": "93",
        'player2': '小牛',
        'player2score': '88',
        'url':'https://m.hupu.com/nba/game/recap_153059.html'
      },
    ],
    'contentList':[
      {
        'content':'[赛后]湖人132：130太阳，鲍尔29+11+9，英格拉姆25分，布克25+11+8',
        'answer':'25亮823回复',
        'url':'https://m.hupu.com/bbs/20544221.html'
      },
      {
        'content':'[赛后]骑士116-97雄鹿，詹姆斯24+6+8，字母哥34+8+8',
        'answer':'25亮498回复',
        'url':'https://m.hupu.com/bbs/20542881.html'
      },
      {
        'content':'英格拉姆25分创个人生涯单场得分新高',
        'answer':'6亮238回复',
        'url':'https://m.hupu.com/bbs/20543877.html'
      },
      {
        'content':'杜兰特6次盖帽追平个人生涯单场盖帽纪录',
        'answer':'46回复',
        'url':'https://m.hupu.com/bbs/20543910.html'
      },
      {
        'content':'詹姆斯赞阿德托昆博：他很棒，他非常棒，非常棒',
        'answer':'1亮26回复',
        'url':'https://m.hupu.com/bbs/20543541.html'
      },
      {
        'content':'鞋掉了！杜兰特一只鞋一回合连帽两次',
        'answer':'2亮35回复',
        'url':'https://m.hupu.com/bbs/20543511.html'
      },
      {
        'content':'罗斯谈受伤：我是唯一这样被犯规都不吹恶犯的人',
        'answer':'6亮71回复',
        'url':'https://m.hupu.com/bbs/20543429.html'
      },
      {
        'content':'韦德跟罗斯有同感：我已7赛季没得到这样的哨了',
        'answer':'2亮29回复',
        'url':'https://m.hupu.com/bbs/20543667.html'
      },
      {
        'content':'贾马尔-克劳福德第四节独得17分',
        'answer':'1亮22回复',
        'url':'https://m.hupu.com/bbs/20543403.html'
      },
      {
        'content':'[赛后]勇士128：120鹈鹕，汤普森31分，库里28+7，浓眉35+17，考辛斯35+14 ',
        'answer':'25亮636回复',
        'url':'https://m.hupu.com/bbs/20543971.html'
      },
      {
        'content':'[赛后]凯尔特人102-92胜76人，欧文21+6+4，西蒙斯11+11+5',
        'answer':'25亮440回复',
        'url':'https://m.hupu.com/bbs/20542923.html'
      },
      {
        'content':'克劳福德：最后那个三分出手我没看到篮筐',
        'answer':'23回复',
        'url':'https://m.hupu.com/bbs/20543739.html'
      },
      {
        'content':'保罗：在快船时我的球权太多了，厌倦了一直控球',
        'answer':'77回复',
        'url':'https://m.hupu.com/bbs/20543211.html'
      },
      {
        'content':'魔术师：詹姆斯年纪越大，也在变得越好',
        'answer':'2亮23回复',
        'url':'https://m.hupu.com/bbs/20543013.html'
      },
      {
        'content':'波波谈怀特：替补席上的一个位置可能会被他磨光',
        'answer':'4亮43回复',
        'url':'https://m.hupu.com/bbs/20542794.html'
      },
      {
        'content':'沃尔：我认为自己是联盟历史上盖帽最强的控卫',
        'answer':'23回复',
        'url':'https://m.hupu.com/bbs/20544038.html'
      },
      {
        'content':'德帅谈保罗伤势：只是撞了一下，不是撕裂什么的',
        'answer':'2亮21回复',
        'url':'https://m.hupu.com/bbs/20542764.html'
      },
      {
        'content':'西南交大新生大学篮球赛单场狂揽97分',
        'answer':'4亮212回复',
        'url':'https://m.hupu.com/bbs/20538496.html'
      },
      {
        'content':'苏群：姚明已将上海队大部分股权出售给久事集团',
        'answer':'2亮51回复',
        'url':'https://m.hupu.com/bbs/20538803.html'
      },
      {
        'content':'两周5赛变7赛，易建联：战士们注意预防伤病',
        'answer':'3亮23回复',
        'url':'https://m.hupu.com/bbs/20537958.html'
      },
    ],
  }

})
Mock.mock('https://www.nbaNews/find/news/002', {
  "reason": "查询成功",
  "status": "200",
  "result": {
    'title': "NBA体育新闻",
    'newsList': [
      {
        "time": "7分钟前",
        "author": "Twitter",
        "content": "盖尔-加朵现场观看湖人对阵快船的比赛",
        'pic': './static/news2.png',
        'url': 'https://m.hupu.com/nba/news/2214845.html'

      },
      {
        "time": "9分钟前",
        "author": "Instagram",
        "content": "卡隆-巴特勒：现在雷霆的问题只在于他们的阵容深度了",
        'pic': './static/news3.jpg',
        'url': 'https://m.hupu.com/nba/news/2214844.html'
      },
      {
        "time": "11分钟前",
        "author": "Instagram",
        "content": "小乔丹成为首位为快船效力达到10个赛季的球员",
        'pic': './static/news4.jpg',
        'url': 'https://m.hupu.com/nba/news/2214843.html'
      },
      {
        "time": "13分钟前",
        "author": "Twitter",
        "content": "坎特：和亚当斯对位很怪，他知道我所有脚步",
        'pic': './static/news5.png',
        'url': 'https://m.hupu.com/nba/news/2214842.html'
      },
      {
        "time": "17分钟前",
        "author": "Twitter",
        "content": "伊巴卡：新赛季以一场胜利开始的感觉棒极了",
        'pic': './static/news6.png',
        'url': 'https://m.hupu.com/nba/news/2214841.html'
      },
      {
        "time": "18分钟前",
        "author": "Instagram",
        "content": "快船官方发布贝弗利的赛场照：防守一阵",
        'pic': './static/news7.png',
        'url': 'https://m.hupu.com/nba/news/2214840.html'
      },
      {
        "time": "19分钟前",
        "author": "Twitter",
        "content": "安东尼：为波尔津吉斯的表现感到高兴",
        'pic': './static/news8.png',
        'url': 'https://m.hupu.com/nba/news/2214839.html'
      },
      {
        "time": "23分钟前",
        "author": "Twitter",
        "content": "快船官方晒图：格里芬隔人暴扣",
        'pic': './static/news9.png',
        'url': 'https://m.hupu.com/nba/news/2214836.html'
      },
      {
        "time": "32分钟前",
        "author": "克利夫兰老实人报",
        "content": "泰伦-卢：阿德托昆博是希腊怪物，在进攻上很像勒布朗",
        'pic': './static/news10.png',
        'url': 'https://m.hupu.com/nba/news/2214835.html'
      },
      {
        "time": "37分钟前",
        "author": "Basketball-Reference",
        "content": "高效！小乔丹半场抢下16个篮板",
        'pic': './static/news11.png',
        'url': 'https://m.hupu.com/nba/news/2214832.html'
      },
      {
        "time": "44分钟前",
        "author": "WOAI-TV",
        "content": "邦纳为前马刺队友量身选择最合适的三明治",
        'pic': './static/news12.png',
        'url': 'https://m.hupu.com/nba/news/2214831.html'
      },
      {
        "time": "47分钟前",
        "author": "Instagram",
        "content": "阿夫里内斯庆祝赛季开门红：精彩的团队表现！",
        'pic': './static/news13.png',
        'url': 'https://m.hupu.com/nba/news/2214828.html'
      },
      {
        "time": "55分钟前",
        "author": "Sports Day",
        "content": "里克-卡莱尔：诺埃尔做了很多正确的事情",
        'pic': './static/news14.jpg',
        'url': 'https://m.hupu.com/nba/news/2214827.html'
      },
      {
        "time": "57分钟前",
        "author": "Sports Day",
        "content": "德罗赞和Nike达成了一份多年续约合同",
        'pic': './static/news15.png',
        'url': 'https://m.hupu.com/nba/news/2214825.html'
      },
      {
        "time": "1小时前",
        "author": "Twitter",
        "content": "比斯利：脚踝很疼，但没有结构性损伤",
        'pic': './static/news16.png',
        'url': 'https://m.hupu.com/nba/news/2214824.html'
      },
      {
        "time": "1小时前",
        "author": "Instagram",
        "content": "CJ-迈尔斯：因一直可以做自己所爱的事而心怀感激",
        'pic': './static/news17.png',
        'url': 'https://m.hupu.com/nba/news/2214823.html'
      },
      {
        "time": "1小时前",
        "author": "Instagram",
        "content": "内马尔与科比出席活动，科比命中超远三分",
        'pic': './static/news18.jpg',
        'url': 'https://m.hupu.com/nba/news/2214822.html'
      },
      {
        "time": "1小时前",
        "author": "沃斯堡明星电讯报",
        "content": "诺埃尔：这里的氛围感觉很特别",
        'pic': './static/news19.png',
        'url': 'https://m.hupu.com/nba/news/2214820.html'
      },
      {
        "time": "1小时前",
        "author": "Twitter",
        "content": "乔治：我们不在意数据，很享受合作的过程",
        'pic': './static/news20.png',
        'url': 'https://m.hupu.com/nba/news/2214818.html'
      },
      {
        "time": "1小时前",
        "author": "Instagram",
        "content": "威斯布鲁克收获三双，媒体发图致意",
        'pic': './static/news21.png',
        'url': 'https://m.hupu.com/nba/news/2214817.html'
      },
    ]

  },

})
Mock.mock('https://www.nbaNews/find/datas/003',{
  "reason":"查询成功",
  "status":"200",
  "result":{
    "title":"NBA体育新闻",
    "eastList":[
      {
        "num":'1',
        "name":"老鹰",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/hawks/players"
      },
      {
        "num":'2',
        "name":"猛龙",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/raptors/players"
      },
      {
        "num":'3',
        "name":"活塞",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/pistons/players"
      },
      {
        "num":'4',
        "name":"步行者",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/pacers/players"
      },
      {
        "num":'5',
        "name":"雄鹿",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/bucks/players"
      },
      {
        "num":'6',
        "name":"魔术",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/magic/players"
      },
      {
        "num":'7',
        "name":"奇才",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/wizards/players"
      },
      {
        "num":'8',
        "name":"骑士",
        "win":"1",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/cavaliers/players"
      },
      {
        "num":'9',
        "name":"76人",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/76ers/players"
      },
      {
        "num":'10',
        "name":"热火",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/heat/players"
      },
      {
        "num":'11',
        "name":"蓝网",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/nets/players"
      },
      {
        "num":'12',
        "name":"黄蜂",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/hornets/players"
      },
      {
        "num":'13',
        "name":"公牛",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/bulls/players"
      },
      {
        "num":'14',
        "name":"尼克斯",
        "win":"0",
        "false":"1",
        "value":"1.0",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/knicks/players"
      },
      {
        "num":'15',
        "name":"凯尔特人",
        "win":"0",
        "false":"2",
        "value":"1.5",
        "winner":"0.0%",
        "status":"2连败",
        "url":"https://m.hupu.com/nba/teams/celtics/players"
      },
    ],
    "westList":[
      {
        "num":'1',
        "name":"火箭",
        "win":"2",
        "false":"0",
        "value":"0.0",
        "winner":"100.0%",
        "status":"2连胜",
        "url":"https://m.hupu.com/nba/teams/rockets/players"
      },
      {
        "num":'2',
        "name":"雷霆",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/thunder/players"
      },
      {
        "num":'3',
        "name":"开拓者",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/blazers/players"
      },
      {
        "num":'4',
        "name":"快船",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/clippers/players"
      },
      {
        "num":'5',
        "name":"灰熊",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/grizzlies/players"
      },
      {
        "num":'6',
        "name":"爵士",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/jazz/players"
      },
      {
        "num":'7',
        "name":"马刺",
        "win":"1",
        "false":"0",
        "value":"0.5",
        "winner":"100.0%",
        "status":"1连胜",
        "url":"https://m.hupu.com/nba/teams/spurs/players"
      },
      {
        "num":'8',
        "name":"勇士",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/warriors/players"
      },
      {
        "num":'9',
        "name":"国王",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/kings/players"
      },
      {
        "num":'10',
        "name":"小牛",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/mavericks/players"
      },
      {
        "num":'11',
        "name":"森林狼",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/timberwolves/players"
      },
      {
        "num":'12',
        "name":"掘金",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/nuggets/players"
      },
      {
        "num":'13',
        "name":"鹈鹕",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/pelicans/players"
      },
      {
        "num":'14',
        "name":"湖人",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/lakers/players"
      },
      {
        "num":'15',
        "name":"太阳",
        "win":"0",
        "false":"1",
        "value":"1.5",
        "winner":"0.0%",
        "status":"1连败",
        "url":"https://m.hupu.com/nba/teams/suns/players"
      },
    ]
  }



})
Mock.mock('https://www.nbaNews/find/com/004',{
  "reason":"查询成功",
  "status":"200",
  "result":{
    "title":"NBA新闻社区",
    "hot":[
      {
        "title":"步行街",
        "tie":"34282帖",
        "url":"http://m.yhd.com/?tracker_u=10235947855"
      },
      {
        "title":"湿乎乎的话题",
        "tie":"25258帖",
        "url":"https://m.hupu.com/bbs/1048"
      },
      {
        "title":"足球话题区",
        "tie":"3138帖",
        "url":"https://m.hupu.com/bbs/1389"
      },
      {
        "title":"王者荣耀",
        "tie":"4024帖",
        "url":"https://m.hupu.com/bbs/4657"
      },
      {
        "title":"英雄联盟",
        "tie":"9754帖",
        "url":"https://m.hupu.com/bbs/3441"
      },
      {
        "title":"影视区",
        "tie":"2618帖",
        "url":"http://m.bilibili.com/index.html"
      },

    ],
    "NBAmain":[
      {
        "title":"湿乎乎的话题",
        "tie":"27545帖",
        "url":"https://m.hupu.com/bbs/1048"
      },
      {
        "title":"篮球场",
        "tie":"360帖",
        "url":"https://m.hupu.com/bbs/130"
      },
      {
        "title":"十万俱乐部",
        "tie":"395帖",
        "url":"https://m.hupu.com/bbs/3480"
      },
      {
        "title":"路人王专区",
        "tie":"355帖",
        "url":"https://m.hupu.com/bbs/4680"
      },
      {
        "title":"路人王动态",
        "tie":"16帖",
        "url":"https://m.hupu.com/bbs/4817"
      },
      {
        "title":"每日范特西",
        "tie":"7帖",
        "url":"https://m.hupu.com/bbs/4686"
      },
    ],
    "NBAteam":[
      {
        "title":"火箭专区",
        "tie":"4326帖",
        "url":"https://m.hupu.com/bbs/44"
      },
      {
        "title":"骑士专区",
        "tie":"5086帖",
        "url":"https://m.hupu.com/bbs/85"
      },
      {
        "title":"勇士专区",
        "tie":"3165帖",
        "url":"https://m.hupu.com/bbs/102"
      },
      {
        "title":"湖人专区",
        "tie":"8663帖",
        "url":"https://m.hupu.com/bbs/81"
      },
      {
        "title":"马刺专区",
        "tie":"1077帖",
        "url":"https://m.hupu.com/bbs/105"
      },
      {
        "title":"凯尔特人区",
        "tie":"2476帖",
        "url":"https://m.hupu.com/bbs/82"
      },
      {
        "title":"雷霆专区",
        "tie":"768帖",
        "url":"https://m.hupu.com/bbs/108"
      },
      {
        "title":"快船专区",
        "tie":"326帖",
        "url":"https://m.hupu.com/bbs/127"
      },
      {
        "title":"尼克斯专区",
        "tie":"54帖",
        "url":"https://m.hupu.com/bbs/92"
      },
      {
        "title":"公牛专区",
        "tie":"31帖",
        "url":"https://m.hupu.com/bbs/68"
      },
      {
        "title":"森林狼专区",
        "tie":"2236帖",
        "url":"https://m.hupu.com/bbs/76"
      },
      {
        "title":"小牛专区",
        "tie":"556帖",
        "url":"https://m.hupu.com/bbs/80"
      },
      {
        "title":"篮网专区",
        "tie":"884帖",
        "url":"https://m.hupu.com/bbs/84"
      },
      {
        "title":"76人专区",
        "tie":"591帖",
        "url":"https://m.hupu.com/bbs/124"
      },
      {
        "title":"步行者专区",
        "tie":"70帖",
        "url":"https://m.hupu.com/bbs/74"
      },
      {
        "title":"开拓者专区",
        "tie":"252帖",
        "url":"https://m.hupu.com/bbs/96"
      },
      {
        "title":"热火专区",
        "tie":"39帖",
        "url":"https://m.hupu.com/bbs/77"
      },
      {
        "title":"奇才专区",
        "tie":"329帖",
        "url":"https://m.hupu.com/bbs/86"
      },
      {
        "title":"爵士专区",
        "tie":"441帖",
        "url":"https://m.hupu.com/bbs/70"
      },
      {
        "title":"灰熊专区",
        "tie":"45帖",
        "url":"https://m.hupu.com/bbs/128"
      },
      {
        "title":"太阳专区",
        "tie":"485帖",
        "url":"https://m.hupu.com/bbs/71"
      },
      {
        "title":"国王专区",
        "tie":"256帖",
        "url":"https://m.hupu.com/bbs/79"
      },
      {
        "title":"鹈鹕专区",
        "tie":"442帖",
        "url":"https://m.hupu.com/bbs/89"
      },
      {
        "title":"雄鹿专区",
        "tie":"397帖",
        "url":"https://m.hupu.com/bbs/110"
      },
      {
        "title":"猛龙专区",
        "tie":"15帖",
        "url":"https://m.hupu.com/bbs/90"
      },
      {
        "title":"掘金专区",
        "tie":"42帖",
        "url":"https://m.hupu.com/bbs/72"
      },
      {
        "title":"老鹰专区",
        "tie":"26帖",
        "url":"https://m.hupu.com/bbs/126"
      },
      {
        "title":"活塞专区",
        "tie":"260帖",
        "url":"https://m.hupu.com/bbs/87"
      },
      {
        "title":"魔术专区",
        "tie":"136帖",
        "url":"https://m.hupu.com/bbs/88"
      },
      {
        "title":"黄蜂专区",
        "tie":"155帖",
        "url":"https://m.hupu.com/bbs/125"
      },
    ]
  }

})






































