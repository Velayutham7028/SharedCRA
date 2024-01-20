"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var axios = _interopRequireWildcard(require("axios"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ExampleComponent() {
  (0, _react.useEffect)(() => {
    // Create an Axios instance
    const api = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        // You can add headers if needed
      }
    });

    // Make a request using the Axios instance
    api.get('/repos/octocat/hello-world').then(response => {
      // Handle the response
      console.log(response.data);
    }).catch(error => {
      // Handle the error
      console.error(error);
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, "Example Component");
}
var _default = exports.default = ExampleComponent;