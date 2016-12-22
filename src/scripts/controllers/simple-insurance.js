// https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
      .module('app')
      .controller('SimpleInsuranceCtrl', SimpleInsurance);

      SimpleInsurance.$inject  = ['ethereum', '$scope'];

      function SimpleInsurance(ethereum, $scope){
        var vm = this;

        // --- initialize values ---
        vm.loading = false;
        vm.error = false;
        vm.policies = [];

        // --- initialize methods ---
        vm.ethereum = ethereum;
        vm.refreshPolicies = refreshPolicies;

        activate();

        // --- methods ------------------------------
        function activate() {
          refreshPolicies();
        }

        function refreshPolicies() {
          vm.loading = true;
          vm.ethereum.getPolicies()
            .then(policies => {
              $scope.$apply(() => {
                vm.policies = policies;
                vm.loading = false;
              });
            })
            .catch((err) => {
              $scope.$apply(() => {
                console.error(err);
                vm.loading = false;
                vm.error = true;
              });
            });
        }
      }
})();
