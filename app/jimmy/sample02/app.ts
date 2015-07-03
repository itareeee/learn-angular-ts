///<reference path="../../../typings/tsd.d.ts" />

class MyController {
    public qty: number;
    public cost: number
    public currentCurrency = 'AUD';
    public currencies = [
        'AUD', 'USD', 'JPY'
    ];

    constructor(
        public exchangeService: ExchangeService
    ) {
        this.qty = 0;
        this.cost = 0;
    }

    public getCost(currencyTo) {
        if (this.qty == 0 || this.cost == 0) {
            return 0;
        }
        var conversion = this.exchangeService.getConversion(this.currentCurrency, currencyTo);
        return (conversion * this.cost) * this.qty;
    }
}


interface ExToAud {
    [Identifier: string]: number
}

class ExchangeService {

    private exchangeToAud: ExToAud = {};

    constructor() {
        this.exchangeToAud['AUD'] = 1;
        this.exchangeToAud['USD'] = 0.76;
        this.exchangeToAud['JPY'] = 95;
    }

    public getConversion = function (currencyFrom:string, currencyTo:string):number {
        return this.exchangeToAud[currencyTo] / this.exchangeToAud[currencyFrom];
    }
}

angular
    .module('jhApp2', ['ng'])
    .controller('MyController', ['ExchangeService', (ExchangeService)
        => new MyController(ExchangeService)])
    .service('ExchangeService', ExchangeService)
;