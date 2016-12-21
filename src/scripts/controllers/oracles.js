// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('OraclesCtrl', Oracles);

      function Oracles($scope){
        console.log('oracle ctrl');
      }
})();
