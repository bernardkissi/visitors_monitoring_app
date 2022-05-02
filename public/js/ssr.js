/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: {
      type: String,
      "default": 'World'
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    console.log(props.name);
    var __returned__ = {
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Navbar.vue */ "./resources/js/Components/Navbar.vue");
/* harmony import */ var vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-apexcharts */ "vue3-apexcharts");
/* harmony import */ var vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var obj = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({
      chartOptions: {
        chart: {
          animations: {
            enabled: false
          },
          height: 50,
          type: 'bar',
          stacked: true,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
        title: {
          text: 'Visitors per month for service',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '14px',
            fontWeight: 'medium',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            color: '#263238'
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
              position: 'top'
            },
            columnWidth: '50%',
            endingShape: 'rounded'
          }
        },
        colors: ['#63B3ED', '#EDF2F7'],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          }
        },
        legend: {
          floating: false,
          position: 'top',
          horizontalAlign: 'center',
          offsetX: 0,
          offsetY: 10,
          fontSize: '13px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          labels: {
            colors: '#4A5568'
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 12, 25, 50, 49, 21, 70, 51, 22, 34, 45, 20]
        }]
      }
    });
    var __returned__ = {
      obj: obj,
      Navbar: _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      VueApexCharts: (vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1___default()),
      reactive: vue__WEBPACK_IMPORTED_MODULE_2__.reactive
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Navbar.vue */ "./resources/js/Components/Navbar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Navbar: _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Navbar.vue */ "./resources/js/Components/Navbar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Navbar: _Components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  _push("<header".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttrs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
  }, _attrs)), "><nav class=\"container mx-auto max-w-5xl py-3\"><div class=\"flex items-centter justify-between\"><div class=\"flex items-center space-x-1\"><img src=\"/images/gracefields.png\" alt=\"logo\" class=\"w-24\"><span class=\"text-sm text-white font-medium leading-4\">v1.0</span></div><div class=\"flex items-center gap-4 text-white font-medium\">"));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)(_component_Link, {
    href: _ctx.route('login'),
    "class": "hover:text-blue-600 cursor-pointer px-3 py-1 rounded"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push("Home ");
      } else {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home ")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)(_component_Link, {
    href: _ctx.route('login'),
    "class": "hover:text-purple-800 cursor-pointer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push("Visitors Monitoring System ");
      } else {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Visitors Monitoring System ")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push("<button type=\"button\" class=\"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white\" id=\"user-menu-button\" aria-expanded=\"false\" aria-haspopup=\"true\"><span class=\"sr-only\">Open user menu</span><img class=\"h-8 w-8 rounded-full\" src=\"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80\" alt=\"\"></button></div></div></nav><div class=\"flex text-gray-600 items-center bg-white shadow-lg border-t border-gray-100\"><div class=\"container mx-auto max-w-5xl\"><div class=\"flex items-center justify-between\"><div class=\"flex items-center gap-5\"><div class=\"flex items-center border-b-4 border-blue-400 py-3\"><svg class=\"h-5 w-5 mr-2 stroke-current text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"></path></svg><a class=\"text-blue-600 font-medium text-lg\">Dashboard</a></div><div class=\"flex items-center cursor-pointer py-3\"><svg class=\"h-5 w-5 mr-2 stroke-current text-gray-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"></path></svg><a href=\"#\" class=\"text-gray-500\">Administrators</a></div><div class=\"flex items-center cursor-pointer py-3\"><svg class=\"h-5 w-5 mr-2 stroke-current text-gray-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"></path></svg>");

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)(_component_Link, {
    href: _ctx.route('visitors'),
    "class": "text-gray-500"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push("Visitors");
      } else {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Visitors")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push("</div><div class=\"flex items-center cursor-pointer py-3\"><svg class=\"h-5 w-5 mr-2 stroke-current text-gray-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"></path></svg><a href=\"#\" class=\"text-gray-500\">Assignees</a></div></div><div><div class=\"flex items-center cursor-pointer py-3\"><svg class=\"h-5 w-5 mr-2 stroke-current text-gray-400\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"></path></svg>");

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)(_component_Link, {
    href: _ctx.route('settings'),
    "class": "text-gray-600 cursor-pointer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push("App Settings");
      } else {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("App Settings")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push("</div></div></div></div></div></header>");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttrs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "mt-24"
  }, _attrs)), "><div class=\"container mx-auto max-w-5xl text-center\"><div class=\"flex items-center justify-center gap-3\"><img src=\"/images/gracefields.png\" alt=\"logo\" class=\"w-48\"></div><h3 class=\"text-xl text-gray-600 pt-2\"> Visitors Montioring System</h3></div><div class=\"container mx-auto w-1/3 mt-8\"><div class=\"flex flex-col bg-white py-6 px-5 text-gray-600 gap-5 shadow-xl rounded-md\"><input type=\"text\" name=\"memberId\" placeholder=\"Enter your member ID\" class=\"px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:border focus:ring focus:ring-gray-400\"><input type=\"text\" name=\"password\" placeholder=\"Enter your password\" class=\"px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400\">"));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)(_component_Link, {
    href: _ctx.route('dashboard'),
    "class": "text-center py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:bg-blue-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push(" Access Account ");
      } else {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Access Account ")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push("</div></div></div>");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttrs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "h-screen"
  }, _attrs)), ">"));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)($setup["Navbar"], null, null, _parent));

  _push("<div class=\"container mx-auto max-w-5xl mt-12\"><div class=\"flex items-center justify-between mb-4\"><span class=\"font-medium text-base\">Last 30 days</span><button class=\"block border-b text-gray-600 hover:text-gray-800 bg-white px-3 py-1 border-1 rounded shadow text-sm\">20-09-19 - 30-09-19 </button></div><div class=\"flex flex-col mt-3 w-full p-3 lg:p-0 lg:flex-row\"><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><span class=\"text-gray-700 font-semibold text-sm\"> TOTAL VISITORS<br><span class=\"text-3xl font-semibold text-gray-700\">1220 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></span><span><svg class=\"mt-6 mr-2 fill-current text-gray-500\" width=\"37\" height=\"41\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.371 20.408c-5.637 0-10.206-4.57-10.206-10.206 0-5.637 4.57-10.206 10.206-10.206 5.637 0 10.206 4.57 10.206 10.206 0 5.637-4.569 10.206-10.206 10.206zm0-4.082a6.124 6.124 0 100-12.248 6.124 6.124 0 000 12.248zM36.742 38.78a2.041 2.041 0 11-4.082 0v-4.083a6.124 6.124 0 00-6.124-6.124h-16.33a6.124 6.124 0 00-6.124 6.124v4.083a2.041 2.041 0 01-4.082 0v-4.083c0-5.637 4.57-10.206 10.206-10.206h16.33c5.637 0 10.206 4.57 10.206 10.206v4.083z\"></path></svg></span></div></div></div><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><div class=\"text-gray-700 font-semibold text-sm\"> TOTAL CONVERTED<br><span class=\"text-3xl font-semibold text-gray-700\">350 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></div><div><svg class=\"mt-5 mr-2 fill-current text-gray-500 h-12 w-10\"><path d=\"M16.8 26.439V2.1a2.1 2.1 0 114.2 0v24.339l6.93-6.93a2.1 2.1 0 012.94 2.982l-10.5 10.5a2.1 2.1 0 01-2.94 0l-10.5-10.5a2.1 2.1 0 012.94-2.982l6.93 6.93zM0 31.5a2.1 2.1 0 114.2 0v6.3h29.4v-6.3a2.1 2.1 0 114.2 0v6.3a4.2 4.2 0 01-4.2 4.2H4.2A4.2 4.2 0 010 37.8v-6.3z\"></path></svg></div></div></div></div><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><span class=\"text-gray-700 font-semibold text-sm\"> TOTAL ACTIVITES <br><span class=\"text-3xl font-semibold text-gray-700\">750 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></span><span><svg class=\"mt-5 mr-2\" width=\"39\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M38.981 20.374c0-1.639-.132-2.834-.42-4.075H19.889v7.397H30.85c-.22 1.838-1.414 4.606-4.066 6.467l-.037.247 5.904 4.584.41.04c3.756-3.476 5.921-8.592 5.921-14.66\" fill=\"#4285F4\"></path><path d=\"M19.888 39.863c5.37 0 9.878-1.772 13.171-4.828l-6.276-4.872c-1.68 1.173-3.933 1.993-6.895 1.993-5.259 0-9.723-3.477-11.314-8.283l-.233.02-6.14 4.762-.08.223c3.27 6.511 9.989 10.985 17.767 10.985\" fill=\"#34A853\"></path><path d=\"M8.574 23.873a12.294 12.294 0 01-.663-3.942c0-1.373.243-2.702.641-3.942l-.011-.264-6.216-4.838-.204.097A19.985 19.985 0 000 19.931c0 3.211.773 6.245 2.121 8.947l6.453-5.005\" fill=\"#FBBC05\"></path><path d=\"M19.888 7.707c3.735 0 6.254 1.616 7.69 2.967l5.614-5.492C29.744 1.971 25.258 0 19.888 0 12.11 0 5.392 4.473 2.121 10.984l6.431 5.005c1.613-4.805 6.077-8.282 11.336-8.282\" fill=\"#EB4335\"></path></g></svg></span></div></div></div></div><!-- event analytics --><section class=\"w-full lg:mt-6 p-3 lg:p-0\"><div class=\"hidden md:flex md:-mt-2 lg:mt-3 xl:mt-3 justify-between mt-3\"><span class=\"text-gray-700 font-medium text-xl\">Visitors Analytics <span class=\"md:hidden text-gray-500 font-normal text-sm px-1\"> 3 seconds ago</span></span><div class=\"hidden md:flex\"><button class=\"mr-3 shadow block text-gray-600 hover:text-gray-800 bg-white px-3 py-1 rounded border-0 border-gray-700 text-sm\"> Today </button><button class=\"block border-b text-gray-600 hover:text-gray-800 bg-white px-3 py-1 border-1 rounded shadow text-sm\">20-09-19 - 30-09-19</button></div></div><div class=\"flex flex-col lg:flex-row shadow rounded-lg mt-3 bg-white\"><div class=\"sm:hidden flex items-center justify-between p-3 border-b\"><button class=\"text-gray-700 font-medium px-2 py-1 rounded\">Event Analytics</button><button class=\"inline-flex items-center border px-2 py-1 rounded\"><span class=\"mr-1\"><svg class=\"-mb-1 h-5 w-5 fill-current text-gray-500\" viewBox=\"0 0 24 24\"><path d=\"M7 2.58V2c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0113 17.43V18a2 2 0 01-2 2H9a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 017 2.57v.01zM5.88 5.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V18h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V2H9v2.04l-.71.2a6 6 0 00-2.41 1.4zM10 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z\"></path></svg></span><span class=\"text-gray-700 text-sm hover:bg-gray-900\">Apply Filter</span></button></div><div class=\"border-b lg:border-r lg:w-3/4 pt-3 lg:pr-0 pr-2 lg:p-3\">");

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)($setup["VueApexCharts"], {
    type: "bar",
    options: $setup.obj.chartOptions,
    series: $setup.obj.chartOptions.series
  }, null, _parent));

  _push("</div><div class=\"lg:w-1/4 flex flex-row lg:flex-col\"><button class=\"flex p-2 border-r lg:border-b hover:bg-gray-100\"><div class=\"m-3\"><div class=\"flex flex-col items-start\"><h4 class=\"hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left\"> Total Visitors this Month </h4><div class=\"flex items-baseline\"><h1 class=\"flex items-center justify-between\"><span class=\"mr-2 text-2xl lg:text-3xl font-medium text-gray-700\">725</span></h1><div class=\"flex text-baseline text-xs font-bold text-green-600\"><svg class=\"w-3 h-3 text-green-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 10l7-7m0 0l7 7m-7-7v18\"></path></svg><span>12%</span></div></div></div></div></button><button class=\"flex p-2 border-r lg:border-b hover:bg-gray-100\"><div class=\"m-3\"><div class=\"flex flex-col items-start\"><h4 class=\"hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left\"> Total Visitors Last Month </h4><div class=\"flex items-baseline\"><h1 class=\"flex items-center justify-between\"><span class=\"mr-2 text-2xl lg:text-3xl font-medium text-gray-700\">413</span></h1><div class=\"flex text-baseline text-xs font-bold text-red-600\"><svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 17l-4 4m0 0l-4-4m4 4V3\"></path></svg><span>9%</span></div></div></div></div></button><button class=\"flex p-2 border-r lg:border-b hover:bg-gray-100\"><div class=\"m-3\"><div class=\"flex flex-col items-start\"><h4 class=\"hidden lg:inline-flex text-xs uppercase text-gray-400 font-semibold text-left\"> Total Visitors over 6 months </h4><div class=\"flex items-baseline\"><h1 class=\"flex items-center justify-between\"><span class=\"mr-2 text-2xl lg:text-3xl font-medium text-gray-700\">200</span></h1><div class=\"flex text-baseline text-xs font-bold text-red-600\"><svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 17l-4 4m0 0l-4-4m4 4V3\"></path></svg><span>9%</span></div></div></div></div></button></div></div></section><!-- vistors table --><div style=\"".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderStyle)({
    "overflow-x": "auto"
  }), "\"><table class=\"w-full mt-12 rounded-lg shadow-md\"><thead class=\"rounded-t-lg\"><tr class=\"text-left rounded-t-lg bg-gray-50 border-b border-grey uppercase\"><th class=\"px-2 py-4\"><span class=\"bg-white border-2 ml-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-blue-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></th><th class=\"text-sm text-gray-700\">Recent Visitors</th><th class=\"hidden md:table-cell text-sm text-gray-700\">Mobile</th><th class=\"hidden md:table-cell text-sm text-gray-700\">Assignee</th><th class=\"text-sm text-gray-700\">Status</th><th class=\"text-sm text-gray-700\">Action</th></tr></thead><tbody class=\"bg-white\"><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Molly Sanders\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Molly Sanders</p><p class=\"md:hidden text-xs text-gray-700 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Stadium</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0242822669</p><p class=\"text-xs text-gray-400 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Bernard Afrane</p></td><td><span class=\"bg-yellow-50 text-yellow-600 text-xs font-bold rounded-lg px-4 py-1\">paused </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-600\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Gify Osei\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Gify Osei</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-500 font-medium\">Asokwa</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0243243810</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Gify Gyamfi</p></td><td><span class=\"bg-red-50 text-red-600 text-xs font-bold rounded-lg px-4 py-1\">Stopped </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Ransford Aboagy\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Ransford Aboagye</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Santasi</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0245065767</p><p class=\"text-xs text-gray-400 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Fred Boateng</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr></tbody></table></div><div class=\"flex items-center justify-between bg-white rounded-b-lg p-3\"><span class=\"text-sm text-gray-500\">updated 2m ago</span><span class=\"text-sm text-gray-600\"> 1 2 3 </span></div><br><br><!-- end table --></div></div>"));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttrs)(_attrs), ">"));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderComponent)($setup["Navbar"], null, null, _parent));

  _push("<div class=\"container mx-auto max-w-6xl mt-12\"><div class=\"mt-5 md:mt-0 md:col-span-2\"><form action=\"#\" method=\"POST\"><div class=\"shadow overflow-hidden sm:rounded-md\"><div class=\"px-4 py-5 bg-white space-y-6 sm:p-6\"><fieldset><legend class=\"text-base font-medium text-gray-900\">By Email</legend><div class=\"mt-4 space-y-4\"><div class=\"flex items-start\"><div class=\"flex items-center h-5\"><input id=\"comments\" name=\"comments\" type=\"checkbox\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded\"></div><div class=\"ml-3 text-sm\"><label for=\"comments\" class=\"font-medium text-gray-700\">Automate Welcome Message</label><p class=\"text-gray-500\">Send new visitors messages after they are first saved. </p></div></div><div class=\"flex items-start\"><div class=\"flex items-center h-5\"><input id=\"candidates\" name=\"candidates\" type=\"checkbox\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded\"></div><div class=\"ml-3 text-sm\"><label for=\"candidates\" class=\"font-medium text-gray-700\">Assignees</label><p class=\"text-gray-500\">Send SMS to assignees when they are assigned to visitors. </p></div></div><div class=\"flex items-start\"><div class=\"flex items-center h-5\"><input id=\"offers\" name=\"offers\" type=\"checkbox\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded\"></div><div class=\"ml-3 text-sm\"><label for=\"offers\" class=\"font-medium text-gray-700\">Generate reports</label><p class=\"text-gray-500 mb-3\">Automatically generate reports at the end of the month </p><label for=\"offers\" class=\"font-medium text-gray-700\">Admin Email</label><input type=\"text\" name=\"first-name\" id=\"first-name\" autocomplete=\"given-name\" placeholder=\"Please Enter Admin email\" class=\"p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md\"></div></div></div></fieldset><fieldset><div><legend class=\"text-base font-medium text-gray-900\">Push Notifications</legend><p class=\"text-sm text-gray-500\">These are delivered via SMS to your mobile phone. </p></div><div class=\"mt-4 space-y-4\"><div class=\"flex items-center\"><input id=\"push-everything\" name=\"push-notifications\" type=\"radio\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300\"><label for=\"push-everything\" class=\"ml-3 block text-sm font-medium text-gray-700\"> Everything </label></div><div class=\"flex items-center\"><input id=\"push-email\" name=\"push-notifications\" type=\"radio\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300\"><label for=\"push-email\" class=\"ml-3 block text-sm font-medium text-gray-700\"> Same as email </label></div><div class=\"flex items-center\"><input id=\"push-nothing\" name=\"push-notifications\" type=\"radio\" class=\"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300\"><label for=\"push-nothing\" class=\"ml-3 block text-sm font-medium text-gray-700\"> No push notifications </label></div></div></fieldset></div><div class=\"px-4 py-3 bg-gray-50 text-right sm:px-6\"><button type=\"submit\" class=\"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">Save</button></div></div></form></div></div></div>");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttrs)(_attrs), ">"));

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderComponent)($setup["Navbar"], null, null, _parent));

  _push("<div class=\"container mx-auto max-w-5xl mt-12 mb-12\"><div class=\"flex flex-col mt-3 w-full p-3 lg:p-0 lg:flex-row\"><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><span class=\"text-gray-700 font-semibold text-sm\"> TOTAL CONTACTS<br><span class=\"text-3xl font-semibold text-gray-700\">1220 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></span><span><svg class=\"mt-6 mr-2 fill-current text-gray-500\" width=\"37\" height=\"41\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.371 20.408c-5.637 0-10.206-4.57-10.206-10.206 0-5.637 4.57-10.206 10.206-10.206 5.637 0 10.206 4.57 10.206 10.206 0 5.637-4.569 10.206-10.206 10.206zm0-4.082a6.124 6.124 0 100-12.248 6.124 6.124 0 000 12.248zM36.742 38.78a2.041 2.041 0 11-4.082 0v-4.083a6.124 6.124 0 00-6.124-6.124h-16.33a6.124 6.124 0 00-6.124 6.124v4.083a2.041 2.041 0 01-4.082 0v-4.083c0-5.637 4.57-10.206 10.206-10.206h16.33c5.637 0 10.206 4.57 10.206 10.206v4.083z\"></path></svg></span></div></div></div><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white mr-8 rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><div class=\"text-gray-700 font-semibold text-sm\"> IMPORTED<br><span class=\"text-3xl font-semibold text-gray-700\">350 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></div><div><svg class=\"mt-5 mr-2 fill-current text-gray-500 h-12 w-10\"><path d=\"M16.8 26.439V2.1a2.1 2.1 0 114.2 0v24.339l6.93-6.93a2.1 2.1 0 012.94 2.982l-10.5 10.5a2.1 2.1 0 01-2.94 0l-10.5-10.5a2.1 2.1 0 012.94-2.982l6.93 6.93zM0 31.5a2.1 2.1 0 114.2 0v6.3h29.4v-6.3a2.1 2.1 0 114.2 0v6.3a4.2 4.2 0 01-4.2 4.2H4.2A4.2 4.2 0 010 37.8v-6.3z\"></path></svg></div></div></div></div><div class=\"relative block w-full shadow-lg h-32 mb-3 bg-white rounded-lg\"><div class=\"p-5\"><div class=\"flex flex-wrap justify-between\"><span class=\"text-gray-700 font-semibold text-sm\"> GOOGLE <br><span class=\"text-3xl font-semibold text-gray-700\">750 </span><br><span class=\"text-sm font-normal text-gray-500\">Last accepted today</span></span><span><svg class=\"mt-5 mr-2\" width=\"39\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M38.981 20.374c0-1.639-.132-2.834-.42-4.075H19.889v7.397H30.85c-.22 1.838-1.414 4.606-4.066 6.467l-.037.247 5.904 4.584.41.04c3.756-3.476 5.921-8.592 5.921-14.66\" fill=\"#4285F4\"></path><path d=\"M19.888 39.863c5.37 0 9.878-1.772 13.171-4.828l-6.276-4.872c-1.68 1.173-3.933 1.993-6.895 1.993-5.259 0-9.723-3.477-11.314-8.283l-.233.02-6.14 4.762-.08.223c3.27 6.511 9.989 10.985 17.767 10.985\" fill=\"#34A853\"></path><path d=\"M8.574 23.873a12.294 12.294 0 01-.663-3.942c0-1.373.243-2.702.641-3.942l-.011-.264-6.216-4.838-.204.097A19.985 19.985 0 000 19.931c0 3.211.773 6.245 2.121 8.947l6.453-5.005\" fill=\"#FBBC05\"></path><path d=\"M19.888 7.707c3.735 0 6.254 1.616 7.69 2.967l5.614-5.492C29.744 1.971 25.258 0 19.888 0 12.11 0 5.392 4.473 2.121 10.984l6.431 5.005c1.613-4.805 6.077-8.282 11.336-8.282\" fill=\"#EB4335\"></path></g></svg></span></div></div></div></div><div style=\"".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderStyle)({
    "overflow-x": "auto"
  }), "\"><table class=\"w-full mt-12 rounded-lg shadow-md\"><thead class=\"rounded-t-lg\"><tr class=\"text-left rounded-t-lg bg-gray-50 border-b border-grey uppercase\"><th class=\"px-2 py-4\"><span class=\"bg-white border-2 ml-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-blue-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></th><th class=\"text-sm text-gray-700\">Recent Visitors</th><th class=\"hidden md:table-cell text-sm text-gray-700\">Mobile</th><th class=\"hidden md:table-cell text-sm text-gray-700\">Assignee</th><th class=\"text-sm text-gray-700\">Status</th><th class=\"text-sm text-gray-700\">Action</th></tr></thead><tbody class=\"bg-white\"><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Molly Sanders\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Molly Sanders</p><p class=\"md:hidden text-xs text-gray-700 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Stadium</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0242822669</p><p class=\"text-xs text-gray-400 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Bernard Afrane</p></td><td><span class=\"bg-yellow-50 text-yellow-600 text-xs font-bold rounded-lg px-4 py-1\">paused </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-600\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Gify Osei\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Gify Osei</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-500 font-medium\">Asokwa</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0243243810</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Gify Gyamfi</p></td><td><span class=\"bg-red-50 text-red-600 text-xs font-bold rounded-lg px-4 py-1\">Stopped </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-grey-light items-center\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Ransford Aboagy\" alt=\"\"></span><span class=\"py-3\"><p class=\"text-gray-800 text-sm\">Ransford Aboagye</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Santasi</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0245065767</p><p class=\"text-xs text-gray-400 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Fred Boateng</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr><tr class=\"accordion border-b border-gray-100 hover:bg-gray-50\"><td class=\"px-3 py-5\"><span class=\"bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500\"><input type=\"checkbox\" class=\"opacity-0 absolute\"><svg class=\"fill-current hidden w-4 h-4 text-green-500 pointer-events-none\" viewBox=\"0 0 20 20\"><path d=\"M0 11l2-2 5 5L18 3l2 2L7 18z\"></path></svg></span></td><td class=\"flex items-center\"><span><img class=\"hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover\" src=\"https://ui-avatars.com/api/?background=random&amp;name=Bernard Owiredu\" alt=\"\"></span><span class=\"py-3 w-40\"><p class=\"text-gray-800 text-sm\">Bernard Owiredu</p><p class=\"md:hidden text-xs text-gray-600 font-medium\">0244224317</p><p class=\"hidden md:table-cell text-xs text-gray-400 font-medium\">Anyinamu</p></span></td><td class=\"hidden md:table-cell\"><p class=\"text-sm text-gray-800 font-medium\">0244224317</p><p class=\"text-xs text-gray-500 font-medium\">bernardkissi18@gmail.com</p></td><td class=\"hidden lg:table-cell\"><p class=\"text-sm text-gray-700 font-medium\">Nelly Sarpong</p></td><td><span class=\"bg-green-50 text-green-600 text-xs font-bold rounded-lg px-4 py-1\">monitoring </span></td><td><svg class=\"mr-3 md:mr-1 h-12 w-6 fill-current text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"></path></svg></td></tr></tbody></table></div><div class=\"flex items-center justify-between bg-white rounded-b-lg p-3\"><span class=\"text-sm text-gray-500\">updated 2m ago</span><span class=\"text-sm text-gray-600\"> 1 2 3 </span></div></div></div>"));
}

