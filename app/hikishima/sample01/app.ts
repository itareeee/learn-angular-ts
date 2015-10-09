/// <reference path="../../../typings/tsd.d.ts" />

class SampleController {
  public first: string;
  public isNameCandidate: boolean;
  public last: string;

  constructor($scope) {
    this.first = 'yasuaki';
    this.last = 'hikishima';
    this.isNameCandidate = true;
  }

  public alertFirstName() {
    console.log('aiueo');
  }

  public changeNameCandidate = () => {
    this.isNameCandidate = !this.isNameCandidate;
  }

  public setName = (firstName, lastName) => {
    this.first = firstName;
    this.last = lastName;
  }
}

angular.module('sample', ['ng'])
  .controller('sampleController', SampleController);
