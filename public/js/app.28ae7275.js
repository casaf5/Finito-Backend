(function(e){function t(t){for(var r,s,l=t[0],c=t[1],i=t[2],d=0,u=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},s={app:0},n={app:0},o=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1b8f3004":"e7f0ce3e","chunk-26ad1485":"fac2000d","chunk-2fd097de":"fb7570f7","chunk-20237862":"fbc1bbc3","chunk-2d0dd85e":"a7c8b5a4","chunk-4f4e9569":"b0453864","chunk-7def69be":"b82066e9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-1b8f3004":1,"chunk-26ad1485":1,"chunk-20237862":1,"chunk-4f4e9569":1,"chunk-7def69be":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b8f3004":"bd5fb7a3","chunk-26ad1485":"e7fa586e","chunk-2fd097de":"31d6cfe0","chunk-20237862":"a81a398d","chunk-2d0dd85e":"31d6cfe0","chunk-4f4e9569":"325dcbd6","chunk-7def69be":"193fc19a"}[e]+".css",n=c.p+r,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===n))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){i=u[l],d=i.getAttribute("data-href");if(d===r||d===n)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],b.parentNode.removeChild(b),a(o)},b.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){s[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=l(e);var u=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,a[1](u)}n[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3c61":function(e,t,a){},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-layout ",attrs:{id:"app"}},[a("app-header"),a("router-view")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"/"!=e.$route.path&&"/login"!=e.$route.path?a("header",{staticClass:"app-header",style:e.navbarBgStyle.navBar.navbarBgColor},[a("section",{staticClass:"navbar-container"},[a("div",{staticClass:"navbar-left-side"},[a("router-link",{attrs:{tag:"span",to:"/"}},[e._v("Finito")]),a("router-link",{attrs:{tag:"div",to:"/home"}},[a("i",{staticClass:"fas fa-home header-item home-icon"})]),e._m(0)],1),a("nav",[a("ul",{staticClass:"navbar clean-list"},[a("router-link",{staticClass:"nav-btn",style:e.navbarBgStyle.navBar.buttonColors,attrs:{tag:"li",to:"/Login"}},[e._v("Login")]),a("router-link",{staticClass:"nav-btn",style:e.navbarBgStyle.navBar.buttonColors,attrs:{tag:"li",to:"/signup"}},[e._v("Sign Up")]),a("i",{staticClass:"far fa-bell header-item notification-icon notification-bell"}),a("Avatar",{attrs:{username:"Guest",size:35}})],1)])])]):e._e()},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"searchbar-container"},[a("input",{attrs:{type:"text",placeholder:"Search.."}}),a("i",{staticClass:"fas fa-search search-icon"})])}],c=a("4a89"),i=a.n(c),d={name:"app-header",computed:{},methods:{},components:{Avatar:i.a},computed:{navbarBgStyle(){return"Finito-app"===this.$route.name?{navBar:{navbarBgColor:"background-color:#0006",buttonColors:"background-color:#2383c4;color:#fff"}}:{navBar:{navbarBgColor:"background-color:#3498db",buttonColors:"background-color:#fff;color:#333"}}},buttonColor(){}},displayHeader(){}},u=d,b=a("2877"),f=Object(b["a"])(u,o,l,!1,null,null,null),h=f.exports,m={name:"main-app",computed:{style(){return this.$store.getters.style}},components:{appHeader:h}},p=m,g=Object(b["a"])(p,s,n,!1,null,null,null),j=g.exports,v=a("9483");Object(v["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y,k,w,C,B=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.board?a("section",{staticClass:"dashboard"},[a("div",{staticClass:"charts-container flex col"},[a("div",{staticClass:"linechart-container chart"},[a("div",{staticClass:"linechart-header flex space-between"},[a("h2",[e._v("Board Progress ")]),a("el-select",{attrs:{placeholder:"Show From..."},on:{input:e.updateLineChart},model:{value:e.monthToStartFrom,callback:function(t){e.monthToStartFrom=t},expression:"monthToStartFrom"}},e._l(e.selectOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),a("line-chart",{attrs:{"chart-data":e.datacollection,options:e.options}})],1),a("div",{staticClass:"doughnut-barchart-wraper flex"},[a("div",{staticClass:"doughnut-container chart"},[a("h2",[e._v("TaskGroup Popularity")]),a("doughnut-chart",{attrs:{labels:e.taskGroupsTitles,data:e.numOfTasksInGroup}})],1),a("div",{staticClass:"barchart-container chart"},[a("h2",[e._v("Members Progress")]),a("bar-chart",{attrs:{labels:e.boardMembersNames,data:e.tasksNumPerMember,options:e.options}})],1)])])]):e._e()},T=[],_=a("1fca"),O={props:["labels","data"],extends:_["b"],mounted(){this.renderChart({labels:this.labels,datasets:[{label:"GitHub Commits",backgroundColor:["#3399FF","#3366CC","#003366","#79BEDB","#10C8CD","gray"],data:this.data}]})}},x=O,P=Object(b["a"])(x,y,k,!1,null,null,null),M=P.exports,N={props:["labels","data","options"],extends:_["a"],mounted(){this.renderChart({labels:this.labels,datasets:[{label:"Incompleted Tasks",backgroundColor:new Array(11).fill("gray"),data:this.data},{label:"Completed Tasks",backgroundColor:new Array(11).fill("rgb(52, 152, 219)"),data:[7,5,3,4,5]}]},this.options)}},E=N,A=Object(b["a"])(E,w,C,!1,null,null,null),z=A.exports;const{reactiveProp:U}=_["d"];var F,D,L={mixins:[U],props:["options"],extends:_["c"],mounted(){this.renderChart(this.chartData,this.options)}},$=L,I=Object(b["a"])($,F,D,!1,null,null,null),G=I.exports,J={name:"dashboard",data(){return{datacollection:{},months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthToStartFrom:"",options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},selectOptions:[{value:1,label:"Jan"},{value:2,label:"Feb"},{value:3,label:"Mar"},{value:4,label:"Apr"},{value:5,label:"May"},{value:6,label:"Jun"},{value:7,label:"Jul"},{value:8,label:"Aug"},{value:9,label:"Sep"},{value:10,label:"Oct"},{value:11,label:"Nov"},{value:12,label:"Dec"}]}},computed:{monthsToShow(){const e=[];this.monthToStartFrom||(this.monthToStartFrom=new Date(Date.now()).getMonth()+1),console.log(this.monthToStartFrom);for(var t=this.monthToStartFrom-1,a=0;a<12;a++){if(e.push(this.months[t]),t++,t+1===this.monthToStartFrom)break;12===t&&(t=0)}return e},board(){return this.$store.getters.board},allTasks(){return this.board.taskGroups.reduce((e,t)=>(e=e.concat(t.tasks),e),[])},completedTasksPerMonth(){return this.monthsToShow.map(e=>this.board.activities.reduce((t,a)=>{const r=new Date(a.createdAt).getMonth(),s=this.months[r-1];return"COMPLETED_TASK"===a.action&&e===s&&(console.log(r),t++),t},0))},taskGroupsTitles(){return this.board.taskGroups.map(e=>e.title)},numOfTasksInGroup(){return this.board.taskGroups.map(e=>e.tasks.length)},boardMembersNames(){return this.board.members.map(e=>e.userName)},tasksNumPerMember(){return this.boardMembersNames.map(e=>this.board.taskGroups.reduce((t,a)=>t+a.tasks.reduce((t,a)=>(a.members.forEach(a=>{a.userName===e&&t++}),t),0),0))},completedMembersTasks(){return this.boardMembersNames.map(e=>this.allTasks.reduce((t,a)=>(a.members.forEach(r=>{a.isComplete&&r.userName===e&&t++}),t),0))}},inCompletedMembersTasks(){return this.tasksNumPerMember.map((e,t)=>{this.completedMembersTasks[t]})},mounted(){this.updateLineChart()},methods:{updateLineChart(){this.datacollection={labels:this.monthsToShow,datasets:[{label:"All Completed Tasks Over a Year",backgroundColor:"#003366",data:this.completedTasksPerMonth}]}}},components:{doughnutChart:M,barChart:z,lineChart:G}},q=J,H=Object(b["a"])(q,S,T,!1,null,null,null),K=H.exports;r["default"].use(B["a"]);const R=[{path:"/",name:"Landing-Page",component:()=>Promise.all([a.e("chunk-1b8f3004"),a.e("chunk-2fd097de")]).then(a.bind(null,"07f5"))},{path:"/home",name:"Home-Page",component:()=>a.e("chunk-7def69be").then(a.bind(null,"0f96"))},{path:"/board/:id",name:"Finito-app",component:()=>Promise.all([a.e("chunk-1b8f3004"),a.e("chunk-26ad1485")]).then(a.bind(null,"f996"))},{path:"/login",component:()=>a.e("chunk-20237862").then(a.bind(null,"7d13"))},{path:"/signup",component:()=>a.e("chunk-2d0dd85e").then(a.bind(null,"826d"))},{path:"/board/dash/charts",component:K},{path:"*",component:()=>a.e("chunk-4f4e9569").then(a.bind(null,"8cdb"))}],W=new B["a"]({routes:R});var Y=W,Z=a("2f62"),Q=a("56fc"),V={state:{boards:[],board:null,filterBy:{name:"",tags:"",creator:""},style:{bgColor:"#48aef9",bgUrl:"https://i.pinimg.com/originals/5e/65/20/5e6520289b44e11a9e74363c18ce3ee1.jpg"}},getters:{boards(e){return e.boards},board(e){return e.board},activities(e){return e.board.activities},getTaskGroupByIndex:e=>t=>e.board.taskGroups.findIndex(e=>e.id===t),style(e){return e.style}},mutations:{setBoards(e,{boards:t}){e.boards=t},setBoard(e,{board:t}){e.board=t,e.style=t.style},deleteBoard(e,{id:t}){const a=e.boards.findIndex(e=>e._id===board._id);e.boards.splice(a,1)},updateBoard(e,{board:t}){const a=e.boards.findIndex(e=>e._id===t._id);e.boards.splice(a,1,t),e.board=t},addBoard(e,{board:t}){e.boards.unshift(t)},setFilterBy(e,{filterBy:t}){e.filterBy=t},setStyle(e,{style:t}){e.style=t}},actions:{async loadBoards({commit:e,state:t},{filterBy:a}){try{const a=await Q["a"].query(t.filterBy);return e({type:"setBoards",boards:a}),a}catch(r){throw console.log("Problem getting board "),r}},async getBoardById({commit:e},{id:t}){try{let a=await Q["a"].getById(t);return e({type:"setBoard",board:a}),a}catch(a){throw console.log("Problem getting board "),a}},async deleteBoard({commit:e},{id:t}){try{await Q["a"].deleteBoard(t),e({type:"deleteBoard",id:t})}catch(a){throw console.log("Problem Deleting board "),a}},async saveBoard({commit:e},{board:t}){const a=t._id?"updateBoard":"addBoard";try{const r=await Q["a"].save(t);return e({type:a,board:r}),r}catch(r){throw console.log("Problem Saving board id-",t._id),r}}}},X=a("bc3a"),ee=a.n(X);ee.a.defaults.withCredentials=!0;const te={login:se,logout:ne,signup:re};function ae(e=""){const t="/api/auth";return`${t}/${e}`}async function re(e){let t=await ee.a.post(ae()+"signup",e);return t.data}async function se(e){let t=await ee.a.post(ae()+"login",e);return sessionStorage.setItem("user",JSON.stringify(t.data)),t.data}async function ne(){return sessionStorage.removeItem("user"),await ee.a.post(ae()+"logout")}ee.a.defaults.withCredentials=!0;const oe={getUsers:ce,getById:ie,remove:de};function le(e=""){const t="/api/user";return`${t}/${e}`}async function ce(){let e=await ee.a.get(le());return e=e.data,e}async function ie(e){let t=await ee.a.get(le(e));return t=t.data,t}async function de(e){let t=await ee.a.delete(le(e));return t=t.data,t}const ue={state:{users:null,loggedUser:null,userPrefs:null},getters:{users(e){return e.users},loggedUser(e){return e.loggedUser}},mutations:{setUsers(e,{users:t}){e.users=t},setLoggedUser(e,{user:t}){e.loggedUser=t,console.log("loggeduser",e.loggedUser)}},actions:{async login({commit:e},{credentials:t}){const a=await te.login(t);return e({type:"setLoggedUser",user:a}),a},async signup({commit:e},{registerDetails:t}){const a=await te.signup(t);return e({type:"setLoggedUser",user:a}),a},async logout({commit:e}){await te.logout(),e({type:"setLoggedUser",user:null})},async loadUsers({commit:e}){try{const t=await oe.getUsers();return e({type:"setUsers",users:t}),t}catch(t){throw console.log("Problem getting Users! "),t}}}};r["default"].use(Z["a"]);var be=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{},modules:{boardStore:V,userStore:ue}});const fe=a("c1df");r["default"].filter("relativeTime",e=>fe(e).fromNow());a("3c61");var he=a("5c96"),me=a.n(he),pe=(a("0fae"),a("1dce")),ge=a.n(pe),je=a("b2d6"),ve=a.n(je);r["default"].use(me.a,{locale:ve.a}),r["default"].use(ge.a),r["default"].config.productionTip=!1,new r["default"]({router:Y,store:be,render:e=>e(j)}).$mount("#app")},"56fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("bc3a"),s=a.n(r),n=a("fa7d");s.a.defaults.withCredentials=!0;const o={query:c,deleteBoard:d,save:f,getById:i,getEmptyBoard:h};function l(e=""){const t="/api/board";return`${t}/${e}`}async function c(e){const t=await s.a.get(l()),a=t.data;return a}async function i(e){const t=await s.a.get(l(e)),a=t.data;return a}async function d(e){return await s.a.delete(l(e))}async function u(e){const t=await s.a.post(l(),e);return t.data}async function b(e){const t=await s.a.put(l(e._id),e);return t.data}function f(e){return e._id?b(e):u(e)}function h(){return n["b"].getNewBoard()}},fa7d:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return b}));const r={getRandomId:d,getEmptyGroup:o,getEmptyTask:l,getEmptyCheckList:n,getNewBoard:c,deepCopy:s,getUrlBasedOnScreenWidth:i};function s(e){return JSON.parse(JSON.stringify(e))}function n(e="Check List"){const t={id:d(),title:e,items:[]};return t}function o(e=""){const t={id:d(),title:e,position:"",tasks:[],labelsOpen:!1};return t}function l(e){const t={parentListId:e,id:d(),title:"",desc:"",dueDate:"",watchMembers:[],createdAt:Date.now(),executeTime:"",members:[],labels:[],comments:[],cover:{color:"",url:""},attachments:[],checkLists:[]};return t}function c(){const e={name:"",members:[],tags:[],style:{bgColor:"#48aef9",bgUrls:[],bgUrl:"",previewUrl:""},creator:{},createdAt:Date.now(),activities:[],labels:[{id:d(),title:"",color:"#61BD4F",selectedColor:"#519839",wasClicked:!1},{id:d(),title:"",color:"#f2d600",selectedColor:"#D9B51C",wasClicked:!1},{id:d(),title:"",color:"#ff9f1a",selectedColor:"#cd8313",wasClicked:!1},{id:d(),title:"",color:"#eb5a46",selectedColor:"#b04632",wasClicked:!1},{id:d(),title:"",color:"#0079BF",selectedColor:"#055A8C",wasClicked:!1},{id:d(),title:"",color:"#C377E0",selectedColor:"#89609E",wasClicked:!1}],taskGroups:[{id:d(),title:"Task-Group 1",position:"",tasks:[],labelsOpen:!1}]};return e}function i(e){return e<640?"small":e>640&&e<1200?"regular":"full"}function d(){var e=Date.now().toString(16),t=u(1e3,9999).toString(16),a=u(1e3,9999).toString(16);return`${a}-${e}-${t}`.toUpperCase()}function u(e,t){var a=e>=t?e+1:t+1,r=e<=t?e:t;return Math.floor(Math.random()*(a-r))+r}const b=(e,t)=>{const{removedIndex:a,addedIndex:r,payload:s}=t;if(null===a&&null===r)return e;const n=[...e];let o=s;return null!==a&&(o=n.splice(a,1)[0]),null!==r&&n.splice(r,0,o),n}}});
//# sourceMappingURL=app.28ae7275.js.map