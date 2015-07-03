/// <reference path="../../../typings/tsd.d.ts" />
var Sample01Controller = (function () {
    function Sample01Controller($scope) {
        var _this = this;
        this.showNameList = function () {
            _this.isDisplayNameList = true;
        };
        this.hideNameList = function () {
            _this.isDisplayNameList = false;
        };
        this.setName = function (first, last) {
            _this.first = first;
            _this.last = last;
        };
        this.first = 'Michael';
        this.last = 'Jordan';
        this.isDisplayNameList = true;
    }
    return Sample01Controller;
})();
angular.module('sample', ['ng']).controller('SampleController', Sample01Controller);
