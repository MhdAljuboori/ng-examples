'use strict';

/**
 * @ngdoc overview
 * @name ngExampleApp
 * @description
 * # ngExampleApp
 *
 * Main module of the application.
 */
angular
  .module('ngExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.ace'
  ], function($compileProvider) {
    // configure new 'compile' directive by passing a directive
    // factory function. The factory function injects the '$compile'
    $compileProvider.directive('compile', function($compile) {
      // directive factory creates a link function
      return function(scope, element, attrs) {
        scope.$watch(
          function(scope) {
             // watch the 'compile' expression for changes
            return scope.$eval(attrs.compile);
          },
          function(value) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            element.html(value);

            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
          }
        );
      };
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mainPage', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('examples', {
        url: '/examples',
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl',
        resolve: {
          examplesRes: function($http) {
            return $http.get("examples/examples.json");
          }
        }
      })
      .state('examples.show', {
        url: '/:slug',
        templateUrl: 'views/example-show.html',
        controller: 'ExampleShowCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      $urlRouterProvider.otherwise("/");
  })
