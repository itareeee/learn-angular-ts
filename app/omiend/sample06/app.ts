///<reference path="../../../typings/tsd.d.ts" />

module omiend.sample06zz {

  export function init() {

    angular
      .module('sample06App', ['ng'])
      .controller('tabSetXController', ($scope) => {
        this.tabs = $scope.tabs = [];
        this.addTab = function(tab) {
          this.tabs.push(tab);
        }
      })
      .directive('tabSetX', () => {
        return {
          restrict: 'E',
          scope: {},
          template: '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs"></select>' +
                    '<div ng-transclude></div>',
          controller: 'tabSetXController',
          transclude: true,
          link: (scope: any, element, attrs, tabSetCtrl) => {
            scope.$watch('selectedTab', (selectedTab) => {
              if (selectedTab) {
                angular.forEach(scope.tabs, (tab) => {
                  tab.isActive = tab.header == selectedTab.header;
                })
              }
            });
          }
        }
      })
      .directive('tabX', () => {
        return {
          restrict: 'E',
          scope: {},
          template: '<div ng-show="isActive"> <div ng-transclude></div></div>',
          require: '^tabSetX',
          transclude: true,
          link: (scope: any, element, attrs, tabSetCtrl) => {
            scope.header = attrs.header;
            tabSetCtrl.addTab(scope);
          }
        }
      })
  }
}

module omiend.sample06z {

  class TabSetDirective implements ng.IDirective{}
  class TabSetDController {}
  class TabDirective {}

  export function init(){
    //Init Process

  }
}

omiend.sample06z.init();
omiend.sample06zz.init();
