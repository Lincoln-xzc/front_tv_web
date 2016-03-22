(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController( $modal, MainService, $log) {
    var vm = this;
    vm.test = 'test';

    MainService.getCarouse().then(function(result){
     vm.slides = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    MainService.getLike().then(function(result){
      vm.likeMovies = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    MainService.getLiquid().then(function(result){
      vm.liquids = result.data;
      console.log(vm.liquids);
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });
/*  //弹出框
    vm.open = function() {

      var modalInstance = $modal.open({
        animation: true,
        backdrop: true,
        templateUrl: 'myModalContent.html',
        controller: 'NrsController',
        size: 'lg',
        resolve: {
          NRS: function () {
            return vm.item;

          }

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  }
 /* function ModalInstanceCtrl($scope,$uibModalInstance, items){
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }*/

  } //End of MainController

  /*angular.module('frontTvWeb')
    .controller('NrsController', function($scope, $modalInstance) {
      $scope.ok = function () {
        $modalInstance.close($scope.NRS);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    })*/
})();
