"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(g,o){
var n=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-exp/dist'),d=require('@stdlib/math-base-special-pow/dist');function p(e,r,t,u){var i;return n(e)||n(r)||n(t)||n(u)||r<=0||t<=0?NaN:e<=u?0:(i=(e-u)/t,y(-d(i,-r)))}o.exports=p
});var s=f(function(j,q){
var w=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-pow/dist');function F(e,r,t){if(a(e)||a(r)||a(t)||e<=0||r<=0)return w(NaN);return u;function u(i){var c;return a(i)?NaN:i<=t?0:(c=(i-t)/r,z(-x(c,-e)))}}q.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=v(),R=s();O(N,"factory",R);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
