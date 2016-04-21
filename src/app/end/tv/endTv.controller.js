(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('EndTvController',EndTvController);

  /** @ngInject */
  function EndTvController($log,EndTvService) {
    var vm = this;
    vm.page ={
      'size':20,
      'type':'tv',
      'currentPage':1
    };
    EndTvService.getTvs(vm.page).then(function(result){
      vm.tvs = result.data.data[0];
      vm.datas = vm.tvs.resultList;
      vm.page ={
        "currentPage":vm.datas.currentPage,
        "totalPage":vm.datas.totalPage,
        "totalResult":vm.datas.totalResult
      };
      console.log(result);
    },function(err){
      $log.error(err.status +':'+ err.statusText);
    });
    vm.selectAll = function(){
      if(vm.check == 'YES'){
        vm.checkValue = true;
      } else {
        vm.checkValue = false;
      }
    }

  } //End of EndMainController
})();
