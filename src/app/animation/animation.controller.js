(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('AnimationController',AnimationController);

  /** @ngInject */
  function AnimationController( $modal, AnimationService,$log) {
    var vm = this;

    vm.animationCarousel={
      'type':'carouselAnimation',
      'number':7,
      'tip':''
    };
    vm.newAnimationData = {
      'type':'japanNewAnimation',
      'number':12,
      'tip':''
    };
    vm.popularAnimationData = {
      'type': 'popularAnimation',
      'number':9,
      'tip':''
    };
    vm.japanAnimationData = {
      'type':'japanAnimation',
      'number':12,
      'tip':''
    };
    vm.chinaAnimationData = {
      'type':'chinaAnimation',
      'number':12,
      'tip':''
    };
    vm.famousAnimationData = {
      'type':'famousAnimation',
      'number':6,
      'tip':''
    };
    vm.movieAnimationData = {
      'type':'movieAnimation',
      'number':12,
      'tip':''
    };
    vm.classicAnimationData = {
      'type':'classficAnimation',
      'number':12,
      'tip':''
    };
    /*头部轮播*/
    AnimationService.getCarousels(vm.animationCarousel).then(function(result){
      vm.lgAnimations = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });

    /*获取新番*/
    AnimationService.getNewAnimations(vm.newAnimationData).then(function(result){
      vm.newAnimations = result.data.data;
    },function(err){
      $log.error(err.status +':'+err.statusText);
    });

    /*热门动漫*/
    AnimationService.getPopular(vm.popularAnimationData).then(function(result){
      vm.popularDatas = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getJapanAnimation(vm.japanAnimationData).then(function(result){
      vm.japanAnimation = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getChinaAnimation(vm.chinaAnimationData).then(function(result){
      vm.chinaAnimation = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getFamousAnimation(vm.famousAnimationData).then(function(result){
      vm.famousAnimation = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getMovieAnimation(vm.movieAnimationData).then(function(result){
      vm.movieAnimation = result.data.data;
      console.log(vm.movieAnimation);
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    AnimationService.getClassicAnimation(vm.classicAnimationData).then(function(result){
      vm.classicAnimation = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
  } //End of MainController

})();
