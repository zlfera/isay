/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Sep 12 15:29
*/
KISSY.add("imagezoom/base",function(g,c,i,h,f){return i.extend([h],{initializer:function(){var b=this,d;(d=b.image=b.get("imageNode"))&&h.__imgOnLoad(d,function(){b.imageWrap||(b._render(),b._bind())})},destructor:function(){this.imageWrap&&(this.image.insertBefore(this.imageWrap,f),this.imageWrap.remove())},_render:function(){var b=this.image;this.imageWrap=(new c(g.substitute("<span class='{wrapClass}'></span>",{wrapClass:this.get("wrapClass")}))).insertBefore(b,f);this.imageWrap.prepend(b);this.get("showIcon")&&
(this.icon=new c(g.substitute("<span class='{iconClass}'></span>",{iconClass:this.get("iconClass")})),this.imageWrap.append(this.icon))},_bind:function(){var b=this,d;b.image.on("mouseenter",function(k){if(b.get("hasZoom")){var a=b.image.offset();b.set("imageLeft",a.left);b.set("imageTop",a.top);d=g.later(function(){b.set("currentMouse",k);b.show();var a=b.get("align");a.node||(a.node=b.image);b.setInternal("align",f);b.set("align",a);d=f},50)}}).on("mouseleave",function(){d&&(d.cancel(),d=f)});b.on("afterVisibleChange",
function(d){d.newVal?(d=b.icon)&&d.hide():(d=b.icon)&&d.show()})},_uiSetHasZoom:function(b){b?(b=this.icon)&&b.show():(b=this.icon)&&b.hide()},_uiSetImageWidth:function(b){this.image.width(b)},_uiSetImageHeight:function(b){this.image.height(b)}},{ATTRS:{imageNode:{setter:function(b){return c.one(b)}},wrapClass:{valueFn:function(){return this.get("prefixCls")+"imagezoom-wrap"}},width:{valueFn:function(){return this.get("imageWidth")}},height:{valueFn:function(){return this.get("imageHeight")}},imageWidth:{valueFn:function(){var b=
this.get("imageNode");return(b=b&&b.width())||400}},imageHeight:{valueFn:function(){var b=this.get("imageNode");return(b=b&&b.height())||400}},imageLeft:{},imageTop:{},hasZoom:{value:!0,setter:function(b){return!!b}},showIcon:{value:!0},iconClass:{valueFn:function(){return this.get("prefixCls")+"imagezoom-icon"}}}},{xclass:"imagezoom-viewer"})},{requires:["node","overlay","./zoomer"]});KISSY.add("imagezoom",function(g,c){return c},{requires:["imagezoom/base"]});
KISSY.add("imagezoom/zoomer",function(g,c,i){function h(){var a;!this.get("bigImageWidth")||this.get("bigImageHeight");if((a=this.get("bigImageSrc"))&&this.get("preload"))(new Image).src=a;this._isInner=this.get("type")===b}function f(a,b){var e=a[0];e&&e.complete&&e.clientWidth?b():e.onload=function(){setTimeout(b,100)}}var b="inner",d=Math.round,k=Math.min;h.ATTRS={type:{value:"standard"},preload:{value:!0},bigImageSrc:{valueFn:function(){var a=this.get("imageNode");if(a)return a.attr("data-ks-imagezoom")}},
bigImageWidth:{},bigImageHeight:{},currentMouse:{},lensClass:{valueFn:function(){return this.get("prefixCls")+"imagezoom-lens"}},lensHeight:{},lensWidth:{},lensTop:{},lensLeft:{}};g.augment(h,{__renderUI:function(){var a=this,b=a.get("contentEl"),e;e=a.bigImage=(new c('<img src="'+a.get("bigImageSrc")+'" />')).appendTo(b,i);a._bigImageCopy=(new c('<img src="'+a.image.attr("src")+'" width="'+a.get("bigImageWidth")+'" height="'+a.get("bigImageHeight")+'"/>')).prependTo(b,i);a._isInner?a.set("align",
{node:a.image,points:["cc","cc"]}):a.lens=(new c('<span class="'+a.get("lensClass")+'"></span>')).appendTo(a.imageWrap,i).hide();a.loading();f(e,function(){a.unloading()})},__bindUI:function(){var a=this,b=g.one("body");a.on("afterVisibleChange",function(e){e.newVal?(a._isInner&&a._anim(0.4),b.on("mousemove",a._mouseMove,a),b.on("mouseleave",a._mouseMove,a)):((e=a.lens)&&e.hide(),b.detach("mousemove",a._mouseMove,a),b.detach("mouseleave",a._mouseMove,a))})},__destructor:function(){var a=g.one("body");
a.detach("mousemove",this._mouseMove,this);a.detach("mouseleave",this._mouseMove,this)},_setLensSize:function(){var a=this.get("width"),b=this.get("height"),e=this.get("bigImageWidth"),l=this.get("bigImageHeight"),j=this.get("imageWidth"),c=this.get("imageHeight");this.set("lensWidth",k(d(j*a/e),j));this.set("lensHeight",k(d(c*b/l),c))},_setLensOffset:function(a){this._setLensSize();if(a=a||this.get("currentMouse")){var b=this.get("imageLeft"),e=this.get("imageTop"),d=this.get("imageWidth"),j=this.get("imageHeight"),
c=this.get("lensWidth"),g=this.get("lensHeight"),f=a.pageX-c/2,a=a.pageY-g/2;f<=b?f=b:f>=d+b-c&&(f=d+b-c);a<=e?a=e:a>=j+e-g&&(a=j+e-g);this.set("lensLeft",f);this.set("lensTop",a)}},_mouseMove:function(a){if("mouseleave"==a.type)this.hide();else{var b=this.get("imageLeft"),e=this.get("imageTop"),d=this.get("imageWidth"),c=this.get("imageHeight");a.pageX>b&&a.pageX<b+d&&a.pageY>e&&a.pageY<e+c?this.set("currentMouse",a):this.hide()}},_anim:function(a){var b=this.get("imageLeft"),e=this.get("imageTop"),
c=this.get("imageWidth"),f=this.get("imageHeight"),g=this.get("bigImageWidth"),h=this.get("bigImageHeight"),b=-d((this.get("lensLeft")-b)*g/c),e=-d((this.get("lensTop")-e)*h/f);this.bigImage.stop();this.bigImage.css({width:c,height:f,left:0,top:0});this._bigImageCopy.css({width:c,height:f,left:0,top:0});c+=g-c;f+=h-f;this.bigImage.animate({width:c,height:f,left:b,top:e},a);this._bigImageCopy.animate({width:c,height:f,left:b,top:e},a)},_uiSetCurrentMouse:function(a){if(a&&"pageX"in a&&this.bigImage&&
!this.bigImage.isRunning()&&this.get("hasZoom")){var b=this.lens;b&&b.show();this._setLensOffset(a);a={left:-d((this.get("lensLeft")-this.get("imageLeft"))*this.get("bigImageWidth")/this.get("imageWidth")),top:-d((this.get("lensTop")-this.get("imageTop"))*this.get("bigImageHeight")/this.get("imageHeight"))};this._bigImageCopy.css(a);this.bigImage.css(a)}},_uiSetLensWidth:function(a){this.lens&&this.lens.width(a)},_uiSetLensHeight:function(a){this.lens&&this.lens.height(a)},_uiSetLensTop:function(a){this.lens&&
this.lens.offset({top:a})},_uiSetLensLeft:function(a){this.lens&&this.lens.offset({left:a})},_uiSetBigImageWidth:function(a){a&&this.bigImage&&this.bigImage.width(a);a&&this._bigImageCopy&&this._bigImageCopy.width(a)},_uiSetBigImageHeight:function(a){a&&this.bigImage&&this.bigImage.height(a);a&&this._bigImageCopy&&this._bigImageCopy.height(a)},_uiSetBigImageSrc:function(a){a&&this.bigImage&&this.bigImage.attr("src",a)},changeImageSrc:function(a){this.image.attr("src",a);this._bigImageCopy.attr("src",
a);this._uiSetHasZoom(this.get("hasZoom"));this.loading()}});h.__imgOnLoad=f;return h},{requires:["node"]});
