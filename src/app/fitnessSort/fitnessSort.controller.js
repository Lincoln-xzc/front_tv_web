(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('FitnessSortController',FitnessSortController);

  /** @ngInject */
  function FitnessSortController( FitnessSortService, EndTvService, $state, $log) {
    var vm = this;
    vm.data = {
      'type':'fitness',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'size':30,
      'currentPage':1,
    };
    EndTvService.getTvs(vm.data).then(function(result){
      vm.fitness = result.data.data[0];
      vm.datas = vm.fitness.resultList;
      vm.page ={
        "currentPage":vm.fitness.currentPage,
        "totalPage":vm.fitness.totalPage,
        "totalResult":vm.fitness.totalResult
      };
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });

    vm.select = function(url,tip,area,type,date){
      if(url !=undefined){
        $state.go(url);
      } else if(tip !=undefined){
        vm.data.tip = tip;
      } else if(type !=undefined){
        vm.data.type = type;
      }
      EndTvService.getTvs(vm.data).then(function(result){
        vm.fitness = result.data.data[0];
        vm.datas = vm.fitness.resultList;

        vm.page ={
          "currentPage":vm.fitness.currentPage,
          "totalPage":vm.fitness.totalPage,
          "totalResult":vm.fitness.totalResult
        };
      },function(err){
        $log.error(err.status +':'+err.statusText);
      });
    }
    FitnessSortService.getMenu().then(function(result){
      vm.menus = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    })
  } //End of MainController

})();
