(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-082311a7"],{"17e8":function(e,t,a){},"4aa8":function(e,t,a){"use strict";a("17e8")},a481:function(e,t,a){"use strict";var n=a("cb7c"),l=a("4bf8"),r=a("9def"),i=a("4588"),o=a("0390"),s=a("5f1b"),d=Math.max,u=Math.min,c=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,m){return[function(n,l){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,l):a.call(String(r),n,l)},function(e,t){var l=m(a,e,this,t);if(l.done)return l.value;var c=n(e),p=String(this),h="function"===typeof t;h||(t=String(t));var v=c.global;if(v){var Q=c.unicode;c.lastIndex=0}var E=[];while(1){var g=s(c,p);if(null===g)break;if(E.push(g),!v)break;var L=String(g[0]);""===L&&(c.lastIndex=o(p,r(c.lastIndex),Q))}for(var M="",b=0,y=0;y<E.length;y++){g=E[y];for(var D=String(g[0]),k=d(u(i(g.index),p.length),0),I=[],w=1;w<g.length;w++)I.push(f(g[w]));var x=g.groups;if(h){var S=[D].concat(I,k,p);void 0!==x&&S.push(x);var C=String(t.apply(void 0,S))}else C=P(D,p,k,I,x,t);k>=b&&(M+=p.slice(b,k)+C,b=k+D.length)}return M+p.slice(b)}];function P(e,t,n,r,i,o){var s=n+e.length,d=r.length,u=h;return void 0!==i&&(i=l(i),u=p),a.call(o,u,(function(a,l){var o;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":o=i[l.slice(1,-1)];break;default:var u=+l;if(0===u)return a;if(u>d){var p=c(u/10);return 0===p?a:p<=d?void 0===r[p-1]?l.charAt(1):r[p-1]+l.charAt(1):a}o=r[u-1]}return void 0===o?"":o}))}}))},ad8c:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return d}));var n=a("66df"),l=function(){return n["a"].request({url:"/api/QLPanel",method:"get"})},r=function(e){return n["a"].request({url:"/api/QLPanel/Page",params:e,method:"get"})},i=function(e){return n["a"].request({url:"/api/QLPanel",data:e,method:"post"})},o=function(e){return n["a"].request({url:"/api/QLPanel/"+e,method:"delete"})},s=function(){return n["a"].request({url:"/api/QLPanel/RefreshToken",method:"get"})},d=function(){return n["a"].request({url:"/api/QLPanel/RefreshLogin",method:"get"})}},b8ad:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("Form",{attrs:{"label-width":80},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.loadQLPanels(1))}}},[t("Row",[t("Col",{attrs:{span:"4"}},[t("FormItem",{attrs:{label:"搜索"}},[t("Input",{attrs:{placeholder:"输入搜索关键字"},model:{value:e.QueryForm.KeyWorkd,callback:function(t){e.$set(e.QueryForm,"KeyWorkd",t)},expression:"QueryForm.KeyWorkd"}})],1)],1),t("Col",{attrs:{span:"4"}},[t("FormItem",{attrs:{label:"启用状态"}},[t("Select",{attrs:{clearable:""},model:{value:e.QueryForm.Enable,callback:function(t){e.$set(e.QueryForm,"Enable",t)},expression:"QueryForm.Enable"}},[t("Option",{attrs:{value:"true"}},[e._v("启用")]),t("Option",{attrs:{value:"false"}},[e._v("禁用")])],1)],1)],1),e._v("\n       \n      "),t("Button",{attrs:{type:"info"},on:{click:function(t){return e.loadQLPanels(1)}}},[t("Icon",{attrs:{type:"md-search"}}),e._v(" 搜索\n      ")],1)],1)],1),t("div",{staticStyle:{margin:"20px 0"}},[t("Button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.editQLPanel(-1)}}},[t("Icon",{attrs:{type:"md-add"}}),e._v(" 添加\n    ")],1),e._v(" \n    "),t("Button",{attrs:{type:"warning",size:"small"},on:{click:e.refreshToken}},[t("Icon",{attrs:{type:"md-refresh"}}),e._v("刷新Token\n    ")],1),e._v(" \n    "),t("Button",{attrs:{type:"warning",size:"small"},on:{click:e.refreshLogin}},[t("Icon",{attrs:{type:"md-refresh"}}),e._v(" 刷新登录状态\n    ")],1)],1),t("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:e.QLPanelColumns,data:e.QLPanelData}}),t("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[t("div",{staticStyle:{float:"right"}},[t("Page",{attrs:{total:e.PageInfo.Total,current:e.QueryForm.PageIndex,"page-size":e.QueryForm.PageSize,"show-sizer":!0,"show-total":!0,"page-size-opts":e.PageInfo.PageSizeOpts},on:{"on-page-size-change":e.pageSizeChange,"on-change":e.loadQLPanels}})],1)]),t("Modal",{attrs:{"mask-closable":!1,title:e.EditQLPanelModel.Title,width:700},model:{value:e.EditQLPanelModel.Show,callback:function(t){e.$set(e.EditQLPanelModel,"Show",t)},expression:"EditQLPanelModel.Show"}},[t("Form",{ref:"EditQLPanelForm",attrs:{model:e.EditQLPanelModel.Data,rules:e.ruleValidate,"label-width":100}},[t("FormItem",{attrs:{label:"面板名称",prop:"Name"}},[t("Input",{attrs:{placeholder:"输入青龙面板名称"},model:{value:e.EditQLPanelModel.Data.Name,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Name",t)},expression:"EditQLPanelModel.Data.Name"}})],1),t("FormItem",{attrs:{label:"面板地址",prop:"Address"}},[t("Input",{attrs:{placeholder:"面板地址填写示例：192.168.2.199:5700"},model:{value:e.EditQLPanelModel.Data.Address,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Address",t)},expression:"EditQLPanelModel.Data.Address"}},[t("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.EditQLPanelModel.Data.HttpType,callback:function(t){e.$set(e.EditQLPanelModel.Data,"HttpType",t)},expression:"EditQLPanelModel.Data.HttpType"}},[t("Option",{attrs:{value:"http://",selected:""}},[e._v("http://")]),t("Option",{attrs:{value:"https://"}},[e._v("https://")])],1)],1)],1),t("Row",[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"Client ID",prop:"ClientID"}},[t("Input",{model:{value:e.EditQLPanelModel.Data.ClientID,callback:function(t){e.$set(e.EditQLPanelModel.Data,"ClientID",t)},expression:"EditQLPanelModel.Data.ClientID"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"Client Secret",prop:"ClientSecret"}},[t("Input",{model:{value:e.EditQLPanelModel.Data.ClientSecret,callback:function(t){e.$set(e.EditQLPanelModel.Data,"ClientSecret",t)},expression:"EditQLPanelModel.Data.ClientSecret"}})],1)],1)],1),t("Row",[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"用户名",prop:"UserName"}},[t("Input",{attrs:{placeholder:"OpenAPI异常时刷新状态"},model:{value:e.EditQLPanelModel.Data.UserName,callback:function(t){e.$set(e.EditQLPanelModel.Data,"UserName",t)},expression:"EditQLPanelModel.Data.UserName"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"密码",prop:"Password"}},[t("Input",{attrs:{type:"password"},model:{value:e.EditQLPanelModel.Data.Password,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Password",t)},expression:"EditQLPanelModel.Data.Password"}})],1)],1)],1),t("Row",[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"分配权重",prop:"Weight"}},[t("Input",{attrs:{type:"number",placeholder:"用户变量分配权重，为0不分配。"},model:{value:e.EditQLPanelModel.Data.Weight,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Weight",t)},expression:"EditQLPanelModel.Data.Weight"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"最大容量",prop:"UserEnvMax"}},[t("Input",{attrs:{type:"number",placeholder:"容器分配用户变量的最大值"},model:{value:e.EditQLPanelModel.Data.UserEnvMax,callback:function(t){e.$set(e.EditQLPanelModel.Data,"UserEnvMax",t)},expression:"EditQLPanelModel.Data.UserEnvMax"}})],1)],1)],1),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"分组",prop:"GroupId"}},[t("Input",{attrs:{type:"text",placeholder:"自定义分组，同一个分组按权重分配所有用户变量"},model:{value:e.EditQLPanelModel.Data.GroupId,callback:function(t){e.$set(e.EditQLPanelModel.Data,"GroupId",t)},expression:"EditQLPanelModel.Data.GroupId"}})],1)],1)],1),t("FormItem",{attrs:{label:"同步变量",prop:"EnvName"}},[t("Input",{attrs:{type:"textarea",placeholder:"同步的用户环境变量名称，多个用&隔开，默认所有类型用户变量均可同步，全量模式容器必须指定，否则无法同步任何用户环境变量"},model:{value:e.EditQLPanelModel.Data.EnvName,callback:function(t){e.$set(e.EditQLPanelModel.Data,"EnvName",t)},expression:"EditQLPanelModel.Data.EnvName"}})],1),t("FormItem",{attrs:{label:"容器开关"}},[t("Checkbox",{model:{value:e.EditQLPanelModel.Data.Enable,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Enable",t)},expression:"EditQLPanelModel.Data.Enable"}},[e._v("启用")]),t("Checkbox",{model:{value:e.EditQLPanelModel.Data.EnableAll,callback:function(t){e.$set(e.EditQLPanelModel.Data,"EnableAll",t)},expression:"EditQLPanelModel.Data.EnableAll"}},[e._v("全量模式\n          "),t("Tooltip",{attrs:{content:"全量模式下必须指定同步用户变量名，否则无法同步",placement:"top",width:"800"}},[t("Icon",{attrs:{type:"ios-alert-outline",color:"red",size:"16"}})],1)],1)],1),t("transition",{attrs:{name:"slide-down"}},[e.EditQLPanelModel.Data.EnableAll?t("Alert",{attrs:{type:"warning"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("如果设置全量模式，将同步所有的公共变量和用户变量到青龙，受最大容量限制。")]},proxy:!0}],null,!1,3895411230)},[e._v("\n          全量容器设置提示\n          ")]):e._e()],1),t("transition",{attrs:{name:"slide-down"}},[e.EditQLPanelModel.Data.GroupId?t("Alert",{attrs:{type:"warning"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n            相同分组内的青龙面板将平分所有用户环境变量\n            手动指定的用户环境变量除外。\n          ")]},proxy:!0}],null,!1,318800623)},[e._v("\n          容器分组分配规则提示\n          ")]):e._e()],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleCancel()}}},[e._v("取消")]),t("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("EditQLPanelForm")}}},[e._v("提交")])],1)],1)],1)},l=[],r=(a("a481"),a("7f7f"),a("ad8c")),i={data:function(){var e=this;return{QueryForm:{PageIndex:1,PageSize:10,KeyWorkd:""},PageInfo:{Total:0,PageSizeOpts:[10,20,50,100]},QLPanelColumns:[{type:"selection",width:60,align:"center"},{width:80,type:"index",title:"序号",align:"center"},{title:"名称",key:"Name",width:120},{title:"启用",key:"Enable",width:80,sortable:!0,render:function(e,t){return e("div",[e("strong",t.row.Enable?"是":"否")])}},{title:"面板地址",key:"Address",minWidth:180,render:function(e,t){return e("div",[e("a",{domProps:{href:t.row.Address,target:"blank"}},t.row.Address)])}},{title:"ClientID",minWidth:150,key:"ClientID"},{title:"ClientSecret",key:"ClientSecret",minWidth:150,render:function(e,t){return e("div",[e("strong","******")])}},{title:"版本",key:"Version",width:120},{title:"分组",key:"GroupId",width:120},{title:"权重",key:"Weight",width:80},{title:"全量",key:"EnableAll",width:80,render:function(e,t){return e("div",[e("strong",t.row.EnableAll?"是":"否")])}},{title:"最大",width:80,key:"UserEnvMax"},{title:"数量",width:80,key:"EnvCount"},{title:"用户变量",width:120,key:"EnvName"},{title:"操作",key:"action",width:150,align:"center",render:function(t,a){var n=[];return n.push(t("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){e.editQLPanel(a.index)}}})),n.push(t("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){e.delete(a.row.Id)}}})),t("div",n)}}],QLPanelData:[],EditQLPanelModel:{Show:!1,Title:"添加青龙面板",Data:{HttpType:"http://",Enable:!0,EnableAll:!1,UserEnvMax:100,Weight:1}},ruleValidate:{Name:[{required:!0,message:"容器名称不能为空",trigger:"blur"}],Address:[{required:!0,message:"容器地址不能为空",trigger:"blur"}],ClientID:[{required:!0,message:"ClientID 不能为空",trigger:"blur"}],ClientSecret:[{required:!0,message:"ClientSecret 不能为空",trigger:"blur"}],Weight:[{required:!0,message:"请输入面板权重"}],UserEnvMax:[{required:!0,message:"请输入用户环境变量最大值"}]}}},methods:{refreshLogin:function(){var e=this;Object(r["d"])().then((function(t){e.$Message.success("使用青龙用户名密码刷新青龙授权状态成功！")}))},refreshToken:function(){var e=this;Object(r["e"])().then((function(t){if(t&&0!=t.length){for(var a="",n=0;n<t.length;n++){var l=t[n];a+=l}e.$Message.warning("刷新青龙授权Token操作完成！"+a)}else e.$Message.success("刷新青龙授权Token成功！")}))},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=JSON.parse(JSON.stringify(t.EditQLPanelModel.Data));a.Address=a.HttpType+a.Address,Object(r["f"])(a).then((function(e){e&&(t.$Message.success(t.EditQLPanelModel.Title+"成功！"),t.EditQLPanelModel.Show=!1,t.loadQLPanels(t.QueryForm.PageIndex))}))}}))},pageSizeChange:function(e){this.QueryForm.PageSize=e,this.loadQLPanels(1)},handleCancel:function(){this.EditQLPanelModel.Show=!1},editQLPanel:function(e){e>-1?(this.EditQLPanelModel.Title="修改青龙面板",this.EditQLPanelModel.Data=JSON.parse(JSON.stringify(this.QLPanelData[e])),this.EditQLPanelModel.Data.Address.indexOf("https://")>-1?this.EditQLPanelModel.Data.HttpType="https://":this.EditQLPanelModel.Data.HttpType="http://",this.EditQLPanelModel.Data.Address=this.EditQLPanelModel.Data.Address.replace(this.EditQLPanelModel.Data.HttpType,"")):(this.EditQLPanelModel.Data={},this.EditQLPanelModel.Data.HttpType="http://",this.EditQLPanelModel.Data.Enable=!0,this.EditQLPanelModel.Data.Weight=1,this.EditQLPanelModel.Data.UserEnvMax=100,this.EditQLPanelModel.Data.EnvName="",this.EditQLPanelModel.Title="添加青龙面板"),this.EditQLPanelModel.Show=!0},delete:function(e){var t=this;this.$Modal.confirm({title:"删除确认",content:"确定删除该容器吗？操作不可逆。",okText:"是的，老子要删除",cancelText:"算了，不删了",closable:!0,onOk:function(){var a=this;Object(r["a"])(e).then((function(e){t.loadQLPanels(a.QueryForm.PageIndex)}))}})},exportData:function(e){1===e&&this.$refs.selection.exportCsv({filename:"青龙面板数据"})},loadQLPanels:function(e){var t=this;this.QueryForm.PageIndex=e,Object(r["b"])(this.QueryForm).then((function(e){t.QLPanelData=e.Data,t.PageInfo.Total=e.TotalCount}))}},mounted:function(){this.loadQLPanels(this.QueryForm.PageIndex)}},o=i,s=(a("4aa8"),a("2877")),d=Object(s["a"])(o,n,l,!1,null,null,null);t["default"]=d.exports}}]);