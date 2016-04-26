(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('TeachController',TeachController);

  /** @ngInject */
  function TeachController( $modal, TeachService, $log) {
    var vm = this;

    vm.likeData ={
      'type':'likeTeach',
      'number':6,
      'tip':''
    };
    vm.primaryData ={
      'type':'primaryTeach',
      'number':6,
      'tip':''
    };
    vm.enlightenData ={
      'type':'enlightenTeach',
      'number':6,
      'tip':''
    };
    vm.popularData ={
      'type':'popularTeach',
      'number':6,
      'tip':''
    };
    vm.foreignData ={
      'type':'foreignTeach',
      'number':6,
      'tip':''
    };
    vm.vocationnalData ={
      'type':'vocationnalTeach',
      'number':6,
      'tip':''
    };
    vm.academicData ={
      'type':'academicTeach',
      'number':6,
      'tip':''
    };
    vm.lifeData ={
      'type':'lifeTeach',
      'number':6,
      'tip':''
    };
    /*可能喜欢*/
    TeachService.getTeaches(vm.likeData).then(function(result){
      vm.likeTeaches = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*中小学教育*/
    TeachService.getTeaches(vm.primaryData).then(function(result){
      vm.primarryTeaches = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*启蒙教育*/
    TeachService.getTeaches(vm.enlightenData).then(function(result){
      vm.enlightenTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*热门精选*/
    TeachService.getTeaches(vm.popularData).then(function(result){
      vm.popularTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*外语学习*/
    TeachService.getTeaches(vm.foreignData).then(function(result){
      vm.foreignTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*职业培训*/
    TeachService.getTeaches(vm.vocationnalData).then(function(result){
      vm.vocationnalTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*学历教育*/
    TeachService.getTeaches(vm.academicData).then(function(result){
      vm.academicTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
    /*可能喜欢*/
    TeachService.getTeaches(vm.lifeData).then(function(result){
      vm.lifeTeach = result.data.data;
    },function(err){
      $log.error(err.status + ':'+err.statusText);
    });
  } //End of MainController

})();
