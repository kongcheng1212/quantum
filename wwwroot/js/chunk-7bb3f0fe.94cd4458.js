(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb3f0fe"],{"485a":function(e,t,n){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100%"}},[t("Breadcrumb",{staticClass:"breadcrumb"},[t("Breadcrumb-Item",[e._v("青龙脚本文件编辑")]),t("Breadcrumb-Item",[t("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.changeSelectQL},model:{value:e.SelectQLId,callback:function(t){e.SelectQLId=t},expression:"SelectQLId"}},e._l(e.QLPanels,(function(n){return t("Option",{key:n.value,attrs:{value:n.Id}},[e._v(e._s(n.Name))])})),1)],1),t("Breadcrumb-Item",[t("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.getFile},model:{value:e.FileName,callback:function(t){e.FileName=t},expression:"FileName"}},e._l(e.Files,(function(n){return t("Option",{key:n.value,attrs:{value:n.value}},[n.children?t("Icon",{attrs:{color:"#989898",size:"18",type:"md-folder"}}):e._e(),e._v(e._s(n.title)+"\n        ")],1)})),1)],1),e.ChildrenFiles&&e.ChildrenFiles.length>0?t("Breadcrumb-Item",[t("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.getChildrenFile},model:{value:e.ChildrenFileName,callback:function(t){e.ChildrenFileName=t},expression:"ChildrenFileName"}},e._l(e.ChildrenFiles,(function(n){return t("Option",{key:n.value,attrs:{value:n.value}},[e._v(e._s(n.title))])})),1)],1):e._e()],1),t("monaco-editor",{staticClass:"editor",attrs:{language:e.getLanguage,readOnly:!1,editorMounted:e.onEditorMounted},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),t("footer",[t("div",{staticStyle:{float:"left"}},[t("div",{staticStyle:{float:"left","margin-right":"10px"}},[e._v("\n        容器同步\n        "),t("Checkbox",{on:{"on-change":e.SelectAllQLChange},model:{value:e.SelectAllQL,callback:function(t){e.SelectAllQL=t},expression:"SelectAllQL"}},[e._v("\n          全选\n        ")])],1),e._l(e.QLPanels,(function(n){return t("div",{key:n.Id,staticStyle:{float:"left","margin-right":"10px"}},[t("Checkbox",{model:{value:n.Enable,callback:function(t){e.$set(n,"Enable",t)},expression:"data.Enable"}},[e._v("\n          "+e._s(n.Name)+"\n        ")])],1)}))],2),t("Button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:e.saveFile}},[e._v("保存")])],1)],1)},l=[],a=(n("28a5"),n("ad8c")),s=n("66df"),c=function(e){return s["a"].request({url:"/api/QLScripts/"+e,method:"get"})},r=function(e,t,n){return s["a"].request({url:"/api/QLScripts/".concat(e,"/").concat(t,"?path=").concat(n),method:"get"})},o=function(e){return s["a"].request({url:"/api/QLScripts/save",data:e,method:"post"})},u=n("2b77"),h={name:"qinglong-scripts",data:function(){return{content:"",SelectAllQL:!0,QLPanels:[],Files:[],SelectQLId:null,Languages:{".py":"python",".js":"javascript",".json":"json",".sh":"shell",".ts":"typescript"},ChildrenFiles:[],ChildrenFileName:"",ModalEdit:!1,FileName:""}},model:{event:"save-success"},computed:{getLanguage:function(){if(this.ChildrenFileName){var e=this.ChildrenFileName.split(".");return this.Languages["."+e[e.length-1]]}if(this.FileName){e=this.FileName.split(".");return this.Languages["."+e[e.length-1]]}return"javascript"}},components:{MonacoEditor:u["a"]},loadQLPanels:function(){var e=this;Object(a["c"])().then((function(t){e.QLPanels=t}))},methods:{getQLPanels:function(){var e=this;Object(a["c"])().then((function(t){e.QLPanels=t,e.SelectQLId=t[0].Id,e.getFiles()}))},SelectAllQLChange:function(){this.updateCheckQLs(this.SelectAllQL)},getFiles:function(){var e=this,t=this;c(this.SelectQLId).then((function(n){!n||n.length<1||(t.Files=n.filter((function(e){return!e.disabled||e.children&&e.children.length>0})),e.ModalEdit||(t.FileName=t.Files[0].value,e.getFile()))}))},showChild:function(e){var t=this;this.ChildrenFiles=[],this.ChildrenFileName="";var n=this.Files.filter((function(e){return e.key==t.FileName}));if(n.length>0&&n[0].children&&n[0].children.length>0)return this.ChildrenFiles=n[0].children,this.ChildrenFileName=e||this.ChildrenFiles[0].value,void this.getChildrenFile()},clearChild:function(){this.ChildrenFileName="",this.FileName="",this.ChildrenFiles=[],this.getFiles()},getFile:function(){var e=this;this.ModalEdit||this.showChild(),this.FileName&&!this.ChildrenFileName&&r(this.SelectQLId,this.FileName,"").then((function(t){e.content=t}))},getChildrenFile:function(){var e=this;r(this.SelectQLId,this.ChildrenFileName,this.FileName).then((function(t){e.content=t}))},changeSelectQL:function(){this.updateCheckQLs(),this.getFiles()},updateCheckQLs:function(){for(var e=0;e<this.QLPanels.length;e++)this.QLPanels[e].Enable=this.SelectAllQL?this.SelectAllQL:this.SelectQLId==this.QLPanels[e].Id},saveFile:function(){for(var e=this,t=[],n=0;n<this.QLPanels.length;n++)this.QLPanels[n].Enable&&t.push(this.QLPanels[n].Id);var i={name:this.FileName,content:this.content,path:"",QLIds:t};this.ChildrenFileName&&(i.name=this.ChildrenFileName,i.path=this.FileName);e=this;this.$Modal.confirm({title:"脚本编辑确认",content:"确认保存修改的脚本内容，并同步到多个容器中？",okText:"确定",cancelText:"取消",closable:!0,onOk:function(){o(i).then((function(t){e.$Notice.success({desc:"修改青龙脚本文件成功"}),e.$emit("save-success")})).catch((function(t){e.$Notice.error({title:"保存青龙脚本文件失败",desc:t})}))}})},onEditorMounted:function(e,t){window.editor=e,window.monaco=t}},mounted:function(){this.getQLPanels()}},d=h,f=(n("ce7b"),n("2877")),m=Object(f["a"])(d,i,l,!1,null,"82c9c768",null);t["a"]=m.exports},9176:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("qinglong-scripts",{attrs:{SelectFileName:e.SelectFileName}})},l=[],a=n("485a"),s={data:function(){return{SelectFileName:""}},computed:{},components:{QinglongScripts:a["a"]},mounted:function(){}},c=s,r=n("2877"),o=Object(r["a"])(c,i,l,!1,null,null,null);t["default"]=o.exports},ad8c:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o}));var i=n("66df"),l=function(){return i["a"].request({url:"/api/QLPanel",method:"get"})},a=function(e){return i["a"].request({url:"/api/QLPanel/Page",params:e,method:"get"})},s=function(e){return i["a"].request({url:"/api/QLPanel",data:e,method:"post"})},c=function(e){return i["a"].request({url:"/api/QLPanel/"+e,method:"delete"})},r=function(){return i["a"].request({url:"/api/QLPanel/RefreshToken",method:"get"})},o=function(){return i["a"].request({url:"/api/QLPanel/RefreshLogin",method:"get"})}},ce7b:function(e,t,n){"use strict";n("f761")},f761:function(e,t,n){}}]);