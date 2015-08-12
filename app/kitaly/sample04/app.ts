///<reference path="../../../typings/tsd.d.ts" />

var app = angular.module('sampleApp', [])

/**
 * 夕日本 P.275~
 */
app.directive('comboBox', function(){
  return {
    scope: {
      selectedItem: '=',
      allItems: '='
    },

    restrict: 'EA',

    template: '<div class="combobox">' +
      '<input type="text" ng-model="selectedItem">' +
      '<ul ng-show="isFocus">' +
      '<li ng-repeat="item in allItems"  ng-click="click($event, item)">' +
      '{{item}}' +
      '</li>' +
      '</ul>' +
      '</div>',

    link: function(scope: any, iElement) {
      scope.isFocus = false;

      iElement.find('input')
        .on('focus', function(){
          scope.$apply(function(){
            scope.isFocus = true;
          });
        });

      scope.click = function($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        scope.selectedItem = item;
        scope.isFocus = false;
      };
    }
  }
});

/**
 * 夕日本 P.277~
 */
class NotificationController{
  message;
  items = [];

  addMessage(msg){
    this.items.push({
      message: msg,
      enableMessage: true,
      time: new Date()
    });
  }
}

app
  .controller('notificationController', NotificationController)
  .directive('notification', ['$timeout', function($timeout){
    return {
      scope: {
        enable: '=',
        timeout: '='
      },
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: '/sample04/notification.html',

      link: function(scope){
        scope.close = function() {
          scope.enable = false;
        }

        var promise;
        scope.$watch('enable', function(newVal) {
          if(newVal) {
            promise = $timeout(function(){
              scope.close();
            }, scope.timeout);

          } else {
            if(promise) {
              $timeout.cancel(promise);
              promise = null;
            }
          }
        });
      }
    }
  }]);