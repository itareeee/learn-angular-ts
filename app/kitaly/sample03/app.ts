///<reference path="../../../typings/tsd.d.ts" />


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

angular.module('sampleServices', [])
  .service('friendsService', ['$http', FriendsService])

  .service('hogeService', function($http, $location){

  })

angular
  .module('sampleApp', ['ng', 'sampleServices'])
  .controller('RepeatController', ['$timeout', 'friendsService', FriendsController])
;