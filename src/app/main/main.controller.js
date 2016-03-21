(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.test = 'test';
    vm.slides = [
      {
        image:'/assets/images/gulp.png',
        text:'I love that',
        id: 1
      },
      {
        image:'/assets/images/karma.png',
        text:'Nice image',
        id: 2
      },
      {
        image:'../assets/images/karma.png',
        text:'Nice image',
        id: 3
      },
      {
        image:'../assets/images/yeoman.png',
        text:'Nice image',
        id: 4
      }
    ];



  }
})();
