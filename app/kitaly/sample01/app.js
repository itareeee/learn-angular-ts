///<reference path="../../../typings/tsd.d.ts" />
var kitaly;
(function (kitaly) {
    var sample01;
    (function (sample01) {
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
        angular.module('sampleApp01', ['ng'])
            .controller('sampleController', SampleController);
    })(sample01 = kitaly.sample01 || (kitaly.sample01 = {}));
})(kitaly || (kitaly = {}));
