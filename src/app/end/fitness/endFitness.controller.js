(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('EndFitnessController',EndFitnessController);

  /** @ngInject */
  function EndFitnessController(EndTvService, EndMainService, $log, $modal) {
    var vm = this;

    vm.initpage ={
      'size':20,
      'type':'fitness',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'currentPage':1
    };
    EndTvService.getTvs(vm.initpage).then(function(result){

      vm.datas = result.data.data[0];
      vm.fitness = vm.datas.resultList;
      vm.page ={
        "currentPage":vm.datas.currentPage,
        "totalPage":vm.datas.totalPage,
        "totalResult":vm.datas.totalResult
      };
    },function(err){
      $log.error(err.status +':'+ err.statusText);
    });

    vm.selectAll = function(){
      if(vm.check == 'YES'){
        vm.checkValue = true;
      } else {
        vm.checkValue = false;
      }
    };

    vm.changePage = function(){
      vm.pageData ={
        'size':20,
        'type':'fitness',
        'tip':'',
        'area':'',
        'releaseDate':'',
        'currentPage':vm.page.currentPage
      };
      EndTvService.getTvs(vm.pageData).then(function(result){
        vm.datas = result.data.data[0];
        vm.fitness = vm.datas.resultList;
        vm.page ={
          "currentPage":vm.datas.currentPage,
          "totalPage":vm.datas.totalPage,
          "totalResult":vm.datas.totalResult
        };
      },function(err){
        $log.error(err.status +':'+ err.statusText);
      });
    };
    //查看资源列表
    vm.dataType;
    vm.change = function(data){
      vm.dataType = data;
      vm.typeData = {
        'type':data,
        'number':10,
        'tip':''
      };
      EndMainService.getEndMainList(vm.typeData).then(function(result){
        vm.resources = result.data.data;
        console.log(vm.resources);
      },function(err){
        $log.error(err.status +":"+ err.statusText);
      })
    };
    //删除
    vm.delete = function(id){
      vm.typeData = {
        'type':vm.dataType,
        'number':10,
        'tip':''
      };
      EndMainService.delete(id).then(function(result){
        EndMainService.getEndMainList(vm.typeData).then(function(result){
          vm.resources = result.data.data;
        },function(err){
          $log.error(err.status +":"+ err.statusText);
        })
      },function(err){
        $log.error(err.status +":"+err.statusText);
      });
    };

    //复制
    vm.copy = function(data){
      var modalInstance = $modal.open({
        templateUrl:'copy.html',
        controller:'CopyDataController',
        controllerAs: 'copy',
        animation: true,
        size: 'md',
        resolve: {
          movie: function(){
            return data;
          }
        }
      });

      modalInstance.result.then(function (data){
        vm.selected = data;
      },function(){
        $log.info("Modal dismissed at:" + new Date());
      })
    }

  } //End of EndMainController

  angular
    .module('frontTvWeb')
    .controller('CopyDataController',CopyDataController);

  /** @ngInject */
  function CopyDataController($modalInstance,$log,movie, EndTvService) {
    var vm = this;
    vm.movie = movie;
    vm.ok = function(){
      vm.data ={
        'movieId':vm.movie.id,
        'recommand':vm.movie.recommand,
        'tip':''
      };
      EndTvService.save(vm.data).then(function(result){
        vm.data = result.data;
      },function(err){
        $log.error(err.status +':'+ err.statusText);
      })
      $modalInstance.close(vm.data);
    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController
})();
