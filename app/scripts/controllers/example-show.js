'use strict';

angular.module('ngExampleApp')
  .controller('ExampleShowCtrl', function ($rootScope, $scope, $stateParams) {

    $rootScope.selectedExample = $scope.examples.filter(function(example) {
      return example.slug == $stateParams.slug;
    })[0];

    var readTextFile = function (file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
        if(rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            callback(allText);
          }
        }
      }
      rawFile.send(null);
    }

    var fullCode = function (code) {
      $scope.code = code;
      var fileNameSplit = $rootScope.selectedExample.file_url.split('/');
      var fileName = fileNameSplit[fileNameSplit.length - 1];

      var extSplit = fileName.split('.');
      var ext = extSplit[extSplit.length - 1];
      $scope.codeType = ext;
    }

    readTextFile($rootScope.selectedExample.file_url, fullCode);

    $scope.aceLoaded = function(_editor) {
      // Options
      _editor.setReadOnly(false);
    };
  });
