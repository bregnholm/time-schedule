(this["webpackJsonptime-schedule"]=this["webpackJsonptime-schedule"]||[]).push([[0],{28:function(e,t,a){},33:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),u=(a(38),a(39),a(32)),s=a(14),c=a(12),i=a(24),m=a(9),d=a(15),h=a(16),p=a(20),f=a(18),g=(a(28),a(30)),v=a(13),y=a.n(v),E=(a(41),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).inputField=function(e){switch(e.target.name){case"hourlyPrice":n.setState(Object(m.a)({},e.target.name,e.target.value)),localStorage.setItem("schedule.".concat(e.target.name),e.target.value);break;default:var t={date:e.target.name,hours:e.target.value},a=n.state.workDays,r=a.find((function(e){var a=e.date;return t.date===a}));console.log(r,t),r.hours=t.hours,n.setState({workDays:a}),localStorage.setItem("schedule.workDays",JSON.stringify(a))}n.props.update()},n.dayOfWork=function(){return n.state.workDays.sort((function(e,t){return e.date-t.date})).map((function(e){return r.a.createElement("div",{className:"dayofWalk"},r.a.createElement("span",null,e.date),r.a.createElement("input",{name:e.date,onChange:n.inputField,value:e.hours,type:"number",pattern:"[0-9]*"}))}))},n.addDay=function(){n.setState({addDay:!n.state.addDay})},n.add=function(e){e.preventDefault();var t={date:e.target.date.value,hours:e.target.hours.value},a=n.state.workDays,r=a.find((function(e){var a=e.date;return t.date===a}));r?r.hours=t.hours:a.push(t),n.setState({workDays:a}),localStorage.setItem("schedule.workDays",JSON.stringify(a)),n.addDay()},n.state={endGoal:3e3,hourlyPrice:150,workDays:[],addDay:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(e){for(var t=0;t<localStorage.length;t++){var a=localStorage.key(t);a.includes("schedule.")&&this.setState(Object(m.a)({},a.split("schedule.").pop(),JSON.parse(localStorage.getItem(a))))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"goals ".concat(this.props.open?"open":"")},r.a.createElement("div",null,r.a.createElement("span",null,"Hourly price"),r.a.createElement("input",{name:"hourlyPrice",onChange:this.inputField,value:this.state.hourlyPrice,type:"number",pattern:"[0-9]*"})),r.a.createElement("hr",null),r.a.createElement("div",{onClick:this.addDay},"Add"),this.state.addDay?r.a.createElement("div",{className:"dayofWalk"},r.a.createElement("form",{name:"addDay",onSubmit:this.add},r.a.createElement("input",{type:"submit",value:"Add day"}),r.a.createElement("input",{name:"hours",defaultValue:0,type:"number",pattern:"[0-9]*"}),r.a.createElement("input",{name:"date",defaultValue:y()().format("Y-MM-DD"),max:y()().format("Y-MM-DD"),type:"date"}))):null,this.dayOfWork())}}]),a}(r.a.Component)),k=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).logHours=function(){n.setState({logHours:!n.state.logHours})},n.workList=function(){return n.state.workDays.map((function(e){var t=n.getDuration(e.hours);return r.a.createElement("div",{className:"registeredTime"},r.a.createElement("span",null,e.date),r.a.createElement("span",null,t.hours," hours ",t.minutes>0?" ".concat(t.minutes," minutes"):null))}))},n.update=function(){for(var e=0;e<localStorage.length;e++){var t=localStorage.key(e);t.includes("schedule.")&&n.setState(Object(m.a)({},t.split("schedule.").pop(),JSON.parse(localStorage.getItem(t))))}},n.state={logHours:!1,workDays:[],hourlyPrice:0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(e){this.update()}},{key:"getDuration",value:function(e){var t=60*e*60*1e3,a=y.a.duration(t)._data;return Object(i.a)(Object(i.a)({},a),{},{hours:(a.days>0?a.days:1)*a.hours})}},{key:"render",value:function(){var e=this.state,t=e.workDays,a=e.logHours,n=e.hourlyPrice;console.log({workDays:t});var l=this.getDuration(t.reduce((function(e,t){var a=t.hours;return Number(e)+Number(a)}),0)),o=t.reduce((function(e,t){var a=t.hours;return Number(e)+Number(a)}),0)*n;return console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"schedule"},"Time Schedule",r.a.createElement(g.a,{onClick:this.logHours,variant:"success"}," ")),r.a.createElement("main",null,r.a.createElement(E,{open:a,update:this.update}),r.a.createElement("div",{className:"earnings"},r.a.createElement("div",null,r.a.createElement("h1",null,"Time spent"),r.a.createElement("span",null,l.hours," hours ",l.minutes>0?" ".concat(l.minutes," minutes"):null)),r.a.createElement("div",null,r.a.createElement("h1",null,"Earnings"),r.a.createElement("span",null,Number(o).toFixed(2)," kr"))),r.a.createElement("div",null,this.workList())))}}]),a}(r.a.Component);a(42);function b(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{expand:"lg",variant:"dark"},r.a.createElement(s.a.Brand,{href:"/"},"Peters Stuff"),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(c.a,{className:"mr-auto"},r.a.createElement(c.a.Link,{href:"/"},"Home"),r.a.createElement(c.a.Link,{href:"/eggs"},"Eggs"),r.a.createElement(c.a.Link,{href:"/walks"},"Walks"),r.a.createElement(c.a.Link,{href:"/time-schedule"},"Time Schedule")))),r.a.createElement(k,null),r.a.createElement("footer",null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a0167b79.chunk.js.map