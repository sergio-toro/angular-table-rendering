(function () {

    'use strict';

    var MainCtrl = function($scope) {
        var self = this;

        self.$scope = $scope;

        self.currentPage       = 0;
        self.perPage           = 25;
        self.perPageOptions    = [ 10, 25, 50, 100, 250, 500, 2000 ];

        self.data              = window.quickQuery.data;
        self.parameters        = window.quickQuery.parameters;

        //console.log(self);
    };

    MainCtrl.prototype.resetPage = function() {
        var self = this;

        self.currentPage = 0;
    };

    /**
     * @ngdoc function
     * @name angularTableRenderingApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the angularTableRenderingApp
     */
    angular.module('angularTableRenderingApp')
        .controller('MainCtrl', MainCtrl);
})();
