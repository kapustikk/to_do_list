(this.webpackJsonpto_do_list=this.webpackJsonpto_do_list||[]).push([[0],{2:function(e,t,n){e.exports={TodoList:"Todolist_TodoList__CjD_K",todoItem:"Todolist_todoItem__Z6Kd_",compleatedItem:"Todolist_compleatedItem__K6RnU",completedItem:"Todolist_completedItem__AShqT",todoText:"Todolist_todoText__1jmsl",checkbox:"Todolist_checkbox__390Gt",TodoEditor:"Todolist_TodoEditor__CQaAF",button:"Todolist_button__1DEnh",filter:"Todolist_filter__1yBd4",filterInput:"Todolist_filterInput__2JtX6",modalBackdrop:"Todolist_modalBackdrop___AV4V",modalContent:"Todolist_modalContent__11zdO",iconBtn:"Todolist_iconBtn__1HHQb"}},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n(0),r=n.n(l),a=n(8),c=n.n(a),i=(n(20),n(7)),s=n(13),d=n(3),u=n(4),m=n(6),g=n(5),h=n(11),p=n.n(h),f=n(12),b=n.n(f),j=n(2),O=n.n(j);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"}))),w=l.createElement("g",null),E=l.createElement("g",null),_=l.createElement("g",null),C=l.createElement("g",null),T=l.createElement("g",null),k=l.createElement("g",null),S=l.createElement("g",null),I=l.createElement("g",null),M=l.createElement("g",null),B=l.createElement("g",null),D=l.createElement("g",null),N=l.createElement("g",null),F=l.createElement("g",null),L=l.createElement("g",null),P=l.createElement("g",null);function A(e,t){var n=e.title,o=e.titleId,r=x(e,["title","titleId"]);return l.createElement("svg",v({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 409.6 409.6",style:{enableBackground:"new 0 0 409.6 409.6"},xmlSpace:"preserve",ref:t,"aria-labelledby":o},r),n?l.createElement("title",{id:o},n):null,y,w,E,_,C,T,k,S,I,M,B,D,N,F,L,P)}var K=l.forwardRef(A),J=(n.p,n(14)),U=function(e){var t=e.children,n=e.onClick,l=Object(J.a)(e,["children","onClick"]);return Object(o.jsx)("button",Object(i.a)(Object(i.a)({type:"button",className:O.a.iconBtn,onClick:n},l),{},{children:t}))};U.defaultProps={onClick:function(){return null},children:null};var H=U,R=function(e){var t=e.text,n=e.completed,l=e.onToogleCompleated,r=e.onDelete;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:n,onChange:l}),Object(o.jsx)("p",{className:O.a.todoText,children:t}),Object(o.jsx)(H,{onClick:r,"aria-label":"Delete todo",children:Object(o.jsx)(K,{width:"20",height:"20",fill:"#fff"})})]})},X=function(e){var t=e.todos,n=e.onDeleteTodo,l=e.onToogleCompleated;return Object(o.jsx)("ul",{className:O.a.TodoList,children:t.map((function(e){var t=e.id,r=e.text,a=e.completed;return Object(o.jsx)("li",{className:b()(O.a.todoItem,{"s.completedItem":a}),children:Object(o.jsx)(R,{text:r,completed:a,onToogleCompleated:function(){return l(t)},onDelete:function(){return n(t)}})},t)}))})},q=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:O.a.TodoEditor,onSubmit:this.handleSubmit,children:[Object(o.jsx)("textarea",{value:this.state.message,onChange:this.handleChange}),Object(o.jsx)("button",{type:"submit",className:O.a.button,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}}]),n}(l.Component),z=function(e){var t=e.value,n=e.onChange;return Object(o.jsxs)("label",{className:O.a.filter,children:[Object(o.jsx)("input",{className:O.a.filterInput,type:"text",value:t,onChange:n}),"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"]})},Q=document.querySelector("#modal-root"),V=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleKeydown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 \u043d\u0430 ESC"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(o.jsx)("div",{className:O.a.modalBackdrop,onClick:this.handleBackdropClick,children:Object(o.jsx)("div",{className:O.a.modalContent,children:this.props.children})}),Q)}}]),n}(l.Component);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var Z=l.createElement("polygon",{points:"455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5  455,242.5 "}),Y=l.createElement("g",null),$=l.createElement("g",null),ee=l.createElement("g",null),te=l.createElement("g",null),ne=l.createElement("g",null),oe=l.createElement("g",null),le=l.createElement("g",null),re=l.createElement("g",null),ae=l.createElement("g",null),ce=l.createElement("g",null),ie=l.createElement("g",null),se=l.createElement("g",null),de=l.createElement("g",null),ue=l.createElement("g",null),me=l.createElement("g",null);function ge(e,t){var n=e.title,o=e.titleId,r=G(e,["title","titleId"]);return l.createElement("svg",W({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455 455",style:{enableBackground:"new 0 0 455 455"},xmlSpace:"preserve",ref:t,"aria-labelledby":o},r),n?l.createElement("title",{id:o},n):null,Z,Y,$,ee,te,ne,oe,le,re,ae,ce,ie,se,de,ue,me)}var he=l.forwardRef(ge),pe=(n.p,function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:[],filter:"",showModal:!1},e.addTodo=function(t){var n={id:p.a.generate(),text:t,completed:!1};e.setState((function(e){return{todos:[n].concat(Object(s.a)(e.todos))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){console.log(t),e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredTodos=function(){var t=e.state,n=t.filter,o=t.todos,l=n.toLowerCase();return o.filter((function(e){return e.text.toLowerCase().includes(l)}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.todos!==t.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos)),this.state.todos.length>t.todos.length&&0!==t.todos.length&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,l=e.showModal,r=t.length,a=t.reduce((function(e,t){return t.completed?e+1:e}),0),c=this.getFilteredTodos();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(H,{onClick:this.toggleModal,"aria-label":"Add new todo",children:Object(o.jsx)(he,{width:"30",height:"30",fill:"#fff"})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e \u0434\u0435\u043b: ",r]}),Object(o.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0435\u043b: ",a]})]}),l&&Object(o.jsxs)(V,{onClose:this.toggleModal,children:[Object(o.jsx)(q,{onSubmit:this.addTodo}),Object(o.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Close"})]}),Object(o.jsx)(z,{value:n,onChange:this.changeFilter}),Object(o.jsx)(X,{todos:c,onDeleteTodo:this.deleteTodo,onToogleCompleated:this.toggleCompleted})]})}}]),n}(l.Component)),fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,o=t.getFID,l=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),l(e),r(e),a(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(pe,{})}),document.getElementById("root")),fe()}},[[29,1,2]]]);
//# sourceMappingURL=main.9277c951.chunk.js.map