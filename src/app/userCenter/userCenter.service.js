(function() {
  'use strict'
/**
 * Created by Lincoln on 2016/4/8.
 * auth:xzc
 * 未经允许不得转载
 */
  angular
    .module('frontTvWeb')
    .service('UserCenterService', UserCenterService);

    /*@Inject*/
    function UserCenterService($http){
      var userCenterService = [];

      userCenterService.save = function(data){
        return $http({
          method:'POST',
          url:'http://localhost:8080/end_tv_web/movieAction/upload',
          data:data
        });
      };
      return userCenterService;
    }
})();
