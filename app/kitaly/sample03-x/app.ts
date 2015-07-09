///<reference path="../../../typings/tsd.d.ts" />


class FriendsController {
  public title: string = 'I wanna make friends (><)';
  public friends;

  constructor(
    $interval: ng.IIntervalService,
    friendsService: FriendsService
  ){

    $interval(() => {
      this.title = "I've made some friends (^0^)/";
    }, 4000);

    friendsService.fetch().then((res: any ) => {
      this.friends = res.data;
    });
  }
}


class FriendsService {
  constructor(
    private $http: ng.IHttpService
  ){}

  public fetch(): ng.IPromise<Array<any>> {
    return this.$http.get('friends.json');
  }
}

class FriendsServiceMock {
  constructor(
    private $q,
    private $timeout
  ){}

  public fetch(): ng.IHttpPromise<Array<any>> {
    var deferred = this.$q.defer();
    this.$timeout(() => {
      deferred.resolve([{name: 'hoge', age: 123, gender: 'LGBT'}]);
    }, 2000);

    return deferred.promise;
  }
}

angular.module('sampleServices', ['ng']) // ng モジュールは省略可能
  .service('friendsService', ['$http', FriendsService])
  //.service('friendsService', ['$q', '$timeout', FriendsServiceMock])
;

angular
  .module('sampleApp', ['ng', 'sampleServices'])
  .controller('RepeatController', ['$interval', 'friendsService', FriendsController])
;