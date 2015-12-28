define(['controllers/controllers', 'jquery'], function (controllers, $) {
    'use strict';
    controllers.controller('loginController', ['$scope','$location',function ($scope,$location) {
        //
        $("#confirmBtn").click(function () {

            $location.url("/map");
        });


    }]);
});
