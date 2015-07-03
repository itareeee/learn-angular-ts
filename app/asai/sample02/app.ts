/// <reference path="../../../typings/tsd.d.ts" />

class SampleController {

  public result: number; 
  public exchangeRates: Object;
  public exchangeResults: any;
  public data: {
    quantity: number;
    costs: number;
    currency: string;
  };

  constructor($scope) {
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
    }
    this.calculate();
    console.log(this);
  }

  // 金額を計算
  public calculate = () => {
    var unit = this.exchangeRates[this.data.currency];
    var total = this.data.quantity * this.data.costs;
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

angular.module('sample', ['ng']).controller('SampleController', SampleController);
