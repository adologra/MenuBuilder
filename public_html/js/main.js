'use strict'
angular.module('menuBuilder',['menuBuilder.main'])
    .directive('menuContainer',function(){
        return {
            restrict: 'A',
            templateUrl: 'js/menuBuilder/templates/itemsMenu.html',
            controller: 'mainCtrl',
            controllerAs: 'mainCtrl'
        };        
    });

