(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('EndMainController',EndMainController);

  /** @ngInject */
  function EndMainController() {
    var vm = this;

    vm.selectAll = function(){
      if(vm.check == 'YES'){
        vm.checkValue = true;
      } else {
        vm.checkValue = false;
      }
    }

  } //End of EndMainController
})();
