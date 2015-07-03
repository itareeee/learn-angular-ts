/// <reference path="../../../typings/tsd.d.ts" />

/*
angular.module('sample', ['ng'])
  .controller('SampleController', ['$scope', function ($scope) {
    this.first = 'Asai';
    this.last = 'Masahiko';

    var self = this;
    this.alertFirstName = function() {
      console.log('FirstName:' + this.first);
    }
}]);
*/
class SampleController {
  
  public first: string;
  last;

  constructor($scope) {
    // $scopeの初期設定
    this.first = "Masahiko";
    this.last = "Asai";
  }
  // $scopeの振る舞いを定義している
  public alertFirstName() {
    console.log('aiueo');
  }

  public alertLastName = () => {
    console.log('oeuia');
  }

}

angular.module('sample', ['ng']).controller('SampleController', SampleController);
