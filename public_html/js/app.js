/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([],
    function (){
        //var app = angular.module('testMenuBuilder', []);

        app.directive('menuContainer', function(){
            return {
                restrict:'A',
                templateUrl:'./js/templates/menu-container.html'
            };
        });
    }
);
