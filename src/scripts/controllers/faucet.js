// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('FaucetCtrl', Faucet);

      function Faucet($scope){
        console.log('faucet ctrl');
      }
})();
