(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('nav', {
        abstract:true,
        url: '/',
        templateUrl: 'app/components/navbar/total.html'
      })
      .state('nav.main', {
        url: 'main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('nav.tv', {
        url:'tv',
        templateUrl: 'app/tv/tv.html',
        controller: 'TvController',
        controllerAs: 'tv'
      })
      .state('nav.movie', {
        url:'movie',
        templateUrl: 'app/movie/movie.html',
        controller: 'MovieController',
        controllerAs: 'movie'
      })
     ;

    $urlRouterProvider.otherwise('main');
  }

})();
