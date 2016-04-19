(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .directive('photoUpload', photoUpload);

  /** @ngInject */
  function photoUpload() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/userCenter/photo.html',
      transculde : true,
      replace : true,
      scope: {

      },

      link: function(scope, element, attr, ctrl) {
        angular.element('.avatar-wrapper').bind('mousewheel',function(event, delta){

          if(delta > 0){
            angular.element(".cropper-viewer img").css('width',"-=11.742");
            angular.element(".cropper-viewer img").css('height',"-=11.742");

            angular.element(".cropper-container img").eq(0).css("width","-=11.742");
            angular.element(".cropper-container img").eq(0).css("height","-=11.742");
            angular.element(".cropper-container img").eq(0).css("margin-top","+=10.742");
            angular.element(".cropper-container img").eq(0).css("margin-left","+=10.742");
            angular.element(".preview-lg img").css('width',"-=9.742");
            angular.element('.preview-lg img').css('height','-=9.742');
            angular.element('.preview-md img').css('width','-=7.742');
            angular.element('.preview-md img').css('height','-=7.742');
            angular.element('.preview-sm img').css('width','-=5.742');
            angular.element('.preview-sm img').css('height','-=5.742');
          } else if(delta <0){
            angular.element(".cropper-viewer img").css('width',"+=11.742");
            angular.element(".cropper-viewer img").css('height',"+=11.742");
            angular.element(".cropper-container img").eq(0).css("width","+=11.742");
            angular.element(".cropper-container img").eq(0).css("height","+=11.742");
            angular.element(".cropper-container img").eq(0).css("margin-top","-=10.742");
            angular.element(".cropper-container img").eq(0).css("margin-left","-=10.742");
            angular.element('.preview-lg img').css('width','+=9.742');
            angular.element('.preview-lg img').css('height','+=9.742');
            angular.element('.preview-md img').css('width','+=7.742');
            angular.element('.preview-md img').css('height','+=7.742');
            angular.element('.preview-sm img').css('width','+=5.742');
            angular.element('.preview-sm img').css('height','+=5.742');
          }
          event.preventDefault();
        });
      }
    };
    return directive;

  }

})();
