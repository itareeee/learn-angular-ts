/// <reference path="../../../typings/tsd.d.ts" />

//angular.module('sample', ['ng'])
//.controller('SampleController', function($scope){
//    this.first = 'Itaru';
//    this.last = 'Kitagawa';
//
//    this.alertFirstName = function(){
//        console.log('FirstName: ' + this.first);
//    }
//});



class SampleController {
    public first: string;
    last: string;

    constructor($scope) {
        this.first = 'Jimmy';
        this.last = 'Hui';
    }


    public alertFirstName() {
        console.log('foobar');
    }

    public alertLastName = () => {
        console.log('barfoo');
    }

}

angular.module('sample', [])
.controller('SampleController', SampleController);