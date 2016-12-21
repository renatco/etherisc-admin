// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('InvestorsCtrl', Investors);

      function Investors($scope){
        console.log('investors ctrl');
      }
})();
