(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TeachSortController',TeachSortController);

  /** @ngInject */
  function TeachSortController( TeachSortService, EndTvService, $state, $log) {
    var vm = this;
    vm.data = {
      'type':'teach',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'size':30,
      'currentPage':1,
    };
    EndTvService.getTvs(vm.data).then(function(result){
      vm.teaches = result.data.data[0];
      vm.datas = vm.teaches.resultList;
      vm.page ={
        "currentPage":vm.teaches.currentPage,
        "totalPage":vm.teaches.totalPage,
        "totalResult":vm.teaches.totalResult
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
      }
      EndTvService.getTvs(vm.data).then(function(result){
        vm.teaches = result.data.data[0];
        vm.datas = vm.teaches.resultList;

        vm.page ={
          "currentPage":vm.teaches.currentPage,
          "totalPage":vm.teaches.totalPage,
          "totalResult":vm.teaches.totalResult
        };
      },function(err){
        $log.error(err.status +':'+err.statusText);
      });
    }

    TeachSortService.getMenu().then(function(result){
      vm.menus = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    })
  } //End of MainController

})();
