(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal,$log) {
    var vm = this;
   /* vm.slides = [
      {
        image:'/assets/images/gulp.png',
        text:'I love that',
        id: 1
      },
      {
        image:'/assets/images/karma.png',
        text:'Nice image',
        id: 2
      },
      {
        image:'../assets/images/karma.png',
        text:'Nice image',
        id: 3
      },
      {
        image:'../assets/images/yeoman.png',
        text:'Nice images',
        id: 4
      }
    ];*/
    vm.items = ['item1', 'item2', 'item3'];

    vm.animationsEnabled = true;

    vm.open = function () {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

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
})();
