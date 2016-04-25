(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MovieController',MovieController);

  /** @ngInject */
  function MovieController( $modal, MovieService, TvService, $log) {
    var vm = this;
    vm.upToData = {
      'type':'upToDateMovie',
      'number':9,
      'tip':''
    };
    vm.likeData = {
      'type':'likeMovie',
      'number':9,
      'tip':''
    };
    vm.chineseData = {
      'type':'chineseMovie',
      'number':9,
      'tip':''
    };
    vm.comedyData = {
      'type':'comedyMovie',
      'number':9,
      'tip':''
    };
    vm.hotData = {
      'type':'hotMovie',
      'number':9,
      'tip':''
    };
    vm.commingData = {
      'type':'commingMovie',
      'number':9,
      'tip':''
    };
    vm.artData = {
      'type':'artMovie',
      'number':9,
      'tip':''
    };
    vm.hollywoodData = {
      'type':'hollywoodMovie',
      'number':9,
      'tip':''
    };
    vm.cantoneseData = {
      'type':'cantoneseMovie',
      'number':9,
      'tip':''
    };

    //最新上线
    MovieService.getMovies(vm.upToData).then(function(result){
     vm.upToDateMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //为您精选
    MovieService.getMovies(vm.likeData).then(function(result){
      vm.likeMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //华语电影
    MovieService.getMovies(vm.chineseData).then(function(result){
      vm.chineseMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //喜剧电影
    MovieService.getMovies(vm.comedyData).then(function(result){
      vm.comedyData = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //影院热映
    MovieService.getMovies(vm.hotData).then(function(result){
      vm.hotMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //即将上映
    MovieService.getMovies(vm.commingData).then(function(result){
      vm.commingMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //动作电影
    MovieService.getMovies(vm.artData).then(function(result){
      vm.artMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //好莱坞电影
    MovieService.getMovies(vm.hollywoodData).then(function(result){
      vm.hollywoodMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });
    //粤语电影
    MovieService.getMovies(vm.cantoneseData).then(function(result){
      vm.cantoneseMovie = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });




  } //End of MainController

})();
