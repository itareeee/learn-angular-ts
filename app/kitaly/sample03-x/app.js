///<reference path="../../../typings/tsd.d.ts" />
var XFriendsController = (function () {
    function XFriendsController($interval, friendsService) {
        var _this = this;
        this.title = 'I wanna make friends (><)';
        $interval(function () {
            _this.title = "I've made some friends (^0^)/";
        }, 4000);
        friendsService.fetch().then(function (res) {
            _this.friends = res.data;
        });
    }
    return XFriendsController;
})();
var XFriendsService = (function () {
    function XFriendsService($http) {
        this.$http = $http;
    }
    XFriendsService.prototype.fetch = function () {
        return this.$http.get('friends.json');
    };
    return XFriendsService;
})();
var XFriendsServiceMock = (function () {
    function XFriendsServiceMock($q, $timeout) {
        this.$q = $q;
        this.$timeout = $timeout;
    }
    XFriendsServiceMock.prototype.fetch = function () {
        var deferred = this.$q.defer();
        this.$timeout(function () {
            deferred.resolve([{ name: 'hoge', age: 123, gender: 'LGBT' }]);
        }, 2000);
        return deferred.promise;
    };
    return XFriendsServiceMock;
})();
angular.module('sampleServices', ['ng']).service('friendsService', ['$http', XFriendsService]);
angular.module('sampleApp', ['ng', 'sampleServices']).controller('RepeatController', ['$interval', 'friendsService', XFriendsController]);
