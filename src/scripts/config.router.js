/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];
      function config( $stateProvider,   $urlRouterProvider,   MODULE_CONFIG ) {

        $urlRouterProvider
          .otherwise('/app/dashboard');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: './views/layout/layout.html'
              }
            }
          })
          // templateUrl: './views/dashboard/additional-future-directions.html',
            .state('app.dashboard', {
              url: '/dashboard',
              templateUrl: './views/dashboard/dashboard.html',
              data : { title: 'Dashboard' },
              controller: 'ChartCtrl',
              resolve: load(['./src/scripts/controllers/chart.js'])
            })
            .state('app.faucet', {
              url: '/faucet',
              templateUrl: './views/pages/faucet.html',
              data : { title: 'Faucet' },
              controller: 'FaucetCtrl',
              resolve: load(['./src/scripts/controllers/faucet.js'])
            })
            .state('app.investors', {
              url: '/investors',
              templateUrl: './views/pages/investors.html',
              data : { title: 'Investors' },
              controller: 'InvestorsCtrl',
              controllerAs: 'investors',
              resolve: load(['./src/scripts/controllers/investors.js'])
            })
            .state('app.management', {
              url: '/management',
              templateUrl: './views/pages/management.html',
              data : { title: 'Management' },
              controller: 'ManagementCtrl',
              resolve: load(['./src/scripts/controllers/management.js'])
            })
            .state('app.oracles', {
              url: '/oracles',
              templateUrl: './views/pages/oracles.html',
              data : { title: 'Oracles' },
              controller: 'OraclesCtrl',
              resolve: load(['./src/scripts/controllers/oracles.js'])
            })
            .state('app.get-policy', {
              url: '/get-policy',
              templateUrl: './views/pages/get-policy.html',
              data : { title: 'Apply for Policy' },
              controller: 'GetPolicyCtrl',
              controllerAs: 'getPolicy',
              resolve: load(['./src/scripts/controllers/get-policy.js'])
            })
            .state('app.policies', {
              url: '/policies',
              templateUrl: './views/pages/policies.html',
              data : { title: 'Policy List' },
              controller: 'PoliciesCtrl',
              controllerAs: 'policies',
              resolve: load(['./src/scripts/controllers/policies.js'])
            })
            .state('app.statistics', {
              url: '/statistics',
              templateUrl: './views/pages/statistics.html',
              data : { title: 'Statistics' },
              controller: 'StatisticsCtrl',
              resolve: load(['./src/scripts/controllers/statistics.js'])
            })
            .state('app.future', {
              url: '/future',
              templateUrl: './views/dashboard/additional-future-directions.html',
              data : { title: 'Additional future directions' },
              controller: 'ChartCtrl',
              resolve: load(['./src/scripts/controllers/chart.js'])
            })
          ;

        function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }
      }
})();
