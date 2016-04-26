(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('ArtController',ArtController);

  /** @ngInject */
  function ArtController( $modal, ArtService,$log) {
    var vm = this;
    vm.carouselData = {
      'type':'carouselArt',
      'number':9,
      'tip':''
    };
    vm.recommendData = {
      'type':'recommendArt',
      'number':9,
      'tip':''
    };
    vm.upToData = {
      'type':'upToDateArt',
      'number':9,
      'tip':''
    };
    vm.hotData = {
      'type':'hotArt',
      'number':9,
      'tip':''
    };
    vm.chinaData = {
      'type':'chinaArt',
      'number':9,
      'tip':''
    };
    vm.koreaData = {
      'type':'koreaArt',
      'number':9,
      'tip':''
    };
    vm.hkongData = {
      'type':'hkongArt',
      'number':9,
      'tip':''
    };
    vm.gameData = {
      'type':'gameArt',
      'number':9,
      'tip':''
    };
    vm.crosstalkData = {
      'type':'crosstalkArt',
      'number':9,
      'tip':''
    };
    /*轮播图*/
    ArtService.getArts(vm.carouselData).then(function(result){
      vm.lgArts = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*强档推荐*/
    ArtService.getArts(vm.recommendData).then(function(result){
      vm.recommendArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*最新更新*/
    ArtService.getArts(vm.upToData).then(function(result){
      vm.upToDataArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*综艺劲爆点*/
    ArtService.getArts(vm.hotData).then(function(result){
      vm.hotArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*大陆综艺*/
    ArtService.getArts(vm.chinaData).then(function(result){
      vm.chinaArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*韩国综艺*/
    ArtService.getArts(vm.koreaData).then(function(result){
      vm.koreaArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*港台综艺*/
    ArtService.getArts(vm.hkongData).then(function(result){
      vm.hkongArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*游戏解说*/
    ArtService.getArts(vm.gameData).then(function(result){
      vm.gameArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
    /*轮播图*/
    ArtService.getArts(vm.crosstalkData).then(function(result){
      vm.crosstalkArt = result.data.data;
    },function(err){
      $log.error(err.status + ':' +err.statusText);
    });
  } //End of MainController

})();
