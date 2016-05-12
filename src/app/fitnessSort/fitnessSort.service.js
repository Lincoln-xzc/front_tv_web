(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('FitnessSortService',FitnessSortService);

  /** @ngInject */
  function FitnessSortService($q,$http){
    var fitnessSortService = [];

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
            'title':'资讯',
            'tip':'information'
          },
          {
            'title':'医疗',
            'tip':'medical'
          },
          {
            'title':'两性',
            'tip':'bisexual'
          },
          {
            'title':'养生',
            'tip':'health'
          },
          {
            'title':'健身',
            'tip':'fitness'
          },
          {
            'title':'美容',
            'tip':'cosmetology'
          },
          {
            'title':'心理',
            'tip':'psychology'
          },
          {
            'title':'常识',
            'tip':'sense'
          },
          {
            'title':'儿科',
            'tip':'pediatrics'
          },
          {
            'title':'老年',
            'tip':'oldAge'
          },
          {
            'title':'交流分享',
            'tip':'share'
          }
        ]
      }
    ];

    fitnessSortService.getMenu = function(){
      var d = $q.defer();
      d.resolve({'data':menus});
      return d.promise;
    };
    return fitnessSortService;
  }
})();

