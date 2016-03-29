(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TvController',TvController);

  /** @ngInject */
  function TvController( $modal, MainService, TvService,$log) {
    var vm = this;

    /*获取轮播数据*/
    MainService.getCarouse().then(function(result){
     vm.slides = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*获取热播数据*/
    TvService.getHots().then(function(result){
      vm.hot_tvs = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*获取精选数据*/
    TvService.getSelects().then(function(result){
      vm.selects = result.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*精选电影*/
    MainService.getOld().then(function(result){
      vm.choiceMovies = result.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });

    /*爱情剧*/
    TvService.getLove().then(function(result){
      vm.tvDatas = result.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });

  } //End of MainController

})();
