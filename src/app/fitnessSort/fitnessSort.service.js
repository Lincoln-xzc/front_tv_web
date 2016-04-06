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
    var fitnesses = [
      {
        image:'/assets/images/tv/01.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/tv/02.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/tv/03.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/tv/04.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/tv/05.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/tv/06.jpg',
        message:'aa',
        id:6
      },
      {
        image:'/assets/images/tv/07.jpg',
        message:'aa',
        id:7
      },
      {
        image:'/assets/images/tv/08.jpg',
        message:'aa',
        id:8
      },
      {
        image:'/assets/images/tv/09.jpg',
        message:'aa',
        id:9
      },
      {
        image:'/assets/images/tv/05.jpg',
        message:'aa',
        id:10
      },
      {
        image:'/assets/images/tv/04.jpg',
        message:'aa',
        id:11
      },
      {
        image:'/assets/images/tv/03.jpg',
        message:'aa',
        id:12
      },
      {
        image:'/assets/images/tv/01.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/tv/02.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/tv/03.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/tv/04.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/tv/05.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/tv/06.jpg',
        message:'aa',
        id:6
      },
      {
        image:'/assets/images/tv/07.jpg',
        message:'aa',
        id:7
      },
      {
        image:'/assets/images/tv/08.jpg',
        message:'aa',
        id:8
      },
      {
        image:'/assets/images/tv/09.jpg',
        message:'aa',
        id:9
      },
      {
        image:'/assets/images/tv/05.jpg',
        message:'aa',
        id:10
      },
      {
        image:'/assets/images/tv/04.jpg',
        message:'aa',
        id:11
      },
      {
        image:'/assets/images/tv/03.jpg',
        message:'aa',
        id:12
      }
    ];
    var menus = [
      {
        'title':'频道',
        'datas':[
          {
            'title':'频道：',
          },
          {
            'title':'电视剧'
          },
          {
            'title':'电影'
          },
          {
            'title':'综艺'
          },
          {
            'title':'动漫'
          },
          {
            'title':'健康'
          },
          {
            'title':'教育'
          },
        ]
      },
      {
        'title':'类型',
        'datas':[
          {
            'title':'类型：',
          },
          {
            'title':'全部'
          },
          {
            'title':'资讯'
          },
          {
            'title':'医疗'
          },
          {
            'title':'两性'
          },
          {
            'title':'养生'
          },
          {
            'title':'健身'
          },
          {
            'title':'美容'
          },
          {
            'title':'心理'
          },
          {
            'title':'常识'
          },
          {
            'title':'儿科'
          },
          {
            'title':'老年'
          },
          {
            'title':'交流分享'
          }
        ]
      }
    ];
    fitnessSortService.getFitnesses = function(){
      var d = $q.defer();
      d.resolve({'data':fitnesses});
      return d.promise;
    };
    fitnessSortService.getMenu = function(){
      var d = $q.defer();
      d.resolve({'data':menus});
      return d.promise;
    };
    return fitnessSortService;
  }
})();
