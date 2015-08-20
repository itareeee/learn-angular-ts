///<reference path="../../../typings/tsd.d.ts" />
var kitaly;
(function (kitaly) {
    var sample06x;
    (function (sample06x) {
        function init() {
            angular
                .module('sample06App', ['ng'])
                .controller('tabSetXController', function ($scope) {
                this.tabs = $scope.tabs = [];
                this.addTab = function (tab) {
                    this.tabs.push(tab);
                };
            })
                .directive('tabSetX', function () {
                return {
                    restrict: 'E',
                    scope: {},
                    template: '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs"> ' +
                        '</select>' +
                        '<div ng-transclude></div>',
                    controller: 'tabSetXController',
                    transclude: true,
                    link: function (scope, element, attrs, tabSetCtrl) {
                        scope.$watch('selectedTab', function (selectedTab) {
                            if (selectedTab) {
                                angular.forEach(scope.tabs, function (tab) {
                                    tab.isActive = tab.header == selectedTab.header;
                                });
                            }
                        });
                    }
                };
            })
                .directive('tabX', function () {
                return {
                    restrict: 'E',
                    scope: {},
                    template: '<div ng-show="isActive"> <div ng-transclude></div></div>',
                    require: '^tabSetX',
                    transclude: true,
                    link: function (scope, element, attrs, tabSetCtrl) {
                        scope.header = attrs.header;
                        tabSetCtrl.addTab(scope);
                    }
                };
            });
        }
        sample06x.init = init;
    })(sample06x = kitaly.sample06x || (kitaly.sample06x = {}));
})(kitaly || (kitaly = {}));
var kitaly;
(function (kitaly) {
    var sample06;
    (function (sample06) {
        var TabSetDirective = (function () {
            function TabSetDirective() {
            }
            return TabSetDirective;
        })();
        var TabSetDController = (function () {
            function TabSetDController() {
            }
            return TabSetDController;
        })();
        var TabDirective = (function () {
            function TabDirective() {
            }
            return TabDirective;
        })();
        function init() {
            //Init Process
        }
        sample06.init = init;
    })(sample06 = kitaly.sample06 || (kitaly.sample06 = {}));
})(kitaly || (kitaly = {}));
kitaly.sample06.init();
kitaly.sample06x.init();
