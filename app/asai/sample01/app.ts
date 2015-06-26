/// <reference path="../../../../typings/tsd.d.ts" />

class SampleController {

  public first: string;
  public last: string;
  public isDisplayNameList: boolean;

  constructor($scope) {
    this.first = 'Michael';
    this.last = 'Jordan';
    this.isDisplayNameList = true;
  }

  public showNameList = () => {
    this.isDisplayNameList = true;
  }

  public hideNameList = () => {
    this.isDisplayNameList = false;
  }

  public setName = (first, last) => {
    this.first = first;
    this.last = last;
  }

}

angular.module('sample', ['ng']).controller('SampleController', SampleController);
