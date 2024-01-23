"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bscDelegateMsg = require("./bscDelegateMsg");

Object.keys(_bscDelegateMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bscDelegateMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bscDelegateMsg[key];
    }
  });
});

var _bscUndelegateMsg = require("./bscUndelegateMsg");

Object.keys(_bscUndelegateMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bscUndelegateMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bscUndelegateMsg[key];
    }
  });
});

var _bscRedelegateMsg = require("./bscRedelegateMsg");

Object.keys(_bscRedelegateMsg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bscRedelegateMsg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bscRedelegateMsg[key];
    }
  });
});