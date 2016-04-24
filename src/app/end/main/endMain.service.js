(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('EndMainService',EndMainService);

  /** @ngInject */
  function EndMainService($q,$http){
    var endMainService = [];

    endMainService.getResources = function(data){
      console.log(data);
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/findAll",
        data:data
      });
      /*var d = $q.defer();
      d.resolve({'data':loveDatas});
      return d.promise;*/
    }

    endMainService.save = function(data){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/recommand/save",
        data:data
      });
      /*var d = $q.defer();
       d.resolve({'data':loveDatas});
       return d.promise;*/
    };

    endMainService.delete = function(id){
      return $http({
        method:"GET",
        url:"http://localhost:8080/end_tv_web/recommand/delete/"+id
      });
      /*var d = $q.defer();
       d.resolve({'data':loveDatas});
       return d.promise;*/
    };

    endMainService.getEndMainList = function(data){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/getMovies",
        data:data
      });
    }

    return endMainService;
  }
})();

