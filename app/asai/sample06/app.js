///<reference path="../../../typings/tsd.d.ts" />
var asamac;
(function (asamac) {
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
    })(sample06x = asamac.sample06x || (asamac.sample06x = {}));
})(asamac || (asamac = {}));
var asamac;
(function (asamac) {
    var sample06;
    (function (sample06) {
        var TabSetDirective = (function () {
            function TabSetDirective() {
                this.restrict = 'E';
                this.scope = {};
                this.template = " \n      <select ng-model=\"selectedTab\" ng-options=\"tab.header for tab in tabs\">\n      </select> \n      <div ng-transclude></div>";
                this.controller = 'tabSetDController';
                this.transclude = true;
                this.link = function (scope, element, attrs, tabSetCtrl) {
                    scope.$watch('selectedTab', function (selectedTab) {
                        if (selectedTab) {
                            angular.forEach(scope.tabs, function (tab) {
                                tab.isActive = tab.header == selectedTab.header;
                            });
                        }
                    });
                };
            }
            return TabSetDirective;
        })();
        var TabSetDController = (function () {
            function TabSetDController($scope) {
                var _this = this;
                this.tabs = $scope.tabs = [];
                this.addTab = function (tab) {
                    _this.tabs.push(tab);
                };
            }
            return TabSetDController;
        })();
        var TabDirective = (function () {
            function TabDirective() {
                this.restrict = 'E';
                this.scope = {};
                this.template = '<div ng-show="isActive"> <div ng-transclude></div></div>';
                this.require = '^tabSet';
                this.transclude = true;
                this.link = function (scope, element, attrs, tabSetCtrl) {
                    scope.header = attrs.header;
                    tabSetCtrl.addTab(scope);
                };
            }
            return TabDirective;
        })();
        function init() {
            //Init Process
            var app = angular.module('sample06App', []);
            app
                .controller('tabSetDController', TabSetDController)
                .directive('tabSet', function () { return new TabSetDirective(); })
                .directive('tab', function () { return new TabDirective(); });
        }
        sample06.init = init;
    })(sample06 = asamac.sample06 || (asamac.sample06 = {}));
})(asamac || (asamac = {}));
asamac.sample06x.init();
asamac.sample06.init();
