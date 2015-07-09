///<reference path="../../../typings/tsd.d.ts" />


class Sample02FilterController {
  public name: string;
  public height: number;
  public birthday: Date;

  constructor(){

  }
}

class Sample02RepeatController {
  public searchText: string;

  public friends;

  constructor(MyFriends){
    this.friends = MyFriends;
  }
}


angular.module('sampleBase', [])
  .constant('MyFriends', [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ])
;

var sampleAppModule = angular.module('sampleApp', ['ng', 'sampleBase']);

sampleAppModule
  .controller('FilterController', Sample02FilterController)
  .controller('RepeatController', Sample02RepeatController)
;