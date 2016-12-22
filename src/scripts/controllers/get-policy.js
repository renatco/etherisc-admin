// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('GetPolicyCtrl', GetPolicy);

      function GetPolicy($scope){
        console.log('get policy ctrl');
      }
})();
