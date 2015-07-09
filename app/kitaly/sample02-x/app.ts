///<reference path="../../../typings/tsd.d.ts" />


class Sample02FilterControllerx {
  public name: string;
  public height: number;
  public birthday: Date;

  constructor(){

  }
}

class Sample02RepeatControllerx {
  public friends;

  constructor(myFriends){
    this.friends = myFriends;
  }
}

angular
  .module('sampleBase', [])
  .constant('myFriends', [
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
  ]);

angular
  .module('sampleApp', ['ng', 'sampleBase'])
  .controller('FilterController', Sample02FilterControllerx)
  .controller('RepeatController', Sample02RepeatControllerx)
;