/***/ }),

/***/ "./vendor/tightenco/ziggy/dist/vue.js":
/*!********************************************!*\
  !*** ./vendor/tightenco/ziggy/dist/vue.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, r) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? r(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  function r(t, r) {
    for (var n = 0; n < r.length; n++) {
      var e = r[n];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  function n(t, n, e) {
    return n && r(t.prototype, n), e && r(t, e), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }

  function e() {
    return e = Object.assign || function (t) {
      for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r];

        for (var e in n) {
          Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        }
      }

      return t;
    }, e.apply(this, arguments);
  }

  function o(t) {
    return o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, o(t);
  }

  function i(t, r) {
    return i = Object.setPrototypeOf || function (t, r) {
      return t.__proto__ = r, t;
    }, i(t, r);
  }

  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function f(t, r, n) {
    return f = u() ? Reflect.construct : function (t, r, n) {
      var e = [null];
      e.push.apply(e, r);
      var o = new (Function.bind.apply(t, e))();
      return n && i(o, n.prototype), o;
    }, f.apply(null, arguments);
  }

  function a(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return a = function a(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, n);
      }

      function n() {
        return f(t, arguments, o(this).constructor);
      }

      return n.prototype = Object.create(t.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), i(n, t);
    }, a(t);
  }

  var c = String.prototype.replace,
      l = /%20/g,
      s = "RFC3986",
      p = {
    "default": s,
    formatters: {
      RFC1738: function RFC1738(t) {
        return c.call(t, l, "+");
      },
      RFC3986: function RFC3986(t) {
        return String(t);
      }
    },
    RFC1738: "RFC1738",
    RFC3986: s
  },
      v = Object.prototype.hasOwnProperty,
      y = Array.isArray,
      d = function () {
    for (var t = [], r = 0; r < 256; ++r) {
      t.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
    }

    return t;
  }(),
      b = function b(t, r) {
    for (var n = r && r.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e) {
      void 0 !== t[e] && (n[e] = t[e]);
    }

    return n;
  },
      h = {
    arrayToObject: b,
    assign: function assign(t, r) {
      return Object.keys(r).reduce(function (t, n) {
        return t[n] = r[n], t;
      }, t);
    },
    combine: function combine(t, r) {
      return [].concat(t, r);
    },
    compact: function compact(t) {
      for (var r = [{
        obj: {
          o: t
        },
        prop: "o"
      }], n = [], e = 0; e < r.length; ++e) {
        for (var o = r[e], i = o.obj[o.prop], u = Object.keys(i), f = 0; f < u.length; ++f) {
          var a = u[f],
              c = i[a];
          "object" == _typeof(c) && null !== c && -1 === n.indexOf(c) && (r.push({
            obj: i,
            prop: a
          }), n.push(c));
        }
      }

      return function (t) {
        for (; t.length > 1;) {
          var r = t.pop(),
              n = r.obj[r.prop];

          if (y(n)) {
            for (var e = [], o = 0; o < n.length; ++o) {
              void 0 !== n[o] && e.push(n[o]);
            }

            r.obj[r.prop] = e;
          }
        }
      }(r), t;
    },
    decode: function decode(t, r, n) {
      var e = t.replace(/\+/g, " ");
      if ("iso-8859-1" === n) return e.replace(/%[0-9a-f]{2}/gi, unescape);

      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    },
    encode: function encode(t, r, n, e, o) {
      if (0 === t.length) return t;
      var i = t;
      if ("symbol" == _typeof(t) ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
        return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
      });

      for (var u = "", f = 0; f < i.length; ++f) {
        var a = i.charCodeAt(f);
        45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || o === p.RFC1738 && (40 === a || 41 === a) ? u += i.charAt(f) : a < 128 ? u += d[a] : a < 2048 ? u += d[192 | a >> 6] + d[128 | 63 & a] : a < 55296 || a >= 57344 ? u += d[224 | a >> 12] + d[128 | a >> 6 & 63] + d[128 | 63 & a] : (a = 65536 + ((1023 & a) << 10 | 1023 & i.charCodeAt(f += 1)), u += d[240 | a >> 18] + d[128 | a >> 12 & 63] + d[128 | a >> 6 & 63] + d[128 | 63 & a]);
      }

      return u;
    },
    isBuffer: function isBuffer(t) {
      return !(!t || "object" != _typeof(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
    },
    isRegExp: function isRegExp(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    },
    maybeMap: function maybeMap(t, r) {
      if (y(t)) {
        for (var n = [], e = 0; e < t.length; e += 1) {
          n.push(r(t[e]));
        }

        return n;
      }

      return r(t);
    },
    merge: function t(r, n, e) {
      if (!n) return r;

      if ("object" != _typeof(n)) {
        if (y(r)) r.push(n);else {
          if (!r || "object" != _typeof(r)) return [r, n];
          (e && (e.plainObjects || e.allowPrototypes) || !v.call(Object.prototype, n)) && (r[n] = !0);
        }
        return r;
      }

      if (!r || "object" != _typeof(r)) return [r].concat(n);
      var o = r;
      return y(r) && !y(n) && (o = b(r, e)), y(r) && y(n) ? (n.forEach(function (n, o) {
        if (v.call(r, o)) {
          var i = r[o];
          i && "object" == _typeof(i) && n && "object" == _typeof(n) ? r[o] = t(i, n, e) : r.push(n);
        } else r[o] = n;
      }), r) : Object.keys(n).reduce(function (r, o) {
        var i = n[o];
        return r[o] = v.call(r, o) ? t(r[o], i, e) : i, r;
      }, o);
    }
  },
      m = Object.prototype.hasOwnProperty,
      g = {
    brackets: function brackets(t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function indices(t, r) {
      return t + "[" + r + "]";
    },
    repeat: function repeat(t) {
      return t;
    }
  },
      j = Array.isArray,
      w = String.prototype.split,
      O = Array.prototype.push,
      E = function E(t, r) {
    O.apply(t, j(r) ? r : [r]);
  },
      R = Date.prototype.toISOString,
      S = p["default"],
      x = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: h.encode,
    encodeValuesOnly: !1,
    format: S,
    formatter: p.formatters[S],
    indices: !1,
    serializeDate: function serializeDate(t) {
      return R.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
      T = function t(r, n, e, o, i, u, f, a, c, l, s, p, v, y) {
    var d,
        b = r;

    if ("function" == typeof f ? b = f(n, b) : b instanceof Date ? b = l(b) : "comma" === e && j(b) && (b = h.maybeMap(b, function (t) {
      return t instanceof Date ? l(t) : t;
    })), null === b) {
      if (o) return u && !v ? u(n, x.encoder, y, "key", s) : n;
      b = "";
    }

    if ("string" == typeof (d = b) || "number" == typeof d || "boolean" == typeof d || "symbol" == _typeof(d) || "bigint" == typeof d || h.isBuffer(b)) {
      if (u) {
        var m = v ? n : u(n, x.encoder, y, "key", s);

        if ("comma" === e && v) {
          for (var g = w.call(String(b), ","), O = "", R = 0; R < g.length; ++R) {
            O += (0 === R ? "" : ",") + p(u(g[R], x.encoder, y, "value", s));
          }

          return [p(m) + "=" + O];
        }

        return [p(m) + "=" + p(u(b, x.encoder, y, "value", s))];
      }

      return [p(n) + "=" + p(String(b))];
    }

    var S,
        T = [];
    if (void 0 === b) return T;
    if ("comma" === e && j(b)) S = [{
      value: b.length > 0 ? b.join(",") || null : void 0
    }];else if (j(f)) S = f;else {
      var k = Object.keys(b);
      S = a ? k.sort(a) : k;
    }

    for (var N = 0; N < S.length; ++N) {
      var C = S[N],
          D = "object" == _typeof(C) && void 0 !== C.value ? C.value : b[C];

      if (!i || null !== D) {
        var F = j(b) ? "function" == typeof e ? e(n, C) : n : n + (c ? "." + C : "[" + C + "]");
        E(T, t(D, F, e, o, i, u, f, a, c, l, s, p, v, y));
      }
    }

    return T;
  },
      k = Object.prototype.hasOwnProperty,
      N = Array.isArray,
      C = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: h.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
      D = function D(t) {
    return t.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
      F = function F(t, r) {
    return t && "string" == typeof t && r.comma && t.indexOf(",") > -1 ? t.split(",") : t;
  },
      $ = function $(t, r, n, e) {
    if (t) {
      var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          i = /(\[[^[\]]*])/g,
          u = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
          f = u ? o.slice(0, u.index) : o,
          a = [];

      if (f) {
        if (!n.plainObjects && k.call(Object.prototype, f) && !n.allowPrototypes) return;
        a.push(f);
      }

      for (var c = 0; n.depth > 0 && null !== (u = i.exec(o)) && c < n.depth;) {
        if (c += 1, !n.plainObjects && k.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
        a.push(u[1]);
      }

      return u && a.push("[" + o.slice(u.index) + "]"), function (t, r, n, e) {
        for (var o = e ? r : F(r, n), i = t.length - 1; i >= 0; --i) {
          var u,
              f = t[i];
          if ("[]" === f && n.parseArrays) u = [].concat(o);else {
            u = n.plainObjects ? Object.create(null) : {};
            var a = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                c = parseInt(a, 10);
            n.parseArrays || "" !== a ? !isNaN(c) && f !== a && String(c) === a && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (u = [])[c] = o : "__proto__" !== a && (u[a] = o) : u = {
              0: o
            };
          }
          o = u;
        }

        return o;
      }(a, r, n, e);
    }
  },
      A = function A(t, r) {
    var n = function (t) {
      if (!t) return C;
      if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
      if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      return {
        allowDots: void 0 === t.allowDots ? C.allowDots : !!t.allowDots,
        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : C.allowPrototypes,
        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : C.arrayLimit,
        charset: void 0 === t.charset ? C.charset : t.charset,
        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : C.charsetSentinel,
        comma: "boolean" == typeof t.comma ? t.comma : C.comma,
        decoder: "function" == typeof t.decoder ? t.decoder : C.decoder,
        delimiter: "string" == typeof t.delimiter || h.isRegExp(t.delimiter) ? t.delimiter : C.delimiter,
        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : C.depth,
        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : C.interpretNumericEntities,
        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : C.parameterLimit,
        parseArrays: !1 !== t.parseArrays,
        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : C.plainObjects,
        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : C.strictNullHandling
      };
    }(r);

    if ("" === t || null == t) return n.plainObjects ? Object.create(null) : {};

    for (var e = "string" == typeof t ? function (t, r) {
      var n,
          e = {},
          o = (r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(r.delimiter, Infinity === r.parameterLimit ? void 0 : r.parameterLimit),
          i = -1,
          u = r.charset;
      if (r.charsetSentinel) for (n = 0; n < o.length; ++n) {
        0 === o[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === o[n] ? u = "utf-8" : "utf8=%26%2310003%3B" === o[n] && (u = "iso-8859-1"), i = n, n = o.length);
      }

      for (n = 0; n < o.length; ++n) {
        if (n !== i) {
          var f,
              a,
              c = o[n],
              l = c.indexOf("]="),
              s = -1 === l ? c.indexOf("=") : l + 1;
          -1 === s ? (f = r.decoder(c, C.decoder, u, "key"), a = r.strictNullHandling ? null : "") : (f = r.decoder(c.slice(0, s), C.decoder, u, "key"), a = h.maybeMap(F(c.slice(s + 1), r), function (t) {
            return r.decoder(t, C.decoder, u, "value");
          })), a && r.interpretNumericEntities && "iso-8859-1" === u && (a = D(a)), c.indexOf("[]=") > -1 && (a = N(a) ? [a] : a), e[f] = k.call(e, f) ? h.combine(e[f], a) : a;
        }
      }

      return e;
    }(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(e), u = 0; u < i.length; ++u) {
      var f = i[u],
          a = $(f, e[f], n, "string" == typeof t);
      o = h.merge(o, a, n);
    }

    return h.compact(o);
  },
      I = /*#__PURE__*/function () {
    function t(t, r, n) {
      var e, o;
      this.name = t, this.definition = r, this.bindings = null != (e = r.bindings) ? e : {}, this.wheres = null != (o = r.wheres) ? o : {}, this.config = n;
    }

    var r = t.prototype;
    return r.matchesUrl = function (t) {
      var r = this;
      if (!this.definition.methods.includes("GET")) return !1;
      var n = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function (t, n, e, o) {
        var i,
            u = "(?<" + e + ">" + ((null == (i = r.wheres[e]) ? void 0 : i.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
        return o ? "(" + n + u + ")?" : "" + n + u;
      }).replace(/^\w+:\/\//, ""),
          e = t.replace(/^\w+:\/\//, "").split("?"),
          o = e[0],
          i = e[1],
          u = new RegExp("^" + n + "/?$").exec(o);
      return !!u && {
        params: u.groups,
        query: A(i)
      };
    }, r.compile = function (t) {
      var r = this,
          n = this.parameterSegments;
      return n.length ? this.template.replace(/{([^}?]+)(\??)}/g, function (e, o, i) {
        var u, f, a;
        if (!i && [null, void 0].includes(t[o])) throw new Error("Ziggy error: '" + o + "' parameter is required for route '" + r.name + "'.");
        if (n[n.length - 1].name === o && ".*" === r.wheres[o]) return encodeURIComponent(null != (a = t[o]) ? a : "").replace(/%2F/g, "/");
        if (r.wheres[o] && !new RegExp("^" + (i ? "(" + r.wheres[o] + ")?" : r.wheres[o]) + "$").test(null != (u = t[o]) ? u : "")) throw new Error("Ziggy error: '" + o + "' parameter does not match required format '" + r.wheres[o] + "' for route '" + r.name + "'.");
        return encodeURIComponent(null != (f = t[o]) ? f : "");
      }).replace(/\/+$/, "") : this.template;
    }, n(t, [{
      key: "template",
      get: function get() {
        return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
      }
    }, {
      key: "parameterSegments",
      get: function get() {
        var t, r;
        return null != (t = null == (r = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r.map(function (t) {
          return {
            name: t.replace(/{|\??}/g, ""),
            required: !/\?}$/.test(t)
          };
        })) ? t : [];
      }
    }]), t;
  }(),
      P = /*#__PURE__*/function (t) {
    var r, o;

    function u(r, n, o, i) {
      var u;

      if (void 0 === o && (o = !0), (u = t.call(this) || this).t = null != i ? i : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u.t = e({}, u.t, {
        absolute: o
      }), r) {
        if (!u.t.routes[r]) throw new Error("Ziggy error: route '" + r + "' is not in the route list.");
        u.i = new I(r, u.t.routes[r], u.t), u.u = u.l(n);
      }

      return u;
    }

    o = t, (r = u).prototype = Object.create(o.prototype), r.prototype.constructor = r, i(r, o);
    var f = u.prototype;
    return f.toString = function () {
      var t = this,
          r = Object.keys(this.u).filter(function (r) {
        return !t.i.parameterSegments.some(function (t) {
          return t.name === r;
        });
      }).filter(function (t) {
        return "_query" !== t;
      }).reduce(function (r, n) {
        var o;
        return e({}, r, ((o = {})[n] = t.u[n], o));
      }, {});
      return this.i.compile(this.u) + function (t, r) {
        var n,
            e = t,
            o = function (t) {
          if (!t) return x;
          if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
          var r = t.charset || x.charset;
          if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var n = p["default"];

          if (void 0 !== t.format) {
            if (!m.call(p.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            n = t.format;
          }

          var e = p.formatters[n],
              o = x.filter;
          return ("function" == typeof t.filter || j(t.filter)) && (o = t.filter), {
            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : x.addQueryPrefix,
            allowDots: void 0 === t.allowDots ? x.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : x.charsetSentinel,
            delimiter: void 0 === t.delimiter ? x.delimiter : t.delimiter,
            encode: "boolean" == typeof t.encode ? t.encode : x.encode,
            encoder: "function" == typeof t.encoder ? t.encoder : x.encoder,
            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : x.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: e,
            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : x.serializeDate,
            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : x.skipNulls,
            sort: "function" == typeof t.sort ? t.sort : null,
            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : x.strictNullHandling
          };
        }(r);

        "function" == typeof o.filter ? e = (0, o.filter)("", e) : j(o.filter) && (n = o.filter);
        var i = [];
        if ("object" != _typeof(e) || null === e) return "";
        var u = g[r && r.arrayFormat in g ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices"];
        n || (n = Object.keys(e)), o.sort && n.sort(o.sort);

        for (var f = 0; f < n.length; ++f) {
          var a = n[f];
          o.skipNulls && null === e[a] || E(i, T(e[a], a, u, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset));
        }

        var c = i.join(o.delimiter),
            l = !0 === o.addQueryPrefix ? "?" : "";
        return o.charsetSentinel && (l += "iso-8859-1" === o.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c.length > 0 ? l + c : "";
      }(e({}, r, this.u._query), {
        addQueryPrefix: !0,
        arrayFormat: "indices",
        encodeValuesOnly: !0,
        skipNulls: !0,
        encoder: function encoder(t, r) {
          return "boolean" == typeof t ? Number(t) : r(t);
        }
      });
    }, f.p = function (t) {
      var r = this;
      t ? this.t.absolute && t.startsWith("/") && (t = this.v().host + t) : t = this.h();
      var n = {},
          o = Object.entries(this.t.routes).find(function (e) {
        return n = new I(e[0], e[1], r.t).matchesUrl(t);
      }) || [void 0, void 0];
      return e({
        name: o[0]
      }, n, {
        route: o[1]
      });
    }, f.h = function () {
      var t = this.v(),
          r = t.pathname,
          n = t.search;
      return (this.t.absolute ? t.host + r : r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
    }, f.current = function (t, r) {
      var n = this.p(),
          o = n.name,
          i = n.params,
          u = n.query,
          f = n.route;
      if (!t) return o;
      var a = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
      if ([null, void 0].includes(r) || !a) return a;
      var c = new I(o, f, this.t);
      r = this.l(r, c);
      var l = e({}, i, u);
      return !(!Object.values(r).every(function (t) {
        return !t;
      }) || Object.values(l).some(function (t) {
        return void 0 !== t;
      })) || Object.entries(r).every(function (t) {
        return l[t[0]] == t[1];
      });
    }, f.v = function () {
      var t,
          r,
          n,
          e,
          o,
          i,
          u = "undefined" != typeof window ? window.location : {},
          f = u.host,
          a = u.pathname,
          c = u.search;
      return {
        host: null != (t = null == (r = this.t.location) ? void 0 : r.host) ? t : void 0 === f ? "" : f,
        pathname: null != (n = null == (e = this.t.location) ? void 0 : e.pathname) ? n : void 0 === a ? "" : a,
        search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === c ? "" : c
      };
    }, f.has = function (t) {
      return Object.keys(this.t.routes).includes(t);
    }, f.l = function (t, r) {
      var n = this;
      void 0 === t && (t = {}), void 0 === r && (r = this.i), t = ["string", "number"].includes(_typeof(t)) ? [t] : t;
      var o = r.parameterSegments.filter(function (t) {
        return !n.t.defaults[t.name];
      });
      if (Array.isArray(t)) t = t.reduce(function (t, r, n) {
        var i, u;
        return e({}, t, o[n] ? ((i = {})[o[n].name] = r, i) : "object" == _typeof(r) ? r : ((u = {})[r] = "", u));
      }, {});else if (1 === o.length && !t[o[0].name] && (t.hasOwnProperty(Object.values(r.bindings)[0]) || t.hasOwnProperty("id"))) {
        var i;
        (i = {})[o[0].name] = t, t = i;
      }
      return e({}, this.m(r), this.g(t, r));
    }, f.m = function (t) {
      var r = this;
      return t.parameterSegments.filter(function (t) {
        return r.t.defaults[t.name];
      }).reduce(function (t, n, o) {
        var i,
            u = n.name;
        return e({}, t, ((i = {})[u] = r.t.defaults[u], i));
      }, {});
    }, f.g = function (t, r) {
      var n = r.bindings,
          o = r.parameterSegments;
      return Object.entries(t).reduce(function (t, r) {
        var i,
            u,
            f = r[0],
            a = r[1];
        if (!a || "object" != _typeof(a) || Array.isArray(a) || !o.some(function (t) {
          return t.name === f;
        })) return e({}, t, ((u = {})[f] = a, u));

        if (!a.hasOwnProperty(n[f])) {
          if (!a.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + n[f] + "'.");
          n[f] = "id";
        }

        return e({}, t, ((i = {})[f] = a[n[f]], i));
      }, {});
    }, f.valueOf = function () {
      return this.toString();
    }, f.check = function (t) {
      return this.has(t);
    }, n(u, [{
      key: "params",
      get: function get() {
        var t = this.p();
        return e({}, t.params, t.query);
      }
    }]), u;
  }( /*#__PURE__*/a(String));

  t.ZiggyVue = {
    install: function install(t, r) {
      var n = function n(t, _n, e, o) {
        return void 0 === o && (o = r), function (t, r, n, e) {
          var o = new P(t, r, n, e);
          return t ? o.toString() : o;
        }(t, _n, e, o);
      };

      t.mixin({
        methods: {
          route: n
        }
      }), parseInt(t.version) > 2 && t.provide("route", n);
    }
  };
});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Navbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_4a80dbca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=4a80dbca */ "./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca");
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['ssrRender',_Navbar_vue_vue_type_template_id_4a80dbca__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"resources/js/Components/Navbar.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_35fb7318__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=35fb7318 */ "./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_Index_vue_vue_type_template_id_35fb7318__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"resources/js/Pages/Auth/Index.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_48cd2f5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48cd2f5e */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_Index_vue_vue_type_template_id_48cd2f5e__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"resources/js/Pages/Dashboard/Index.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Settings/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Settings/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_015b36af__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=015b36af */ "./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_Index_vue_vue_type_template_id_015b36af__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"resources/js/Pages/Settings/Index.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Visitor/Create.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Visitor/Create.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(script, [['__file',"resources/js/Pages/Visitor/Create.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Visitor/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Visitor/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_eb724f10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=eb724f10 */ "./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_bernardkissi_work_gracefill_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_Index_vue_vue_type_template_id_eb724f10__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"resources/js/Pages/Visitor/Index.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_4a80dbca__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_4a80dbca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=4a80dbca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Navbar.vue?vue&type=template&id=4a80dbca");


/***/ }),

/***/ "./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_35fb7318__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_35fb7318__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=35fb7318 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Index.vue?vue&type=template&id=35fb7318");


/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_48cd2f5e__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_48cd2f5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=48cd2f5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e");


/***/ }),

/***/ "./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_015b36af__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_015b36af__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=015b36af */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Index.vue?vue&type=template&id=015b36af");


/***/ }),

