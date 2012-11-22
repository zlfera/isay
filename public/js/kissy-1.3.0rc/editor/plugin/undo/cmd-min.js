/*
Copyright 2012, KISSY UI Library v1.30rc
MIT Licensed
build time: Oct 9 23:22
*/
KISSY.add("editor/plugin/undo/cmd",function(f,g){function h(a){var c=a.get("document")[0].body.innerHTML,b;c&&(b=a.getSelection());this.contents=c;this.bookmarks=b&&b.createBookmarks2(!0)}function i(a){this.history=[];this.index=-1;this.editor=a;this.bufferRunner=f.buffer(this.save,500,this);this._init()}var j=g.Utils.arrayCompare,k=f.UA;f.augment(h,{equals:function(a){if(this.contents!=a.contents)return!1;var c=this.bookmarks,a=a.bookmarks;if(c||a){if(!c||!a||c.length!=a.length)return!1;for(var b=
0;b<c.length;b++){var d=c[b],e=a[b];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!j(d.start,e.start)||!j(d.end,e.end))return!1}}return!0}});var l={16:1,17:1,18:1},m={37:1,38:1,39:1,40:1,33:1,34:1};f.augment(i,{_keyMonitor:function(){var a=this,c=a.editor;c.docReady(function(){c.get("document").on("keydown",function(b){var d=b.keyCode;d in m||d in l||(90===d&&(b.ctrlKey||b.metaKey)?(!1!==c.fire("beforeRedo")&&a.restore(-1),b.halt()):89===d&&(b.ctrlKey||b.metaKey)?(!1!==c.fire("beforeUndo")&&
a.restore(1),b.halt()):!1!==c.fire("beforeSave",{buffer:1})&&a.save(1))})})},_init:function(){var a=this;a._keyMonitor();setTimeout(function(){a.save()},0)},save:function(a){var c=this.editor;if(c.get("mode")==g.WYSIWYG_MODE&&c.get("document"))if(a)this.bufferRunner();else{var a=this.history,b=this.index;a.length>b+1&&a.splice(b+1,a.length-b-1);var b=a[a.length-1],d=new h(c);if(!b||!b.equals(d))30===a.length&&a.shift(),a.push(d),this.index=b=a.length-1,c.fire("afterSave",{history:a,index:b})}},restore:function(a){if(this.editor.get("mode")==
g.WYSIWYG_MODE){var c=this.history,b=this.editor,d=b.get("document")[0].body,e=c[this.index+a];e&&(d.innerHTML=e.contents,e.bookmarks?b.getSelection().selectBookmarks(e.bookmarks):k.ie&&(d=d.createTextRange(),d.collapse(!0),d.select()),(d=b.getSelection())&&d.scrollIntoView(),this.index+=a,b.fire(0<a?"afterUndo":"afterRedo",{history:c,index:this.index}),b.notifySelectionChange());return e}}});return{init:function(a){if(!a.hasCommand("save")){var c=new i(a);a.addCommand("save",{exec:function(b,d){a.focus();
c.save(d)}});a.addCommand("undo",{exec:function(){a.focus();c.restore(-1)}});a.addCommand("redo",{exec:function(){a.focus();c.restore(1)}})}}}},{requires:["editor"]});
