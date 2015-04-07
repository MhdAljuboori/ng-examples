'use strict';

/**
 * @ngdoc function
 * @name ngExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngExampleApp
 */
angular.module('ngExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
