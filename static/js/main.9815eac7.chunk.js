(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),l=(a(33),a(24)),o=a(18),s=a(19),u=a(26),m=a(25),d=a(20),p=a(21),f=function(e){var t=e.data.map((function(t){return r.a.createElement("div",{key:t.key,className:"list"},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){return e.setUpdate(a.target.value,t.key)}})),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}})))}));return r.a.createElement("div",{style:{width:"100%",marginTop:"150px"}},r.a.createElement(p.a,{duration:400,easing:"ease-in-out"},t))},y=a(12),h=a(22),v=a(61),E=a(62),k=a(59),x=a(60);y.b.add(h.a);var I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[{text:"First Commit",key:114522455554},{text:"Second Commit",key:0x411935ed23b8a}],currentItem:{text:"",key:""}},e.handleInput=function(t){e.setState({currentItem:{text:t.target.value,key:Date.now()}})},e.addItem=function(t){t.preventDefault();var a=e.state.currentItem;if(""!==a.text){var n=[].concat(Object(l.a)(e.state.items),[a]);e.setState({items:n,currentItem:{text:"",key:""}})}},e.deleteItem=function(t){console.log(t);var a=e.state.items.filter((function(e){return e.key!==t}));console.log(a),e.setState({items:a})},e.setUpdate=function(t,a){var n=e.state.items.filter((function(e){return e.key!==a}));e.setState({items:n})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E.a,null,r.a.createElement(k.a,{style:{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column"}},r.a.createElement(x.a,{variant:"h6",style:{paddingTop:"20px"}},"TODO LIST /ADD /DELETE /EDIT"),r.a.createElement("form",{id:"todolist-form"},r.a.createElement("input",{type:"text",value:this.state.currentItem.text,placeholder:"enter text here",onChange:this.handleInput}),r.a.createElement(v.a,{variant:"contained",color:"secondary",href:"#contained-buttons",onClick:this.addItem},"ADD")))),r.a.createElement(f,{data:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(n.Component);i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9815eac7.chunk.js.map