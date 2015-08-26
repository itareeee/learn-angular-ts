///<reference path="../../../typings/tsd.d.ts" />

module kitaly.sample06x {

	/**
	 * 夕日本 P.260 TabSet & Tab Directives
	 */
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
								angular.forEach(scope.tabs, function(tab: any){
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
          template: '<div ng-show="isActive"> divHoge:{{ hoge }} <div ng-transclude></div></div>',
          require: '^tabSetX',
          transclude: true,

          link: function(scope: any, element, attrs, tabSetCtrl) {
            scope.hoge = 'insideHoge';
            scope.header = attrs.header;
            tabSetCtrl.addTab(scope);
          }
        }
      })
    ;
  }

}

module kitaly.sample06 {


  /**
   * tabディレクティブの IsolateScope の型
   */
  interface TabScope extends ng.IScope {
    header: string;
    isActive: boolean;
  }


  /**
   * 親Directive
   * NOTE: DDO?
   */
  class TabSetDirective implements ng.IDirective{
    restrict = 'E';
    template = `
      <select ng-model="ctrl.selectedTab" ng-options="tab.header for tab in ctrl.tabs">
      </select>
      <div ng-transclude></div>`;
    transclude = true;

    controller = TabSetDController;
    controllerAs = 'ctrl';
    scope = {};
  }

  /**
   * 親Directive のController
   */
  class TabSetDController {
    tabs: Array<TabScope> = [];
    selectedTab: TabScope;

    constructor(
      private $scope
    ){
      this.initTabSelectionWatch();
    }

    private initTabSelectionWatch(): void {

      // NOTE: $scope.$watch('ctrl.selectedTab')
      this.$scope.$watch(() => {
        return this.selectedTab;

      }, (selected: TabScope) => {
        if (selected) {
          this.tabs.forEach(tab => {
            tab.isActive = tab.header == selected.header;
          })
        }
      });
    }

    public addTab(tab: TabScope): void {
      this.tabs.push(tab);
    }
  }


  /**
   * 子Directive
   */
  class TabDirective implements ng.IDirective {
    restrict = 'E';
    template = `<div ng-show="isActive"> <div ng-transclude></div></div>`;
    transclude = true; // NOTE: transclude
    require = '^tabSet';
    scope = {
      header: '@' //NOTE: 文字列
    }

    link = (scope: TabScope, element, attrs, tabSetCtrl: TabSetDController) => {
      tabSetCtrl.addTab(scope);
    };
  }


  /**
   * Angularへのコンポーネント登録
   */
  export function init(){
    angular.module('sample06App')
      .directive('tabSet', () => new TabSetDirective())
      .directive('tab', () => new TabDirective())
    ;
  }
}

kitaly.sample06x.init();
kitaly.sample06.init();
