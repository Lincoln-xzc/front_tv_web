(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MessageController',MessageController);

  /** @ngInject */
  function MessageController(MessageService, $log, $stateParams) {
    var vm = this;

/*    $scope.$on('movieName', function(e, data){
      console.log('aaa');
      console.log(data);

    });*/
    var movieName = $stateParams.movieName;
    //电影查询
    MessageService.find(movieName).then(function(result){
      vm.datas = result.data;
      console.log(result);
    },function(err){
      $log.error(err.status+':'+err.statusText);
    });

  } //End of MainController
})();
