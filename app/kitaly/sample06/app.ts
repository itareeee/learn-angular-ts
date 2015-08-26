///<reference path="../../../typings/tsd.d.ts" />

module morita.sample06x {

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
      	link: function(scope: any) {
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

module morita.sample06 {
  export interface fafa {
    restrict : string;
    template : string;
    scope: any;
    transclude: boolean;
    controller:  string;
    link:(scope:ng.IScope,element:ng.IAugumentedJQuery,attr:ng.IAttributes)=>{}: void
  }
  export class TabSetDirective implements ng.IDirective{
    public selectedTab: any;
    public _this: any;
    consutructor(){
      _this = this.scope;
      this.init()
    }
    Factory() = ()=>{
      var TabSetDirective = ()=>{
        return new TabSetDirective()
      }
    }
    init() =　()=>{
      this.restrict = 'E';
      this.tamplate = '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs"> ' +
            	           '</select>' +
            	        '<div ng-transclude></div>',
      this.controller = 'tabSetXController';
      this.transclude = true;
      this.link = (_this: any, element, attrs, tabSetCtrl) {
      	             _this.header = attrs.header;
      	              tabSetCtrl.addTab(_this);
      	        }

        }
      }
    }
  }

export interface fafa {
  scope: ng.IDirective;
}
export class TabSetDController implements fafa {
  tab: any;
  constructor(public tabs){
  this.tabs = tabs[];
  this.addTab();
  }
  addTab = ()=>{
    return this.tabs.push(this.tab);
  }
}
  class TabDirective {}

  export function init(){
    //Init Process
  }
}

kitaly.sample06.init();
kitaly.sample06x.init();
