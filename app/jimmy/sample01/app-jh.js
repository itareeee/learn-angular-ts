var JHController = (function () {
    function JHController($scope) {
        this.first = 'Jimmy';
        this.last = 'Hui';
        this.displaySection = true;
    }
    JHController.prototype.toggleDisplay = function () {
        this.displaySection = !this.displaySection;
    };
    JHController.prototype.setName = function (first, last) {
        this.first = first;
        this.last = last;
    };
    return JHController;
})();
angular.module('jh', []).controller('JHController', JHController);
