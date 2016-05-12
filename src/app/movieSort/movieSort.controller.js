(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MovieSortController',MovieSortController);

  /** @ngInject */
  function MovieSortController( MovieSortService,EndTvService,$state, $log) {
    var vm = this;
    vm.data = {
      'type':'movie',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'size':30,
      'currentPage':1,
    };
    EndTvService.getTvs(vm.data).then(function(result){
      vm.movies = result.data.data[0];
      vm.datas = vm.movies.resultList;
      vm.page ={
        "currentPage":vm.movies.currentPage,
        "totalPage":vm.movies.totalPage,
        "totalResult":vm.movies.totalResult
      };
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });

    vm.select = function(url,tip,area,type,date){
      if(url !=undefined){
        $state.go(url);
      } else if(tip !=undefined){
        vm.data.tip = tip;
      } else if(area !=undefined){
        vm.data.area = area;
      } else if(type !=undefined){
        vm.data.type = type;
      } else if(date != undefined){
        vm.data.releaseDate = date;
      }
      EndTvService.getTvs(vm.data).then(function(result){
        vm.movies = result.data.data[0];
        vm.datas = vm.movies.resultList;
        console.log(vm.datas);
        vm.page ={
          "currentPage":vm.movies.currentPage,
          "totalPage":vm.movies.totalPage,
          "totalResult":vm.movies.totalResult
        };
      },function(err){
        $log.error(err.status +':'+err.statusText);
      });
    }
    MovieSortService.getMenu().then(function(result){
      vm.menus = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    })
  } //End of MainController

})();
