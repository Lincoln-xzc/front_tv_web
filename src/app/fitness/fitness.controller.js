(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('FitnessController',FitnessController);

  /** @ngInject */
  function FitnessController( $modal, FitnessService, $log) {
    var vm = this;

    vm.fitnessCarousel = {
      'type':'carouselFitness',
      'number':7,
      'tip':''
    };
    vm.healthData = {
      'type': 'healthFitness',
      'number':9,
      'tip':''
    };
    vm.expertData = {
      'type': 'expertFitness',
      'number':9,
      'tip':''
    };
    vm.medicalData = {
      'type':'medicalFitness',
      'number':9,
      'tip':''
    };
    vm.careData = {
      'type': 'careFitness',
      'number':6,
      'tip':''
    };
    vm.slimData = {
      'type': 'slimFitness',
      'number':6,
      'tip':''
    };
    vm.childData = {
      'type': 'childFitness',
      'number':6,
      'tip':''
    };
    vm.oldData = {
      'type': 'oldFitness',
      'number':6,
      'tip':''
    };
    vm.psyData = {
      'type': 'psyFitness',
      'number':6,
      'tip':''
    };
    FitnessService.getCarouse(vm.fitnessCarousel).then(function(result){
     vm.slides = result.data.data;
    },function(err){
      $log.error(err.statusText +':'+ err.status);
    });

    FitnessService.getHealth(vm.healthData).then(function(result){
      vm.health_message = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getHealth(vm.expertData).then(function(result){
      vm.expertFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getMedical(vm.medicalData).then(function(result){
      vm.medicals = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getMedical(vm.careData).then(function(result){
      vm.careFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getMedical(vm.slimData).then(function(result){
      vm.slimFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getMedical(vm.childData).then(function(result){
      vm.childFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getMedical(vm.oldData).then(function(result){
      vm.oldFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });

    FitnessService.getEducation(vm.psyData).then(function(result){
      vm.psyFitness = result.data.data;
    },function(err){
      $log.error(err.statusText+':'+err.status);
    });



  } //End of MainController

})();
