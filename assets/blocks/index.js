(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6:function(e,t,n){}}]),function(e){function t(t){for(var o,i,s=t[0],a=t[1],l=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;c.push([7,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(4),r=n(1),c=n(0),i=n(2),s=n(3),a=(n(5),function(e){var t=e.className,n=e.attributes,o=e.setAttributes,a=n.info,l=n.msg_type,u=function(e){o({msg_type:e})};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.BlockControls,null,Object(c.createElement)(s.Toolbar,null,Object(c.createElement)(s.DropdownMenu,{icon:"editor-table",label:Object(r.__)("Notice","smart-docs"),controls:[[{icon:"dismiss",title:Object(r.__)("Error","smart-docs"),onClick:function(){return u("error")},isActive:!1}],[{icon:"warning",title:Object(r.__)("Warning","smart-docs"),onClick:function(){return u("warn")},isActive:!0}],[{icon:"info",title:Object(r.__)("Info","smart-docs"),onClick:function(){return u("info")},isActive:!1}],[{icon:"yes-alt",title:Object(r.__)("Success","smart-docs"),onClick:function(){return u("success")},isActive:!1}]]}))),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"smartdocs-block-notice notice-".concat(l)},Object(c.createElement)(i.RichText,{tagName:"p",onChange:function(e){o({info:e})},value:a,placeholder:Object(r.__)("Notice Info","smart-docs")}))))});n(6),Object(o.registerBlockType)("smartdocs/notice",{title:Object(r.__)("Notice","smart-docs"),description:Object(r.__)("A Gutenberg block for adding Notice to your page.","smart-docs"),icon:"info",category:"smart-docs",keywords:["notice","alert","warning","message"],attributes:{info:{type:"string",source:"html",selector:"p",default:"Message"},msg_type:{type:"string",default:"warn"}},edit:a,save:function(e){var t=e.attributes,n=t.info,o=t.msg_type;return Object(c.createElement)("div",null,Object(c.createElement)("div",{className:"smartdocs-block-notice notice-".concat(o)},Object(c.createElement)(i.RichText.Content,{tagName:"p",value:n})))}})}]);