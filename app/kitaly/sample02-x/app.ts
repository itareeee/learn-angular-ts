///<reference path="../../../typings/tsd.d.ts" />


class Sample02Controller {
  public name: string;
  public height: number;
  public birthday: Date;

  constructor(){

  }
}

angular
  .module('sampleApp', ['ng'])
  .controller('Sample02Controller', Sample02Controller)
;