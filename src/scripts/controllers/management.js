// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('ManagementCtrl', Management);

      function Management($scope){
        console.log('management ctrl');
      }
})();
