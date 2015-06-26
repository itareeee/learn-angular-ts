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
var SampleController = (function () {
    function SampleController($scope) {
        this.alertLastName = function () {
            console.log('oeuia');
        };
        // $scopeの初期設定
        this.first = "Masahiko";
        this.last = "Asai";
    }
    // $scopeの振る舞いを定義している
    SampleController.prototype.alertFirstName = function () {
        console.log('aiueo');
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('SampleController', SampleController);
