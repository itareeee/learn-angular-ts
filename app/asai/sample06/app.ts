///<reference path="../../../typings/tsd.d.ts" />

module asamac.sample06x {

  export function init(){

    angular
      .module('sample06App', ['ng'])
      .controller('tabSetXController', function($scope){
        this.tabs = $scope.tabs = [];
        this.addTab = function(tab) {
          this.tabs.push(tab);
        }
      })
      .directive('tabSetX', function(){
        return {
          restrict: 'E',
          scope: {},
          template: 
            '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs"> ' +
            '</select>' + 
            '<div ng-transclude></div>',
          controller: 'tabSetXController',
          transclude: true,
          link: function(scope: any, element, attrs, tabSetCtrl) {
            scope.$watch('selectedTab', function(selectedTab){
              if(selectedTab){
                angular.forEach(scope.tabs, function(tab){
            tab.isActive = tab.header == selectedTab.header;
                })
              }
            });
          }
        }
      })
      .directive('tabX', function(){
        return {
          restrict: 'E',
          scope: {},
          template: '<div ng-show="isActive"> <div ng-transclude></div></div>',
          require: '^tabSetX',
          transclude: true,
          link: function(scope: any, element, attrs, tabSetCtrl) {
            scope.header = attrs.header;
            tabSetCtrl.addTab(scope);
          }
        }
      })
  }

}

module asamac.sample06 {


  class TabSetDirective implements ng.IDirective {
    restrict = 'E';
    scope = {};
    template = ` 
      <select ng-model="selectedTab" ng-options="tab.header for tab in tabs">
      </select> 
      <div ng-transclude></div>`;
    controller = 'tabSetDController';
    transclude = true;
    link = (scope: any, element, attrs, tabSetCtrl) => {
      scope.$watch('selectedTab', (selectedTab) => {
        if(selectedTab){
          angular.forEach(scope.tabs, (tab) => {
            tab.isActive = tab.header == selectedTab.header;
          })
        }
      });
    }
  }

  class TabSetDController {
    public tabs;
    public addTab;
    constructor($scope: any) {
      this.tabs = $scope.tabs = [];
      this.addTab = (tab) => {
        this.tabs.push(tab);
      }
    }
  }

  class TabDirective {
    restrict = 'E';
    scope = {};
    template = '<div ng-show="isActive"> <div ng-transclude></div></div>';
    require = '^tabSet';
    transclude = true;
    link = (scope: any, element, attrs, tabSetCtrl) => {
      scope.header = attrs.header;
      tabSetCtrl.addTab(scope);
    };
  }
  
  export function init(){
    //Init Process
    var app = angular.module('sample06App', []);

    app
      .controller('tabSetDController', TabSetDController)
      .directive('tabSet', () => new TabSetDirective())
      .directive('tab', () => new TabDirective())
    ;
  }
}

asamac.sample06x.init();
asamac.sample06.init();
