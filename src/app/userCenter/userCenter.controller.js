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

    function UserCenterController($scope, $log, FileUploader, UserCenterService){
      var vm = this;
      vm.myImage='';
      vm.myCroppedImage='';

      //头像编辑
      vm.handleFileSelect=function(evt) {
        console.log(evt[0]);

        var file=evt[0];

        var reader = new FileReader();
        reader.onload = function (evt) {
          $scope.$apply(function(){
            vm.myImage=evt.target.result;
          });
        };
        reader.readAsDataURL(file);
      };
     /* angular.element(document.querySelector("#fileInput")).on('change',handleFileSelect);*/
      vm.open = function($event){
        vm.status.opened = true;
      }
      vm.status = {
        opened: false
      }

      //上传文件
      var uploader = vm.uploader = new FileUploader();
      uploader.onCompleteItem = function(fileItem, response, status, headers) {
        vm.image = response.data;
        vm.video = {
          'imgId':vm.image.id,
          'name':vm.image.name
        };
      };

      //上传影片
      vm.submit = function(){
        console.log(vm.video);
        UserCenterService.save(vm.video).then(function(result){
          vm.myVideo = result.data;
        },function(err){
          $log.error(err.status +":"+err.statusText);
        });
      }
    };
})();

