'use strict';

angular.module('ngExampleApp')
  .controller('ExamplesCtrl', function ($scope, $http, examplesRes) {
    $scope.examples = examplesRes.data;
  });
