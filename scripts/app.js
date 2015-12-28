define([
    'angular',
    'angular-route',
    'jquery',
    'highcharts',
    'ol',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    var app = angular.module('app', ['controllers', 'directives', 'filters', 'services', 'ngRoute']);

    return {
        app:app,
    }

});
