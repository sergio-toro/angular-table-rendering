(function () {

    'use strict';

    var GpmTableFooter = function(){
        var
            directive = {
            restrict: 'E',
            templateUrl: 'views/directives/gpmtablefooter.html',
            scope: {
                currentPage:      '=',
                maxPages:         '=',
                perPage:          '=',
                perPageOptions:   '=',
                totalResults:     '=',
                onPerPageChanged: '&',
                disablePerPage:   '=',
                disablePageInfo:  '=',
            },
            link: function linkFunc(scope) {
                scope.ctrl = scope;

                scope.$watchGroup([ 'ctrl.totalResults', 'ctrl.currentPage', 'ctrl.perPage' ],function() {
                    scope.resultsStart = scope.currentPage*scope.perPage;
                    scope.resultsEnd   = scope.resultsStart + scope.perPage;
                    if (scope.resultsEnd>scope.totalResults){
                        scope.resultsEnd = scope.totalResults;
                    }
                });
            }
        };

        return directive;
    };

    /**
     * @ngdoc directive
     * @name angularTableRenderingApp.directive:gpmTableFooter
     * @description
     * # gpmTableFooter
     */
    angular.module('angularTableRenderingApp')
        .directive('gpmTableFooter', GpmTableFooter);
})();