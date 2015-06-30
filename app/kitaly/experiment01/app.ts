/// <reference path="../../../typings/tsd.d.ts" />



// angular.module('sample', ['ng'])
// 	.controller('hoge', function($scope) {
// 		this.first = 'aaa';
// 		this.say = function(e) {
// 			console.log(this.first);
// 			// e.
// 		}
// 	})



class SampleController {
	public first: string;
	public last: string;
	constructor(){this.first = 'hoge' }

	private say() {
		console.log(this.first);
	}

	public ho = () => {

	}

}

angular.module('sample', ['ng'])
	.controller('hoge', SampleController)

// module kitaly.sample01.app {
//   angular.module('hoge');
// }