'use strict';

/**
 * @ngdoc function
 * @name ngExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngExampleApp
 */
angular.module('ngExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
