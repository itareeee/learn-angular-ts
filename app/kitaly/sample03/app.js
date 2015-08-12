///<reference path="../../../typings/tsd.d.ts" />
var FriendsController = (function () {
    function FriendsController($timeout, friendsService) {
        var _this = this;
        this.title = 'I wanna make friends (><)';
        this.friends = [{ name: 'hoge', age: 123, gender: 'LGBT' }];
        $timeout(function () {
            _this.title = "(^^)/ I've made some friends (^^)/";
        }, 2000);
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
angular.module('sampleServices', []).service('friendsService', ['$http', FriendsService]).service('hogeService', function ($http, $location) {
});
angular.module('sampleApp', ['ng', 'sampleServices']).controller('RepeatController', ['$timeout', 'friendsService', FriendsController]);
