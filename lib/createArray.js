"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function createArray(length) {
  return Array.from({
    length: length
  }, function (v, k) {
    return k;
  });
}

var _default = createArray;
exports["default"] = _default;