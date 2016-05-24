(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('UserService',UserService);

  /** @ngInject */
  function UserService($q,$http){
    var userService = [];

    userService.getUsers = function(){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/userAction/findAll"
      });
      /*var d = $q.defer();
      d.resolve({'data':loveDatas});
      return d.promise;*/
    }
    userService.insert = function(data){
      return $http({
        method:'POST',
        url:'http://localhost:8080/end_tv_web/userAction/save',
        data:'data'
      })
    };
    userService.getRoles = function(){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/userAction/findAll"
      })
    }


    return userService;
  }
})();

