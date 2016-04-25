(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl:'app/login/login.html',
        controller:'LoginController',
        controllerAs:'login'
      })
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
      })
      .state('nav.message', {
        url:'message/:movieName',
        templateUrl:'app/message/message.html',
        controller: 'MessageController',
        controllerAs: 'message'
      })
      .state('nav.personalCenter', {
        url:'personal',
        templateUrl:'app/userCenter/personalCenter.html',
        controller:'UserCenterController',
        controllerAs:'center'
      })
      .state('nav.upload', {
        url:'upload',
        templateUrl:'app/userCenter/photo.html',
        controller:'UserCenterController',
        controllerAs:'upload'
      })
      .state('end', {
        abstract:true,
        url: '/',
        templateUrl: 'app/end/end_index.html'
      })
      .state('end.index', {
        url:'endIndex',
        templateUrl:'app/end/main/index.html',
        controller:'EndMainController',
        controllerAs:'endIndex'
      })
      .state('end.main', {
        url:'endMain',
        templateUrl:'app/end/main/end_main.html',
        controller:'EndMainController',
        controllerAs:'endMain'
      })
      .state('end.mainList', {
        url:'endMainList',
        templateUrl:'app/end/main/end_list.html',
        controller:'EndMainController',
        controllerAs:'endMainList'
      })
      .state('end.tv', {
        url:'endTv',
        templateUrl:'app/end/tv/tv.html',
        controller:'EndTvController',
        controllerAs:'endTv'
      })
      .state('end.tvList',{
        url:'tvList',
        templateUrl:'app/end/tv/tv_list.html',
        controller:'EndTvController',
        controllerAs:'endTvList'
      })
      .state('end.movie', {
        url:'endMovie',
        templateUrl:'app/end/movie/movie.html',
        controller:'EndMovieController',
        controllerAs:'endMovie'
      })
      .state('end.movieList',{
        url:'movieList',
        templateUrl:'app/end/movie/movie_list.html',
        controller:'EndMovieController',
        controllerAs:'endMovieList'
      })
      .state('end.art', {
        url:'endArt',
        templateUrl:'app/end/art/art.html',
        controller:'EndArtController',
        controllerAs:'endArt'
      })
      .state('end.artList',{
        url:'artList',
        templateUrl:'app/end/art/art_list.html',
        controller:'EndArtController',
        controllerAs:'endArtList'
      })
      .state('end.animation', {
        url:'endAnimation',
        templateUrl:'app/end/animation/animation.html',
        controller:'EndAniamtionController',
        controllerAs:'endAnimation'
      })
      .state('end.animationList',{
        url:'animationList',
        templateUrl:'app/end/animation/animation_list.html',
        controller:'EndAnimationController',
        controllerAs:'endAnimationList'
      })
      .state('end.fitness', {
        url:'endFitness',
        templateUrl:'app/end/fitness/fitness.html',
        controller:'EndFitnessController',
        controllerAs:'endFitness'
      })
      .state('end.fitnessList',{
        url:'tvList',
        templateUrl:'app/end/fitness/fitness_list.html',
        controller:'EndFitnessController',
        controllerAs:'endFitnessList'
      })
      .state('end.teach', {
        url:'endTeach',
        templateUrl:'app/end/teach/teach.html',
        controller:'EndTeachController',
        controllerAs:'endTeach'
      })
      .state('end.teachList',{
        url:'teachList',
        templateUrl:'app/end/teach/teach_list.html',
        controller:'EndTeachController',
        controllerAs:'endTeachList'
      })
      .state('modal',{
        onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state,$modal){
          $modal.open({
            templateUrl:'app/end/main/copy.html',
            controller:'CopyDataController',
            controllerAs: 'copy',
            animation: true,
            size: 'md',
          }).result.then(function(){

            },function(){
              $state.go('nav.main');
            });
        }],
      });
     /* .state('modal',{
        onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state,$modal){
          $modal.open({
            templateUrl:'app/components/navbar/modal.html',
            controller:'NewModalController',
            controllerAs: 'modal',
            animation: true,
            size: 'lg',
          }).result.then(function(){

            },function(){
              $state.go('nav.main');
            });
        }],

      });*/

    $urlRouterProvider.otherwise('main');
  }

})();
