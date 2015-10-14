angular.module('invoiceApp', []).controller('invoiceController', function () {
    this.quantity = 1;
    this.costs = 2;
    this.pay = function () {
        alert('thanks!');
        return false;
    };
});
