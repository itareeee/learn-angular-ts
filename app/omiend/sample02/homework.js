///<reference path="../../../typings/tsd.d.ts" />
var Sample02HomeworkFilterController = (function () {
    function Sample02HomeworkFilterController() {
        this.quantity = 1;
        this.cost = 1;
        this.inCurr = 'USD';
        this.currencies = ['USD', 'JPY', 'EUR'];
        this.rates = {
            USD: 1.0,
            JPY: 120.0,
            EUR: 0.9
        };
    }
    Sample02HomeworkFilterController.prototype.calc = function (currency) {
        return (this.quantity * this.cost) * this.rates[currency] / this.rates[this.inCurr];
    };
    return Sample02HomeworkFilterController;
})();
angular.module('sample02HomeworkApp', []).controller('FilterController', Sample02HomeworkFilterController);
