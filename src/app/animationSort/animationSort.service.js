(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('AnimationSortService',AnimationSortService);

  /** @ngInject */
  function AnimationSortService($q){
    var animationSortService = [];
    var animations = [
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
            'title':'频道：'
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
        'title':'地区',
        'datas':[
          {
            'title':'地区：'
          },
          {
            'title':'全部'
          },
          {
            'title':'大陆'
          },
          {
            'title':'日本'
          },
          {
            'title':'美国'
          },
          {
            'title':'香港'
          },
          {
            'title':'韩国'
          },
          {
            'title':'英国'
          },
          {
            'title':'其他'
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
            'title':'全部'
          },
          {
            'title':'热血'
          },
          {
            'title':'格斗'
          },
          {
            'title':'恋爱'
          },
          {
            'title':'美少女'
          },
          {
            'title':'校园'
          },
          {
            'title':'搞笑'
          },
          {
            'title':'LOLI'
          },
          {
            'title':'神魔'
          },
          {
            'title':'机战'
          },
          {
            'title':'科幻'
          },
          {
            'title':'真人'
          },
          {
            'title':'青春'
          },
          {
            'title':'魔法'
          },
          {
            'title':'神话'
          },
          {
            'title':'冒险'
          },
          {
            'title':'运动'
          },
          {
            'title':'竞技'
          },
          {
            'title':'童话'
          },
          {
            'title':'亲子'
          },
          {
            'title':'教育'
          },
          {
            'title':'励志'
          },
          {
            'title':'历史'
          },
          {
            'title':'战争'
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
            'title':'全部'
          },
          {
            'title':'2016'
          },
          {
            'title':'2015'
          },
          {
            'title':'2014'
          },
          {
            'title':'2013'
          },
          {
            'title':'2012'
          },
          {
            'title':'2011'
          },
          {
            'title':'00年代'
          },
          {
            'title':'90年代'
          },
          {
            'title':'80年代'
          },
          {
            'title':'70年代'
          },
          {
            'title':'更早'
          }
        ]
      }
    ];
    animationSortService.getAnimations = function(){
      var d = $q.defer();
      d.resolve({'data':animations});
      return d.promise;
    };
    animationSortService.getMenu = function(){
      var d = $q.defer();
      d.resolve({'data':menus});
      return d.promise;
    };
    return animationSortService;
  }
})();

