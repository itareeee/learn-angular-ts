/// <reference path="../../../typings/tsd.d.ts" />

class Sample01Controller {

  public first       : string;
  public last        : string;
  public showNameList: boolean;

  constructor($scope) {
    this.first        = 'Michael';
    this.last         = 'Jackson';
    this.showNameList = true;
  }

  public setStaticName(first, last) {
    this.first = first;
    this.last = last;
  }

  public changeShowNameList() {
    this.showNameList = !this.showNameList;
  }
}

angular.module('sample', ['ng'])
  .controller('Sample01Controller', Sample01Controller);
