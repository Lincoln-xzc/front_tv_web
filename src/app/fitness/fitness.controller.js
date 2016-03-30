(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('FitnessController',FitnessController);

  /** @ngInject */
  function FitnessController( $modal, FitnessService, $log) {
    var vm = this;

    FitnessService.getCarouse().then(function(result){
     vm.slides = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });


  } //End of MainController

})();
