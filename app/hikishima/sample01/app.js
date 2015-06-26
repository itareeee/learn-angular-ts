/// <reference path="../../../typings/tsd.d.ts" />
var SampleController = (function () {
    function SampleController($scope) {
        var _this = this;
        this.changeNameCandidate = function () {
            _this.isNameCandidate = !_this.isNameCandidate;
        };
        this.setName = function (firstName, lastName) {
            _this.first = firstName;
            _this.last = lastName;
        };
        this.first = 'yasuaki';
        this.last = 'hikishima';
        this.isNameCandidate = true;
    }
    SampleController.prototype.alertFirstName = function () {
        console.log('aiueo');
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('sampleController', SampleController);
