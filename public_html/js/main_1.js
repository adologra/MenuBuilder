'use strict'

angular.module('menuBuilder',['menuBuilder.main'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('', {
          url: '/',
          abstract: true,
          templateUrl: 'js/menuBuilder/templates/itemsMenu.html',
          controller: 'mainCtrl'
        });
    });

