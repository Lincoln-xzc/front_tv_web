(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('EndTeachController',EndTeachController);

  /** @ngInject */
  function EndTeachController() {
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
