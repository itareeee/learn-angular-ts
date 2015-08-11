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
//# sourceMappingURL=app.js.map