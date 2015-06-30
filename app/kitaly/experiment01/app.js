/// <reference path="../../../typings/tsd.d.ts" />
// angular.module('sample', ['ng'])
// 	.controller('hoge', function($scope) {
// 		this.first = 'aaa';
// 		this.say = function(e) {
// 			console.log(this.first);
// 			// e.
// 		}
// 	})
var SampleController = (function () {
    function SampleController() {
        this.ho = function () {
        };
        this.first = 'hoge';
    }
    SampleController.prototype.say = function () {
        console.log(this.first);
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('hoge', SampleController);
// module kitaly.sample01.app {
//   angular.module('hoge');
// } 
