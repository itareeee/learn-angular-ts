/// <reference path="../../../typings/tsd.d.ts" />
var SampleController = (function () {
    function SampleController($scope) {
        var _this = this;
        // 金額を計算
        this.calculate = function () {
            var unit = _this.exchangeRates[_this.data.currency];
            var total = _this.data.quantity * _this.data.costs;
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
        this.data = {
            quantity: 1,
            costs: 2,
            currency: 'USD'
        };
        this.calculate();
    }
    return SampleController;
})();
angular.module('sample', ['ng']).controller('SampleController', SampleController);
