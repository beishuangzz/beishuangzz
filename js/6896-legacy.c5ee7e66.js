"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6896],{6896:function(t,e,i){i.r(e),i.d(e,{default:function(){return a}});i(41539),i(39714),i(74916),i(15306);function n(t){var e,i;document.getElementById("mydiv")&&(e=document.getElementById("mydiv").style.width,i=document.getElementById("mydiv").style.height),e=parseInt(e),i=parseInt(i),t.width=e||window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,t.height=i||window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight}var o=function(t){t=t||{},document.getElementsByTagName("html")[0];var e=document.getElementById(t.domId),g={element:document.createElement("canvas"),points:[],config:{vx:t.vx||4,vy:t.vy||4,height:t.height||2,width:t.width||2,count:t.count||100,color:t.color||"121, 162, 185",stroke:t.stroke||"130,255,255",dist:t.dist||6e3,e_dist:t.e_dist||2e4,max_conn:10}};if(!g.element.getContext("2d"))return null;g.context=g.element.getContext("2d"),e.style.padding="0",e.style.margin="0",e.appendChild(g.element),g.element.style.position="fixed",g.element.style.top="0",g.element.style.left="0",g.element.style.zIndex=-1,n(g.element),window.onresize=function(){n(g.element)},e.onmousemove=function(t){t=t||window.event;g.mouse={x:t.clientX,y:t.clientY}},document.onmouseleave=function(){g.mouse=void 0},setInterval(function(){var t,e=g,i=e.context;i.clearRect(0,0,e.element.width,e.element.height),i.beginPath(),i.fillStyle="rgb("+e.config.color+")";for(var n=0,o=e.config.count;n<o;n++)t=e.points.length!=e.config.count?{x:Math.floor(Math.random()*e.element.width),y:Math.floor(Math.random()*e.element.height),vx:e.config.vx/2-Math.random()*e.config.vx,vy:e.config.vy/2-Math.random()*e.config.vy}:function(t,e){var i=t;t.x<=0||t.x>=e.element.width?(i.vx=-i.vx,i.x+=i.vx):t.y<=0||t.y>=e.element.height?(i.vy=-i.vy,i.y+=i.vy):i={x:i.x+i.vx,y:i.y+i.vy,vx:i.vx,vy:i.vy};return i}(e.points[n],e),i.fillRect(t.x-e.config.width/2,t.y-e.config.height/2,e.config.width,e.config.height),e.points[n]=t;var s=i,a=e,d=e.mouse;s=s||a.context;for(var l=0,r=a.config.count;l<r;l++){for(var c,m,u=a.points[l].max_conn=0;u<r;u++)l==u||(c=Math.round(a.points[l].x-a.points[u].x)*Math.round(a.points[l].x-a.points[u].x)+Math.round(a.points[l].y-a.points[u].y)*Math.round(a.points[l].y-a.points[u].y))<=a.config.dist&&a.points[l].max_conn<a.config.max_conn&&(a.points[l].max_conn++,s.lineWidth=.5-c/a.config.dist,s.strokeStyle="rgba("+a.config.stroke+","+(1-c/a.config.dist)+")",s.beginPath(),s.moveTo(a.points[l].x,a.points[l].y),s.lineTo(a.points[u].x,a.points[u].y),s.stroke());d&&((m=Math.round(a.points[l].x-d.x)*Math.round(a.points[l].x-d.x)+Math.round(a.points[l].y-d.y)*Math.round(a.points[l].y-d.y))>a.config.dist&&m<=a.config.e_dist&&(a.points[l].x=a.points[l].x+(d.x-a.points[l].x)/20,a.points[l].y=a.points[l].y+(d.y-a.points[l].y)/20),m<=a.config.e_dist&&(s.lineWidth=1,s.strokeStyle="rgba("+a.config.stroke+","+(1-m/a.config.e_dist)+")",s.beginPath(),s.moveTo(a.points[l].x,a.points[l].y),s.lineTo(d.x,d.y),s.stroke()))}i.closePath()},40)},s=i(31373),e={name:"multiUserDialog",data:function(){return{dialogVisible:!0}},props:{multiUserList:Array,currentUserId:null},methods:{show:function(){this.dialogVisible=!0},hide:function(){this.dialogVisible=!1},submit:function(t){this.dialogVisible=!1,this.$emit("multiUserSelected",t)}},computed:{},created:function(){}},i=i(1001),e=(0,i.Z)(e,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("el-dialog",{staticClass:"multi-user-dialog",attrs:{title:n.$t("登录身份选择"),visible:n.dialogVisible,width:"40%"},on:{"update:visible":function(t){n.dialogVisible=t}}},[o("h2",{staticClass:"form-title",attrs:{slot:"title"},slot:"title"},[n._v(" "+n._s(n.$t("登录身份选择"))+" ")]),o("div",{staticClass:"modal-body common-edit"},[o("el-row",{attrs:{gutter:24}},[o("el-col",{attrs:{span:24}},[o("table",{staticClass:"query-list"},[o("colgroup",[o("col",{attrs:{width:"20%"}}),o("col"),o("col"),o("col")]),o("thead",[o("tr",[o("th",[n._v(n._s(n.$t("所属机构")))]),o("th",{attrs:{width:"10%"}},[n._v(n._s(n.$t("岗位")))]),o("th",{attrs:{width:"10%"}},[n._v(n._s(n.$t("待办数量")))]),o("th",{attrs:{width:"10%"}},[n._v(n._s(n.$t("操作")))])])]),o("tbody",[n._l(n.mulitUserList,function(e,t,i){return[e.objectid!=n.currentUserId?o("tr",{key:i},[o("td",{attrs:{title:e.belongedOrg.orgseqname}},[n._v(n._s(e.belongedOrg.orgseqname))]),o("td",{attrs:{title:e.stationName}},[n._v(n._s(e.stationName))]),o("td",{attrs:{title:e.processTaskCount}},[n._v(n._s(e.processTaskCount))]),o("td",[o("el-button",{staticClass:"mini-btn",attrs:{size:"mini",type:"primary",title:n.$t("选择")},on:{click:function(t){return n.submit(e)}}},[n._v(n._s(n.$t("选择")))])],1)]):n._e()]})],2)])])],1)],1)])},[],!1,null,null,null).exports,a=(0,i.Z)({name:"loginModule",components:{multiUserDialog:e},data:function(){return{title:"智慧法务管理产品",vCode:"",sessionId:!0,isInd1:!0,isInd2:!1,loginId:"",randomCodeOpen:!1,randomCode:"",password:"",show:!1,isDisable:!1,multiUserDialogShow:!1,multiUserList:[],loginInUserId:"",backgroundPicStyle:""}},methods:{update:function(){clearInterval(window.timeOut),this.setTime(),this.loginId="",this.password="",this.isDisable=!1,this.loginInUserId="",this.multiUserDialogShow=!1},setTime:function(){this.randomCode="",this.randomCodeFunc(),clearInterval(window.timeOut),window.timeOut=setInterval(this.randomCodeFunc,3e5)},randomCodeFunc:function(){var i=this;new Promise(function(e,t){i.$ajax({method:"get",noLoading:!0,url:"/law/commonLogin/initSessionId"}).then(function(t){s.S.setSessionId(t.data.data.sessionId),i.sessionId=!1,i.randomCodeOpen=t.data.data.randomCodeOpen;t=t.data.data.backgroundPicStyle;i.backgroundPicStyle!==t&&(i.backgroundPicStyle=t),e()}).catch(function(t){})}).then(function(){"1"===i.randomCodeOpen&&i.$ajax({method:"get",noLoading:!0,responseType:"arraybuffer",url:"/law/commonLogin/randomCode"}).then(function(t){i.vCode="data:image/png;base64,"+Buffer.from(t.data).toString("base64")})})},setBackImage:function(t){var e,i;t&&(e="",e=".loginModule .back-login { background-image: url(/static/images/login/back_"+t+".jpg);}.loginModule .content-login .form .sideCard { background: url(/static/images/login/left_"+t+".jpg)  no-repeat center center;;}",(t=document.getElementById("setLoginBackgroundPic"))||(i=document.getElementsByTagName("head")[0],(t=document.createElement("style")).id="setLoginBackgroundPic",t.type="text/css",i.appendChild(t)),t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e)},multiUserLoginWeb:function(t){t?(this.multiUserDialogShow=!1,this.loginInUserId=t.objectid,this.loginWeb()):this.$alert(this.$t("请选择您的身份"))},loginWeb:function(){var e=this;"1"!==this.randomCodeOpen&&(this.randomCode="0"),this.loginId=document.getElementById("loginId").value,this.password=document.getElementById("password").value,this.loginId&&this.password&&this.randomCode?(this.isDisable=!0,this.$store.state.dictList={},this.$ajax({method:"post",url:"/law/commonLogin/login",noLoading:!0,data:{loginId:this.$common.encrypted(this.loginId),password:this.$common.encrypted(this.password),randomCode:this.randomCode,loginInUserId:this.loginInUserId}}).then(function(t){setTimeout(function(){e.isDisable=!1},500),clearInterval(window.timeOut),t.data.data?"true"==t.data.data.mulitiUser?(e.multiUserList=t.data.data.userList,e.multiUserDialogShow?e.$refs.multiUserDialog.show():e.multiUserDialogShow=!0):setTimeout(function(){s.S.setToken(t.data.data.item),e.$router.push({path:"/home"})},500):(e.$alert(t.data.message,e.$t("提示"),{confirmButtonText:e.$t("确定")}),e.setTime())}).catch(function(){e.isDisable=!1,e.setTime()})):this.$alert(this.$t("请填写账号密码和验证码!"))}},computed:{},created:function(){this.$router.replace("/")},mounted:function(){this.$common.sessionLoaded=!1;o({domId:"mydiv",vx:2,vy:2,height:2,width:2,count:150,color:"255,255,255",stroke:"255,255,255",dist:6e3,e_dist:4e3,max_conn:10});for(var t=document.getElementsByTagName("svg"),e=0;e<t.length;e++)t[e].setAttribute("focusable",!1);this.update()},activated:function(){}},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{staticClass:"loginModule"},[t("div",{staticClass:"back-login"}),t("div",{staticClass:"content-login"},[t("div",{attrs:{id:"mydiv"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isInd1,expression:"isInd1"}],staticClass:"form"},[t("img",{staticClass:"xiaozhi",attrs:{src:"/static/images/login/xiaozhi.png"}}),t("div",{staticClass:"sideCard"},[t("img",{attrs:{src:"/static/images/login/logo.png"}}),t("h2",[e._v(e._s(e.title))])]),t("form",{directives:[{name:"loading",rawName:"v-loading",value:e.sessionId,expression:"sessionId"}],attrs:{id:"loginForm",method:"post",autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.loginWeb.apply(null,arguments)}}},[t("h4",[e._v(e._s(e.$t("欢迎登录")))]),t("div",{staticClass:"form-group"},[t("span",[e._v(e._s(e.$t("用户名")))]),t("input",{attrs:{type:"text",id:"loginId"}}),t("i",{staticClass:"fa fa-home"})]),t("div",{staticClass:"form-group"},[t("span",[e._v(e._s(e.$t("密码")))]),t("input",{attrs:{type:"password",id:"password"}}),t("i",{staticClass:"fa fa-lock"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.randomCodeOpen,expression:"randomCodeOpen==1"}],staticClass:"form-group code"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.randomCode,expression:"randomCode"}],attrs:{type:"text",name:"vCode",placeholder:e.$t("请输入验证码")},domProps:{value:e.randomCode},on:{input:function(t){t.target.composing||(e.randomCode=t.target.value)}}}),t("img",{attrs:{src:e.vCode},on:{click:function(t){return e.setTime()}}})]),t("el-button",{attrs:{type:"primary",loading:e.isDisable},on:{click:e.loginWeb}},[e.isDisable?[e._v(" 登录中... ")]:[e._v(" 登 录 ")]],2)],1)]),t("div",{staticClass:"bottomLogin"},[e._v("©2020 "+e._s(e.$t("天津市道本科技有限公司"))+" V2.1.53409")])]),e.multiUserDialogShow?t("multi-user-dialog",{ref:"multiUserDialog",attrs:{multiUserList:e.multiUserList,currentUserId:""},on:{multiUserSelected:e.multiUserLoginWeb}}):e._e()],1)},[],!1,null,null,null).exports}}]);