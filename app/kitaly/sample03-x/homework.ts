///<reference path="../../../typings/tsd.d.ts" />


class HomeWork03Controller {
  public title: string = 'I wanna make friends (><)';
  public friends;

  constructor(
    $timeout: ng.ITimeoutService,
    friendsService: Homework03Service
  ){

    friendsService.fetch().then((res: any ) => {

      this.friends = res.data;
      //var resArray = res.data;
      //
      //this.friends = [];
      //
      //var pushHeadElem = () => {
      //  if(resArray.length > 0){
      //    var headElem = resArray.shift();
      //    this.friends.push(headElem);
      //    pushHeadElem();
      //  }
      //}
      //
      //$timeout(pushHeadElem, 1000);
    });
  }
}


class Homework03Service {
  constructor(
    private $http: ng.IHttpService
  ){}

  public fetch(): ng.IPromise<Array<any>> {
    return this.$http.get('friends.json');
  }
}

angular.module('sampleServices', ['ng']) // ng モジュールは省略可能
  .service('friendsService', ['$http', HomeWork03Controller])
;

angular
  .module('sampleApp', ['ng', 'sampleServices'])
  .controller('RepeatController', ['$timeout', 'friendsService', Homework03Service])
;