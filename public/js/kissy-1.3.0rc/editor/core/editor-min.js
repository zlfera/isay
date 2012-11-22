/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Oct 9 23:22
*/
/*
 thanks to CKSource's intelligent work on CKEditor
 @author yiminghe@gmail.com
*/
KISSY.add("editor",function(f,j,v,s,M,N,B,C,D,E){function t(a,b){var c=a.body;F(function(){a.designMode="on";setTimeout(function(){a.designMode="off";c.focus();arguments.callee.retry||(arguments.callee.retry=n)},50)},function(){a.designMode="off";h.attr(c,"contentEditable",o);h.attr(c,"contentEditable",n);!b&&t(a,1)})}function G(a){a.get("iframe");var b=a.get("textarea")[0],c=a.get("window")[0],d=a.get("document")[0];e.webkit&&(g.on(d,"click",function(a){var b=new k(a.target);f.inArray(b.nodeName(),
["input","select"])&&a.preventDefault()}),g.on(d,"mouseup",function(a){var b=new k(a.target);f.inArray(b.nodeName(),["input","textarea"])&&a.preventDefault()}));if(e.gecko||p||e.opera){var i;i=(new k('<span tabindex="-1" style="position:absolute; left:-10000" role="presentation"></span>')).insertAfter(b);i.on("focus",function(){a.focus()});a.activateGecko=function(){e.gecko&&a.__iframeFocus&&i[0].focus()};a.on("destroy",function(){i.detach();i.remove()})}g.on(c,"focus",function(){e.gecko?t(d,o):e.opera&&
d.body.focus();a.notifySelectionChange()});if(e.gecko)g.on(d,"mousedown",function(){a.__iframeFocus||t(d,o)});if(p&&(g.on(d,"keydown",function(b){if(b.keyCode in{8:1,46:1}){var c=a.getSelection(),d=c.getSelectedElement();if(d){a.execCommand("save");var i=c.getRanges()[0].createBookmark();d.remove();c.selectBookmarks([i]);a.execCommand("save");b.preventDefault()}}}),"CSS1Compat"==d.compatMode)){var l={33:1,34:1};g.on(d,"keydown",function(b){b.keyCode in l&&setTimeout(function(){a.getSelection().scrollIntoView()},
0)})}if(e.webkit)g.on(d,"mousedown",function(b){b=new k(b.target);f.inArray(b.nodeName(),["img","hr","input","textarea","select"])&&a.getSelection().selectElement(b)});if(e.gecko)g.on(d,"dragstart",function(a){var b=new k(a.target);b.nodeName()==="img"&&/ke_/.test(b[0].className)&&a.preventDefault()});s.add(a)}function w(a,b,c,d){var i="",l,e=v.debugUrl("theme/editor-iframe.css");for(l=0;l<c.length;l++)i+=f.substitute('<link href="{href}" rel="stylesheet" />',{href:c[l]});return f.substitute(H,{doctype:8===
x.documentMode?'<meta http-equiv="X-UA-Compatible" content="IE=7" />':"",title:"${title}",href:e,style:b,data:d||"&nbsp;",script:a?'<script id="ke_active_script">'+(h.isCustomDomain()?'document.domain="'+x.domain+'";':"")+'parent.KISSY.Editor._initIFrame("'+a+'");<\/script>':""})}function y(a,b){function c(){e=f.document;a.setInternal("document",new k(e));a.setInternal("window",new k(f));d.detach();e.open("text/html","replace");e.write(i);e.close()}var d=a.get("iframe"),i=w(a._UUID,a.get("customStyle"),
a.get("customLink"),b),l=d[0],f=l.contentWindow,e;d.__loaded=1;try{e=f.document}catch(q){if(l.src=l.src,7>p){setTimeout(c,10);return}}c()}function I(a,b){var c=h.getEmptyIframeSrc()||"";c&&(c=' src="'+c+'" ');var c=new k(f.substitute(J,{iframeSrc:c})),d=a.get("textarea");d.hasAttr("tabindex")&&c.attr("tabIndex",e.webkit?-1:d.attr("tabIndex"));d.parent().prepend(c);a.set("iframe",c);a.__docReady=0;if(e.gecko&&!c.__loaded)c.on("load",function(){y(a,b)},a);else y(a,b)}var n=!0,u=u,z=f.all,o=!1,x=document,
e=f.UA,p=e.ie,h=f.DOM,K=h.NodeType,k=f.Node,g=f.Event,F=v.tryThese,H="<!doctype html><html><head>{doctype}<title>{title}</title><link href='{href}' rel='stylesheet' /><style>{style}</style>{links}</head><body class='ks-editor' >{data}{script}</body></html>",J='<iframe style="width:100%;height:100%;border:none;"  frameborder="0"  title="kissy-editor"  allowTransparency="true"  {iframeSrc} ></iframe>',L='<div class="{prefixCls}editor-tools"></div><div class="{prefixCls}editor-textarea-wrap" '+(e.mobile?
'style="overflow:scroll;-webkit-overflow-scrolling:touch;"':"")+"></div><div class='{prefixCls}editor-status'></div>";f.mix(j,{SOURCE_MODE:0,WYSIWYG_MODE:1});var r=j.WYSIWYG_MODE;f.augment(j,{createDom:function(){var a,b=this.get("prefixCls"),c=this.get("textarea"),d;c?(this.set("textarea",c=z(c)),c[0].parentNode&&c[0].parentNode.removeChild(c[0])):this.set("textarea",c=z("<textarea class='"+b+"-editor-textarea'></textarea>"));d=this.get("el");d.html(f.substitute(L,{prefixCls:b}));a=d.one(f.substitute(".{prefixCls}editor-textarea-wrap",
{prefixCls:b}));this._UUID=f.guid();this.set({toolBarEl:d.one(f.substitute(".{prefixCls}editor-tools",{prefixCls:b})),statusBarEl:d.one(f.substitute(".{prefixCls}editor-status",{prefixCls:b}))},{silent:1});c.css("width","100%");c.css("display","none");a.append(c);s.register(this)},renderUI:function(){B.init(this);C.init(this);D.init(this);E.init(this)},bindUI:function(){function a(){b.detach("docReady",a);if(b.get("focused"))b.focus();else{var c=b.getSelection();c&&c.removeAllRanges()}}var b=this,
c,d=b.get("prefixCls"),i=b.get("textarea");if(b.get("attachForm")&&(c=i[0].form))g.on(c,"submit",b.sync,b),b.on("destroy",function(){g.detach(c,"submit",b.sync,b)});b.on("docReady",a);b.on("blur",function(){b.get("el").removeClass(d+"editor-focused")});b.on("focus",function(){b.get("el").addClass(d+"editor-focused")})},_uiSetHeight:function(a){var b=this.get("textarea"),c=this.get("toolBarEl"),d=this.get("statusBarEl"),a=parseInt(a,10),a=a-((c&&c.outerHeight()||0)+(d&&d.outerHeight()||0));b.parent().css("height",
a);b.css("height",a)},_uiSetMode:function(a){var b=this,c,d=b.get("rendered"),i=b.get("iframe"),e=b.get("textarea");a==r?(d&&b.execCommand("save"),b.on("docReady",c=function(){d&&b.execCommand("save");b.detach("docReady",c)}),b._setData(e.val()),b.fire("wysiwygMode")):(i&&(e.val(b._getData(1,r)),i.hide()),e.show(),b.fire("sourceMode"))},_uiSetFocused:function(a){a&&this.__docReady&&this.focus()},destructor:function(){var a=this.get("document")[0],b=this.get("window");this.sync();s.remove(this);g.remove([a,
a.documentElement,a.body,b[0]]);f.each(this.__controls,function(a){a.destroy&&a.destroy()});this.__commands={};this.__controls={}},getControl:function(a){return this.__controls[a]},getControls:function(){return this.__controls},addControl:function(a,b){this.__controls[a]=b},showDialog:function(a,b){var a=a+"/dialog",c=this.__controls[a];c.show(b);this.fire("dialogShow",{dialog:c.dialog,pluginDialog:c,dialogName:a})},addCommand:function(a,b){this.__commands[a]=b},hasCommand:function(a){return this.__commands[a]},
execCommand:function(a){var b=this.__commands[a],c=f.makeArray(arguments);c.shift();c.unshift(this);if(b)return b.exec.apply(b,c)},queryCommandValue:function(a){return this.execCommand(v.getQueryCmd(a))},_getData:function(a,b){var c=this.htmlDataProcessor,d;b==u&&(b=this.get("mode"));d=b==r?this.get("document")[0].body.innerHTML:c.toDataFormat(this.get("textarea").val());d=a?c.toHtml(d):c.toServer(d);d=f.trim(d);/^(?:<(p)>)?(?:(?:&nbsp;)|\s)*(?:<\/\1>)?$/.test(d)&&(d="");return d},_setData:function(a){var b,
c=a;if(this.get("mode")!=r)this.get("textarea").val(a);else{if(b=this.htmlDataProcessor)c=b.toDataFormat(a);if(this.get("iframe")){a=this.get("iframe");b=this.get("window")[0];var d=this.get("document")[0];g.remove([d,d.documentElement,d.body,b]);a.remove()}I(this,c)}},sync:function(){this.get("textarea").val(this.get("data"))},getDocHtml:function(){return w(0,this.get("customStyle"),this.get("customLink"),this.get("formatData"))},getSelection:function(){return j.Selection.getSelection(this.get("document")[0])},
focus:function(){var a=this.get("window");if(a){var b=this.get("document")[0],a=a[0];e.ie||a&&a.parent&&a.parent.focus();a&&a.focus();try{b.body.focus()}catch(c){}this.notifySelectionChange()}},blur:function(){this.get("window")[0].blur();this.get("document")[0].body.blur()},addCustomStyle:function(a,b){var c=this.get("customStyle")||"",c=c+("\n"+a);this.set("customStyle",c);h.addStyleSheet(this.get("window"),c,b)},removeCustomStyle:function(a){h.remove(h.get("#"+a,this.get("window")[0]))},addCustomLink:function(a){var b=
this.get("customLink")||[],c=this.get("document")[0];b.push(a);this.set("customLink",b);b=c.createElement("link");b.rel="stylesheet";c.getElementsByTagName("head")[0].appendChild(b);b.href=a},removeCustomLink:function(a){for(var b=this.get("document")[0],b=h.query("link",b),c=0;c<b.length;c++)h.attr(b[c],"href")==a&&h.remove(b[c]);b=this.get("customLink")||[];a=f.indexOf(a,b);-1!=a&&b.splice(a,1)},docReady:function(a){this.on("docReady",a);this.__docReady&&a.call(this)},checkSelectionChange:function(){var a=
this;a.__checkSelectionChangeId&&clearTimeout(a.__checkSelectionChangeId);a.__checkSelectionChangeId=setTimeout(function(){var b=a.getSelection();if(b&&!b.isInvalid){var c=b.getStartElement(),d=new j.ElementPath(c);if(!a.__previousPath||!a.__previousPath.compare(d))a.__previousPath=d,a.fire("selectionChange",{selection:b,path:d,element:c})}},100)},notifySelectionChange:function(){this.__previousPath=null;this.checkSelectionChange()},insertElement:function(a){if(this.get("mode")===r){this.focus();
var b,c=a.nodeName(),d=j.XHTML_DTD,e=d.$block[c],f=j.RANGE,h=(c=this.getSelection())&&c.getRanges(),g,q,m;if(h&&0!=h.length){this.execCommand("save");for(q=h.length-1;0<=q;q--)g=h[q],b=!q&&a||a.clone(n),g.insertNodeByDtd(b),m||(m=b);if(m)return g.moveToPosition(m,f.POSITION_AFTER_END),e&&(a=j.Walker.whitespaces(!0),(a=(m=m.next(a,1))&&m[0].nodeType==K.ELEMENT_NODE&&m.nodeName())&&d.$block[a]&&d[a]["#text"]&&g.moveToElementEditablePosition(m)),c.selectRanges([g]),this.focus(),b&&1==b[0].nodeType&&
b.scrollIntoView(u,!1),A.call(this),b}}},insertHtml:function(a,b){var c=this,d,e=c.get("document")[0];if(c.get("mode")===r){if(d=c.htmlDataProcessor)a=d.toDataFormat(a,b);c.focus();c.execCommand("save");if(p){d=e.selection;"Control"==d.type&&d.clear();try{d.createRange().pasteHTML(a)}catch(f){}}else try{e.execCommand("inserthtml",o,a)}catch(g){setTimeout(function(){if(0==c.getSelection().getRanges().length){var b=new j.Range(e),d=h.first(e.body,function(a){return 1==a.nodeType&&"br"!=h.nodeName(a)});
d||(d=new k(e.createElement("p")),d._4e_appendBogus(u),e.body.appendChild(d[0]));b.setStartAt(d,j.RANGE.POSITION_AFTER_START);b.select()}e.execCommand("inserthtml",o,a)},50)}setTimeout(function(){c.getSelection().scrollIntoView()},50);A.call(c)}}});j._initIFrame=function(a){var b=s.getInstance(a),c=b.get("document")[0],a=c.getElementById("ke_active_script");h.remove(a);G(b);var d=c.body;p?(d.hideFocus=n,d.disabled=n,d.contentEditable=n,d.removeAttribute("disabled")):setTimeout(function(){e.gecko||
e.opera?d.contentEditable=n:e.webkit?d.parentNode.contentEditable=n:c.designMode="on"},0);if(e.gecko||e.opera){var f=c.documentElement;g.on(f,"mousedown",function(a){if(a.target==f){e.gecko&&t(c,o);b.activateGecko()}})}setTimeout(function(){p&&setTimeout(function(){if(c){d.runtimeStyle.marginBottom="0px";d.runtimeStyle.marginBottom=""}},1E3)},0);setTimeout(function(){b.__docReady=1;b.fire("docReady");var a=b.get("disableObjectResizing"),e=b.get("disableInlineTableEditing");if(a||e)try{c.execCommand("enableObjectResizing",
o,!a);c.execCommand("enableInlineTableEditing",o,!e)}catch(f){g.on(d,p?"resizestart":"resize",function(b){var c=new k(b.target);(a||c.nodeName()==="table"&&e)&&b.preventDefault()})}},10)};var A=f.buffer(function(){this.execCommand("save")},50);return j},{requires:"editor/core/base,editor/core/utils,editor/core/focusManager,editor/core/styles,editor/core/zIndexManager,editor/core/clipboard,editor/core/enterKey,editor/core/htmlDataProcessor,editor/core/selectionFix".split(",")});
