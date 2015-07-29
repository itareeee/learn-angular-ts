///<reference path="../../../typings/tsd.d.ts" />
var HomeWork03Controller = (function () {
    function HomeWork03Controller($timeout, friendsService) {
        var _this = this;
        this.title = 'I wanna make friends (><)';
        friendsService.fetch().then(function (res) {
            _this.friends = res.data;
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
    return HomeWork03Controller;
})();
var Homework03Service = (function () {
    function Homework03Service($http) {
        this.$http = $http;
    }
    Homework03Service.prototype.fetch = function () {
        return this.$http.get('friends.json');
    };
    return Homework03Service;
})();
angular.module('sampleServices', ['ng']).service('friendsService', ['$http', HomeWork03Controller]);
angular.module('sampleApp', ['ng', 'sampleServices']).controller('RepeatController', ['$timeout', 'friendsService', Homework03Service]);
