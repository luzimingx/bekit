!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.feCommon=e():t.feCommon=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(){function t(e){var r={protocol:/^(.+)\:\/\//,host:/\:\/\/(.+?)[\?\#\s\/]/,path:/[\w\s](\/.*?)[\?\#\s]/,params:/\?(.+?)[\#\/\s]/,hash:/\#(\w+)\s$/};for(var n in e=decodeURI(" "+e+" "),r){var o=r[n];this[n]="params"===n?o.exec(e)&&t.parseParams(o.exec(e)[1]):o.exec(e)&&o.exec(e)[1]}this.protocol=this.protocol||location.protocol.slice(0,-1),this.host=this.host||location.host,this.getFullPath()}return t.parseParams=function(t){return t.split("&").reduce(function(t,e){var r=e.split("=");return t[r[0]]=r[1],t},{})},t.stringifyParams=function(t){return t?Object.keys(t).map(function(e){return e+"="+t[e]}).join("&"):""},t.prototype.addParams=function(t){return this.params=Object.assign({},this.params,t),this.getFullPath(),this},t.prototype.removeParams=function(t){var e=this;return this.params?("string"==typeof t&&(t=[t]),t.forEach(function(t){delete e.params[t]}),this.getFullPath(),this):this},t.prototype.replaceParams=function(t){return this.addParams(t)},t.prototype.toString=function(){var e=this.protocol+"://",r=this.host,n=t.stringifyParams(this.params),o=this.hash?"#"+this.hash:"";return n=n?"?"+n:"",e+r+this.path+n+o},t.prototype.getFullPath=function(){var t=new RegExp(this.protocol+"://"+this.host);return this.fullPath=this.toString().replace(t,"")},t}(),o=navigator.userAgent;function i(t){var e;return function(){return void 0===e?e=t.apply(this,arguments):e}}function s(){return/DealEase/i.test(o)}function a(){return/MicroMessenger/i.test(o)}var u={isDealEase:i(s),isWx:i(a),isIOS:i(function(){return/iPhone|iPad|iPod/i.test(o)}),isAndroid:i(function(){return/Android/i.test(o)}),isMob:i(function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o)}),getEnv:i(function(){return a()?"wx":s()?"yx":""})};r.d(e,"Url",function(){return n}),r.d(e,"ua",function(){return u})}])});