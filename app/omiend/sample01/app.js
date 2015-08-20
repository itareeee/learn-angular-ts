/// <reference path="../../../typings/tsd.d.ts" />
var Sample01Controller = (function () {
    function Sample01Controller($scope) {
        this.first = 'Michael';
        this.last = 'Jackson';
        this.showNameList = true;
    }
    Sample01Controller.prototype.setStaticName = function (first, last) {
        this.first = first;
        this.last = last;
    };
    Sample01Controller.prototype.changeShowNameList = function () {
        this.showNameList = !this.showNameList;
    };
    return Sample01Controller;
})();
angular.module('sample', ['ng'])
    .controller('Sample01Controller', Sample01Controller);
