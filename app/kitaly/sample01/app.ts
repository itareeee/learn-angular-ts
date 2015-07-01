///<reference path="../../../typings/tsd.d.ts" />


//angular.module('sample', ['ng'])
//  .controller('SampleController', function($scope){
//    this.first = 'Itaru';
//    this.last = 'Kitagawa';
//
//    this.alertFirstName = function(){
//      console.log('heyhey');
//    }
//  });



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


angular.module('sample', ['ng'])
  .controller('SampleController', SampleController);