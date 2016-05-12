(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TvSortController',TvSortController);

  /** @ngInject */
  function TvSortController( $modal, TvSortService, EndTvService,$log,$state) {
    var vm = this;
    vm.data = {
      'type':'tv',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'size':30,
      'currentPage':1,
    };
   /* TvSortService.getTvs().then(function(result){
      vm.tvs = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    });*/
    EndTvService.getTvs(vm.data).then(function(result){
      vm.tvs = result.data.data[0];
      vm.datas = vm.tvs.resultList;
      vm.page ={
        "currentPage":vm.tvs.currentPage,
        "totalPage":vm.tvs.totalPage,
        "totalResult":vm.tvs.totalResult
      };
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });

    TvSortService.getMenus().then(function(result){
      vm.menus = result.data;
    },function(err){
      $log.error(err.status +":"+err.statusText);
    });

    //select

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
      console.log(vm.data);
      EndTvService.getTvs(vm.data).then(function(result){
        vm.tvs = result.data.data[0];
        vm.datas = vm.tvs.resultList;
        console.log(vm.datas);
        vm.page ={
          "currentPage":vm.tvs.currentPage,
          "totalPage":vm.tvs.totalPage,
          "totalResult":vm.tvs.totalResult
        };
      },function(err){
        $log.error(err.status +':'+err.statusText);
      });
    }

  } //End of MainController

})();
