///<reference path="../../../typings/tsd.d.ts" />
var FriendsController = (function () {
    function FriendsController($interval, friendsService) {
        var _this = this;
        this.title = 'I wanna make friends (><)';
        $interval(function () {
            _this.title = "I've made some friends (^0^)/";
        }, 4000);
        friendsService.fetch().then(function (res) {
            _this.friends = res.data;
        });
    }
    return FriendsController;
})();
var FriendsService = (function () {
    function FriendsService($http) {
        this.$http = $http;
    }
    FriendsService.prototype.fetch = function () {
        return this.$http.get('friends.json');
    };
    return FriendsService;
})();
var FriendsServiceMock = (function () {
    function FriendsServiceMock($q, $timeout) {
        this.$q = $q;
        this.$timeout = $timeout;
    }
    FriendsServiceMock.prototype.fetch = function () {
        var deferred = this.$q.defer();
        this.$timeout(function () {
            deferred.resolve([{ name: 'hoge', age: 123, gender: 'LGBT' }]);
        }, 2000);
        return deferred.promise;
    };
    return FriendsServiceMock;
})();
angular.module('sampleServices', ['ng']).service('friendsService', ['$http', FriendsService]);
angular.module('sampleApp', ['ng', 'sampleServices']).controller('RepeatController', ['$interval', 'friendsService', FriendsController]);
