/// <reference path="../../../typings/tsd.d.ts" />
var Sample02Controller = (function () {
    function Sample02Controller($scope) {
        var _this = this;
        // 金額を計算
        this.calculate = function () {
            var unit = _this.exchangeRates[_this.currency];
            var total = _this.quantity * _this.costs;
            var that = _this;
            angular.forEach(_this.exchangeRates, function (val, key) {
                that.exchangeResults[key] = total * (val / unit);
            });
        };
        // 支払ボタン
        this.pay = function () {
            alert('Thanks!');
        };
        // set default value
        this.exchangeRates = {
            'USD': 1.00,
            'EUR': 0.91,
            'CNY': 6.20
        };
        this.exchangeResults = {};
        this.quantity = 1;
        this.costs = 2;
        this.currency = 'USD';
        this.calculate();
    }
    return Sample02Controller;
})();
angular.module('sample', ['ng']).controller('SampleController', Sample02Controller);
