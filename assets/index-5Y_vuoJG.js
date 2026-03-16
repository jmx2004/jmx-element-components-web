import{d as s,r as v,e as p,u as n,f as m,o as u}from"./index--KF8VQLd.js";const k=s({__name:"index",setup(_){let a=v([{title:"购物",start:"2026-03-05 08:00",end:"2026-03-05 12:00",editable:!0},{title:"敲代码",start:"2026-03-04 10:00",end:"2026-03-04 22:00"}]),r=e=>{a.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"学习"})},o=e=>{console.log(e)},c=e=>{let l=document.createElement("div"),t=e.timeText.split("-"),d=t[0].replace("上午","").replace("下午","").replace("时",""),i=t[1].replace("上午","").replace("下午","").replace("时","");return l.innerHTML=`
    <div>开始时间: ${d}</div>
    <div>结束时间: ${i}</div>
    <div>标题: ${e.event._def.title}</div> 
  `,{domNodes:[l]}};return(e,l)=>{const t=m("x-calendar");return u(),p(t,{displayEventEnd:"",events:n(a),eventContent:n(c),onDateClick:n(r),onEventClick:n(o)},null,8,["events","eventContent","onDateClick","onEventClick"])}}});export{k as default};
