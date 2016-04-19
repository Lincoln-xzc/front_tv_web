(function() {
  'use strict'

  /**
   * Created by Lincoln on 2016/4/8.
   * auth:xzc
   * 未经允许不能转载
   */
  angular
    .module('frontTvWeb')
    .controller("UserCenterController", UserCenterController);

    function UserCenterController($scope){
      var vm = this;
      vm.myImage='';
      vm.myCroppedImage='';

      var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
          $scope.$apply(function($scope){
            $scope.myImage=evt.target.result;
          });
        };
        reader.readAsDataURL(file);
      };
      angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
    };

})();

