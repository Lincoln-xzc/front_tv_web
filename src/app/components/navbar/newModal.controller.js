(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('NewModalController',NewModalController);

  /** @ngInject */
  function NewModalController($modalInstance) {
    var vm = this;
    vm.ok = function(){
      $modalInstance.close();
    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController

})();
