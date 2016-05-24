(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController(MainService, $log) {
    var vm = this;
    vm.type = 1;

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
    vm.carouselData = {
      'type':'carouselBg',
      'number':3,
      'tip':''
    };

    vm.likeData = {
      'type':'guessLike',
      'number':12,
      'tip':''
    };

    vm.liquidData = {
      'type':'currentHot',
      'number':16,
      'tip':''
    };
    vm.oldData = {
      'type':'classicRetro',
      'number':6,
      'tip':''
    };
    vm.type ='upToDate';
    vm.artType = 'hot';
    vm.movieData = {
      'type':'mainMovie',
      'number':11,
      'tip':''
    };
    MainService.getCarouse(vm.carouselData).then(function(result){
      console.log(result);
      vm.slides = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    MainService.getLike(vm.likeData).then(function(result){
      vm.likeMovies = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    MainService.getLiquid(vm.liquidData).then(function(result){
      vm.liquids = result.data.data;
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });
    MainService.getOld(vm.oldData).then(function(result){
      vm.oldMovies = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    MainService.getTvShow(vm.type).then(function(result){
      vm.tvDatas = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    MainService.getMovies(vm.movieData).then(function(result){
      vm.movies = result.data.data;

    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    MainService.getArtShow(vm.artType).then(function(result){
      vm.arts = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    vm.getTv = function(type){
      MainService.getTvShow(type).then(function(result){
        vm.tvDatas = result.data.data;
        console.log(vm.tvDatas);
      },function(err){
        $log.error(err.status + ':' +err.statusText);
      })
    };
    vm.getArts = function(type){
      MainService.getArtShow(type).then(function(result){
        vm.arts = result.data.data;
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
