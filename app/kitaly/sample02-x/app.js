///<reference path="../../../typings/tsd.d.ts" />
var Sample02FilterControllerx = (function () {
    function Sample02FilterControllerx() {
    }
    return Sample02FilterControllerx;
})();
var Sample02RepeatControllerx = (function () {
    function Sample02RepeatControllerx(myFriends) {
        this.friends = myFriends;
    }
    return Sample02RepeatControllerx;
})();
angular.module('sampleBase', []).constant('myFriends', [
    { name: 'John', age: 25, gender: 'boy' },
    { name: 'Jessie', age: 30, gender: 'girl' },
    { name: 'Johanna', age: 28, gender: 'girl' },
    { name: 'Joy', age: 15, gender: 'girl' },
    { name: 'Mary', age: 28, gender: 'girl' },
    { name: 'Peter', age: 95, gender: 'boy' },
    { name: 'Sebastian', age: 50, gender: 'boy' },
    { name: 'Erika', age: 27, gender: 'girl' },
    { name: 'Patrick', age: 40, gender: 'boy' },
    { name: 'Samantha', age: 60, gender: 'girl' }
]);
angular.module('sampleApp', ['ng', 'sampleBase']).controller('FilterController', Sample02FilterControllerx).controller('RepeatController', Sample02RepeatControllerx);
