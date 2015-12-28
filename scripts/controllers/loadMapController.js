define(['controllers/controllers', 'jquery','ol'], function (controllers, $,ol) {
    'use strict';
    controllers.controller('loadMapController', ['$scope',function ($scope) {
        //console.log(ol);
        //$scope.$on( function () {
            
        //});

        $(document).ready(function () {
            var layers = [
            //地理底图
             new ol.layer.Tile({
                 source: new ol.source.OSM()
             }),

           //new ol.layer.Image({
           //    source: new ol.source.ImageWMS({
           //        ratio: 1,
           //        url: 'http://127.0.0.1:5050/geoserver/mygeoserver/wms',
           //        params: {
           //            LAYERS: 'mygeoserver:ditu',
           //            STYLES: '',
           //        }
           //    })
           //}),

           new ol.layer.Image({
               source: new ol.source.ImageWMS({
                   ratio: 1,
                   url: 'http://127.0.0.1:5050/geoserver/mygeoserver/wms',
                   params: {
                       LAYERS: 'mygeoserver:hh_20121201',
                       STYLES: '',
                   }
               })
           })];

            var map = new ol.Map({
                controls: ol.control.defaults().extend([
                    //打开全屏
                    //new ol.control.FullScreen(),
                    //鹰眼
                    new ol.control.OverviewMap()
                    //zoom按钮
                ]),
                interactions: ol.interaction.defaults().extend([
                    new ol.interaction.DragRotateAndZoom()
                ]),
                layers: layers,
                target: 'map',
                view: new ol.View({
                    projection: 'EPSG:4326',
                    center: [113.43, 29.80],
                    zoom: 11
                })
            });
        });

    }]);
});
