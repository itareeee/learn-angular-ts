///<reference path="../../../typings/tsd.d.ts" />


module kitaly.sample05 {

  class ComboBoxDirective implements ng.IDirective {
    restrict = 'EA';
    template = `
      <div class="combobox">
        <input type="text" ng-model="ctrl.selectedItem" ng-focus="ctrl.showItems()">
        <ul ng-show="ctrl.isFocus">
          <li ng-repeat="item in ctrl.allItems"  ng-click="ctrl.selectItem($event, item)">
          {{item}}
          </li>
        </ul>
      </div>
    `;

    controller = ComboBoxDController;
    controllerAs = 'ctrl';
    scope = {};
    bindToController = {
      selectedItem: '=',
      allItems: '='
    }
  }

  class ComboBoxDController {
    public selectedItem: string;
    public allItems: Array<string>;
    public isFocus: boolean;

    public showItems() {
      this.isFocus = true;
    }

    public selectItem($event, item:string) {
      $event.preventDefault();
      $event.stopPropagation();
      this.selectedItem = item;
      this.isFocus = false;
    }
  }


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

  class NotificationDirective {
    restrict = 'E';
    transclude = true;
    replace = true;
    template = `
      <div ng-show="ctrl.enable" class="notification">
	<a href="" ng-click="ctrl.close()">閉じる</a>
        <div ng-transclude></div>
      </div>`;

    controller = NotificationDController;
    controllerAs = 'ctrl';
    scope = {};
    bindToController = {
      enable: '=',
      timeout: '='
    };

    require = 'notification';
  }

  class NotificationDController {
    public enable: boolean;
    public timeout: number;
    private timeoutPromise;
    
    constructor(
      private $scope,
      private $timeout
    ){
      this.initWatch();
    }

    public initWatch(){
      this.$scope.$watch(() => {
	return this.enable; 
      }, newVal => {

	if(newVal) {
	  this.timeoutPromise = this.$timeout(() => {
	    this.close();
	  }, this.timeout);

	} else if (this.timeoutPromise){
	  this.$timeout.cancel(this.timeoutPromise);
	  this.timeoutPromise = null;
	}
      });
    }

    public close(){
      this.enable = false; 
    }
  }


  /**
   * Rating ディレクティブ をリファクタしてみた
   */
  class RatingDirective implements ng.IDirective {
    replace = true;
    template = (element, attrs) => {
      var max = parseInt(attrs.max);
      var stars = [];
      for(let i = 0; i < max; i++){
        stars.push(`<span ng-click="ctrl.clickStar(${i})">{{ ctrl.getStar(${i}) }}</span>`);
      }
      return '<span>' + stars.join('') + '</span>';
    };

    controller = RatingDController;
    controllerAs = 'ctrl';
    scope = {};
    bindToController = { // 1.3, 1.4
      max: '=',
      readonly: '='
    }

    require = ['rating', 'ngModel'];
    link = ($scope, elmenet, attrs, controllers) => {
      let [selfCtrl, ngModelCtrl] = controllers; //ES6 Destructuring Assignment
      selfCtrl.ngModelController = ngModelCtrl;
    }
  }

  class RatingDController {
    private max; //スコープ外とバインディング
    private readonly; //スコープ外とバインディング
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

  
  export function init(){
    var app = angular.module('sample05App', []);

    app
      .directive('comboBox', () => new ComboBoxDirective())
      .controller('notificationController', NotificationController)
      .directive('notification', () => new NotificationDirective())
      .directive('rating', () => new RatingDirective())
    ;
  }
}

kitaly.sample05.init();
