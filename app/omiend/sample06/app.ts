///<reference path="../../../typings/tsd.d.ts" />

module kitaly.sample06x {

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

module kitaly.sample06 {


  class TabSetDirective implements ng.IDirective{}
  class TabSetDController {}
  class TabDirective {}
  
  export function init(){
    //Init Process
  }
}

kitaly.sample06.init();
kitaly.sample06x.init();
