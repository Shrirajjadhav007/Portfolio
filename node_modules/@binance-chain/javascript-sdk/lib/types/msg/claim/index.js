"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindMsg = require("./bindMsg");

Object.keys(_bindMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bindMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bindMsg[key];
    }
  });
});

var _claimMsg = require("./claimMsg");

Object.keys(_claimMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _claimMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _claimMsg[key];
    }
  });
});

var _claimTypes = require("./claimTypes");

Object.keys(_claimTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _claimTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _claimTypes[key];
    }
  });
});

var _transferOutMsg = require("./transferOutMsg");

Object.keys(_transferOutMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transferOutMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transferOutMsg[key];
    }
  });
});