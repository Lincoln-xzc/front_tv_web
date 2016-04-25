(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('TvService',TvService);

  /** @ngInject */
  function TvService($q,$http){
    var tvService = [];

    tvService.getLove = function(data){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/getMovies",
        data:data
      });
      /*var d = $q.defer();
      d.resolve({'data':loveDatas});
      return d.promise;*/
    }

    return tvService;
  }
})();

