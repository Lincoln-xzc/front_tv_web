(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('EndTvService',EndTvService);

  /** @ngInject */
  function EndTvService($q,$http){
    var endTvService = [];

    endTvService.getTvs = function(data){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/findAll",
        data:data
      });
      /*var d = $q.defer();
      d.resolve({'data':loveDatas});
      return d.promise;*/
    }

    endTvService.save = function(data){
      console.log(data);
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/save",
        data:data
      });
      /*var d = $q.defer();
       d.resolve({'data':loveDatas});
       return d.promise;*/
    }
    return endTvService;
  }
})();

