"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ExampleComponent", {
  enumerable: true,
  get: function () {
    return _APIREQUEST.default;
  }
});
Object.defineProperty(exports, "Welcome", {
  enumerable: true,
  get: function () {
    return _Welcome.default;
  }
});
var _Welcome = _interopRequireDefault(require("./components/Welcome"));
var _APIREQUEST = _interopRequireDefault(require("./components/APIREQUEST"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }