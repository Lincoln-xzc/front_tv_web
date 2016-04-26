(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('TeachService',TeachService);

  /** @ngInject */
  function TeachService($q,$http){
    var teachService = [];

    teachService.getTeaches = function(data){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/getMovies",
        data:data
      });
    };
    return teachService;
  }
})();

