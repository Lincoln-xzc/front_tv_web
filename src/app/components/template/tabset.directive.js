(function() {
  'use strict';
  /**
   * Created by Administrator on 2016/3/23.
   * auth: xzc
   * 未经允许请勿转载
   */
  angular
    .module('frontTvWeb')
    .directive('tabSet', tabSet);

  /** @ngInject */
  function tabSet() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/template/tabset.html',
      scope:{
        tabData:'@tabAttr'
      },
      controller: tabController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, element, attrs, ctrl) {
        angular.element('#tv ul li').mouseenter(function(e){
          e.preventDefault();
          var index =$(this).index();
          angular.element('#tv ul li').removeClass('active');
          angular.element("#tv .tab-pane").removeClass('active');
          $(this).addClass('active');
          angular.element("#tv .tab-pane").eq(index).addClass('active');
        });
        console.log(angular.element('#home'));
        angular.element('.expand .thumbnail:first-child').addClass('big');
      }
    };

    return directive;

    function tabController($log) {
      var vm = this;
      vm.tabDatas =JSON.parse(vm.tabData);
      console.log(vm.tabDatas);
      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.liquids).fromNow();
      // console.log(vm.liquids);
    }
  }

})();
