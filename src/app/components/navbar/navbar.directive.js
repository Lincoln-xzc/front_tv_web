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
    function NavbarController($modal,$scope,$log,$cookieStore, $state) {
      var vm = this;

      //搜索
      vm.search = function(){
       // $scope.$broadcast('movieName',vm.movieName);
        $state.go('nav.message',{'movieName': vm.movieName});
      };

      //登录弹出框
       vm.open = function() {

         var modalInstance = $modal.open({
           animation: true,
           backdrop: true,
           templateUrl: 'app/components/navbar/modal.html',
           controller: 'NewModalController',
           controllerAs:'modal',
           size: 'md'
       });

       modalInstance.result.then(function (data,$log) {
           vm.user = data;
           $cookieStore.put("user",data);

         }, function () {
              $log.info('Modal dismissed at: ' + new Date());
       });
    };
      vm.user = $cookieStore.get('user');
      //注册弹出框
      vm.create = function() {

        var modalInstance = $modal.open({
          animation: true,
          backdrop: true,
          templateUrl: 'createModal.html',
          controller: 'createAccountController',
          controllerAs:'create',
          size: 'md'
        });

        modalInstance.result.then(function (selectedItem) {
          vm.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

      //退出
      vm.logout = function(){
        $cookieStore.remove("user");
        vm.user= "";
      }
    }
  }

})();
