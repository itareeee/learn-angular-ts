///<reference path="../../../typings/tsd.d.ts" />
var kitaly;
(function (kitaly) {
    var sample03;
    (function (sample03) {
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
        function init() {
            angular.module('sample03Services', [])
                .service('friendsService', ['$http', FriendsService]);
            angular
                .module('sample03App', ['ng', 'sample03Services'])
                .controller('repeatController', ['$timeout', 'friendsService', FriendsController]);
        }
        sample03.init = init;
    })(sample03 = kitaly.sample03 || (kitaly.sample03 = {}));
})(kitaly || (kitaly = {}));
kitaly.sample03.init();
