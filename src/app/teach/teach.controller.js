(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TeachController',TeachController);

  /** @ngInject */
  function TeachController( $modal, TeachService, $log) {
    var vm = this;
    TeachService.getLikes().then(function(result){
      vm.guesses = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    TeachService.getEducations().then(function(result){
      vm.educations = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    TeachService.getLives().then(function(result){
      vm.lives = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });

  } //End of MainController

})();
