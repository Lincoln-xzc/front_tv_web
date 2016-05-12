(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('AnimationSortController',AnimationSortController);

  /** @ngInject */
  function AnimationSortController( AnimationSortService, EndTvService, $state, $log) {
    var vm = this;
    vm.data = {
      'type':'animation',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'size':30,
      'currentPage':1,
    };
    EndTvService.getTvs(vm.data).then(function(result){
      vm.animations = result.data.data[0];
      vm.datas = vm.animations.resultList;
      vm.page ={
        "currentPage":vm.animations.currentPage,
        "totalPage":vm.animations.totalPage,
        "totalResult":vm.animations.totalResult
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
        vm.animations = result.data.data[0];
        vm.datas = vm.animations.resultList;

        vm.page ={
          "currentPage":vm.animations.currentPage,
          "totalPage":vm.animations.totalPage,
          "totalResult":vm.animations.totalResult
        };
      },function(err){
        $log.error(err.status +':'+err.statusText);
      });
    }

    AnimationSortService.getMenu().then(function(result){
      vm.menus = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    })
  } //End of MainController

})();
