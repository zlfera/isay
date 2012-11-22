/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Oct 9 23:22
*/
KISSY.add("editor/core/styles",function(p,v){function S(a){return!r.attr(a,"_ke_bookmark")}function J(a,e){for(var b in a)a.hasOwnProperty(b)&&(p.isString(a[b])?a[b]=a[b].replace(T,function(b,a){return e[a]}):J(a[b],e))}function B(a,e){e&&(a=p.clone(a),J(a,e));var b=this.element=this.element=(a.element||"*").toLowerCase();this.type=this.type="#text"==b||U[b]?n.STYLE_BLOCK:K[b]?n.STYLE_OBJECT:n.STYLE_INLINE;this._={definition:a}}function L(a,e){var b=e?this.removeFromRange:this.applyToRange;a.body.focus();
for(var d=new V(a),c=d.getRanges(),f=0;f<c.length;f++)b.call(this,c[f]);d.selectRanges(c)}function E(a,e,b){var d=a.element;"*"==d&&(d="span");e=new w(e.createElement(d));b&&b._4e_copyAttributes(e);b=a._.definition;a=b.attributes;b=B.getStyleText(b);if(a)for(var c in a)a.hasOwnProperty(c)&&e.attr(c,a[c]);b&&(e[0].style.cssText=b);return e}function W(a){var e=a.createBookmark(k),b=a.createIterator();b.enforceRealBlocks=k;b.enlargeBr=k;for(var d,c=a.document;d=b.getNextParagraph();){var f=E(this,c,
d),g=f,f="pre"==g.nodeName,h="pre"==d.nodeName,i=!f&&h;f&&!h?(h=d,i=h.html(),i=y(i,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,""),i=i.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1"),i=i.replace(/([ \t\n\r]+|&nbsp;)/g," "),i=i.replace(/<br\b[^>]*>/gi,"\n"),F.ie?(h=h[0].ownerDocument.createElement("div"),h.appendChild(g[0]),g[0].outerHTML="<pre>"+i+"</pre>",g=new w(h.firstChild),g._4e_remove()):g.html(i)):i?g=X(Y(d),g):d._4e_moveChildren(g);d[0].parentNode.replaceChild(g[0],d[0]);if(f&&(d=g,f=void 0,(f=d._4e_previousSourceNode(k,
r.NodeType.ELEMENT_NODE))&&"pre"==f.nodeName()))g=y(f.html(),/\n$/,"")+"\n\n"+y(d.html(),/^\n/,""),F.ie?d[0].outerHTML="<pre>"+g+"</pre>":d.html(g),f._4e_remove()}a.moveToBookmark(e)}function y(a,e,b){var d="",c="",a=a.replace(/(^<span[^>]+_ke_bookmark.*?\/span>)|(<span[^>]+_ke_bookmark.*?\/span>$)/gi,function(b,a,e){a&&(d=a);e&&(c=e);return""});return d+a.replace(e,b)+c}function Y(a){var e=[];y(a._4e_outerHtml(),/(\S\s*)\n(?:\s|(<span[^>]+_ck_bookmark.*?\/span>))*\n(?!$)/gi,function(b,a,c){return a+
"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(b,a){e.push(a)});return e}function X(a,e){for(var b=e[0].ownerDocument.createDocumentFragment(),d=0;d<a.length;d++){var c=a[d],c=c.replace(/(\r\n|\r)/g,"\n"),c=y(c,/^[ \t]*\n/,""),c=y(c,/\n$/,""),c=y(c,/^[ \t]+|[ \t]+$/g,function(a,b){return 1==a.length?"&nbsp;":b?" "+Array(a.length).join("&nbsp;"):Array(a.length).join("&nbsp;")+" "}),c=c.replace(/\n/g,"<br>"),c=c.replace(/[ \t]{2,}/g,function(a){return Array(a.length).join("&nbsp;")+
" "}),f=e.clone();f.html(c);b.appendChild(f[0])}return b}function Z(a){var e=a.document;if(a.collapsed)e=E(this,e,void 0),a.insertNode(e),a.moveToPosition(e,z.POSITION_BEFORE_END);else{var b=this.element,d=this._.definition,c,f=C[b];f||(c=k,f=C.span);var g=a.createBookmark();a.enlarge(z.ENLARGE_ELEMENT);a.trim();for(var h=a.createBookmark(),i=h.startNode,h=h.endNode,j=i,s;j&&j[0];){var l=u;if(r.equals(j,h))j=t,l=k;else{var q=j[0].nodeType,n=q==r.NodeType.ELEMENT_NODE?j.nodeName():t;if(n&&j.attr("_ke_bookmark")){j=
j._4e_nextSourceNode(k);continue}if(!n||f[n]&&(j._4e_position(h)|o.POSITION_PRECEDING|o.POSITION_IDENTICAL|o.POSITION_IS_CONTAINED)==o.POSITION_PRECEDING+o.POSITION_IDENTICAL+o.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(j))){var m=j.parent();if(m&&"a"==b&&m.nodeName()==b)q=E(this,e,void 0),m._4e_moveChildren(q),m[0].parentNode.replaceChild(q[0],m[0]),q._4e_mergeSiblings();else if(m&&m[0]&&((C[m.nodeName()]||C.span)[b]||c)&&(!d.parentRule||d.parentRule(m))){if(!s&&(!n||!C.$removeEmpty[n]||(j._4e_position(h)|
o.POSITION_PRECEDING|o.POSITION_IDENTICAL|o.POSITION_IS_CONTAINED)==o.POSITION_PRECEDING+o.POSITION_IDENTICAL+o.POSITION_IS_CONTAINED))s=new $(e),s.setStartBefore(j);if(q==r.NodeType.TEXT_NODE||q==r.NodeType.ELEMENT_NODE&&!j[0].childNodes.length){m=j;for(q=null;(l=!m.next(S,1))&&(q=m.parent())&&f[q.nodeName()]&&(q._4e_position(i)|o.POSITION_FOLLOWING|o.POSITION_IDENTICAL|o.POSITION_IS_CONTAINED)==o.POSITION_FOLLOWING+o.POSITION_IDENTICAL+o.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(q));)m=
q;s.setEndAfter(m)}}else l=k}else l=k;j=j._4e_nextSourceNode()}if(l&&s&&!s.collapsed){for(var l=E(this,e,void 0),m=s.getCommonAncestor(),q={},n={},A,x=null,p;l&&m&&l[0]&&m[0];){if(m.nodeName()==b){for(A in d.attributes)if(d.attributes.hasOwnProperty(A)&&!n[A]&&(p=m.attr(x)))l.attr(A)==p?l.removeAttr(A):n[A]=1;for(x in d.styles)if(d.styles.hasOwnProperty(x)&&!q[x]&&(p=m.style(x)))l.style(x)==p?l.style(x,""):q[x]=1;if(!l._4e_hasAttributes()){l=t;break}}m=m.parent()}l?(l[0].appendChild(s.extractContents()),
M(this,l),s.insertNode(l),l._4e_mergeSiblings(),F.ie||l[0].normalize()):(l=new w(e.createElement("span")),l[0].appendChild(s.extractContents()),s.insertNode(l),M(this,l),l._4e_remove(!0));s=t}}i._4e_remove();h._4e_remove();a.moveToBookmark(g);a.shrink(z.SHRINK_TEXT)}}function aa(a){a.enlarge(z.ENLARGE_ELEMENT);var e=a.createBookmark(),b=e.startNode;if(a.collapsed){for(var d=new G(b.parent()),c,f=0,g;f<d.elements.length&&(g=d.elements[f])&&!(g==d.block||g==d.blockLimit);f++)if(this.checkElementRemovable(g)){var h=
a.checkBoundaryOfElement(g,z.END),i=!h&&a.checkBoundaryOfElement(g,z.START);i||h?(c=g,c.match=i?"start":"end"):(g._4e_mergeSiblings(),g.nodeName()!=this.element?(h=D(this),H(g,h[g.nodeName()]||h["*"])):I(this,g))}if(c){g=b;for(f=0;;f++){h=d.elements[f];if(h.equals(c))break;else if(h.match)continue;else h=h.clone();h[0].appendChild(g[0]);g=h}g["start"==c.match?"insertBefore":"insertAfter"](c);d=c.html();!d||"​"==d?c.remove():F.webkit&&ba(a.document.createTextNode("​")).insertBefore(g)}}else{var j=
e.endNode,k=this;c=function(){for(var a=new G(b.parent()),c=new G(j.parent()),d=t,e=t,f=0;f<a.elements.length;f++){var g=a.elements[f];if(g==a.block||g==a.blockLimit)break;k.checkElementRemovable(g)&&(d=g)}for(f=0;f<c.elements.length;f++){g=c.elements[f];if(g==c.block||g==c.blockLimit)break;k.checkElementRemovable(g)&&(e=g)}e&&j._4e_breakParent(e);d&&b._4e_breakParent(d)};c();for(d=new w(b[0].nextSibling);d[0]!==j[0];){f=d._4e_nextSourceNode();if(d[0]&&d[0].nodeType==r.NodeType.ELEMENT_NODE&&this.checkElementRemovable(d)&&
(d.nodeName()==this.element?I(this,d):(g=D(this),H(d,g[d.nodeName()]||g["*"])),f[0].nodeType==r.NodeType.ELEMENT_NODE&&f.contains(b)))c(),f=new w(b[0].nextSibling);d=f}}a.moveToBookmark(e)}function N(a){var e={};(""+a).replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,d,c){e[d]=c});return e}function O(a,e){var b="";e!==u?(b=document.createElement("span"),b.style.cssText=a,b=b.style.cssText||""):b=a;return b.replace(/\s*([;:])\s*/,"$1").replace(/([^\s;])$/,"$1;").replace(/,\s+/g,
",").toLowerCase()}function D(a){if(a._.overrides)return a._.overrides;var e=a._.overrides={},b=a._.definition.overrides;if(b){p.isArray(b)||(b=[b]);for(var d=0;d<b.length;d++){var c=b[d],f,g,h;"string"==typeof c?f=c.toLowerCase():(f=c.element?c.element.toLowerCase():a.element,g=c.attributes,h=c.styles);c=e[f]||(e[f]={});if(g){f=c.attributes=c.attributes||[];for(var i in g)g.hasOwnProperty(i)&&f.push([i.toLowerCase(),g[i]])}if(h){var c=c.styles=c.styles||[],j;for(j in h)h.hasOwnProperty(j)&&c.push([j.toLowerCase(),
h[j]])}}}return e}function I(a,e){var b=a._.definition,d=D(a),c=p.merge(b.attributes,(d[e.nodeName()]||d["*"]||{}).attributes),b=p.merge(b.styles,(d[e.nodeName()]||d["*"]||{}).styles),d=p.isEmptyObject(c)&&p.isEmptyObject(b),f;for(f in c)if(c.hasOwnProperty(f)&&!(("class"==f||a._.definition.fullMatch)&&e.attr(f)!=P(f,c[f])))d=d||!!e.hasAttr(f),e.removeAttr(f);for(var g in b)b.hasOwnProperty(g)&&!(a._.definition.fullMatch&&e.style(g)!=P(g,b[g],k))&&(d=d||!!e.style(g),e.style(g,""));Q(e)}function P(a,
e,b){var d=new w("<span>");d[b?"style":"attr"](a,e);return d[b?"style":"attr"](a)}function M(a,e){for(var b=D(a),d=e.all(a.element),c=d.length;0<=--c;)I(a,new w(d[c]));for(var f in b)if(b.hasOwnProperty(f)&&f!=a.element){d=e.all(f);for(c=d.length-1;0<=c;c--){var g=new w(d[c]);H(g,b[f])}}}function H(a,e){var b,d=e&&e.attributes;if(d)for(b=0;b<d.length;b++){var c=d[b][0],f;if(f=a.attr(c)){var g=d[b][1];(g===t||g.test&&g.test(f)||"string"==typeof g&&f==g)&&a[0].removeAttribute(c)}}if(d=e&&e.styles)for(b=
0;b<d.length;b++)if(c=d[b][0],g=a.css(c)){var h=d[b][1];(h===t||h.test&&h.test(f)||"string"==typeof h&&g==h)&&a.css(c,"")}Q(a)}function Q(a){if(!a._4e_hasAttributes()){var e=a[0].firstChild,b=a[0].lastChild;a._4e_remove(k);e&&(e.nodeType==r.NodeType.ELEMENT_NODE&&r._4e_mergeSiblings(e),b&&e!=b&&b.nodeType==r.NodeType.ELEMENT_NODE&&r._4e_mergeSiblings(b))}}var k=!0,u=!1,t=null,ba=p.all,r=p.DOM,n={STYLE_BLOCK:1,STYLE_INLINE:2,STYLE_OBJECT:3},z=v.RANGE,V=v.Selection,o=v.POSITION,$=v.Range,w=p.Node,F=
p.UA,G=v.ElementPath,U={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1},C=v.XHTML_DTD,K={embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1},R=/\s*(?:;\s*|$)/g,T=/#\((.+?)\)/g;v.STYLE=n;B.prototype={apply:function(a){L.call(this,a,u)},remove:function(a){L.call(this,a,k)},applyToRange:function(a){return(this.applyToRange=this.type==n.STYLE_INLINE?Z:this.type==n.STYLE_BLOCK?W:t).call(this,a)},removeFromRange:function(a){return(this.removeFromRange=this.type==
n.STYLE_INLINE?aa:t).call(this,a)},checkElementRemovable:function(a,e){if(!a)return u;var b=this._.definition,d;if(a.nodeName()==this.element){if(!e&&!a._4e_hasAttributes())return k;var c=b._AC;if(c)b=c;else{var c={},f=0,g=b.attributes;if(g)for(var h in g)g.hasOwnProperty(h)&&(f++,c[h]=g[h]);if(g=B.getStyleText(b))c.style||f++,c.style=g;c._length=f;b=b._AC=c}if(b._length){for(var i in b)if("_length"!=i&&b.hasOwnProperty(i)){f=a.attr(i)||"";if("style"==i)a:{c=b[i];f=O(f,u);"string"==typeof c&&(c=N(c));
"string"==typeof f&&(f=N(f));g=void 0;for(g in c)if(c.hasOwnProperty(g)&&!(g in f&&(f[g]==c[g]||"inherit"==c[g]||"inherit"==f[g]))){c=u;break a}c=k}else c=b[i]==f;if(c){if(!e)return k}else if(e)return u}if(e)return k}else return k}i=D(this);if(i=i[a.nodeName()]||i["*"]){if(!(b=i.attributes)&&!(d=i.styles))return k;if(b)for(c=0;c<b.length;c++)if(i=b[c][0],i=a.attr(i))if(f=b[c][1],f===t||"string"==typeof f&&i==f||f.test&&f.test(i))return k;if(d)for(c=0;c<d.length;c++)if(i=a.css(d[c][0]))if(b=d[c][1],
b===t||"string"==typeof b&&i==b||b.test&&b.test(i))return k}return u},checkActive:function(a){switch(this.type){case n.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,k);case n.STYLE_OBJECT:case n.STYLE_INLINE:for(var e=a.elements,b=0,d;b<e.length;b++)if(d=e[b],!(this.type==n.STYLE_INLINE&&(r.equals(d,a.block)||r.equals(d,a.blockLimit))))if((this.type!=n.STYLE_OBJECT||d.nodeName()in K)&&this.checkElementRemovable(d,k))return k}return u}};B.getStyleText=function(a){var e=a._ST;
if(e)return e;var e=a.styles,b=a.attributes&&a.attributes.style||"",d="";b.length&&(b=b.replace(R,";"));for(var c in e)if(e.hasOwnProperty(c)){var f=e[c],g=(c+":"+f).replace(R,";");"inherit"==f?d+=g:b+=g}b.length&&(b=O(b));return a._ST=b+d};return v.Style=B},{requires:["./base","./range","./selection","./domIterator","./elementPath"]});