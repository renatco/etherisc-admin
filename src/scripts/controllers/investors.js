// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('InvestorsCtrl', Investors);

      Investors.$inject = ['ethereum', '$scope'];
      function Investors(ethereum, $scope){
        var vm = this;

        // --- initialize values ---
        vm.loading = false;
        vm.error = false;
        vm.success = false;
        vm.errorMsg = '';
        vm.transactionHash = '';
        vm.form = {
          amount: null
        };

        // --- initialize methods ---
        vm.ethereum = ethereum;
        vm.submit = submit;
        vm.clear = clear;

        activate();

        // --- methods ------------------------------
        function activate() {
        }

        function submit(e) {
          e.preventDefault();
          vm.loading = true;
          vm.success = false;
          vm.error = false;
          vm.ethereum.tokenSale(vm.form.amount)
            .then(function(res) {
              $scope.$apply(function() {
                vm.loading = false;
                vm.error = false;
                vm.success = true;
                vm.errorMsg = '';
                vm.transactionHash = res.message;
                clear();
              });
            })
            .catch(function(error) {
              $scope.$apply(function() {
                vm.loading = false;
                vm.error = true;
                vm.success = false;
                vm.errorMsg = error.message;
              });
            });
        }

        function clear() {
          vm.form = {
            amount: null
          };
          vm.errorMsg = '';
          vm.error = false;
          vm.loading = false;
        }
      }
})();
