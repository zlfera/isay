/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Sep 12 15:25
*/
KISSY.add("base/attribute",function(f,j){function k(a,b,c,d,e,g,i){i=i||c;return a.fire(b+f.ucfirst(c)+"Change",{attrName:i,subAttrName:g,prevVal:d,newVal:e})}function h(a,b,c){var d=a[b]||{};c&&(a[b]=d);return d}function i(a){return h(a,"__attrs",!0)}function l(a){return h(a,"__attrVals",!0)}function n(a,b){for(var c=0,d=b.length;a!=j&&c<d;c++)a=a[b[c]];return a}function m(a,b){var c;!a.hasAttr(b)&&-1!==b.indexOf(".")&&(c=b.split("."),b=c.shift());return{path:c,name:b}}function q(a,b,c){var d=c;
if(b){var a=d=a===j?{}:f.clone(a),e=b.length-1;if(0<=e){for(var g=0;g<e;g++)a=a[b[g]];a!=j&&(a[b[g]]=c)}}return d}function r(a,b,c,d,e){var d=d||{},g,i,f;f=m(a,b);var h=b,b=f.name;g=f.path;f=a.get(b);g&&(i=n(f,g));if(!g&&f===c||g&&i===c)return j;c=q(f,g,c);if(!d.silent&&!1===k(a,"before",b,f,c,h))return!1;c=a.setInternal(b,c,d);if(!1===c)return c;d.silent||(c=l(a)[b],k(a,"after",b,f,c,h),e?e.push({prevVal:f,newVal:c,attrName:b,subAttrName:h}):k(a,"","*",[f],[c],[h],[b]));return a}function o(){}function p(a,
b){var c=i(a),d=h(c,b),e=d.valueFn;if(e&&(e=f.isString(e)?a[e]:e))e=e.call(a),e!==j&&(d.value=e),delete d.valueFn,c[b]=d;return d.value}function s(a,b,c,d){var e,g;e=m(a,b);b=e.name;if(e=e.path)g=a.get(b),c=q(g,e,c);if((e=h(i(a),b,!0).validator)&&(e=f.isString(e)?a[e]:e))if(a=e.call(a,c,b,d),a!==j&&!0!==a)return a;return j}o.INVALID={};var t=o.INVALID;o.prototype={getAttrs:function(){return i(this)},getAttrVals:function(){var a={},b,c=i(this);for(b in c)c.hasOwnProperty(b)&&(a[b]=this.get(b));return a},
addAttr:function(a,b,c){var d=i(this),b=f.clone(b);d[a]?f.mix(d[a],b,c):d[a]=b;return this},addAttrs:function(a,b){var c=this;f.each(a,function(a,b){c.addAttr(b,a)});b&&c.set(b);return c},hasAttr:function(a){return a&&i(this).hasOwnProperty(a)},removeAttr:function(a){this.hasAttr(a)&&(delete i(this)[a],delete l(this)[a]);return this},set:function(a,b,c){if(f.isPlainObject(a)){var c=b,b=Object(a),d=[],e,g=[];for(a in b)b.hasOwnProperty(a)&&(e=s(this,a,b[a],b))!==j&&g.push(e);if(g.length)return c&&
c.error&&c.error(g),!1;for(a in b)b.hasOwnProperty(a)&&r(this,a,b[a],c,d);var i=[],h=[],l=[],n=[];f.each(d,function(a){h.push(a.prevVal);l.push(a.newVal);i.push(a.attrName);n.push(a.subAttrName)});i.length&&k(this,"","*",h,l,n,i);return this}return r(this,a,b,c)},setInternal:function(a,b,c){var d,e,g=h(i(this),a,!0).setter;e=s(this,a,b);if(e!==j)return c.error&&c.error(e),!1;if(g&&(g=f.isString(g)?this[g]:g))d=g.call(this,b,a);if(d===t)return!1;d!==j&&(b=d);l(this)[a]=b},get:function(a){var b,c=this.hasAttr(a),
d=l(this);!c&&-1!==a.indexOf(".")&&(b=a.split("."),a=b.shift());c=h(i(this),a).getter;d=a in d?d[a]:p(this,a);if(c&&(c=f.isString(c)?this[c]:c))d=c.call(this,d,a);b&&(d=n(d,b));return d},reset:function(a,b){if(f.isString(a))return this.hasAttr(a)?this.set(a,p(this,a),b):this;var b=a,c=i(this),d={};for(a in c)c.hasOwnProperty(a)&&(d[a]=p(this,a));this.set(d,b);return this}};return o});
KISSY.add("base",function(f,j,k){function h(f){for(var h=this.constructor;h;){var j=h.ATTRS;if(j){var m=void 0;for(m in j)j.hasOwnProperty(m)&&this.addAttr(m,j[m],!1)}h=h.superclass?h.superclass.constructor:null}if(f)for(var k in f)f.hasOwnProperty(k)&&this.setInternal(k,f[k])}f.augment(h,k.Target,j);h.Attribute=j;return f.Base=h},{requires:["base/attribute","event"]});