/***/ "./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_eb724f10__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_eb724f10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=eb724f10 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Visitor/Index.vue?vue&type=template&id=eb724f10");


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/Index": "./resources/js/Pages/Auth/Index.vue",
	"./Auth/Index.vue": "./resources/js/Pages/Auth/Index.vue",
	"./Dashboard/Index": "./resources/js/Pages/Dashboard/Index.vue",
	"./Dashboard/Index.vue": "./resources/js/Pages/Dashboard/Index.vue",
	"./Settings/Index": "./resources/js/Pages/Settings/Index.vue",
	"./Settings/Index.vue": "./resources/js/Pages/Settings/Index.vue",
	"./Visitor/Create": "./resources/js/Pages/Visitor/Create.vue",
	"./Visitor/Create.vue": "./resources/js/Pages/Visitor/Create.vue",
	"./Visitor/Index": "./resources/js/Pages/Visitor/Index.vue",
	"./Visitor/Index.vue": "./resources/js/Pages/Visitor/Index.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-vue3":
/*!******************************************!*\
  !*** external "@inertiajs/inertia-vue3" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/inertia-vue3");

/***/ }),

/***/ "@inertiajs/server":
/*!************************************!*\
  !*** external "@inertiajs/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/server");

/***/ }),

/***/ "@vue/server-renderer":
/*!***************************************!*\
  !*** external "@vue/server-renderer" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("vue");

/***/ }),

/***/ "vue/server-renderer":
/*!**************************************!*\
  !*** external "vue/server-renderer" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("vue/server-renderer");

/***/ }),

/***/ "vue3-apexcharts":
/*!**********************************!*\
  !*** external "vue3-apexcharts" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("vue3-apexcharts");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/ssr.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/server-renderer */ "@vue/server-renderer");
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "@inertiajs/inertia-vue3");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/server */ "@inertiajs/server");
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/vue.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_4__);





_inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default()(function (page) {
  return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
    page: page,
    render: _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.renderToString,
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var app = _ref.app,
          props = _ref.props,
          plugin = _ref.plugin;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp)({
        render: function render() {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(app, props);
        }
      }).use(plugin).use(ziggy__WEBPACK_IMPORTED_MODULE_4__.ZiggyVue).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head);
    }
  });
});
})();

/******/ })()
;