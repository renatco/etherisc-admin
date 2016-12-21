// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('SimpleInsuranceCtrl', SimpleInsurance);

      function SimpleInsurance($scope){
        console.log('simple insurance ctrl');
      }
})();
