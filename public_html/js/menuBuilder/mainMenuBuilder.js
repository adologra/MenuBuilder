'use strict'

angular.module('menuBuilder.main',[])
    .factory('FactoriaMenu', function($http) {
        return { GetData: function(urlConfigObj, successCallback, errorCallback){
                return $http({method:'get', url:'js/schema.json'}).then(successCallback, errorCallback);
        }};
    })
    .controller('mainCtrl',function($scope, FactoriaMenu){
        this.class = 'Horizontal';
        this.schema = {};
        var that = this;
        var successGetSchema = function (response) {
            that.status = response.status;
            that.schema = response.data;
            
        };
        var errorGetSchema = function (response) {
            that.status = response.status;
            that.schema = response.data;
            
        };
        var init = function () {
            FactoriaMenu.GetData($scope.schema, successGetSchema, errorGetSchema);
        };
        
        init();
        
        
        
        
    }).directive('menuContainer',function(){
        var configDirective = {
            restrict: 'A',
            scope: {schema:'@schema'},
            transclude: false,
            templateUrl: 'js/menuBuilder/templates/itemsMenu.html',
            controller: 'mainCtrl',
            controllerAs: 'mainCtrl'
        };
        
        return configDirective;
    });