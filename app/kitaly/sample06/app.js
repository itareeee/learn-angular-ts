///<reference path="../../../typings/tsd.d.ts" />
var kitaly;
(function (kitaly) {
    var sample06x;
    (function (sample06x) {
        /**
         * 夕日本 P.260 TabSet & Tab Directives
         */
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
                    link: function (scope) {
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
        /**
         * 親Directive
         */
        var TabSetDirective = (function () {
            function TabSetDirective() {
                this.restrict = 'E';
                this.template = "\n      <select ng-model=\"ctrl.selectedTab\" ng-options=\"tab.header for tab in ctrl.tabs\">\n      </select>\n      <div ng-transclude></div>";
                this.transclude = true;
                this.controller = TabSetDController;
                this.controllerAs = 'ctrl';
                this.scope = {};
            }
            return TabSetDirective;
        })();
        /**
         * 親Directive のController
         */
        var TabSetDController = (function () {
            function TabSetDController($scope) {
                this.tabs = [];
                this.initTabSelectionWatch($scope);
            }
            TabSetDController.prototype.initTabSelectionWatch = function ($scope) {
                var _this = this;
                $scope.$watch(function () {
                    return _this.selectedTab;
                }, function (selected) {
                    if (selected) {
                        _this.tabs.forEach(function (tab) {
                            tab.isActive = tab.header == selected.header;
                        });
                    }
                });
            };
            TabSetDController.prototype.addTab = function (tab) {
                this.tabs.push(tab);
            };
            return TabSetDController;
        })();
        /**
         * 子Directive
         */
        var TabDirective = (function () {
            function TabDirective() {
                this.restrict = 'E';
                this.scope = {};
                this.template = "<div ng-show=\"isActive\"> <div ng-transclude></div></div>";
                this.transclude = true;
                this.require = '^tabSet';
                this.link = function (scope, element, attrs, tabSetCtrl) {
                    scope.header = attrs.header;
                    tabSetCtrl.addTab(scope);
                };
            }
            return TabDirective;
        })();
        /**
         * Angularへのコンポーネント登録
         */
        function init() {
            angular.module('sample06App')
                .directive('tabSet', function () { return new TabSetDirective(); })
                .directive('tab', function () { return new TabDirective(); });
        }
        sample06.init = init;
    })(sample06 = kitaly.sample06 || (kitaly.sample06 = {}));
})(kitaly || (kitaly = {}));
kitaly.sample06x.init();
kitaly.sample06.init();
