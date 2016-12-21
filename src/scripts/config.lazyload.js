// lazyload config
(function() {
    'use strict';
    angular
      .module('app')
      .constant('MODULE_CONFIG', [
          {
              name: 'mgcrea.ngStrap',
              module: true,
              serie: true,
              files: [
                  './assets/angular-motion/dist/angular-motion.min.css',
                  './assets/bootstrap-additions/dist/bootstrap-additions.min.css',
                  './libs/angular/angular-strap/dist/angular-strap.js',
                  './libs/angular/angular-strap/dist/angular-strap.tpl.js'
              ]
          },
          {
              name: 'ui.bootstrap',
              module: true,
              serie: true,
              files: [
                  './libs/angular/angular-bootstrap/ui-bootstrap-tpls.min.js',
                  './libs/angular/angular-bootstrap/ui-bootstrap-tpls.js'
              ]
          },
          {
              name: 'easyPieChart',
              module: false,
              files: [
                  './libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
              ]
          },
          {
              name: 'sparkline',
              module: false,
              files: [
                  './libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
              ]
          },
          {
              name: 'plot',
              module: false,
              files: [
                  './libs/jquery/flot/jquery.flot.js',
                  './libs/jquery/flot/jquery.flot.resize.js',
                  './libs/jquery/flot/jquery.flot.pie.js',
                  './libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                  './libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
                  './libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
              ]
          },
          {
              name: 'vectorMap',
              module: false,
              files: [
                  './libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                  './libs/jquery/bower-jvectormap/jquery-jvectormap.css',
                  './libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                  './libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
              ]
          },
          {
              name: 'moment',
              module: false,
              files: [
                  './libs/js/moment/moment.js'
              ]
          },
          {
              name: 'chart',
              module: false,
              files: [
                  './libs/js/echarts/build/dist/echarts-all.js',
                  './libs/js/echarts/build/dist/theme.js',
                  './libs/js/echarts/build/dist/jquery.echarts.js'
              ]
          }
        ]
      )
      .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
          $ocLazyLoadProvider.config({
              debug: false,
              events: false,
              modules: MODULE_CONFIG
          });
      }]);
})();
