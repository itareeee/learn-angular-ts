///<reference path="../../../typings/tsd.d.ts" />

class Sample02HomeworkFilterController {

  public quantity:number;
  public cost:number;
  public inCurr:string;
  public currencies:any;
  public rates:any;

  constructor() {
    this.quantity   = 1;
    this.cost       = 1;
    this.inCurr     = 'USD';
    this.currencies = ['USD','JPY','EUR'];
    this.rates = {
      USD :   1.0,
      JPY : 120.0,
      EUR :   0.9
    };
  }

  public calc(currency) {
    return (this.quantity * this.cost) * this.rates[currency] / this.rates[this.inCurr];
  }
}

angular
  .module('sample02HomeworkApp', [])
  .controller('FilterController', Sample02HomeworkFilterController)
;