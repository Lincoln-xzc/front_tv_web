(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('ArtController',ArtController);

  /** @ngInject */
  function ArtController( $modal, ArtService,$log) {
    var vm = this;

    /*爱情剧*/
    ArtService.getArts().then(function(result){
      vm.lgArts = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    ArtService.getShows().then(function(result){
      vm.artShows = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    })
    ArtService.getNews().then(function(result){
      vm.artNews = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    })
  } //End of MainController

})();
