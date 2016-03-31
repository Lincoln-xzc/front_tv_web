(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('TeachService',TeachService);

  /** @ngInject */
  function TeachService($q,$http){
    var teachService = [];
    var likes = [
      {
        image:'/assets/images/teach/01.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/teach/02.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/teach/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/teach/04.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/teach/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/teach/06.jpg',
        text:'I love that',
        id:6
      }
    ];
    var educations = [
      {
        image:'/assets/images/teach/03.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/teach/02.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/teach/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/teach/04.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/teach/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/teach/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/07.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/08.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/01.jpg',
        text:'I love that',
        id:6
      }
    ];
    var lives = [
      {
        image:'/assets/images/teach/03.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/teach/02.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/teach/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/teach/04.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/teach/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/teach/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/07.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/08.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/01.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/teach/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/teach/07.jpg',
        text:'I love that',
        id:6
      }
    ];
    teachService.getLikes = function(){
      var d = $q.defer();
      d.resolve({'data':likes});
      return d.promise;
    };
    teachService.getEducations = function(){
      var d = $q.defer();
      d.resolve({'data':educations});
      return d.promise;
    };
    teachService.getLives = function(){
      var d = $q.defer();
      d.resolve({'data':lives});
      return d.promise;
    };
    return teachService;
  }
})();

