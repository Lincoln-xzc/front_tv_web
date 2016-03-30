(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('AnimationController',AnimationController);

  /** @ngInject */
  function AnimationController( $modal, AnimationService,$log) {
    var vm = this;

    /*爱情剧*/
    AnimationService.getCarousels().then(function(result){
      vm.lgAnimations = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    AnimationService.getNewAnimations().then(function(result){
      vm.newAnimations = result.data;
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });
    AnimationService.getPopular().then(function(result){
      vm.popularDatas = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getJapanAnimation().then(function(result){
      vm.japanAnimation = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getChinaAnimation().then(function(result){
      vm.chinaAnimation = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getFamousAnimation().then(function(result){
      vm.famousAnimation = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getMovieAnimation().then(function(result){
      vm.movieAnimation = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getClassicAnimation().then(function(result){
      vm.classicAnimation = result.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
  } //End of MainController

})();
