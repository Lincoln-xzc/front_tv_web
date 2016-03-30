(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('FitnessService',FitnessService);

  /** @ngInject */
  function FitnessService($q,$http){
    var fitnessService = [];
    var slides = [
      {
        image:'/assets/images/fitness/a1.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/fitness/a2.jpg',
        text:'Nice image',
        id:2
      },
      {
        image:'/assets/images/fitness/a3.jpg',
        text:'manhua image',
        id:3
      },
      {
        image:'/assets/images/fitness/a4.jpg',
        text:'manhua image',
        id:3
      },
      {
        image:'/assets/images/fitness/a5.jpg',
        text:'manhua image',
        id:3
      },
      {
        image:'/assets/images/fitness/a6.jpg',
        text:'manhua image',
        id:3
      },
      {
        image:'/assets/images/fitness/a7.jpg',
        text:'manhua image',
        id:3
      }
    ];
    var like = [
      {
        image:'b1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'b5.jpg',
        message:'aa',
        id:5
      },
      {
        image:'b6.jpg',
        message:'aa',
        id:6
      },
      {
        image:'b7.jpg',
        message:'aa',
        id:7
      },
      {
        image:'b8.jpg',
        message:'aa',
        id:8
      },
      {
        image:'b9.jpg',
        message:'aa',
        id:9
      },
      {
        image:'b10.jpg',
        message:'aa',
        id:10
      },
      {
        image:'b10.jpg',
        message:'aa',
        id:11
      },
      {
        image:'b10.jpg',
        message:'aa',
        id:12
      }
    ];
    var liquids = [
      {
        image:'/assets/images/liquidcarousel/01.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/liquidcarousel/02.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/liquidcarousel/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/liquidcarousel/04.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/liquidcarousel/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/liquidcarousel/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/liquidcarousel/07.jpg',
        text:'I love that',
        id:7
      },
      {
        image:'/assets/images/liquidcarousel/08.jpg',
        text:'I love that',
        id:8
      },
      {
        image:'/assets/images/liquidcarousel/09.jpg',
        text:'I love that',
        id:9
      },
      {
        image:'/assets/images/liquidcarousel/10.jpg',
        text:'I love that',
        id:10
      },
      {
        image:'/assets/images/liquidcarousel/11.jpg',
        text:'I love that',
        id:11
      },
      {
        image:'/assets/images/liquidcarousel/12.jpg',
        text:'I love that',
        id:12
      },
      {
        image:'/assets/images/liquidcarousel/13.jpg',
        text:'I love that',
        id:13
      },
      {
        image:'/assets/images/liquidcarousel/14.jpg',
        text:'I love that',
        id:14
      },
      {
        image:'/assets/images/liquidcarousel/15.jpg',
        text:'I love that',
        id:15
      },
      {
        image:'/assets/images/liquidcarousel/16.jpg',
        text:'I love that',
        id:16
      }
    ];
    var old = [
      {
        image:'b1.jpg',
        message:'aa',
        id:1
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:2
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:3
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:4
      },
      {
        image:'b5.jpg',
        message:'aa',
        id:5
      },
      {
        image:'b6.jpg',
        message:'aa',
        id:6
      }
    ];
    var tvDatas = [
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },
      {
        image:'b1.jpg',
        message:'aa',
        id:1,
        type:1
      },

      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },
      {
        image:'b2.jpg',
        message:'aa',
        id:1,
        type:2
      },

      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },
      {
        image:'b3.jpg',
        message:'aa',
        id:1,
        type:3
      },

      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      },
      {
        image:'b4.jpg',
        message:'aa',
        id:1,
        type:4
      }
    ];
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
      },
      {
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
      }
    ];
    fitnessService.getCarouse = function(){
      var d = $q.defer();
      d.resolve({'data':slides});
      return d.promise;
    };
/*    mainService.getLike = function(){
      var d = $q.defer();
      d.resolve({'data':like});
      return d.promise;
    };
    mainService.getLiquid = function(){
      var d = $q.defer();
      d.resolve({'data':liquids});
      return d.promise;
    };
    mainService.getOld = function(){
      var d = $q.defer();
      d.resolve({'data':old});
      return d.promise;
    };
    mainService.getMovies = function(){
      var d = $q.defer();
      d.resolve({'data':movies});
      return d.promise;
    }
    mainService.getTvShow = function(type){
      var datas =[];
      angular.forEach(tvDatas, function(value){
        if(value.type == type){
          console.log(value.type);
          datas.push(value);
        }
      });
      var d = $q.defer();
      d.resolve({'data':datas});
      return d.promise;
    }*/
    return fitnessService;
  }
})();

