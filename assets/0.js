(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = self.fetch || (self.fetch = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js").default || __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js"));


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.module.js":
/*!*****************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
function Api(http) {
  return {
    applyFilter: function applyFilter(filters) {
      return http.get(filters);
    }
  };
}

/***/ }),

/***/ "./src/api/httpClient.js":
/*!*******************************!*\
  !*** ./src/api/httpClient.js ***!
  \*******************************/
/*! exports provided: httpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpClient", function() { return httpClient; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function httpClient(baseURL) {
  return {
    get: function get(path, options) {
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(baseURL + path, options).then(function (res) {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      });
    },
    post: function post(path, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(baseURL + path, _objectSpread(_objectSpread({}, options), {}, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, options.headers)
      })).then(function (res) {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      });
    }
  };
}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: apiFactory, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiFactory", function() { return apiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpClient */ "./src/api/httpClient.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api/api.js");


function apiFactory(http) {
  return {
    spacesX: Object(_api__WEBPACK_IMPORTED_MODULE_1__["Api"])(http)
  };
}
var http = Object(_httpClient__WEBPACK_IMPORTED_MODULE_0__["httpClient"])('https://api.spaceXdata.com/v3/launches?limit=100');
var api = apiFactory(http);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.js");
/* harmony import */ var _filter_Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/Filter */ "./src/components/filter/Filter.js");
/* harmony import */ var _flight_Flight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight/Flight */ "./src/components/flight/Flight.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      programs = _useState2[0],
      setPrograms = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      launchYear = _useState4[0],
      setLaunchYear = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      successfulLanding = _useState6[0],
      setSuccessfulLanding = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      successfulLaunch = _useState8[0],
      setSuccessfulLaunch = _useState8[1];

  var updateFilterType = function updateFilterType(filterType, value) {
    switch (filterType) {
      case 'launch_year':
        setLaunchYear(value);
        break;

      case 'launch_success':
        setSuccessfulLaunch(value);
        break;

      case 'land_success':
        setSuccessfulLanding(value);
        break;

      default:
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    debugger;

    if (launchYear || successfulLaunch || successfulLanding) {
      var filterParameter = "&launch_success=".concat(successfulLaunch, "&land_success=").concat(successfulLanding, "&launch_year=").concat(launchYear);
      _api__WEBPACK_IMPORTED_MODULE_1__["api"].spacesX.applyFilter(filterParameter).then(function (res) {
        setPrograms(res);
      });
    } else {
      _api__WEBPACK_IMPORTED_MODULE_1__["api"].spacesX.applyFilter('/').then(function (res) {
        setPrograms(res);
      });
    }
  }, [successfulLaunch, successfulLanding, launchYear]);

  var applyFilter = function applyFilter(filterType, value) {
    updateFilterType(filterType, value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "SpaceX Launch Programs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "programs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    applyFilter: applyFilter,
    launchYear: launchYear,
    successfulLanding: successfulLanding,
    successfulLaunch: successfulLaunch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_flight_Flight__WEBPACK_IMPORTED_MODULE_3__["default"], {
    programs: programs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Developed by: Gunjan Gidwani ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/filter/Filter.js":
/*!*****************************************!*\
  !*** ./src/components/filter/Filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");



var Filter = function Filter(_ref) {
  var applyFilter = _ref.applyFilter,
      launchYear = _ref.launchYear,
      successfulLanding = _ref.successfulLanding,
      successfulLaunch = _ref.successfulLaunch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filterContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filterBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Launch Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btnGroup"
  }, _utils_constant__WEBPACK_IMPORTED_MODULE_1__["years"].map(function (yr) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "primmaryBtn ".concat(yr.value === launchYear ? 'active' : ''),
      onClick: function onClick() {
        return applyFilter('launch_year', yr.value);
      },
      key: yr.id
    }, yr.value);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filterBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Successful Launch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btnGroup"
  }, _utils_constant__WEBPACK_IMPORTED_MODULE_1__["launchValue"].map(function (launch) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "primmaryBtn ".concat(launch.value === successfulLaunch ? 'active' : ''),
      key: launch.id,
      onClick: function onClick() {
        return applyFilter('launch_success', launch.value);
      }
    }, launch.value === true ? 'True' : 'False');
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filterBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Successful Landing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btnGroup"
  }, _utils_constant__WEBPACK_IMPORTED_MODULE_1__["landingValue"].map(function (land) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "primmaryBtn ".concat(land.value === successfulLanding ? 'active' : ''),
      key: land.id,
      onClick: function onClick() {
        return applyFilter('land_success', land.value);
      }
    }, land.value === true ? 'True' : 'False');
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/flight/Flight.js":
/*!*****************************************!*\
  !*** ./src/components/flight/Flight.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Flight = function Flight(_ref) {
  var programs = _ref.programs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flightContainer"
  }, programs.length > 0 ? programs.map(function (program) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: program.flight_number,
      className: "cardContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      loading: "lazy",
      src: program.links.mission_patch_small,
      alt: program.flight_number
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, program.mission_name, " #", program.flight_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mission ids"), program.mission_id.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, program.mission_id.map(function (id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: id
      }, " ", id, " ");
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Launch year:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", program.launch_year, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Successful Launch "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, program.launch_success === true ? 'true' : 'false'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Successful Landing:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, program.launch_landing === true ? 'true' : 'false'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }) : 'No Data');
};

/* harmony default export */ __webpack_exports__["default"] = (Flight);

/***/ }),

/***/ "./src/utils/constant.js":
/*!*******************************!*\
  !*** ./src/utils/constant.js ***!
  \*******************************/
/*! exports provided: years, launchValue, landingValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launchValue", function() { return launchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingValue", function() { return landingValue; });
var years = [{
  id: 1,
  value: 2006
}, {
  id: 2,
  value: 2007
}, {
  id: 3,
  value: 2008
}, {
  id: 4,
  value: 2009
}, {
  id: 5,
  value: 2010
}, {
  id: 6,
  value: 2011
}, {
  id: 7,
  value: 2012
}, {
  id: 8,
  value: 2013
}, {
  id: 9,
  value: 2014
}, {
  id: 10,
  value: 2015
}, {
  id: 11,
  value: 2016
}, {
  id: 12,
  value: 2017
}, {
  id: 13,
  value: 2018
}, {
  id: 14,
  value: 2019
}, {
  id: 15,
  value: 2020
}];
var launchValue = [{
  id: 1,
  value: true
}, {
  id: 2,
  value: false
}];
var landingValue = [{
  id: 1,
  value: true
}, {
  id: 2,
  value: false
}];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy11bmZldGNoL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2h0dHBDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmxpZ2h0L0ZsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnQuanMiXSwibmFtZXMiOlsiQXBpIiwiaHR0cCIsImFwcGx5RmlsdGVyIiwiZmlsdGVycyIsImdldCIsImh0dHBDbGllbnQiLCJiYXNlVVJMIiwicGF0aCIsIm9wdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJwb3N0IiwiYm9keSIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiYXBpRmFjdG9yeSIsInNwYWNlc1giLCJhcGkiLCJIb21lIiwidXNlU3RhdGUiLCJwcm9ncmFtcyIsInNldFByb2dyYW1zIiwibGF1bmNoWWVhciIsInNldExhdW5jaFllYXIiLCJzdWNjZXNzZnVsTGFuZGluZyIsInNldFN1Y2Nlc3NmdWxMYW5kaW5nIiwic3VjY2Vzc2Z1bExhdW5jaCIsInNldFN1Y2Nlc3NmdWxMYXVuY2giLCJ1cGRhdGVGaWx0ZXJUeXBlIiwiZmlsdGVyVHlwZSIsInZhbHVlIiwidXNlRWZmZWN0IiwiZmlsdGVyUGFyYW1ldGVyIiwiRmlsdGVyIiwieWVhcnMiLCJtYXAiLCJ5ciIsImlkIiwibGF1bmNoVmFsdWUiLCJsYXVuY2giLCJsYW5kaW5nVmFsdWUiLCJsYW5kIiwiRmxpZ2h0IiwibGVuZ3RoIiwicHJvZ3JhbSIsImZsaWdodF9udW1iZXIiLCJsaW5rcyIsIm1pc3Npb25fcGF0Y2hfc21hbGwiLCJtaXNzaW9uX25hbWUiLCJtaXNzaW9uX2lkIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsImxhdW5jaF9sYW5kaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBNkMsbUJBQU8sQ0FBQyw4REFBUyxhQUFhLG1CQUFPLENBQUMsOERBQVM7Ozs7Ozs7Ozs7Ozs7QUNBNUY7QUFBZSw2RUFBYyxjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLHdEQUF3RCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCLEVBQUU7QUFDejRCOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFPLFNBQVNBLEdBQVQsQ0FBYUMsSUFBYixFQUFtQjtBQUN4QixTQUFPO0FBQ0xDLGVBQVcsRUFBRSxxQkFBQUMsT0FBTyxFQUFJO0FBQ3RCLGFBQU9GLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxPQUFULENBQVA7QUFDRDtBQUhJLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFFTyxTQUFTRSxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUNsQyxTQUFPO0FBQ0xGLE9BQUcsRUFBRSxhQUFDRyxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFDdEIsYUFBT0MseURBQUssQ0FBQ0gsT0FBTyxHQUFHQyxJQUFYLEVBQWlCQyxPQUFqQixDQUFMLENBQStCRSxJQUEvQixDQUFvQyxVQUFBQyxHQUFHLEVBQUk7QUFDaEQsWUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtBQUNYLGdCQUFNLElBQUlDLEtBQUosQ0FBVUYsR0FBRyxDQUFDRyxVQUFkLENBQU47QUFDRDs7QUFDRCxlQUFPSCxHQUFHLENBQUNJLElBQUosRUFBUDtBQUNELE9BTE0sQ0FBUDtBQU1ELEtBUkk7QUFVTEMsUUFBSSxFQUFFLGNBQUNULElBQUQsRUFBT1UsSUFBUCxFQUE4QjtBQUFBLFVBQWpCVCxPQUFpQix1RUFBUCxFQUFPO0FBQ2xDLGFBQU9DLHlEQUFLLENBQUNILE9BQU8sR0FBR0MsSUFBWCxrQ0FDUEMsT0FETztBQUVWVSxjQUFNLEVBQUUsTUFGRTtBQUdWRCxZQUFJLEVBQUVFLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmLENBSEk7QUFJVkksZUFBTztBQUNMLDBCQUFnQjtBQURYLFdBRUZiLE9BQU8sQ0FBQ2EsT0FGTjtBQUpHLFNBQUwsQ0FRSlgsSUFSSSxDQVFDLFVBQUFDLEdBQUcsRUFBSTtBQUNiLFlBQUksQ0FBQ0EsR0FBRyxDQUFDQyxFQUFULEVBQWE7QUFDWCxnQkFBTSxJQUFJQyxLQUFKLENBQVVGLEdBQUcsQ0FBQ0csVUFBZCxDQUFOO0FBQ0Q7O0FBRUQsZUFBT0gsR0FBRyxDQUFDSSxJQUFKLEVBQVA7QUFDRCxPQWRNLENBQVA7QUFlRDtBQTFCSSxHQUFQO0FBNEJELEM7Ozs7Ozs7Ozs7OztBQy9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNPLFVBQVQsQ0FBb0JyQixJQUFwQixFQUEwQjtBQUMvQixTQUFPO0FBQ0xzQixXQUFPLEVBQUV2QixnREFBRyxDQUFDQyxJQUFEO0FBRFAsR0FBUDtBQUdEO0FBRUQsSUFBTUEsSUFBSSxHQUFHSSw4REFBVSxDQUFDLGtEQUFELENBQXZCO0FBQ08sSUFBTW1CLEdBQUcsR0FBR0YsVUFBVSxDQUFDckIsSUFBRCxDQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNd0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQTtBQUFBLE1BQ1ZDLFFBRFU7QUFBQSxNQUNBQyxXQURBOztBQUFBLG1CQUVtQkYsc0RBQVEsQ0FBQyxFQUFELENBRjNCO0FBQUE7QUFBQSxNQUVWRyxVQUZVO0FBQUEsTUFFRUMsYUFGRjs7QUFBQSxtQkFHaUNKLHNEQUFRLENBQUMsRUFBRCxDQUh6QztBQUFBO0FBQUEsTUFHVkssaUJBSFU7QUFBQSxNQUdTQyxvQkFIVDs7QUFBQSxtQkFJK0JOLHNEQUFRLENBQUMsRUFBRCxDQUp2QztBQUFBO0FBQUEsTUFJVk8sZ0JBSlU7QUFBQSxNQUlRQyxtQkFKUjs7QUFNakIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxVQUFELEVBQWFDLEtBQWIsRUFBdUI7QUFDOUMsWUFBUUQsVUFBUjtBQUNFLFdBQUssYUFBTDtBQUNFTixxQkFBYSxDQUFDTyxLQUFELENBQWI7QUFDQTs7QUFDRixXQUFLLGdCQUFMO0FBQ0VILDJCQUFtQixDQUFDRyxLQUFELENBQW5CO0FBQ0E7O0FBQ0YsV0FBSyxjQUFMO0FBQ0VMLDRCQUFvQixDQUFDSyxLQUFELENBQXBCO0FBQ0E7O0FBQ0Y7QUFDRTtBQVhKO0FBYUQsR0FkRDs7QUFnQkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkOztBQUNBLFFBQUlULFVBQVUsSUFBSUksZ0JBQWQsSUFBa0NGLGlCQUF0QyxFQUF5RDtBQUN2RCxVQUFNUSxlQUFlLDZCQUFzQk4sZ0JBQXRCLDJCQUF1REYsaUJBQXZELDBCQUF3RkYsVUFBeEYsQ0FBckI7QUFDQUwsOENBQUcsQ0FBQ0QsT0FBSixDQUFZckIsV0FBWixDQUF3QnFDLGVBQXhCLEVBQXlDN0IsSUFBekMsQ0FBOEMsVUFBQUMsR0FBRyxFQUFJO0FBQ25EaUIsbUJBQVcsQ0FBQ2pCLEdBQUQsQ0FBWDtBQUNELE9BRkQ7QUFHRCxLQUxELE1BS087QUFDTGEsOENBQUcsQ0FBQ0QsT0FBSixDQUFZckIsV0FBWixDQUF3QixHQUF4QixFQUE2QlEsSUFBN0IsQ0FBa0MsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZDaUIsbUJBQVcsQ0FBQ2pCLEdBQUQsQ0FBWDtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBWlEsRUFZTixDQUFDc0IsZ0JBQUQsRUFBbUJGLGlCQUFuQixFQUFzQ0YsVUFBdEMsQ0FaTSxDQUFUOztBQWNBLE1BQU0zQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDa0MsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQ3pDRixvQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxLQUFiLENBQWhCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLGdHQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyxzREFBRDtBQUNFLGVBQVcsRUFBRW5DLFdBRGY7QUFFRSxjQUFVLEVBQUUyQixVQUZkO0FBR0UscUJBQWlCLEVBQUVFLGlCQUhyQjtBQUlFLG9CQUFnQixFQUFFRTtBQUpwQixJQURGLGVBT0UsMkRBQUMsc0RBQUQ7QUFBUSxZQUFRLEVBQUVOO0FBQWxCLElBUEYsQ0FGRixlQVdFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsdUdBREYsQ0FYRixDQURGO0FBaUJELENBekREOztBQTJEZUYsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUtUO0FBQUEsTUFKSnRDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEoyQixVQUdJLFFBSEpBLFVBR0k7QUFBQSxNQUZKRSxpQkFFSSxRQUZKQSxpQkFFSTtBQUFBLE1BREpFLGdCQUNJLFFBREpBLGdCQUNJO0FBQ0osc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxxRkFDRSxpRkFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsdUZBREYsZUFFRSxzRUFGRixlQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR1EscURBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFDLEVBQUU7QUFBQSx3QkFDWDtBQUNFLGVBQVMsd0JBQ1BBLEVBQUUsQ0FBQ04sS0FBSCxLQUFhUixVQUFiLEdBQTBCLFFBQTFCLEdBQXFDLEVBRDlCLENBRFg7QUFJRSxhQUFPLEVBQUU7QUFBQSxlQUFNM0IsV0FBVyxDQUFDLGFBQUQsRUFBZ0J5QyxFQUFFLENBQUNOLEtBQW5CLENBQWpCO0FBQUEsT0FKWDtBQUtFLFNBQUcsRUFBRU0sRUFBRSxDQUFDQztBQUxWLE9BT0dELEVBQUUsQ0FBQ04sS0FQTixDQURXO0FBQUEsR0FBWixDQURILENBSEYsQ0FGRixlQW1CRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDZGQURGLGVBRUUsc0VBRkYsZUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dRLDJEQUFXLENBQUNILEdBQVosQ0FBZ0IsVUFBQUksTUFBTTtBQUFBLHdCQUNyQjtBQUNFLGVBQVMsd0JBQ1BBLE1BQU0sQ0FBQ1QsS0FBUCxLQUFpQkosZ0JBQWpCLEdBQW9DLFFBQXBDLEdBQStDLEVBRHhDLENBRFg7QUFJRSxTQUFHLEVBQUVhLE1BQU0sQ0FBQ0YsRUFKZDtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU0xQyxXQUFXLENBQUMsZ0JBQUQsRUFBbUI0QyxNQUFNLENBQUNULEtBQTFCLENBQWpCO0FBQUE7QUFMWCxPQU9HUyxNQUFNLENBQUNULEtBQVAsS0FBaUIsSUFBakIsR0FBd0IsTUFBeEIsR0FBaUMsT0FQcEMsQ0FEcUI7QUFBQSxHQUF0QixDQURILENBSEYsQ0FuQkYsZUFvQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw4RkFERixlQUVFLHNFQUZGLGVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHVSw0REFBWSxDQUFDTCxHQUFiLENBQWlCLFVBQUFNLElBQUk7QUFBQSx3QkFDcEI7QUFDRSxlQUFTLHdCQUNQQSxJQUFJLENBQUNYLEtBQUwsS0FBZU4saUJBQWYsR0FBbUMsUUFBbkMsR0FBOEMsRUFEdkMsQ0FEWDtBQUlFLFNBQUcsRUFBRWlCLElBQUksQ0FBQ0osRUFKWjtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU0xQyxXQUFXLENBQUMsY0FBRCxFQUFpQjhDLElBQUksQ0FBQ1gsS0FBdEIsQ0FBakI7QUFBQTtBQUxYLE9BT0dXLElBQUksQ0FBQ1gsS0FBTCxLQUFlLElBQWYsR0FBc0IsTUFBdEIsR0FBK0IsT0FQbEMsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBSEYsQ0FwQ0YsQ0FERixDQURGO0FBMERELENBaEVEOztBQWtFZUcscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUEsTUFBZnRCLFFBQWUsUUFBZkEsUUFBZTtBQUMvQixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dBLFFBQVEsQ0FBQ3VCLE1BQVQsR0FBa0IsQ0FBbEIsR0FDR3ZCLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUFTLE9BQU87QUFBQSx3QkFDbEI7QUFBSyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsYUFBbEI7QUFBaUMsZUFBUyxFQUFDO0FBQTNDLG9CQUNFO0FBQ0UsYUFBTyxFQUFDLE1BRFY7QUFFRSxTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxtQkFGckI7QUFHRSxTQUFHLEVBQUVILE9BQU8sQ0FBQ0M7QUFIZixNQURGLGVBTUUsc0VBTkYsZUFPRSx1RUFDR0QsT0FBTyxDQUFDSSxZQURYLFFBQzJCSixPQUFPLENBQUNDLGFBRG5DLENBUEYsZUFVRSxzRUFWRixlQVdFLHlGQVhGLEVBWUdELE9BQU8sQ0FBQ0ssVUFBUixDQUFtQk4sTUFBbkIsZ0JBQ0MseUVBQ0dDLE9BQU8sQ0FBQ0ssVUFBUixDQUFtQmQsR0FBbkIsQ0FBdUIsVUFBQUUsRUFBRTtBQUFBLDBCQUN4QjtBQUFNLFdBQUcsRUFBRUE7QUFBWCxjQUFpQkEsRUFBakIsTUFEd0I7QUFBQSxLQUF6QixDQURILENBREQsR0FNRyxJQWxCTixlQW1CRSxzRUFuQkYsZUFvQkUsMEZBcEJGLG9CQW9CZ0MsOEVBQVFPLE9BQU8sQ0FBQ00sV0FBaEIsTUFwQmhDLGVBcUJFLHNFQXJCRixlQXNCRSxnR0F0QkYsZUF1QkUseUVBQU9OLE9BQU8sQ0FBQ08sY0FBUixLQUEyQixJQUEzQixHQUFrQyxNQUFsQyxHQUEyQyxPQUFsRCxDQXZCRixlQXdCRSxzRUF4QkYsZUF5QkUsaUdBekJGLGVBMEJFLHlFQUFPUCxPQUFPLENBQUNRLGNBQVIsS0FBMkIsSUFBM0IsR0FBa0MsTUFBbEMsR0FBMkMsT0FBbEQsQ0ExQkYsZUEyQkUsc0VBM0JGLENBRGtCO0FBQUEsR0FBcEIsQ0FESCxHQWdDRyxTQWpDTixDQURGO0FBcUNELENBdENEOztBQXdDZVYscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTVIsS0FBSyxHQUFHLENBQ25CO0FBQUVHLElBQUUsRUFBRSxDQUFOO0FBQVNQLE9BQUssRUFBRTtBQUFoQixDQURtQixFQUVuQjtBQUFFTyxJQUFFLEVBQUUsQ0FBTjtBQUFTUCxPQUFLLEVBQUU7QUFBaEIsQ0FGbUIsRUFHbkI7QUFBRU8sSUFBRSxFQUFFLENBQU47QUFBU1AsT0FBSyxFQUFFO0FBQWhCLENBSG1CLEVBSW5CO0FBQUVPLElBQUUsRUFBRSxDQUFOO0FBQVNQLE9BQUssRUFBRTtBQUFoQixDQUptQixFQUtuQjtBQUFFTyxJQUFFLEVBQUUsQ0FBTjtBQUFTUCxPQUFLLEVBQUU7QUFBaEIsQ0FMbUIsRUFNbkI7QUFBRU8sSUFBRSxFQUFFLENBQU47QUFBU1AsT0FBSyxFQUFFO0FBQWhCLENBTm1CLEVBT25CO0FBQUVPLElBQUUsRUFBRSxDQUFOO0FBQVNQLE9BQUssRUFBRTtBQUFoQixDQVBtQixFQVFuQjtBQUFFTyxJQUFFLEVBQUUsQ0FBTjtBQUFTUCxPQUFLLEVBQUU7QUFBaEIsQ0FSbUIsRUFTbkI7QUFBRU8sSUFBRSxFQUFFLENBQU47QUFBU1AsT0FBSyxFQUFFO0FBQWhCLENBVG1CLEVBVW5CO0FBQUVPLElBQUUsRUFBRSxFQUFOO0FBQVVQLE9BQUssRUFBRTtBQUFqQixDQVZtQixFQVduQjtBQUFFTyxJQUFFLEVBQUUsRUFBTjtBQUFVUCxPQUFLLEVBQUU7QUFBakIsQ0FYbUIsRUFZbkI7QUFBRU8sSUFBRSxFQUFFLEVBQU47QUFBVVAsT0FBSyxFQUFFO0FBQWpCLENBWm1CLEVBYW5CO0FBQUVPLElBQUUsRUFBRSxFQUFOO0FBQVVQLE9BQUssRUFBRTtBQUFqQixDQWJtQixFQWNuQjtBQUFFTyxJQUFFLEVBQUUsRUFBTjtBQUFVUCxPQUFLLEVBQUU7QUFBakIsQ0FkbUIsRUFlbkI7QUFBRU8sSUFBRSxFQUFFLEVBQU47QUFBVVAsT0FBSyxFQUFFO0FBQWpCLENBZm1CLENBQWQ7QUFrQkEsSUFBTVEsV0FBVyxHQUFHLENBQ3pCO0FBQUVELElBQUUsRUFBRSxDQUFOO0FBQVNQLE9BQUssRUFBRTtBQUFoQixDQUR5QixFQUV6QjtBQUFFTyxJQUFFLEVBQUUsQ0FBTjtBQUFTUCxPQUFLLEVBQUU7QUFBaEIsQ0FGeUIsQ0FBcEI7QUFLQSxJQUFNVSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU1AsT0FBSyxFQUFFO0FBQWhCLENBRDBCLEVBRTFCO0FBQUVPLElBQUUsRUFBRSxDQUFOO0FBQVNQLE9BQUssRUFBRTtBQUFoQixDQUYwQixDQUFyQixDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2ggfHwgKHNlbGYuZmV0Y2ggPSByZXF1aXJlKCd1bmZldGNoJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmZldGNoJykpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpLnRoZW4oSlNPTi5wYXJzZSl9LGJsb2I6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtzLnJlc3BvbnNlXSkpfSxjbG9uZTphLGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gb30sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB1fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiBpfX19fTtmb3IodmFyIGwgaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLHMub25sb2FkPWZ1bmN0aW9uKCl7cy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24oZSxuLHQpe28ucHVzaChuPW4udG9Mb3dlckNhc2UoKSksdS5wdXNoKFtuLHRdKSxpW25dPWlbbl0/aVtuXStcIixcIit0OnR9KSx0KGEoKSl9LHMub25lcnJvcj1yLHMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobCxuLmhlYWRlcnNbbF0pO3Muc2VuZChuLmJvZHl8fG51bGwpfSl9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBmdW5jdGlvbiBBcGkoaHR0cCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBseUZpbHRlcjogZmlsdGVycyA9PiB7XHJcbiAgICAgIHJldHVybiBodHRwLmdldChmaWx0ZXJzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBDbGllbnQoYmFzZVVSTCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXQ6IChwYXRoLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChiYXNlVVJMICsgcGF0aCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3Q6IChwYXRoLCBib2R5LCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKGJhc2VVUkwgKyBwYXRoLCB7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBodHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwQ2xpZW50JztcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwaUZhY3RvcnkoaHR0cCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzcGFjZXNYOiBBcGkoaHR0cClcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBodHRwID0gaHR0cENsaWVudCgnaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJyk7XHJcbmV4cG9ydCBjb25zdCBhcGkgPSBhcGlGYWN0b3J5KGh0dHApO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaSc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXIvRmlsdGVyJztcclxuaW1wb3J0IEZsaWdodCBmcm9tICcuL2ZsaWdodC9GbGlnaHQnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZ3JhbXMsIHNldFByb2dyYW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGF1bmNoWWVhciwgc2V0TGF1bmNoWWVhcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Y2Nlc3NmdWxMYW5kaW5nLCBzZXRTdWNjZXNzZnVsTGFuZGluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Y2Nlc3NmdWxMYXVuY2gsIHNldFN1Y2Nlc3NmdWxMYXVuY2hdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB1cGRhdGVGaWx0ZXJUeXBlID0gKGZpbHRlclR5cGUsIHZhbHVlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcclxuICAgICAgY2FzZSAnbGF1bmNoX3llYXInOlxyXG4gICAgICAgIHNldExhdW5jaFllYXIodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsYXVuY2hfc3VjY2Vzcyc6XHJcbiAgICAgICAgc2V0U3VjY2Vzc2Z1bExhdW5jaCh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xhbmRfc3VjY2Vzcyc6XHJcbiAgICAgICAgc2V0U3VjY2Vzc2Z1bExhbmRpbmcodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgaWYgKGxhdW5jaFllYXIgfHwgc3VjY2Vzc2Z1bExhdW5jaCB8fCBzdWNjZXNzZnVsTGFuZGluZykge1xyXG4gICAgICBjb25zdCBmaWx0ZXJQYXJhbWV0ZXIgPSBgJmxhdW5jaF9zdWNjZXNzPSR7c3VjY2Vzc2Z1bExhdW5jaH0mbGFuZF9zdWNjZXNzPSR7c3VjY2Vzc2Z1bExhbmRpbmd9JmxhdW5jaF95ZWFyPSR7bGF1bmNoWWVhcn1gO1xyXG4gICAgICBhcGkuc3BhY2VzWC5hcHBseUZpbHRlcihmaWx0ZXJQYXJhbWV0ZXIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRQcm9ncmFtcyhyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5zcGFjZXNYLmFwcGx5RmlsdGVyKCcvJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldFByb2dyYW1zKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzZnVsTGF1bmNoLCBzdWNjZXNzZnVsTGFuZGluZywgbGF1bmNoWWVhcl0pO1xyXG5cclxuICBjb25zdCBhcHBseUZpbHRlciA9IChmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4ge1xyXG4gICAgdXBkYXRlRmlsdGVyVHlwZShmaWx0ZXJUeXBlLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5TcGFjZVggTGF1bmNoIFByb2dyYW1zPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmFtc1wiPlxyXG4gICAgICAgIDxGaWx0ZXJcclxuICAgICAgICAgIGFwcGx5RmlsdGVyPXthcHBseUZpbHRlcn1cclxuICAgICAgICAgIGxhdW5jaFllYXI9e2xhdW5jaFllYXJ9XHJcbiAgICAgICAgICBzdWNjZXNzZnVsTGFuZGluZz17c3VjY2Vzc2Z1bExhbmRpbmd9XHJcbiAgICAgICAgICBzdWNjZXNzZnVsTGF1bmNoPXtzdWNjZXNzZnVsTGF1bmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZsaWdodCBwcm9ncmFtcz17cHJvZ3JhbXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxoNT5EZXZlbG9wZWQgYnk6IEd1bmphbiBHaWR3YW5pIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHllYXJzLCBsYW5kaW5nVmFsdWUsIGxhdW5jaFZhbHVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnQnO1xyXG5cclxuY29uc3QgRmlsdGVyID0gKHtcclxuICBhcHBseUZpbHRlcixcclxuICBsYXVuY2hZZWFyLFxyXG4gIHN1Y2Nlc3NmdWxMYW5kaW5nLFxyXG4gIHN1Y2Nlc3NmdWxMYXVuY2hcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlckNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlckJveFwiPlxyXG4gICAgICAgICAgPHNwYW4+TGF1bmNoIFllYXI8L3NwYW4+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuR3JvdXBcIj5cclxuICAgICAgICAgICAge3llYXJzLm1hcCh5ciA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJpbW1hcnlCdG4gJHtcclxuICAgICAgICAgICAgICAgICAgeXIudmFsdWUgPT09IGxhdW5jaFllYXIgPyAnYWN0aXZlJyA6ICcnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5RmlsdGVyKCdsYXVuY2hfeWVhcicsIHlyLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGtleT17eXIuaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3lyLnZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyQm94XCI+XHJcbiAgICAgICAgICA8c3Bhbj5TdWNjZXNzZnVsIExhdW5jaDwvc3Bhbj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Hcm91cFwiPlxyXG4gICAgICAgICAgICB7bGF1bmNoVmFsdWUubWFwKGxhdW5jaCA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJpbW1hcnlCdG4gJHtcclxuICAgICAgICAgICAgICAgICAgbGF1bmNoLnZhbHVlID09PSBzdWNjZXNzZnVsTGF1bmNoID8gJ2FjdGl2ZScgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2xhdW5jaC5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5RmlsdGVyKCdsYXVuY2hfc3VjY2VzcycsIGxhdW5jaC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhdW5jaC52YWx1ZSA9PT0gdHJ1ZSA/ICdUcnVlJyA6ICdGYWxzZSd9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJCb3hcIj5cclxuICAgICAgICAgIDxzcGFuPlN1Y2Nlc3NmdWwgTGFuZGluZzwvc3Bhbj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Hcm91cFwiPlxyXG4gICAgICAgICAgICB7bGFuZGluZ1ZhbHVlLm1hcChsYW5kID0+IChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmltbWFyeUJ0biAke1xyXG4gICAgICAgICAgICAgICAgICBsYW5kLnZhbHVlID09PSBzdWNjZXNzZnVsTGFuZGluZyA/ICdhY3RpdmUnIDogJydcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtsYW5kLmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlGaWx0ZXIoJ2xhbmRfc3VjY2VzcycsIGxhbmQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYW5kLnZhbHVlID09PSB0cnVlID8gJ1RydWUnIDogJ0ZhbHNlJ31cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRmxpZ2h0ID0gKHsgcHJvZ3JhbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaWdodENvbnRhaW5lclwiPlxyXG4gICAgICB7cHJvZ3JhbXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gcHJvZ3JhbXMubWFwKHByb2dyYW0gPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvZ3JhbS5mbGlnaHRfbnVtYmVyfSBjbGFzc05hbWU9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9ncmFtLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2dyYW0uZmxpZ2h0X251bWJlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIHtwcm9ncmFtLm1pc3Npb25fbmFtZX0gI3twcm9ncmFtLmZsaWdodF9udW1iZXJ9XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8c3Ryb25nPk1pc3Npb24gaWRzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAge3Byb2dyYW0ubWlzc2lvbl9pZC5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge3Byb2dyYW0ubWlzc2lvbl9pZC5tYXAoaWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR9PiB7aWR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXVuY2ggeWVhcjo8L3N0cm9uZz4gPHNwYW4+IHtwcm9ncmFtLmxhdW5jaF95ZWFyfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5TdWNjZXNzZnVsIExhdW5jaCA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8c3Bhbj57cHJvZ3JhbS5sYXVuY2hfc3VjY2VzcyA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+U3VjY2Vzc2Z1bCBMYW5kaW5nOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwcm9ncmFtLmxhdW5jaF9sYW5kaW5nID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6ICdObyBEYXRhJ31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGlnaHQ7XHJcbiIsImV4cG9ydCBjb25zdCB5ZWFycyA9IFtcclxuICB7IGlkOiAxLCB2YWx1ZTogMjAwNiB9LFxyXG4gIHsgaWQ6IDIsIHZhbHVlOiAyMDA3IH0sXHJcbiAgeyBpZDogMywgdmFsdWU6IDIwMDggfSxcclxuICB7IGlkOiA0LCB2YWx1ZTogMjAwOSB9LFxyXG4gIHsgaWQ6IDUsIHZhbHVlOiAyMDEwIH0sXHJcbiAgeyBpZDogNiwgdmFsdWU6IDIwMTEgfSxcclxuICB7IGlkOiA3LCB2YWx1ZTogMjAxMiB9LFxyXG4gIHsgaWQ6IDgsIHZhbHVlOiAyMDEzIH0sXHJcbiAgeyBpZDogOSwgdmFsdWU6IDIwMTQgfSxcclxuICB7IGlkOiAxMCwgdmFsdWU6IDIwMTUgfSxcclxuICB7IGlkOiAxMSwgdmFsdWU6IDIwMTYgfSxcclxuICB7IGlkOiAxMiwgdmFsdWU6IDIwMTcgfSxcclxuICB7IGlkOiAxMywgdmFsdWU6IDIwMTggfSxcclxuICB7IGlkOiAxNCwgdmFsdWU6IDIwMTkgfSxcclxuICB7IGlkOiAxNSwgdmFsdWU6IDIwMjAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhdW5jaFZhbHVlID0gW1xyXG4gIHsgaWQ6IDEsIHZhbHVlOiB0cnVlIH0sXHJcbiAgeyBpZDogMiwgdmFsdWU6IGZhbHNlIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5kaW5nVmFsdWUgPSBbXHJcbiAgeyBpZDogMSwgdmFsdWU6IHRydWUgfSxcclxuICB7IGlkOiAyLCB2YWx1ZTogZmFsc2UgfVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9