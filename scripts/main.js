/// <reference path="" />
/**
 * 定义RequireJS配置
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
        'jquery': '../lib/jquery/jquery.min',
        'highcharts': '../lib/highcharts/highcharts',
        'ol': '../lib/ol/ol',
        'BootStrap': '../lib/bootstrap/js/bootstrap.min.js',
        'app':'./app'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'BootStrap': {
            deps:['jquery']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});

require( [ 
	    'app',
	    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
	    'bootstrap',
	    //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
	    'controllers/controllers', 
	    'services/services',
		'directives/directives', 
		'filters/filters' ], 
	function(app) {
		'use strict';
		app.app.config(['$routeProvider', function ($routeProvider) {
		    $routeProvider.when('/map', {
		        templateUrl: 'views/map.html',
		        controller: 'loadMapController'
		    });

		    $routeProvider.when('/login', {
		        templateUrl: 'views/login.html',
		        controller: 'loginController'
		    });

		    $routeProvider.otherwise({
		        redirectTo: '/login'
		    });
		}]);

	}
);