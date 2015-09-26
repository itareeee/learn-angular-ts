///<reference path="../../../typings/tsd.d.ts" />
var omiend;
(function (omiend) {
    var sample06zz;
    (function (sample06zz) {
        function init() {
            var _this = this;
            angular.module('sample06App', ['ng']).controller('tabSetXController', function ($scope) {
                _this.tabs = $scope.tabs = [];
                _this.addTab = function (tab) {
                    this.tabs.push(tab);
                };
            }).directive('tabSetX', function () {
                return {
                    restrict: 'E',
                    scope: {},
                    template: '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs"></select>' + '<div ng-transclude></div>',
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
            }).directive('tabX', function () {
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
        sample06zz.init = init;
    })(sample06zz = omiend.sample06zz || (omiend.sample06zz = {}));
})(omiend || (omiend = {}));
var omiend;
(function (omiend) {
    var sample06z;
    (function (sample06z) {
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
        sample06z.init = init;
    })(sample06z = omiend.sample06z || (omiend.sample06z = {}));
})(omiend || (omiend = {}));
omiend.sample06z.init();
omiend.sample06zz.init();
//# sourceMappingURL=app.js.map