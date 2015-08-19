///<reference path="../../../typings/tsd.d.ts" />


module kitaly.sample03 {
  
  class FriendsController {
    public title:string = 'I wanna make friends (><)';
    public friends = [{name: 'hoge', age: 123, gender: 'LGBT'}];

    constructor(
      $timeout: ng.ITimeoutService,
      friendsService: FriendsService
    ) {
      $timeout(() => {
	this.title = "(^^)/ I've made some friends (^^)/";
      }, 2000);

      friendsService.fetch().then((res) => {
	this.friends = res.data;
      });
    }

  }

  class FriendsService {
    constructor(
      private $http
    ){}

    public fetch(): ng.IHttpPromise<Array<any>> {
      return this.$http.get('friends.json');
    }
  }


  export function init(){
    angular.module('sample03Services', [])
      .service('friendsService', ['$http', FriendsService])
    ;

    angular
      .module('sample03App', ['ng', 'sample03Services'])
      .controller('repeatController', ['$timeout', 'friendsService', FriendsController])
    ;
  }
}

kitaly.sample03.init();


