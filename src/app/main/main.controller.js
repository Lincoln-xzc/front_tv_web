(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController(MainService, $log) {
    var vm = this;
    vm.type = 1;
    vm.lg='lg';
    vm.sm = 'sm';
    vm.smcarousel ={
      'size':'sm',
      'width':'1200',
      'height':'150'
    };
    vm.mdcarousel = {
      'size':'md',
      'width':'2000',
      'height':'350'
    };

    vm.type = "movie";
    vm.number =  "1";

    MainService.getTest(vm.type, vm.number).then(function(result){
      vm.data = result.data;
      console.log(result);
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

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
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });
    MainService.getOld().then(function(result){
      vm.oldMovies = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    MainService.getTvShow(vm.type).then(function(result){
      vm.tvDatas = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    MainService.getMovies().then(function(result){
      vm.movies = result.data;
      console.log(vm.movies);
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    })
    vm.getTv = function(type){
      MainService.getTvShow(type).then(function(result){
        vm.tvDatas = result.data;
      },function(err){
        $log.error(err.status + ':' +err.statusText);
      })
    };


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
