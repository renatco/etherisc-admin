// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('StatisticsCtrl', Statistics);

      function Statistics($scope){
        console.log('statistics ctrl');
      }
})();
