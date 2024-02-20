(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=c(t);fetch(t.href,i)}})();function S(e){if(!e)return;for(let r=0;r<10;r++){const t=document.createElement("div");t.className=r===0?"tomato-rate-icon tomato-rate-icon-checked":"tomato-rate-icon",e.appendChild(t)}const o=document.querySelectorAll(".tomato-rate-icon");let c=0;for(let r=0;r<o.length;r++){const t=o[r];t.addEventListener("click",()=>{var i;c=r;for(let a=0;a<=c;a++)if(t.classList.contains("tomato-rate-icon-checked"))for(let m=0;m<o.length-c;m++)(i=o[o.length-m])==null||i.classList.remove("tomato-rate-icon-checked");else o[a].classList.add("tomato-rate-icon-checked")})}}const p=[{title:"ADD NEW TASK",icon:"/src/static/icons/add_white.svg",iconEd:"/src/static/icons/add_red.svg"},{title:"TASK LISTS",icon:"/src/static/icons/list_white.svg",iconEd:"/src/static/icons/list_red.svg"},{title:"ANALYTICS REPORT",icon:"/src/static/icons/analysis_white.svg",iconEd:"/src/static/icons/analysis_red.svg"},{title:"RING TONE",icon:"/src/static/icons/ringtone_white.svg",iconEd:"/src/static/icons/ringtone_red.svg"}];function k(e){if(!e)return;for(let t=0;t<p.length;t++){const i=document.createElement("div");i.className="operation-bar-icon",i.innerHTML=`<img src="${t===0?p[t].iconEd:p[t].icon}" class="white icon finger" />`,e.appendChild(i)}const o=document.querySelectorAll(".operation-bar-icon"),c=document.querySelectorAll(".operation-bar-content-body"),r=document.querySelector(".operation-bar-content-title");for(let t=0;t<=o.length;++t)o[t].addEventListener("click",()=>{for(let a=0;a<=o.length;++a)o[a].innerHTML=`<img src="${a===t?p[a].iconEd:p[a].icon}" class="white icon finger" />`,r&&(r.innerHTML=p[t].title),c&&(c[a].style.display=a===t?"block":"none")})}let f,s,l=300,d=250,h=0,y=0,g=0;function n(e){f=document.querySelector(e),s=f.getContext("2d")}n.prototype.setProgress=e=>{h=e};n.prototype.getProgress=()=>h;n.prototype.drawBackgroundCircle=()=>{const e=l/2,o=d/1.6667;s.strokeStyle="#ACACAC",s.lineWidth=50,s.beginPath(),s.arc(e,o,l/2.4,-(Math.PI/2),2*Math.PI),s.stroke()};n.prototype.drawCurrentProgressCircle=()=>{const e=l/2,o=d/1.6667,c=s.createLinearGradient(0,0,0,d);c.addColorStop(0,"#EA5548"),c.addColorStop(1,"#EA5548"),s.strokeStyle=c;const r=1-g/y;n.prototype.setProgress(r),s.beginPath(),s.arc(e,o,l/2.4,-(Math.PI/2),(-.5+2*r)*Math.PI),s.stroke()};n.prototype.createLinearGradientByTime=()=>{const e=s.createLinearGradient(l/2-18,d/2-18,l/2,d/2+50);return e.addColorStop(0,"#333333"),e.addColorStop(1,"#333333"),e};n.prototype.drawTimeText=()=>{s.fillStyle=n.prototype.createLinearGradientByTime(),s.textAlign="center",s.textBaseline="alphabetic",s.font="normal normal bold 40px/48px Lato";let e=g,o=parseInt((e%60).toString());const r=`${parseInt((e/60).toString()).toString().padStart(2,"0")} : ${o.toString().padStart(2,"0")}`;s.fillText(r,l/2,d/1.5)};n.prototype.clear=()=>{s.clearRect(0,0,l,d)};n.prototype.setTime=e=>{y=e};n.prototype.setCurrentTime=e=>{g=e};n.prototype.run=(e,o)=>{let c=0;const r=setInterval(()=>{n.prototype.setTime(e);const i=y-c;c=c+1,i<0?(clearInterval(r),n.prototype.setTime(30),c=0,o&&o()):n.prototype.update(i)},1e3)};n.prototype.update=e=>{n.prototype.setCurrentTime(e),n.prototype.clear(),n.prototype.drawBackgroundCircle(),n.prototype.drawCurrentProgressCircle(),n.prototype.drawTimeText()};const u=[{className:"tomato-clock-task-operation-cirle clock-start",title:"START",icon:"/src/static/icons/play_gray.svg"},{className:"tomato-clock-task-operation-cirle clock-pause",title:"PAUSE",icon:"/src/static/icons/pause_gray.svg"},{className:"tomato-clock-task-operation-cirle clock-reset",title:"RESET",icon:"/src/static/icons/reset_gray.svg"}];function T(e){if(!e)return;for(let c=0;c<u.length;c++){const r=document.createElement("div");r.className=u[c].className,r.innerHTML=`<img src="${u[c].icon}" class="tomato-clock-task-operation-cirle-icon" />
        <div class="tomato-clock-task-operation-cirle-text">${u[c].title}</div>`,e.appendChild(r)}const o=document.querySelector(".clock-start");console.log("clockStartBtn: ",o),o.addEventListener("click",()=>{n.prototype.run(10,()=>{console.log("倒计时执行完毕")})})}const v=new n("canvas");v.update(10);T(document.querySelector(".tomato-clock-task-operation"));S(document.querySelector(".tomato-rate-list"));k(document.querySelector(".operation-bar"));
