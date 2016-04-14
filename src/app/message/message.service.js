(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .service('MessageService',MessageService);

  /** @ngInject */
  function MessageService($q,$http){
    var messageService = [];

    messageService.find = function(movieName){
      return $http({
        method:"POST",
        url:"http://localhost:8080/end_tv_web/movieAction/findMovies",
        data:{'movieName':movieName}
      }).then(function(res){
        var data;
        console.log(res.data);
        if(res.data.code ==1){
           data = '错了';
        } else {
          data = res.data;
        }
        return data;
      });
    };

    return messageService;
  }
})();

