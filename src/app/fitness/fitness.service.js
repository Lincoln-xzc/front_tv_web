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


    var healths = [
      {
        image:'/assets/images/fitness/01.jpeg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/fitness/02.jpeg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/fitness/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/fitness/04.jpeg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/fitness/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/fitness/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/fitness/07.jpg',
        text:'I love that',
        id:7
      },
      {
        image:'/assets/images/fitness/08.jpg',
        text:'I love that',
        id:8
      },
      {
        image:'/assets/images/fitness/09.jpg',
        text:'I love that',
        id:9
      }
    ];
    var educations = [
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/fitness/13.jpg',
        text:'I love that',
        id:6
      }
    ];
    var medicals = [
      {
        image:'/assets/images/fitness/01.jpeg',
        text:'I love that',
        id:1
      },
      {
        image:'/assets/images/fitness/02.jpeg',
        text:'I love that',
        id:2
      },
      {
        image:'/assets/images/fitness/03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'/assets/images/fitness/04.jpeg',
        text:'I love that',
        id:4
      },
      {
        image:'/assets/images/fitness/05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'/assets/images/fitness/06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'/assets/images/fitness/07.jpg',
        text:'I love that',
        id:7
      },
      {
        image:'/assets/images/fitness/08.jpg',
        text:'I love that',
        id:8
      },
      {
        image:'/assets/images/fitness/09.jpg',
        text:'I love that',
        id:9
      }
    ];
    fitnessService.getCarouse = function(){
      var d = $q.defer();
      d.resolve({'data':slides});
      return d.promise;
    };
    fitnessService.getHealth = function(){
      var d = $q.defer();
      d.resolve({'data':healths});
      return d.promise;
    };
    fitnessService.getEducation = function(){
      var d = $q.defer();
      d.resolve({'data':educations});
      return d.promise;
    };
    fitnessService.getMedical = function(){
      var d = $q.defer();
      d.resolve({'data':medicals});
      return d.promise;
    };
 /*   mainService.getMovies = function(){
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

