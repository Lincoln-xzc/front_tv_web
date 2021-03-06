(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('ArtsSortService',ArtsSortService);

  /** @ngInject */
  function ArtsSortService($q,$http){
    var artsSortService = [];

    var menus = [
      {
        'title':'频道',
        datas:[
          {
            title:'频道：',
            url:''
          },
          {
            'title':'电视剧',
            'url':'nav.tvSort',
            'type':'tv'
          },
          {
            'title':'电影',
            'url':'nav.movieSort',
            'type':'movie'
          },
          {
            'title':'综艺',
            'url':'nav.artsSort',
            'type':'art'
          },
          {
            'title':'动漫',
            'url':'nav.animationSort',
            'type':'animation'
          },
          {
            'title':'健康',
            'url':'nav.fitnessSort',
            'type':'fitness'
          },
          {
            'title':'教育',
            'url':'nav.teachSort',
            'type':'teach'
          }
        ]
      },
      {
        'title':'地区',
        'datas':[
          {
            'title':'地区：'
          },
          {
            'title':'全部',
            'area':''
          },
          {
            'title':'大陆',
            'area':'china'
          },
          {
            'title':'香港',
            'area':'hkong'
          },
          {
            'title':'韩国',
            'area':'korea'
          },
          {
            'title':'美国',
            'area':'american'
          },
          {
            'title':'英国',
            'area':'english'
          },
          {
            'title':'台湾',
            'area':'taiwan'
          },
          {
            'title':'泰国',
            'area':'thailand'
          },
          {
            'title':'新加坡',
            'area':'singapore'
          }
        ]
      },
      {
        'title':'类型',
        'datas':[
          {
            'title':'类型：'
          },
          {
            'title':'全部',
            'tip':''
          },
          {
            'title':'脱口秀',
            'tip':'talkShow'
          },
          {
            'title':'真人秀',
            'tip':'realityShow'
          },
          {
            'title':'选秀',
            'tip':'draft'
          },
          {
            'title':'美食',
            'tip':'food'
          },
          {
            'title':'旅游',
            'tip':'tourism'
          },
          {
            'title':'汽车',
            'tip':'automobile'
          },
          {
            'title':'访谈',
            'tip':'interview'
          },
          {
            'title':'搞笑',
            'tip':'funny'
          },
          {
            'title':'时尚',
            'tip':'popular'
          },
          {
            'title':'晚会',
            'tip':'part'
          },
          {
            'title':'理财',
            'tip':'conduct'
          },
          {
            'title':'演唱会',
            'tip':'concert'
          },
          {
            'title':'曲艺',
            'tip':'quyi'
          },
          {
            'title':'音乐',
            'tip':'music'
          },
          {
            'title':'舞蹈',
            'tip':'disco'
          },
          {
            'title':'体育娱乐',
            'tip':'sports'
          },
          {
            'title':'游戏',
            'tip':'play'
          }
        ]
      },
      {
        'title':'时间',
        'datas':[
          {
            'title':'时间：'
          },
          {
            'title':'全部',
            'date':''
          },
          {
            'title':'2016',
            'date':'2016'
          },
          {
            'title':'2015',
            'date':'2015'
          },
          {
            'title':'2014',
            'date':'2014'
          },
          {
            'title':'2013',
            'date':'2013'
          },
          {
            'title':'2012',
            'date':'2012'
          },
          {
            'title':'2011',
            'date':'2011'
          },
          {
            'title':'00年代',
            'date':'2000'
          },
          {
            'title':'90年代',
            'date':'1990'
          },
          {
            'title':'80年代',
            'date':'1980'
          },
          {
            'title':'70年代',
            'date':'1970'
          },
          {
            'title':'更早',
            'date':'1960'
          }
        ]
      }
    ];

    artsSortService.getMenu = function(){
      var d = $q.defer();
      d.resolve({'data':menus});
      return d.promise;
    };
    return artsSortService;
  }
})();

