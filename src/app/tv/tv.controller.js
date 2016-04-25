(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TvController',TvController);

  /** @ngInject */
  function TvController( $modal, MainService, TvService,$log) {
    var vm = this;

    vm.carouselData = {
      'type':'carouselTv',
      'number':3,
      'tip':''
    };

    vm.hotData = {
      'type':'hotTv',
      'number':6,
      'tip':''
    };
    vm.likeData = {
      'type':'likeTv',
      'number':9,
      'tip':''
    };
    vm.globalData = {
      'type':'globalTv',
      'number':9,
      'tip':''
    };
    vm.japanData = {
      'type':'japanaTv',
      'number':9,
      'tip':''
    };
    vm.americanData = {
      'type':'americanTv',
      'number':9,
      'tip':''
    };
    vm.hkongData = {
      'type':'hkongTv',
      'number':9,
      'tip':''
    };
    vm.loveData = {
      'type':'loveTv',
      'number':9,
      'tip':''
    };
    vm.artData = {
      'type':'artTv',
      'number':9,
      'tip':''
    };
    vm.copData = {
      'type':'copTv',
      'number':9,
      'tip':''
    };
    vm.thrillerData = {
      'type':'thrillerTv',
      'number':9,
      'tip':''
    };
    /*获取轮播数据*/
    MainService.getCarouse(vm.carouselData).then(function(result){
     vm.slides = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*获取热播数据*/
    MainService.getCarouse(vm.hotData).then(function(result){
      vm.hot_tvs = result.data.data;

    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*获取精选数据*/
    MainService.getCarouse(vm.likeData).then(function(result){
      vm.like_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    /*全球剧场*/
    MainService.getCarouse(vm.globalData).then(function(result){
      vm.global_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });

    /*日韩剧场*/
    MainService.getCarouse(vm.japanData).then(function(result){
      vm.japan_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*美剧剧场*/
    MainService.getCarouse(vm.americanData).then(function(result){
      vm.american_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*日韩剧场*/
    MainService.getCarouse(vm.hkongData).then(function(result){
      vm.hkong_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*爱情剧*/
    MainService.getCarouse(vm.loveData).then(function(result){
      vm.love_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*武侠剧*/
    MainService.getCarouse(vm.artData).then(function(result){
      vm.art_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*警匪*/
    MainService.getCarouse(vm.copData).then(function(result){
      vm.cop_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
    /*惊悚剧场*/
    MainService.getCarouse(vm.thrillerData).then(function(result){
      vm.thriller_tvs = result.data.data;
    },function(err){
      $log.error(err.statusText + ':'+err.status);
    });
  } //End of MainController

})();
