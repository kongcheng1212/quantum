(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4986af89"],{"1f266":function(t,a,e){"use strict";e("6088")},6088:function(t,a,e){},"7aef":function(t,a,e){"use strict";e.r(a);var d=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticStyle:{margin:"0 0 20px 0"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.AddOrUpdate({})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(" 添加\n    ")],1),t._v("\n     \n    "),a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.getList(1)}}},[a("Icon",{attrs:{type:"md-refresh"}}),t._v(" 更新\n    ")],1)],1),a("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:t.columns,data:t.datas}}),a("Modal",{attrs:{"mask-closable":!1,title:t.addOrUpdateModal.title,width:600},model:{value:t.addOrUpdateModal.show,callback:function(a){t.$set(t.addOrUpdateModal,"show",a)},expression:"addOrUpdateModal.show"}},[a("Form",{ref:"EditCqhttpForm",attrs:{model:t.addOrUpdateModal.data,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"名称",prop:"Name"}},[a("Input",{attrs:{placeholder:"输入名称，可以为机器人QQ号"},model:{value:t.addOrUpdateModal.data.Name,callback:function(a){t.$set(t.addOrUpdateModal.data,"Name",a)},expression:"addOrUpdateModal.data.Name"}})],1),a("FormItem",{attrs:{label:"AccessToken",prop:"AccessToken"}},[a("Input",{attrs:{placeholder:"默认不用填写"},model:{value:t.addOrUpdateModal.data.AccessToken,callback:function(a){t.$set(t.addOrUpdateModal.data,"AccessToken",a)},expression:"addOrUpdateModal.data.AccessToken"}})],1),a("FormItem",{attrs:{label:"Http协议",prop:"Http"}},[a("Input",{attrs:{type:"text",name:"Http",placeholder:"填写示例：172.17.0.1:8000"},model:{value:t.addOrUpdateModal.data.Http,callback:function(a){t.$set(t.addOrUpdateModal.data,"Http",a)},expression:"addOrUpdateModal.data.Http"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")])])],1),a("FormItem",{attrs:{label:"Ws协议",prop:"Ws"}},[a("Input",{attrs:{type:"text",name:"Ws",placeholder:"填写示例：172.17.0.1:8001"},model:{value:t.addOrUpdateModal.data.Ws,callback:function(a){t.$set(t.addOrUpdateModal.data,"Ws",a)},expression:"addOrUpdateModal.data.Ws"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("ws://")])])],1),a("FormItem",{attrs:{label:"开关选项"}},[a("Checkbox",{model:{value:t.addOrUpdateModal.data.Enable,callback:function(a){t.$set(t.addOrUpdateModal.data,"Enable",a)},expression:"addOrUpdateModal.data.Enable"}},[t._v("启用")]),a("Checkbox",{model:{value:t.addOrUpdateModal.data.AddFriend,callback:function(a){t.$set(t.addOrUpdateModal.data,"AddFriend",a)},expression:"addOrUpdateModal.data.AddFriend"}},[t._v("好友自动通过")])],1),a("FormItem",{attrs:{label:"监听群"}},[a("Input",{attrs:{type:"textarea",placeholder:"多个用英文逗号隔开"},model:{value:t.addOrUpdateModal.data.Groups,callback:function(a){t.$set(t.addOrUpdateModal.data,"Groups",a)},expression:"addOrUpdateModal.data.Groups"}})],1),a("FormItem",{attrs:{label:"好友欢迎"}},[a("Input",{attrs:{type:"textarea",name:"AddFriendMessage",placeholder:"自动通过好友后向好友发送欢迎语"},model:{value:t.addOrUpdateModal.data.AddFriendMessage,callback:function(a){t.$set(t.addOrUpdateModal.data,"AddFriendMessage",a)},expression:"addOrUpdateModal.data.AddFriendMessage"}})],1),a("FormItem",{attrs:{label:"黑名单"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addOrUpdateModal.data.BlackList,callback:function(a){t.$set(t.addOrUpdateModal.data,"BlackList",a)},expression:"addOrUpdateModal.data.BlackList"}})],1),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addOrUpdateModal.data.Remark,callback:function(a){t.$set(t.addOrUpdateModal.data,"Remark",a)},expression:"addOrUpdateModal.data.Remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){t.addOrUpdateModal.show=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(a){return t.submitCqhttp("EditCqhttpForm")}}},[t._v("提交")])],1)],1)],1)},r=[],l=(e("7f7f"),e("66df")),n=function(){return l["a"].request({url:"/api/cqhttp",method:"get"})},o=function(t){return l["a"].request({url:"/api/cqhttp",data:t,method:"post"})},s=function(t){return l["a"].request({url:"/api/cqhttp/"+t,method:"delete"})},i={data:function(){var t=this;return{columns:[{type:"index",title:"序号",fixed:"left",align:"center"},{title:"名称",key:"Name",fixed:"left",minWidth:130},{title:"Http协议",key:"Http",minWidth:150,render:function(a,e){return t.tdTip(a,e,"Http")}},{title:"Ws协议",key:"Ws",minWidth:150,render:function(a,e){return t.tdTip(a,e,"Ws")}},{title:"状态",key:"Enable",width:80,align:"center",render:function(t,a){return t("div",[t("span",{style:{color:a.row.Enable?"green":"red"}},a.row.Enable?"启用":"禁用")])}},{title:"好友验证",key:"Enable",width:90,render:function(t,a){return t("div",[t("span",a.row.AddFriend?"是":"否")])}},{title:"好友欢迎语",key:"AddFriendMessage",minWidth:120},{title:"被名单",key:"BlackList",minWidth:120},{title:"备注",key:"Remark",minWidth:120},{title:"操作",key:"action",width:150,fixed:"right",align:"center",render:function(a,e){var d=[];return d.push(a("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){t.AddOrUpdate(e.row)}}})),d.push(a("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){t.delete(e.row.Id)}}})),a("div",d)}}],datas:[],addOrUpdateModal:{show:!1,data:{Enable:!0},title:"添加go-cqhttp"},ruleValidate:{Name:[{required:!0,message:"名称不能为空",trigger:"blur"}],Http:[{required:!0,message:"Http协议不能为空",trigger:"blur"}],Ws:[{required:!0,message:"Ws协议不能为空"}]}}},methods:{tdTip:function(t,a,e){var d=this,r=[],l=a.row[e];return r.push(t("a",{style:{display:"inline-block",width:"100%",textIndent:"0px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},attrs:{title:l},on:{click:function(){d.copy(l)}}},l)),t("div",{style:{width:"100%"}},r)},AddOrUpdate:function(t){this.addOrUpdateModal.show=!0,t.Id?(this.addOrUpdateModal.data=JSON.parse(JSON.stringify(t)),this.addOrUpdateModal.title="修改go-cqhttp"):(this.addOrUpdateModal.data={Enable:!0},this.addOrUpdateModal.title="添加go-cqhttp")},delete:function(t){var a=this;this.$Modal.confirm({title:"删除确认",content:"确定删除吗？删除后，通过该QQ提交的账号可能得不到系统推送。",okText:"确认",cancelText:"取消",closable:!0,onOk:function(){s(t).then((function(t){a.getList()}))}})},submitCqhttp:function(t){var a=this,e=this;this.$refs[t].validate((function(t){t&&o(a.addOrUpdateModal.data).then((function(t){t&&(e.$Message.success(a.addOrUpdateModal.title+"成功！"),e.addOrUpdateModal.show=!1,e.getList())}))}))},getList:function(t){var a=this;n().then((function(e){a.datas=e,t&&a.$Message.success("刷新成功！")}))}},mounted:function(){this.getList()}},p=i,c=(e("1f266"),e("2877")),u=Object(c["a"])(p,d,r,!1,null,null,null);a["default"]=u.exports}}]);