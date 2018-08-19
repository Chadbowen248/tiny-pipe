"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tiny = {
    pipe: function pipe() {
        for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
            fns[_key] = arguments[_key];
        }

        return function (start) {
            return fns.reduce(function (x, y) {
                return y(x);
            }, start);
        };
    }
};

exports.default = tiny;

module.exports = tiny;