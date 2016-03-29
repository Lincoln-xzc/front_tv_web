(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MovieController',MovieController);

  /** @ngInject */
  function MovieController( $modal, MovieService, TvService, $log) {
    var vm = this;

    MovieService.getMovies().then(function(result){
     vm.movies = result.data;
      console.log(vm.movies);
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    TvService.getLove().then(function(result){
      vm.tvDatas = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });

  } //End of MainController

})();
