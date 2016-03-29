(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('MovieService',MovieService);

  /** @ngInject */
  function MovieService($q,$http){
    var movieService = [];


    var movies = [
      {
        image:'/assets/images/movie/a1.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/movie/a2.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/movie/a3.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/movie/a4.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/movie/a5.jpg',
        text:'I love that',
        id:5
      }
  /*    {
        image:'/assets/images/movie/a6.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/movie/a7.jpg',
        text:'I love that',
        id:7
      },
      {
        image:'/assets/images/movie/a8.jpg',
        text:'I love that',
        id:8
      },
      {
        image:'/assets/images/movie/a9.jpg',
        text:'I love that',
        id:9
      },
      {
        image:'/assets/images/movie/a10.jpg',
        text:'I love that',
        id:10
      },
      {
        image:'/assets/images/movie/a11.jpg',
        text:'I love that',
        id:11
      }*/
    ];

    movieService.getMovies = function(){
      var d = $q.defer();
      d.resolve({'data':movies});
      return d.promise;
    }

    return movieService;
  }
})();

