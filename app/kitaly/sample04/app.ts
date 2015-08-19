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

/**
 * 夕日本 P.279
 */
app
  .directive('rating', [function(){
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {
        max: '=externalMax', // =, &, @ が 使える
        readonly: '='
      },

      link: function(scope, element, attrs, ngModelCtrl){

        // scope の値が範囲外だった場合は、範囲内に収まるように変換する
        ngModelCtrl.$formatters.push(function(rate){
          console.log('formatter');
          if(rate < 0){
            return 0;
          } else if (rate > scope.max){
            return scope.max; //10まで
          } else {
            return rate;
          }
        });

        // scope の値が変化したら再描画
        ngModelCtrl.$render = function(){
          console.log('render');
          updateRate(ngModelCtrl.$viewValue);
        }


        // ngModel にバインドされた値に応じて星を描画
        function updateRate(rate){

          console.log('update rate');

          angular.forEach(element.children(), function(child){
            angular.element(child).off('click'); //メモリリーク対策（無くても動く)
          });
          element.empty();

          for(var i =0; i <scope.max; i++){
            var span = angular.element('<span></span>');
            var star = i < rate ? '★' : '☆'; // 黒星 + 白星
            span.text(star);

            //編集可能な場合の処理
            if(!scope.readonly){
              span.addClass('changeable'); //Style当てないと特に意味無いよ

              (function(){
                var count = i + 1;
                span.on('click', function(){

                  // クリックされた箇所に応じて星の数の再描画
                  scope.$apply(function(){
                    ngModelCtrl.$setViewValue(count);
                    updateRate(count);
                  });
                });
              })();
            }
            element.append(span);
          }

        }

      }
    }
  }]);


/**
 * Rating ディレクティブ をリファクタしてみた
 */
class StarRateDirective implements ng.IDirective {
  replace = true;
  template = (element, attrs) => {
    var max = parseInt(attrs.max);
    var stars = [];
    for(let i = 0; i < max; i++){
      stars.push(`<span ng-click="ctrl.clickStar(${i})">{{ ctrl.getStar(${i}) }}</span>`);
    }
    return '<span>' + stars.join('') + '</span>';
  };

  controller = StarRateDController;
  controllerAs = 'ctrl';
  scope = {};
  bindToController = {
    max: '=',
    readonly: '='
  }

  require = ['starRate', 'ngModel'];
  link = ($scope, elmenet, attrs, controllers) => {
    let [selfCtrl, ngModelCtrl] = controllers;
    selfCtrl.ngModelController = ngModelCtrl; 
  }
}

class StarRateDController {
  private max;
  private readonly;
  private ngModelController;

  public getStar(starIndex){
    let starNum = this.ngModelController ? this.ngModelController.$modelValue : 0; 
    return ((starIndex + 1) > starNum) ? '☆' : '★'; 
  }

  public clickStar(starIndex){
    if(!this.readonly){
      this.ngModelController.$setViewValue(starIndex + 1);
    }
  }
}

app
  .directive('starRate', () => new StarRateDirective());
