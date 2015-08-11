///<reference path="../../../typings/tsd.d.ts" />
angular.module('sampleApp', []).directive('comboBox', function () {
    return {
        scope: {
            selectedItem: '=',
            allItems: '='
        },
        restrict: 'EA',
        template: '<div class="combobox">' + '<input type="text" ng-model="selectedItem">' + '  <ul ng-show="isFocus">' + '   <li ng-repeat="item in allItems" ng-click="click($event, item)">' + '     {{item}}' + '   </li>' + '  </ul>' + '</div>',
        link: function (scope, iElement) {
            scope.isFocus = false;
            iElement.find('input').on('focus', function () {
                scope.$apply(function () {
                    scope.isFocus = true;
                });
            });
            scope.click = function ($event, item) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.selectedItem = item;
                scope.isFocus = false;
            };
        }
    };
});
/**
 * 夕日本 p.277
 */
var NotificationController = (function () {
    function NotificationController() {
        this.items = [];
    }
    NotificationController.prototype.addMessage = function (msg) {
        this.items.push({
            message: msg,
            enableMessage: true,
            time: new Date()
        });
    };
    return NotificationController;
})();
angular.module('sampleApp').controller('notificationController', NotificationController).directive('notification', ['$timeout', function ($timeout) {
    return {
        scope: {
            enable: '=',
            timeout: '='
        },
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<div ng-show="enable" class="notification">' + '<a href="" ng-click="close()">閉じる</a>' + '<div ng-transclude></div>' + '</div>',
        link: function (scope) {
            scope.close = function () {
                scope.enable = false;
            };
            var promise;
            scope.$watch('enable', function (newVal) {
                if (newVal) {
                    promise = $timeout(function () {
                        scope.$apply(function () {
                            scope.close();
                        });
                    }, scope.timeout, false);
                }
                else {
                    if (promise) {
                        $timeout.cancel(promise);
                        promise = null;
                    }
                }
            });
        }
    };
}]);
//# sourceMappingURL=app.js.map