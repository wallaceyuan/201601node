/**
 * Created by yuan on 2016/5/5.
 */
var toString = Object.prototype.toString;
var isString = function (obj) {
    return toString.call(obj) == '[object String]';
};
var isFunction = function (obj) {
    return toString.call(obj) == '[object Function]';
};


var isType = function (type) {
    return function (obj) {
        return toString.call(obj) == '[object ' + type + ']';
    };
};
var isString = isType('String');
var isFunction = isType('Function');


console.log('isString',isString);

console.log('isFunction',isFunction);

