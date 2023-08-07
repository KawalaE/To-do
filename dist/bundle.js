(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(81),a=n.n(o),r=n(645),s=n.n(r),i=n(667),c=n.n(i),d=new URL(n(961),n.b),l=new URL(n(108),n.b),p=s()(a()),u=c()(d),m=c()(l);p.push([e.id,`*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'QuickSand', sans-serif;\n    font-size: 16px;\n    :focus { outline: none; }\n\n}\ninput,\ntextarea,\nselect,\nbutton {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  border: none;\n}\nbody{\n    min-height: 100vh;\n}\n#page{\n    height: 100vh;\n}\n@font-face {\n    font-family: 'QuickSand';\n    src:  url(${u}) format('woff2'),\n          url(${m}) format('woff');\n}\n.upper-nav{\n    background-color:#5ad4b8;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.navigator-name{\n    color:#482121;\n    font-size: 2.8em;\n    margin-left: 20px;\n    font-weight: bolder;\n}\n.logo{\n    width: 70px;\n    height: 70px;\n}\n.main-content{\n    display: flex;\n    height: calc(100% - 100px);\n}\n.projects-nav{\n    width: 280px;\n    background-color: #EEEEEE;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    display: block;\n    overflow: auto;\n}\n.projects-title{\n    color: #482121;\n    font-size: 2em;\n    font-weight: bold;\n}\n.projects-button{\n    width:60px;\n    height: 60px;\n    font-size: 3em;\n    border-radius: 50%;\n    text-align: center;\n    border: none;\n    padding: 0px 15px;\n    transition: 0.3s;\n}\n\n.projects-button:hover:not([disabled]){\n    background-color: #5ad4b8;\n    cursor: pointer;\n}\n.projects-button:active{\n    transform: scale(90%);\n    transition: 0.3s;\n}\n.projects-add-section{\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    gap: 50px;\n}\n#project-modal, .task-modal{\n    position: absolute;\n    background-color: white;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    max-height: 200px;\n    max-width: 350px;\n    border: 2px solid #5ad4b8;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    padding:15px;\n}\ninput[type=text],.text-area{\n    border: 1px solid rgb(109, 109, 109);\n    border-radius: 4px;\n    font-size: 1.5em;\n    width: 200px;\n    text-align: center;\n}\ninput[type=text]:focus, .text-area:focus {\n    outline:1px solid #5ad4b8;\n}\n.project-add-btn, .task-button, .submit-task{\n    font-size: 1em;\n    padding: 5px;\n    font-weight: bold;\n    border: 2px solid #5ad4b8;\n    color:#5ad4b8;\n    background-color: transparent;\n    width: 120px;\n    text-align: center;\n}\n.project-add-btn:hover:not([disabled]), .task-button:hover:not([disabled]), .submit-task:hover:not([disabled]){\n    background-color: #5ad4b8;\n    color: white;\n    transition: 0.3s;\n    cursor: pointer;\n}\n.project-add-btn:active:not([disabled]), .task-button:active:not([disabled]), .submit-task:active:not([disabled]){\n    background-color: #5ad4b8;\n    color: white;\n    transform: scale(95%);\n    cursor: pointer;\n}\n.close-btn{\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n}\n.close-btn:hover{\n    transform: scale(120%);\n    transition: 0.3s;\n}\n.close-btn:active{\n    transform: scale(90%);\n    transition: 0.3s;\n}\n.modal-content{\n    display:flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    flex-direction: column;\n    gap:25px;\n    align-items: center;\n}\n.projects-display{\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n.pro-instance{\n    color: #4e4e4e;\n    font-size: 1.8em;\n    font-weight: bold;\n    text-align: center;\n    width: 12ch;\n}\n.pro-instance:hover:not([disabled]){\n    color: #5ad4b8;\n    transform: scale(110%);\n    transition: 0.3s;\n    cursor: pointer;\n}\n.remove-project, .remove-task{\n    width: 45px;\n    height: 45px;\n    font-size: 1.2em;\n    border-radius: 50%;\n    text-align: center;\n    border: none;\n    padding: 0px 15px;\n    transition: 0.3s;\n    font-weight: bolder;\n    background-color: transparent;\n}\n.remove-project:hover:not([disabled]), .remove-task:hover:not([disabled]){\n    background-color: #f0c0d2;\n    cursor: pointer;\n}\n.remove-project:active, .remove-task:active{\n    transform: scale(90%);\n    transition: 0.3s;\n}\n.project-div{\n    display: flex;\n    align-items: center;\n}\n.project-active{\n    color: #5ad4b8;\n}\n.task-modal{\n   max-height: 500px;\n}\n.task-form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n    gap: 30px;\n}\n.task-display{\n    flex-grow:1;\n    background-color: rgb(255, 255, 255);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    align-items: center;\n}\n.task-button{\n    height: 50px;\n    width: 125px;\n    font-size: 1.3em;\n    margin-top: 40px;\n}\n.text-area{\n    max-height: 100px;\n    resize: none;\n    font-size: 1.2em;\n}\n.task-date{\n    font-size: 1.2em;\n    cursor:pointer;\n}\n.task-priority{\n    font-size: 1.2em;\n    background-color: #5ad4b8;\n    color: white;\n    padding: 2px;\n    border-radius: 4px;\n    font-weight: bolder;\n    cursor: pointer;\n}\noption{\n    font-weight: 600;\n}\n.status-info-label{\n    display: flex;\n    gap: 20px;\n    font-size: 1.2em;\n    justify-content: center;\n    align-items: center;\n}\ninput[type=checkbox]{\n    accent-color: #5f5f5f;\n    margin: 4px 0 0;\n    line-height: normal;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n.task-item{\n    display: flex;\n    gap: 30px;\n    padding: 10px;\n    margin-left: 20px;\n    margin-right:20px;\n    align-items: center;\n}\n.task-item div{\n    font-size:  1.3em;\n    font-weight: bold;\n}\n.task-disp-desc{\n    word-break: break-word;\n    color: #3a927e;\n    min-width: 200px;\n}\n.task-disp-date{\n    width: 130px;\n}\n.task-disp-priority-low{\n    color: rgb(0, 182, 55);\n    width: 100px;\n}\n.task-disp-priority-medium{\n    color: rgb(177, 130, 0);\n    width: 100px;\n}\n.task-disp-priority-high{\n    color: rgb(236, 77, 77);\n    width: 100px;\n}\n.grey-out{\n    color: rgb(175, 175, 175);\n    text-decoration: line-through\n}`,""]);const h=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],d=o.base?c[0]+o.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=n(r[s]);t[i].references--}for(var c=o(e,a),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},108:(e,t,n)=>{e.exports=n.p+"306685960988d272e335.woff"},961:(e,t,n)=>{e.exports=n.p+"cc3427b9952f4528a4a1.woff2"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),s=n.n(r),i=n(565),c=n.n(i),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"6d21cb06d315ac4f6b06.svg",v=n.p+"3d5ccb3c06264dd8a878.svg",b=[];class g{constructor(e){this.name=e,this.tasks=[]}get projectName(){console.log(this.name)}}const y=new g("Home"),x=new g("Garden");b.push(y),b.push(x),console.log(b);class k{constructor(e,t,n,o){this.description=e,this.dueDate=t,this.priority=n,this.status=o}}const E=new k("cleaning","12.9.2023","low",0);console.log(E);const L=document.getElementById("page"),j=new Image;j.src=f;const w=new Image;w.src=v;class C{static setFavicon(){const e=document.querySelector("head"),t=document.createElement("link");t.setAttribute("rel","shortcut icon"),t.setAttribute("href",j.src),e.appendChild(t)}static horizontalNav(){const e=document.createElement("div");e.classList.add("upper-nav"),L.appendChild(e);const t=document.createElement("p");t.classList.add("navigator-name"),t.textContent="To do",e.appendChild(t);const n=document.createElement("img");n.classList.add("logo"),n.src=j.src,e.appendChild(n)}static mainContentArea(){const e=document.createElement("div");return e.classList.add("main-content"),L.appendChild(e),e}static projectsNavArea(e){const t=document.createElement("div");return t.classList.add("projects-nav"),e.appendChild(t),t}static displayCurrentProjects(e){const t=document.createElement("div");return t.classList.add("projects-display"),e.appendChild(t),t}static projectsAdditionSection(e){const t=document.createElement("div");return t.classList.add("projects-add-section"),e.appendChild(t),t}static sectionTitle(e){const t=document.createElement("div");t.textContent="Projects",t.classList.add("projects-title"),e.appendChild(t)}static projectAddBtn(e){const t=document.createElement("button");return t.classList.add("projects-button"),t.innerHTML="+",e.appendChild(t),t}static projectModal(e){const t=document.createElement("dialog");return t.id="project-modal",e.appendChild(t),t}static projectInputForm(){const e=document.createElement("form");e.method="dialog";const t=document.createElement("div");t.classList.add("modal-content");const n=document.createElement("input");n.maxLength=11,n.id="project-title",n.type="text",n.placeholder="Project title",e.appendChild(n),document.querySelector("#project-modal").appendChild(t),document.querySelector("#project-modal").appendChild(e),document.querySelector(".modal-content").appendChild(e)}static projectModalCloseBtn(e){const t=document.createElement("img");t.classList.add("close-btn"),t.src=w.src,e.appendChild(t),t.addEventListener("click",(()=>{e.close(),document.querySelector("#project-title").value="",this.disableOrEnableButtons(!1)}))}static projectModalAddBtn(){const e=document.querySelector("#project-title"),t=document.createElement("button");t.classList.add("project-add-btn"),t.innerHTML="Add project",document.querySelector("#project-modal").appendChild(t),t.addEventListener("click",(()=>{const t=new g(e.value);if(e.value){b.push(t);let n=document.createElement("div");n.classList.add("pro-instance"),n.innerHTML=t.name,e.value="",document.querySelector("#project-modal").close(),this.addProject(n),this.disableOrEnableButtons(!1)}else alert("Project name cannot be empty!");console.log(b)})),document.addEventListener("keypress",(e=>{"Enter"===e.key&&t.click()})),document.querySelector(".modal-content").appendChild(t)}static disableOrEnableButtons(e){document.querySelector(".projects-button").disabled=e,document.querySelector(".task-button").disabled=e}static projectModalHandler(e,t){t.addEventListener("click",(()=>{e.show(),this.disableOrEnableButtons(!0)}))}static taskDisplayArea(e){const t=document.createElement("div");t.classList.add("task-display"),e.appendChild(t)}static removeProjectButtonHandler(e){e.addEventListener("click",(e=>{if(confirm("Do you want to remove this project?")){let t=0;const n=e.target.parentNode,o=n.firstChild.textContent;n.remove();const a=document.querySelectorAll(".pro-instance"),r=document.querySelectorAll(".task-item");a.forEach((e=>{e.classList.contains("project-active")||(t++,r.forEach((e=>{e.remove()})))}));for(let e in b)b[e].name===o&&b.splice(e,1);t===b.length&&(document.querySelector(".task-button").style.visibility="hidden"),console.log(b)}}))}static addProject(e){const t=document.createElement("div"),n=document.createElement("button");n.classList.add("remove-project"),n.innerHTML="x",this.removeProjectButtonHandler(n),t.classList.add("project-div"),document.querySelector(".projects-display").appendChild(t),t.appendChild(e),t.appendChild(n),this.taskModalHandler()}static createTaskModal(){const e=document.createElement("dialog");e.classList.add("task-modal"),document.querySelector(".task-display").appendChild(e);const t=document.createElement("form");t.classList.add("task-form");const n=document.createElement("img");n.classList.add("close-btn"),n.src=w.src,e.appendChild(n),n.addEventListener("click",(()=>{e.close(),this.disableOrEnableButtons(!1),document.querySelectorAll(".remove-project").forEach((e=>{e.disabled=!1})),document.querySelectorAll(".pro-instance").forEach((e=>{e.disabled=!1}))}));const o=document.createElement("textarea");o.classList.add("text-area"),o.maxLength="55",o.placeholder="Task description";const a=document.createElement("input");a.type="date",a.classList.add("task-date");const r=document.createElement("select");r.classList.add("task-priority");const s=document.createElement("option");s.value="",s.disabled=!0,s.selected=!0,s.innerHTML="Select priority",r.appendChild(s);let i=document.createElement("option");i.value="low",i.innerHTML="low",r.appendChild(i);let c=document.createElement("option");c.value="medium",c.innerHTML="medium",r.appendChild(c);let d=document.createElement("option");d.value="high",d.innerHTML="high",r.appendChild(d);const l=document.createElement("submit-task");l.innerHTML="Add task",l.classList.add("submit-task"),l.addEventListener("click",(()=>{if(o.value||alert("Please, fill task description"),a.value||alert("Please, fill end date"),r.value){console.log("task added");let t=new k(o.value,a.value,r.value,"0"),n=document.querySelector(".project-active").innerHTML;b.forEach((e=>{e.name===n&&(e.tasks.push(t),this.taskDisplay())})),o.value="",a.value="",r.value="",e.close(),this.disableOrEnableButtons(!1),document.querySelectorAll(".remove-project").forEach((e=>{e.disabled=!1})),document.querySelectorAll(".pro-instance").forEach((e=>{e.disabled=!1}))}else alert("Please, select priority.")})),t.appendChild(o),t.appendChild(a),t.appendChild(r),t.appendChild(l),e.appendChild(t)}static taskDisplay(){const e=document.createElement("div");for(;e.firstChild;)e.removeChild(e.lastChild);document.querySelectorAll(".task-item").forEach((e=>{e.remove()})),document.querySelectorAll(".pro-instance").forEach((e=>{e.classList.contains("project-active")&&b.forEach((t=>{if(t.name===e.innerHTML&&0!==b.length)for(let e=0;e<t.tasks.length;e++){const n=document.createElement("div");document.querySelector(".task-display").appendChild(n),n.classList.add("task-item"),console.log(t.tasks);let o=document.createElement("div");o.classList.add("task-disp-desc"),o.innerHTML=t.tasks[e].description,n.appendChild(o);let a=document.createElement("div");a.classList.add("task-disp-date"),a.innerHTML=t.tasks[e].dueDate,n.appendChild(a);let r=document.createElement("div");r.innerHTML=t.tasks[e].priority,"low"===r.innerHTML?r.classList.add("task-disp-priority-low"):"medium"===r.innerHTML?r.classList.add("task-disp-priority-medium"):"high"===r.innerHTML&&r.classList.add("task-disp-priority-high"),n.appendChild(r);let s=document.createElement("input");s.type="checkbox",s.classList.add("task-state"),n.appendChild(s),console.log(t.tasks[e].description),console.log(b),this.checkboxHandler(s),"1"===t.tasks[e].status?(o.classList.add("grey-out"),a.classList.add("grey-out"),r.classList.add("grey-out"),s.value="1",s.checked=!0):(o.classList.remove("grey-out"),a.classList.remove("grey-out"),r.classList.remove("grey-out"),s.value="0",s.checked=!1);const i=document.createElement("button");n.appendChild(i),i.innerHTML="x",i.classList.add("remove-task"),this.deleteTaskHandler(i,n,o)}}))}))}static deleteTaskHandler(e,t,n){e.addEventListener("click",(e=>{if(confirm("Do you want to remove this task?")){console.log("removed");const e=document.querySelector(".project-active").innerHTML,o=n.innerHTML;console.log(o),b.forEach((t=>{t.name===e&&t.tasks.forEach((e=>{e.description===o&&t.tasks.splice(t.tasks.indexOf(e),1)}))})),t.remove(),console.log(b)}}))}static taskModalHandler(){const e=document.querySelectorAll(".pro-instance");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e!==t&&e.classList.remove("project-active")})),t.classList.add("project-active"),this.taskDisplay(),document.querySelector(".task-button").style.visibility="visible",document.querySelector(".task-button").addEventListener("click",(()=>{document.querySelector(".task-modal").show(),e.forEach((e=>{e.disabled=!0})),document.querySelectorAll(".remove-project").forEach((e=>{e.disabled=!0})),this.disableOrEnableButtons(!0)}))}))}))}static addTaskButton(){const e=document.createElement("button");document.querySelector(".task-display").appendChild(e),e.innerHTML="Add tasks",e.classList.add("task-button"),e.style.visibility="hidden"}static displayInitialProjects(){for(let e=0;e<b.length;e++){let t=document.createElement("button");t.classList.add("pro-instance"),t.innerHTML=b[e].name,this.addProject(t)}}static checkboxHandler(e){e.addEventListener("click",(()=>{let t=Array.from(e.parentNode.childNodes).slice(0,-1);"1"===e.value?(e.value="0",t.forEach((e=>{e.classList.remove("grey-out")})),console.log("unchecked!")):(e.value="1",t.forEach((e=>{e.classList.add("grey-out")})),console.log("checked!"));let n=e.parentNode.firstChild.innerHTML,o=document.querySelector(".project-active").innerHTML;b.forEach((t=>{t.name===o&&t.tasks.forEach((t=>{t.description===n&&("1"===e.value?t.status="1":"0"===e.value&&(t.status="0"))}))})),console.log(b)}))}}!function(){C.setFavicon(),C.horizontalNav();const e=C.mainContentArea(),t=C.projectsNavArea(e),n=C.projectsAdditionSection(t);C.sectionTitle(n);const o=C.projectAddBtn(n),a=C.projectModal(e);C.projectModalHandler(a,o),C.projectModalCloseBtn(a),C.projectInputForm(),C.projectModalAddBtn(),C.taskDisplayArea(e),C.displayCurrentProjects(t),C.displayInitialProjects(),C.addTaskButton(),C.createTaskModal()}()})()})();