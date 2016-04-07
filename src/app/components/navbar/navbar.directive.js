(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($modal) {
      var vm = this;

      //弹出框
       vm.open = function() {

         var modalInstance = $modal.open({
           animation: true,
           backdrop: true,
           templateUrl: 'app/components/navbar/modal.html',
           controller: 'NewModalController',
           controllerAs:'modal',
           size: 'md',
           resolve: {
             login: function () {
               return vm.item;
           }
         }
       });

       modalInstance.result.then(function (selectedItem,$log) {
           vm.selected = selectedItem;
         }, function () {
              $log.info('Modal dismissed at: ' + new Date());
       });
    };

    }
  }

})();
