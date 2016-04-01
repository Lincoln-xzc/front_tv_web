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
      .state('nav.art', {
        url:'art',
        templateUrl: 'app/arts/art.html',
        controller: 'ArtController',
        controllerAs: 'art'
      })
      .state('nav.animation', {
        url:'animation',
        templateUrl: 'app/animation/animation.html',
        controller: 'AnimationController',
        controllerAs: 'animation'
      })
      .state('nav.fitness', {
        url:'fitness',
        templateUrl: 'app/fitness/fitness.html',
        controller: 'FitnessController',
        controllerAs: 'fit'
      })
      .state('nav.teach', {
        url:'teach',
        templateUrl: 'app/teach/teach.html',
        controller: 'TeachController',
        controllerAs: 'teach'
      })
      .state('nav.tvSort', {
        url:'tvSort',
        templateUrl: 'app/tvSort/tvSort.html',
        controller: 'TvSortController',
        controllerAs: 'tvSort'
      })
      .state('nav.movieSort', {
        url:'movieSort',
        templateUrl: 'app/movieSort/movieSort.html',
        controller: 'MovieSortController',
        controllerAs: 'movieSort'
      })
      .state('nav.artsSort', {
        url:'artsSort',
        templateUrl: 'app/artsSort/artsSort.html',
        controller: 'ArtsSortController',
        controllerAs: 'artsSort'
      })
      .state('nav.animationSort', {
        url:'animationSort',
        templateUrl: 'app/animationSort/animationSort.html',
        controller: 'AnimationSortController',
        controllerAs: 'animationSort'
      })
      .state('nav.fitnessSort', {
        url:'fitnessSort',
        templateUrl: 'app/fitnessSort/fitnessSort.html',
        controller: 'FitnessSortController',
        controllerAs: 'fitnessSort'
      })
      .state('nav.teachSort', {
        url:'teachSort',
        templateUrl: 'app/teachSort/teachSort.html',
        controller: 'TeachSortController',
        controllerAs: 'teachSort'
      })
      .state('nav.play', {
        url:'play',
        templateUrl: 'app/play/play.html',
        controller: 'PlayController',
        controllerAs: 'play'
      });

    $urlRouterProvider.otherwise('main');
  }

})();
