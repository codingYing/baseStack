/**
 * Created by IntelliJ IDEA.
 * User: yingying
 * Date: 2017/9/25
 * Time: 15:04
 **/
(function () {
    'use strict';

    angular.module('baseStack')
        .config(router);

    router.$injector = ['$stateProvider', '$ocLazyLoad'];

    router = ($stateProvider, $ocLazyLoad) => {
        $stateProvider.state({
            name: 'home',
            url: '/',
            templateUrl: './index.html'
        }).state({
            name: 'topbar@home',
            views: {
                templateUrl: './topbar/topbar.html',
                controller: 'topBarController'
            },
            resolve: () => {
                return $ocLazyLoad.load('./topbar/topbar.controller.js')
            }
        }).state({
            name: 'movies@home',
            url: '/movies',
            views: {
                "lazyLoadView": {
                    templateUrl: './movies/movies.html',
                    controller: 'moviesController'
                }
            },
            resolve: () => {
                return $ocLazyLoad.load('./movies/movies.controller.js')
            }
        });
    };

})();