(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0525b0f6"],{"0468":function(e,t,l){},1264:function(e,t,l){"use strict";var o=l("e6f0"),s=l.n(o);s.a},"3aec":function(e,t,l){"use strict";var o=l("9408"),s=l.n(o);s.a},"3e36":function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("task-action-container",{staticClass:"add-checklist-cmp",attrs:{title:"Add Checklist"},on:{close:e.closeChecklist}},[l("form-input",{attrs:{showLabel:!0,labelText:"List Title",type:"text"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),l("button",{staticClass:"btn-primary full-width",on:{click:e.createCheckList}},[e._v("Add")])],1)},s=[],a=l("94ce"),i=l("c48f"),c={components:{TaskActionContainer:a["a"],FormInput:i["a"]},data(){return{title:"New Check List"}},methods:{createCheckList(){this.title&&(this.$emit("createCheckList",this.title),this.$emit("close"))},closeChecklist(){this.$emit("close")}}},n=c,r=l("2877"),d=Object(r["a"])(n,o,s,!1,null,null,null);t["a"]=d.exports},"416c":function(e,t,l){},"5cc9":function(e,t,l){"use strict";var o=l("0468"),s=l.n(o);s.a},"5d40":function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"task-duedate"},[l("task-action-container",{attrs:{title:"Change Due Date"},on:{close:e.closeComp}},[l("form",[l("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),l("div",{staticClass:"task-duedate-btns-container"},[l("button",{staticClass:"btn-primary",on:{click:function(t){return t.preventDefault(),e.emitDuedate(t)}}},[e._v("Save")]),l("button",{staticClass:"btn-primary remove",on:{click:function(t){return t.preventDefault(),e.emitRemovedate(t)}}},[e._v("Remove")])])],1)])],1)},s=[],a=l("94ce"),i=l("5c96"),c={data(){return{date:""}},components:{TaskActionContainer:a["a"],DatePicker:i["DatePicker"]},methods:{closeComp(){this.$emit("closeDateComp")},emitDuedate(){this.$emit("dateChoosed",this.date.toDateString().split(" ").slice(1).join(" "))},emitRemovedate(){this.$emit("dateRemoved")}}},n=c,r=l("2877"),d=Object(r["a"])(n,o,s,!1,null,null,null);t["a"]=d.exports},9408:function(e,t,l){},"9ffc":function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"add-task-container",class:{transparent:!e.inGroup},style:{padding:e.inGroup?"":"5px"}},[e.show?e._e():l("div",{staticClass:"add-task-left-content",on:{click:e.toggleEdit}},[l("i",{staticClass:"el-icon-plus task-icon"}),l("span",{attrs:{type:"text"}},[e._v("Add another card")])]),e.show?l("div",{staticClass:"add-task-content-container"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:e.placeholderText},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),l("section",{staticClass:"add-task-actions flex space-between"},[l("button",{class:{editActive:e.show},on:{click:e.addTask}},[e._v(e._s(e.buttonText))]),l("i",{staticClass:"el-icon-close",on:{click:e.toggleEdit}})])]):e._e()])},s=[],a={name:"add-task",props:["inGroup","show"],data(){return{items:[],content:"",showEditSection:!1}},methods:{toggleEdit(){this.$emit("toggleEdit",!this.show)},addTask(){this.content?this.inGroup?(this.$emit("addTask",this.content),this.content=""):(this.$emit("addList",this.content),this.$emit("toggleEdit",!this.show)):alert("tasks cant be empty")}},computed:{buttonText(){return this.inGroup?"Add task":"Add List"},placeholderText(){return this.inGroup?"Enter Card title...":"Enter List Title..."}}},i=a,c=l("2877"),n=Object(c["a"])(i,o,s,!1,null,null,null);t["a"]=n.exports},a609:function(e,t,l){"use strict";var o=l("416c"),s=l.n(o);s.a},b465:function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l(e.component,{tag:"component",attrs:{editMode:e.editMode,choosenLabelIndex:e.choosenLabelIndex,labelToEdit:e.labelToEdit,choosenColor:e.choosenColor,title:e.title,colors:e.labels},on:{selectedColor:e.selectedColor,back:e.toggleComponent,toggleCreateComponent:e.toggleComponent,labelClicked:e.labelClicked,editLabel:e.editLabel,createLabel:e.createLabel,close:function(t){return e.$emit("close")}}})},s=[],a=l("94ce"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"colors-container"},[l("div",{staticClass:"color unique-color",class:{"color-clicked":this.color.wasClicked},style:e.colorObject,on:{click:e.labelClicked}},[l("span",{class:{red:this.clickedLabelClass}},[e._v(e._s(e.color.title))])]),e.displayIcon?l("i",{staticClass:"el-icon-edit",on:{click:e.editLabel}}):e._e()])},c=[],n={props:{color:{type:Object},displayIcon:{type:Boolean},index:{type:Number},editMode:{type:Boolean},choosenLabelIndex:{type:Number},createMode:{type:Boolean}},data(){return{}},methods:{labelClicked(){const e={id:this.color.id,title:this.color.title,color:this.color.color,selectedColor:this.color.selectedColor,wasClicked:!1};this.createMode&&this.$emit("createLabel",{label:e,index:this.index}),this.$emit("labelClicked",{label:e,index:this.index})},editLabel(){const e={id:this.color.id,title:this.color.title,color:this.color.color,selectedColor:this.color.selectedColor,wasClicked:this.color.wasClicked};this.$emit("editLabel",{label:e,labelIndex:this.index})}},computed:{colorObject(){return{"--color":this.color.color,"--hover-color":this.color.selectedColor,"color-clicked":this.color.wasClicked,width:(this.displayIcon,"100%")}},clickedLabelClass(){return this.choosenLabelIndex===this.index&&this.editMode?"red":""}}},r=n,d=(l("a609"),l("2877")),b=Object(d["a"])(r,i,c,!1,null,"1cf7c898",null),h=b.exports,m=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("task-action-container",{attrs:{title:"Labels"},on:{close:function(t){return e.$emit("close")}}},[l("div",{staticClass:"task-label-container"},[l("li",[l("form-input",{attrs:{showLabel:!0,labelText:"search your labels",type:"text"},model:{value:e.labelText,callback:function(t){e.labelText=t},expression:"labelText"}})],1),l("li",e._l(e.labelsToDisplay,(function(t,o){return l("label-color",{key:o,attrs:{displayIcon:!0,color:t,index:o},on:{labelClicked:e.labelClicked,editLabel:e.editLabel}})})),1),l("button",{staticClass:"btn-primary full-width",on:{click:e.createNewLabel}},[e._v(" Create new Label ")])])])},u=[],p=l("c48f"),C={props:{colors:{type:Array}},components:{TaskActionContainer:a["a"],LabelColor:h,FormInput:p["a"]},data(){return{labelText:""}},methods:{createNewLabel(){this.$emit("toggleCreateComponent","task-create-label")},labelClicked({label:e,index:t}){this.$emit("labelClicked",e,t),this.colors[t].wasClicked=!this.colors[t].wasClicked},editLabel(e){console.log("task choose label:",e),this.$emit("editLabel",e)}},computed:{labelsToDisplay(){const e=this.labelText.toLowerCase();return this.colors.filter(t=>t.title.toLowerCase().includes(e))}}},k=C,f=(l("5cc9"),Object(d["a"])(k,m,u,!1,null,"0e8687ed",null)),x=f.exports,v=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("task-action-container",{attrs:{title:e.editMode?"Edit Label":"Create Label",showIcon:!0},on:{back:function(t){return e.$emit("back","task-choose-label")}}},[l("div",{staticClass:"task-create-label-container"},[l("li",[l("label",[e._v("Name")]),l("form-input",{model:{value:e.labelText,callback:function(t){e.labelText=t},expression:"labelText"}})],1),l("span",[e._v("Labels")]),l("li",[l("label",[e._v("Select Color")]),e._l(e.newColors,(function(t,o){return l("label-color",{key:o,attrs:{choosenLabelIndex:e.choosenLabelIndex,color:t,index:o,editMode:e.editMode,title:e.title,createMode:!e.editMode},on:{editLabel:e.editLabel,labelClicked:e.labelClicked,createLabel:e.createLabel}})}))],2),l("button",{staticClass:"btn-primary full-width",on:{click:e.createNewLabel}},[e._v(" "+e._s(this.editMode?"Save":"Create")+" ")])])])},L=[],w={props:{choosenColor:{type:String},title:{type:String},editMode:{type:Boolean},choosenLabelIndex:{type:Number},colors:{type:Array},labelToEdit:{type:Object}},components:{TaskActionContainer:a["a"],LabelColor:h,formInput:p["a"]},mounted(){this.title&&this.editMode&&(this.labelText=this.title)},data(){return{labelText:"",labelToCreate:null,labelToEditIndex:-1,newColors:[{title:"",color:"#61BD4F",selectedColor:"#519839",wasClicked:!1},{title:"",color:"#f2d600",selectedColor:"#D9B51C",wasClicked:!1},{title:"",color:"#ff9f1a",selectedColor:"#cd8313",wasClicked:!1},{title:"",color:"#eb5a46",selectedColor:"#b04632",wasClicked:!1},{title:"",color:"#0079BF",selectedColor:"#055A8C",wasClicked:!1},{title:"",color:"#C377E0",selectedColor:"#89609E",wasClicked:!1}]}},methods:{createNewLabel(){this.editMode?(this.colors[this.labelToEdit.index]=this.labelText,this.labelText&&(this.labelToEdit.title=this.labelText),this.labelToEdit.wasClicked=!1,this.$emit("createLabel",{label:this.labelToEdit,index:this.choosenLabelIndex})):this.labelToCreate&&(this.labelToCreate.title=this.labelText,this.$emit("createLabel",this.labelToCreate))},createLabel({label:e,index:t}){console.log("label to create methods in create label",e),this.labelToCreate=e},labelClicked(e){this.newColors.forEach((t,l)=>{e.index===l?t.wasClicked=!0:t.wasClicked=!1})},editLabel(e){this.labelToEditIndex=e}},computed:{isCreateMode(){return!this.editMode}},created(){this.choosenLabelIndex>=-1&&(this.newColors[this.choosenLabelIndex].wasClicked=!this.newColors[this.choosenLabelIndex].wasClicked)}},g=w,T=(l("3aec"),Object(d["a"])(g,v,L,!1,null,"23d4f05d",null)),_=T.exports,M=l("fa7d"),y={components:{TaskActionContainer:a["a"],LabelColor:h,TaskChooseLabel:x,TaskCreateLabel:_},data(){return{component:"task-choose-label",choosenColor:"",editMode:!1,choosenLabelIndex:-1,title:"",newLabel:null,labelToEdit:null}},computed:{board(){return this.$store.getters.board},labels(){return this.$store.getters.board.labels}},methods:{toggleComponent(e){this.component=e,"task-choose-label"===e&&(this.editMode=!1)},selectedColor({name:e,color:t}){this.component=e,this.choosenColor=t},labelClicked(e,t){this.$emit("setLabel",e)},editLabel(e){this.editMode=!0,this.choosenLabelIndex=e.labelIndex,this.title=e.label.title,this.labelToEdit=e.label,console.log("from task label",e),this.toggleComponent("task-create-label")},createLabel(e){if(console.log(e),e.index>-1)this.$emit("editLabel",e),this.editMode=!1;else{const t=M["b"].deepCopy(this.board);t.labels.push(e),this.$store.dispatch({type:"saveBoard",board:t})}this.component="task-choose-label"}}},$=y,E=(l("1264"),Object(d["a"])($,o,s,!1,null,"300d9c34",null));t["a"]=E.exports},d438:function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"task-members"},[l("task-action-container",{attrs:{title:"Search Members"},on:{close:e.closeComp}},[l("form-input",{attrs:{showLabel:!0,labelText:"search for members",type:"text"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),l("div",[e.search.length||e.filterdMembers.length?l("div",{staticClass:"members-container"},[e.filterdMembers.length?l("div",[l("h3",[e._v(e._s(e.boardMembersText))]),e._l(e.filterdMembers,(function(t){return l("member",{key:t._id,attrs:{member:t},on:{toggleMember:function(l){return e.toggleMember(t)}}},[e.isInGroup(t)?l("i",{staticClass:"el-icon-check v-member"}):e._e()])}))],2):l("div",{staticClass:"member-search-status"},[l("h6",[e._v(" No members found please confirm that the person your'e looking for is a member of this board ")])])]):l("div",{staticClass:"member-search-status"},[l("h6",[e._v("Start typing to search for members in the group")])])])],1)],1)},s=[],a=l("94ce"),i=l("c48f"),c=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"member flex space-between",on:{click:e.emittoggleMember}},[l("div",{staticClass:"member-container"},[l("Avatar",{attrs:{src:e.member.img,username:e.member.userName,size:30}}),l("span",{staticClass:"member-name"},[e._v(e._s(e.member.userName))])],1),e._t("default")],2)},n=[],r=l("4a89"),d=l.n(r),b={props:{member:{type:Object,required:!0}},components:{Avatar:d.a},methods:{emittoggleMember(){this.$emit("toggleMember")}}},h=b,m=l("2877"),u=Object(m["a"])(h,c,n,!1,null,"176fd885",null),p=u.exports,C={props:["boardMembers","taskMembers"],components:{TaskActionContainer:a["a"],FormInput:i["a"],Member:p},data(){return{search:""}},created(){},computed:{filterdMembers(){this.search.toLowerCase();return this.boardMembers.filter(e=>e.userName.toLowerCase().includes(this.search))},boardMembersText(){return this.filterdMembers.length>1?"Board Members":"Board Member"}},methods:{closeComp(){this.$emit("closeMembersComp")},toggleMember(e){const t=this.isInGroup(e)?"removeMember":"addMember";this.$emit(t,e)},isInGroup(e){return this.taskMembers.find(t=>t._id===e._id)}}},k=C,f=Object(m["a"])(k,o,s,!1,null,null,null);t["a"]=f.exports},e6f0:function(e,t,l){}}]);
//# sourceMappingURL=chunk-0525b0f6.b2b01439.js.map