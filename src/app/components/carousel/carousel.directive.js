(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/22.
   * auth:xzc
   */
  angular
    .module('frontTvWeb')
    .directive('liquidCarousel', liquidCarousel);

  /** @ngInject */
  function liquidCarousel() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/carousel/carousel.html',
      scope: {
          liquids: '@someAttr'
      },
      controller: liquidController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, element, attrs, ctrl) {
        angular.element('#liquid').liquidcarousel({
          height: 160,
          duration: 100,
          hidearrows: true
        });
      }
    };

    return directive;


    function liquidController(MainService, $log) {
      var vm = this;
      vm.liquidsData = JSON.parse(vm.liquids);
      //console.log(JSON.parse(vm.liquids));
      // "vm.creation" is avaible by directive option "bindToController: true"
     // vm.relativeDate = moment(vm.liquids).fromNow();
     // console.log(vm.liquids);
    }
  }

})();
