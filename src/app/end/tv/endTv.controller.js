(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('EndTvController',EndTvController);

  /** @ngInject */
  function EndTvController($log,$modal, EndTvService) {
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

    },function(err){
      $log.error(err.status +':'+ err.statusText);
    });

    vm.selectAll = function(){
      if(vm.check == 'YES'){
        vm.checkValue = true;
      } else {
        vm.checkValue = false;
      }
    };

    vm.copy = function(data){
      var modalInstance = $modal.open({
        templateUrl:'copy.html',
        controller:'CopyDataController',
        controllerAs: 'copy',
        animation: true,
        size: 'md',
        resolve: {
          movie: function(){
            return data;
          }
        }
      });

      modalInstance.result.then(function (selectItem){
        vm.selected = selectItem;
      },function(){
        $log.info("Modal dismissed at:" + new Date());
      })
    }

  } //End of EndMainController

  angular
    .module('frontTvWeb')
    .controller('CopyDataController',CopyDataController);

  /** @ngInject */
  function CopyDataController($modalInstance,$log,movie, EndTvService) {
    var vm = this;
    vm.movie = movie;
    vm.ok = function(){
      vm.data ={
        'movieId':vm.movie.id,
        'recommand':vm.movie.tip
      };
      console.log(vm.data);
      EndTvService.save(vm.data).then(function(result){
        vm.data = result.data;
      },function(err){
        $log.error(err.status +':'+ err.statusText);
      })
      $modalInstance.close(vm.data);
    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController
})();
