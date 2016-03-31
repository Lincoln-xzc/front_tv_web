(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('AnimationService',AnimationService);

  /** @ngInject */
  function AnimationService($q,$http){
    var animationService = [];

    var animations = [
      {
        image:'/assets/images/animation/01.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/02.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/03.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/04.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/05.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/06.jpg',
        message:'aa',
        id:6
      },
      {
        image:'/assets/images/animation/07.jpg',
        message:'aa',
        id:7
      }
    ];
    var newAnimations = [
      {
        image:'/assets/images/animation/a1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/a2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/a3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/a4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/a5.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a6.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a7.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a8.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a9.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a10.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a11.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/a12.jpg',
        message:'aa',
        id:5
      }
    ];

    var popularData = [
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      }
    ]

    var japanData = [
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:5
      }
    ];
    var chinaData = [
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      }
    ];
    var famousData = [
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b1.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      }
    ];
    var movieData = [
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b2.jpg',
        message:'aa',
        id:5
      }
    ];
    var classicData = [
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/animation/b4.jpg',
        message:'aa',
        id:5
      }
    ];
    animationService.getCarousels = function(){
      var d = $q.defer();
      d.resolve({'data':animations});
      return d.promise;
    };
    animationService.getNewAnimations = function(){
      var d = $q.defer();
      d.resolve({'data':newAnimations});
      return d.promise;
    };
    animationService.getPopular = function(){
      var d = $q.defer();
      d.resolve({'data':popularData});
      return d.promise;
    };
    animationService.getJapanAnimation = function(){
      var d = $q.defer();
      d.resolve({'data':japanData});
      return d.promise;
    };
    animationService.getChinaAnimation = function(){
      var d = $q.defer();
      d.resolve({'data':chinaData});
      return d.promise;
    };
    animationService.getFamousAnimation = function(){
      var d = $q.defer();
      d.resolve({'data':famousData});
      return d.promise;
    };
    animationService.getMovieAnimation = function(){
      var d = $q.defer();
      d.resolve({'data':movieData});
      return d.promise;
    };
    animationService.getClassicAnimation = function(){
      var d = $q.defer();
      d.resolve({'data':classicData});
      return d.promise;
    };
    return animationService;
  }
})();

