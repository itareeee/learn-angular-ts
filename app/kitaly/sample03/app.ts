///<reference path="../../../typings/tsd.d.ts" />


class FriendsController {
  public title:string = 'I wanna make friends (><)';
  public friends = [{name: 'hoge', age: 123, gender: 'LGBT'}];

  constructor() {

  }

}


angular
  .module('sampleApp', ['ng'])
  .controller('RepeatController', FriendsController)
;