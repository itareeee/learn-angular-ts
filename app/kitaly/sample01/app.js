///<reference path="../../../typings/tsd.d.ts" />
//angular.module('sample', ['ng'])
//  .controller('SampleController', function($scope){
//    this.first = 'Itaru';
//    this.last = 'Kitagawa';
//
//    this.alertFirstName = function(){
//      console.log('heyhey');
//    }
//  });
var SampleController = (function () {
    function SampleController($scope) {
        this.alertLastName = function () {
            console.log('aiueo');
        };
        //$scope.xxx
        this.first = 'Ryuta';
        this.last = 'Sakamoto';
    }
    SampleController.prototype.alertFirstName = function () {
        console.log('aiueo');
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('SampleController', SampleController);
