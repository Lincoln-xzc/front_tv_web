(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('MainService',MainService);

  /** @ngInject */
  function MainService($q,$http){
    var mainService = [];
    var slides = [
      {
        image:'a1.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'a2.jpg',
        text:'Nice image',
        id:2
      },
      {
        image:'a3.jpg',
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
        image:'01.jpg',
        text:'I love that',
        id:1
      },
      {
        image:'02.jpg',
        text:'I love that',
        id:2
      },
      {
        image:'03.jpg',
        text:'I love that',
        id:3
      },
      {
        image:'04.jpg',
        text:'I love that',
        id:4
      },
      {
        image:'05.jpg',
        text:'I love that',
        id:5
      },
      {
        image:'06.jpg',
        text:'I love that',
        id:6
      },
      {
        image:'07.jpg',
        text:'I love that',
        id:7
      },
      {
        image:'08.jpg',
        text:'I love that',
        id:8
      },
      {
        image:'09.jpg',
        text:'I love that',
        id:9
      },
      {
        image:'10.jpg',
        text:'I love that',
        id:10
      },
      {
        image:'11.jpg',
        text:'I love that',
        id:11
      },
      {
        image:'12.jpg',
        text:'I love that',
        id:12
      },
      {
        image:'13.jpg',
        text:'I love that',
        id:13
      },
      {
        image:'14.jpg',
        text:'I love that',
        id:14
      },
      {
        image:'15.jpg',
        text:'I love that',
        id:15
      },
      {
        image:'16.jpg',
        text:'I love that',
        id:16
      }
    ];
    mainService.getCarouse = function(){
      var d = $q.defer();
      d.resolve({'data':slides});
      return d.promise;
    };
    mainService.getLike = function(){
      var d = $q.defer();
      d.resolve({'data':like});
      return d.promise;
    };
    mainService.getLiquid = function(){
      var d = $q.defer();
      d.resolve({'data':liquids});
      return d.promise;
    }
    return mainService;
  }
})();

