(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142dc9a4"],{bea4:function(t,e,a){"use strict";a.r(e);var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{margin:"0 0 20px 0"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.AddOrUpdate({})}}},[a("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 添加\n    ")],1)],1),a("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:t.columns,data:t.datas}}),a("Modal",{attrs:{"mask-closable":!1,title:t.addOrUpdateModal.title,width:600},model:{value:t.addOrUpdateModal.show,callback:function(e){t.$set(t.addOrUpdateModal,"show",e)},expression:"addOrUpdateModal.show"}},[a("Form",{ref:"EditWxmpForm",attrs:{model:t.addOrUpdateModal.data,rules:t.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"名称",prop:"Name"}},[a("Input",{attrs:{placeholder:"公众号名称"},model:{value:t.addOrUpdateModal.data.Name,callback:function(e){t.$set(t.addOrUpdateModal.data,"Name",e)},expression:"addOrUpdateModal.data.Name"}})],1),a("FormItem",{attrs:{label:"开发者ID",prop:"AppID"}},[a("Input",{attrs:{type:"text",name:"Http",placeholder:"填写示例：172.17.0.1:8000"},model:{value:t.addOrUpdateModal.data.AppID,callback:function(e){t.$set(t.addOrUpdateModal.data,"AppID",e)},expression:"addOrUpdateModal.data.AppID"}})],1),a("FormItem",{attrs:{label:"开发者密码",prop:"AppSecret"}},[a("Input",{attrs:{type:"text",name:"AppSecret"},model:{value:t.addOrUpdateModal.data.AppSecret,callback:function(e){t.$set(t.addOrUpdateModal.data,"AppSecret",e)},expression:"addOrUpdateModal.data.AppSecret"}})],1),a("FormItem",{attrs:{label:"消息加解密密钥",prop:"EncodingAESKey"}},[a("Input",{attrs:{type:"text",name:"EncodingAESKey"},model:{value:t.addOrUpdateModal.data.EncodingAESKey,callback:function(e){t.$set(t.addOrUpdateModal.data,"EncodingAESKey",e)},expression:"addOrUpdateModal.data.EncodingAESKey"}})],1),a("FormItem",{attrs:{label:"Token",prop:"Token"}},[a("Input",{attrs:{type:"text",name:"Token"},model:{value:t.addOrUpdateModal.data.Token,callback:function(e){t.$set(t.addOrUpdateModal.data,"Token",e)},expression:"addOrUpdateModal.data.Token"}})],1),a("FormItem",{attrs:{label:"开关选项"}},[a("Checkbox",{model:{value:t.addOrUpdateModal.data.Enable,callback:function(e){t.$set(t.addOrUpdateModal.data,"Enable",e)},expression:"addOrUpdateModal.data.Enable"}},[t._v("启用")])],1),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addOrUpdateModal.data.Remark,callback:function(e){t.$set(t.addOrUpdateModal.data,"Remark",e)},expression:"addOrUpdateModal.data.Remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.addOrUpdateModal.show=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitWxmp("EditWxmpForm")}}},[t._v("提交")])],1)],1)],1)},r=[],n=(a("7f7f"),a("66df")),o=function(){return n["a"].request({url:"/api/Wxmp/list",method:"get"})},l=function(t){return n["a"].request({url:"/api/Wxmp/add-update",data:t,method:"post"})},i=function(t){return n["a"].request({url:"/api/Wxmp/"+t,method:"delete"})},p={data:function(){var t=this;return{columns:[{type:"selection",width:60,align:"center"},{title:"名称",key:"Name",width:150},{title:"AppID",key:"AppID",width:180,render:function(e,a){return t.tdTip(e,a,"AppID")}},{title:"AppSecret",key:"AppSecret",width:120,render:function(e,a){return t.tdTip(e,a,"AppSecret")}},{title:"EncodingAESKey",key:"EncodingAESKey",width:180,render:function(e,a){return t.tdTip(e,a,"EncodingAESKey")}},{title:"状态",key:"Enable",width:90,render:function(t,e){return t("div",[t("span",{style:{color:e.row.Enable?"green":"red"}},e.row.Enable?"启用":"禁用")])}},{title:"服务地址",width:220,render:function(e,a){return t.tdTip(e,a,"EncodingAESKey","http://域名/api/wxmp/"+a.row.AppID)}},{title:"备注",key:"Remark"},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){var d=[];return d.push(e("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){t.AddOrUpdate(a.row)}}})),d.push(e("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){t.delete(a.row.Id)}}})),e("div",d)}}],datas:[],addOrUpdateModal:{show:!1,data:{Enable:!0},title:"添加微信公众号"},ruleValidate:{Name:[{required:!0,message:"名称不能为空",trigger:"blur"}],Code:[{required:!0,message:"编码不能为空",trigger:"blur"},{type:"string",pattern:/^[A-Za-z0-9]+$/,message:"编码只能包含数字和字母",trigger:"blur"}],AppID:[{required:!0,message:"AppID不能为空"}],AppSecret:[{required:!0,message:"AppSecret不能为空"}],EncodingAESKey:[{required:!0,message:"EncodingAESKey不能为空"}],Token:[{required:!0,message:"Token不能为空"}]}}},methods:{AddOrUpdate:function(t){this.addOrUpdateModal.show=!0,t.Id?(this.addOrUpdateModal.data=JSON.parse(JSON.stringify(t)),this.addOrUpdateModal.title="修改微信公众号"):this.addOrUpdateModal.title="添加微信公众号"},tdTip:function(t,e,a,d){var r=this,n=[];return n.push(t("a",{style:{display:"inline-block",width:"100%",textIndent:"0px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},attrs:{title:d||e.row[a]},on:{click:function(){r.copy(d||e.row[a])}}},d||e.row[a])),t("div",{style:{width:"100%"}},n)},copy:function(t){var e=this;this.$copyText(t).then((function(t){e.$Message.success("复制成功！")}),(function(t){e.$Message.error("复制失败！")}))},delete:function(t){var e=this;this.$Modal.confirm({title:"删除确认",content:"确定删除公众号配置吗？删除后通过该公众号提交的账号将得不到消息推送，该操作不可逆。",okText:"是的，老子要删除",cancelText:"算了，不删了",closable:!0,onOk:function(){i(t).then((function(t){e.getList()}))}})},submitWxmp:function(t){var e=this;this.$refs[t].validate((function(t){t&&l(e.addOrUpdateModal.data).then((function(t){t&&(e.$Message.success(e.addOrUpdateModal.title+"成功！"),e.addOrUpdateModal.show=!1,e.getList())}))}))},getList:function(){var t=this;o().then((function(e){t.datas=e}))}},mounted:function(){this.getList()}},s=p,c=(a("c76d"),a("2877")),u=Object(c["a"])(s,d,r,!1,null,null,null);e["default"]=u.exports},c76d:function(t,e,a){"use strict";a("fefd")},fefd:function(t,e,a){}}]);