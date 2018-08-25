"use strict";

var pipe = function pipe() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (x) {
    return functions.reduce(function (y, f) {
      return f(y);
    }, x);
  };
};

module.exports = {
    pipe: pipe
  };
  