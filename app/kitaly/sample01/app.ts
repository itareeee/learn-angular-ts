///<reference path="../../../typings/tsd.d.ts" />

module kitaly.sample01 {

  class SampleController {

    public first: string;
    last;

    constructor($scope){
      //$scope.xxx
      this.first = 'Ryuta';
      this.last = 'Sakamoto';
    }

    public alertFirstName(){
      console.log('aiueo');
    }

    public alertLastName = () => {
      console.log('aiueo');
    }

  }

  angular.module('sampleApp01', ['ng'])
    .controller('sampleController', SampleController);

}

