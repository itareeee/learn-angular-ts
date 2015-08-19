///<reference path="../../../typings/tsd.d.ts" />
var kitaly;
(function (kitaly) {
    var sample05;
    (function (sample05) {
        var ComboBoxDirective = (function () {
            function ComboBoxDirective() {
                this.restrict = 'EA';
                this.template = "\n      <div class=\"combobox\">\n        <input type=\"text\" ng-model=\"ctrl.selectedItem\" ng-focus=\"ctrl.showItems()\">\n        <ul ng-show=\"ctrl.isFocus\">\n          <li ng-repeat=\"item in ctrl.allItems\"  ng-click=\"ctrl.selectItem($event, item)\">\n          {{item}}\n          </li>\n        </ul>\n      </div>\n    ";
                this.controller = ComboBoxDController;
                this.controllerAs = 'ctrl';
                this.scope = {};
                this.bindToController = {
                    selectedItem: '=',
                    allItems: '='
                };
            }
            return ComboBoxDirective;
        })();
        var ComboBoxDController = (function () {
            function ComboBoxDController() {
            }
            ComboBoxDController.prototype.showItems = function () {
                this.isFocus = true;
            };
            ComboBoxDController.prototype.selectItem = function ($event, item) {
                $event.preventDefault();
                $event.stopPropagation();
                this.selectedItem = item;
                this.isFocus = false;
            };
            return ComboBoxDController;
        })();
        /**
         * 夕日本 P.277~
         */
        var NotificationController = (function () {
            function NotificationController() {
                this.items = [];
            }
            NotificationController.prototype.addMessage = function (msg) {
                this.items.push({
                    message: msg,
                    enableMessage: true,
                    time: new Date()
                });
            };
            return NotificationController;
        })();
        var NotificationDirective = (function () {
            function NotificationDirective() {
                this.restrict = 'E';
                this.transclude = true;
                this.replace = true;
                this.template = "\n      <div ng-show=\"ctrl.enable\" class=\"notification\">\n\t<a href=\"\" ng-click=\"ctrl.close()\">\u9589\u3058\u308B</a>\n        <div ng-transclude></div>\n      </div>";
                this.controller = NotificationDController;
                this.controllerAs = 'ctrl';
                this.scope = {};
                this.bindToController = {
                    enable: '=',
                    timeout: '='
                };
                this.require = 'notification';
            }
            return NotificationDirective;
        })();
        var NotificationDController = (function () {
            function NotificationDController($scope, $timeout) {
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.initWatch();
            }
            NotificationDController.prototype.initWatch = function () {
                var _this = this;
                this.$scope.$watch(function () {
                    return _this.enable;
                }, function (newVal) {
                    if (newVal) {
                        _this.timeoutPromise = _this.$timeout(function () {
                            _this.close();
                        }, _this.timeout);
                    }
                    else if (_this.timeoutPromise) {
                        _this.$timeout.cancel(_this.timeoutPromise);
                        _this.timeoutPromise = null;
                    }
                });
            };
            NotificationDController.prototype.close = function () {
                this.enable = false;
            };
            return NotificationDController;
        })();
        /**
         * Rating ディレクティブ をリファクタしてみた
         */
        var RatingDirective = (function () {
            function RatingDirective() {
                this.replace = true;
                this.template = function (element, attrs) {
                    var max = parseInt(attrs.max);
                    var stars = [];
                    for (var i = 0; i < max; i++) {
                        stars.push("<span ng-click=\"ctrl.clickStar(" + i + ")\">{{ ctrl.getStar(" + i + ") }}</span>");
                    }
                    return '<span>' + stars.join('') + '</span>';
                };
                this.controller = RatingDController;
                this.controllerAs = 'ctrl';
                this.scope = {};
                this.bindToController = {
                    max: '=',
                    readonly: '='
                };
                this.require = ['rating', 'ngModel'];
                this.link = function ($scope, elmenet, attrs, controllers) {
                    var selfCtrl = controllers[0], ngModelCtrl = controllers[1]; //ES6 Destructuring Assignment
                    selfCtrl.ngModelController = ngModelCtrl;
                };
            }
            return RatingDirective;
        })();
        var RatingDController = (function () {
            function RatingDController() {
            }
            RatingDController.prototype.getStar = function (starIndex) {
                var starNum = this.ngModelController ? this.ngModelController.$modelValue : 0;
                return ((starIndex + 1) > starNum) ? '☆' : '★';
            };
            RatingDController.prototype.clickStar = function (starIndex) {
                if (!this.readonly) {
                    this.ngModelController.$setViewValue(starIndex + 1);
                }
            };
            return RatingDController;
        })();
        function init() {
            var app = angular.module('sample05App', []);
            app
                .directive('comboBox', function () { return new ComboBoxDirective(); })
                .controller('notificationController', NotificationController)
                .directive('notification', function () { return new NotificationDirective(); })
                .directive('rating', function () { return new RatingDirective(); });
        }
        sample05.init = init;
    })(sample05 = kitaly.sample05 || (kitaly.sample05 = {}));
})(kitaly || (kitaly = {}));
kitaly.sample05.init();
