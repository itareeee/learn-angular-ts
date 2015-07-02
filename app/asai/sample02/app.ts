/// <reference path="../../../typings/tsd.d.ts" />

class Sample02Controller {

  public quantity: number;
  public costs: number;
  public currency: number;
  public result: number; 
  public exchangeRates: Object;
  public exchangeResults: any;

  constructor($scope) {
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

  // 金額を計算
  public calculate = () => {
    var unit = this.exchangeRates[this.currency];
    var total = this.quantity * this.costs;
    var that = this;
    angular.forEach(this.exchangeRates, function(val, key) {
      that.exchangeResults[key] = total * (val / unit);
    });
  }
  // 支払ボタン
  public pay = () => {
    alert('Thanks!');
  }

}

angular.module('sample', ['ng']).controller('SampleController', Sample02Controller);
