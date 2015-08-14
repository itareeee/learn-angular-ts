(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Foo = require('./foo');

// var foo = new Foo('sato');

// var out = foo.method(); // -> 'sato'
// console.log(out);


var utils = require('./utils');
console.log(utils.string.nl2br());


},{"./utils":2}],2:[function(require,module,exports){
// module.exports = (function() {
//   function Foo(name) {
//     this.name = name;
//   }

//   Foo.prototype.method = function method() {
//     return this.name;
//   };

//   return Foo;
// })();


module.exports = (function(){
	return {
		string : {
			nl2br : function(){
				return 1;
			}
		},
	}
})();
},{}]},{},[1]);
