/**
 * AngularJS Reference Book p.260
 */
angular.module('tabSet', ['ng'])
  .controller('tabSetCtrl', function($scope){
    this.tabs = $scope.tabs = [];
    this.addTab = function(tab) {
      this.tabs.push(tab);
    };
  })
  .directive('tabSet', function(){
    return {
      restrict: 'E',
      template: '<select ng-model="selectedTab" ng-options="tab.header for tab in tabs ">'
		  + '</select>' 
		  + '<div ng-transclude></div>',
      controller: 'tabSetCtrl',
      transclude: true,
      scope: {},
      link: function(scope, element, attrs, tabSetCtrl){
	scope.$watch('selectedTab', function(selectedTab){
	  if(selectedTab){
	    angular.forEach(scope.tabs, function(tab){
	      tab.isActive = tab.header == selectedTab.header;
	    });
	  }
	})
      }
    }
  
  })
  .directive('tab', function(){
    return {
      restrict: 'E',
      scope: {},
      require: '^tabSet',
      transclude: true,
      template: '<div ng-show="isActive"><div ng-transclude></div></div>',
      link: function(scope, elem, attrs, tabSetCtrl){
	scope.header = attrs.head;
	console.log(scope);
	tabSetCtrl.addTab(scope);
      }
    }
  });
