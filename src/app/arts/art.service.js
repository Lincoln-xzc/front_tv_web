(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('ArtService',ArtService);

  /** @ngInject */
  function ArtService($q,$http){
    var artService = [];

    var arts = [
      {
        image:'/assets/images/art/01.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/art/02.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/art/03.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/art/04.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/art/05.jpg',
        message:'aa',
        id:5
      }
    ];
    var datas = [
      {
        image:'/assets/images/art/a1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/art/a2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/art/a3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/art/a4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/art/a5.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a6.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a7.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a8.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a9.jpg',
        message:'aa',
        id:5
      }
    ];
    var news = [
      {
        image:'/assets/images/art/a1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'/assets/images/art/a2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'/assets/images/art/a3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'/assets/images/art/a4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'/assets/images/art/a5.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a6.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a7.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a8.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a9.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a9.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a9.jpg',
        message:'aa',
        id:5
      },
      {
        image:'/assets/images/art/a9.jpg',
        message:'aa',
        id:5
      }
    ];
    artService.getArts = function(){
      var d = $q.defer();
      d.resolve({'data':arts});
      return d.promise;
    };
    artService.getShows = function(){
      var d = $q.defer();
      d.resolve({'data':datas});
      return d.promise;
    };
    artService.getNews = function(){
      var d = $q.defer();
      d.resolve({'data':news});
      return d.promise;
    }


    return artService;
  }
})();

