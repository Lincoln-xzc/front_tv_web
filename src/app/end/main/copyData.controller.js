(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('CopyDataController',CopyDataController);

  /** @ngInject */
  function CopyDataController($modalInstance,$log,LoginService) {
    var vm = this;
    vm.ok = function(){
      LoginService.loginFront(vm.user).then(function(result){
        vm.data = result.data.data;
        console.log(vm.data);
        $modalInstance.close(vm.data);
      },function(err){
        $log.error(err.status +":"+ err.statusText);
      })

    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController
})();
