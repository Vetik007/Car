import{n as i,r as o,u as c,g as j,t as h,j as e}from"./index-9d8928a4.js";import{u as w,d as y,S as b,a as v,M as I,n as k}from"./defolt-e8d2f77c.js";const S=i.div`
  /* position: relative; */
  /* overflow-x: hidden; */
  height: 100vh;
  /* &::-webkit-scrollbar { */
  /* display: none; */
  /* } */
  margin: 0;
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */

  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    margin: 0;
    min-width: 704px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1180px) {
    /* Ширина для экранов от 768px до 1439px */
    margin: 0;
    min-width: 1180px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`,L=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-bottom: 100px;
`,C=i.li`
  position: relative;
  width: 274px;
  height: 426px;
  text-align: center;
`,E=i.div`
  margin-top: 14px;
  margin-bottom: 28px;
`,x=i.p`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 0, 7;
  font-style: normal;
  color: #12141780 50%;
`,F=i.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
`,M=i.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: none;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 0, 7;
  font-style: normal;
  color: #3470ff;
  text-decoration: underline;
`,O=i.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  padding: 12px;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 0, 7;
  font-style: normal;
  color: #ffffff;
`,B=i.img`
  border-radius: 14px;
`,D=()=>{const[g,m]=o.useState(!1),r=c(t=>t.car.isFavorites),a=w(),s=c(t=>t.car.carData),[l,f]=o.useState(8),[d,u]=o.useState(new Array(s.length).fill(!1)),p=t=>{const n=[...d];n[t]=!n[t],u(n)};return o.useEffect(()=>{localStorage.setItem("isFavorites",JSON.stringify(r))},[r]),o.useEffect(()=>{a(j());const t=JSON.parse(localStorage.getItem("isFavorites")||"[]");t.length>0&&t.forEach(n=>{a(h(n))})},[a]),e.jsxs(S,{className:"container",children:[e.jsx(L,{className:"list",children:s&&s.length>0?s.slice(0,l).map((t,n)=>e.jsxs(C,{className:"blok",children:[e.jsx(B,{src:g?y:t.img,alt:t.make,width:274,height:268,onError:()=>{m(!0)}}),e.jsx(F,{type:"button",onClick:()=>a(h(t.id)),children:r.includes(t.id)?e.jsx(v,{width:"16",height:"16"}):e.jsx(b,{width:"16",height:"16"})}),e.jsxs(E,{children:[e.jsxs("h3",{children:[e.jsx("span",{children:t.make})," ",e.jsx("span",{children:t.model}),e.jsx("span",{children:t.year}),t.rentalPrice]}),e.jsxs(x,{children:[e.jsx("span",{children:t.address.split(", ")[1]})," |",e.jsx("span",{children:t.address.split(", ")[2]})," |",e.jsx("span",{children:t.rentalCompany})]}),e.jsxs(x,{children:[e.jsx("span",{children:t.type})," | ",e.jsx("span",{children:t.model})," |",e.jsx("span",{children:t.id})," |",e.jsx("span",{children:t.functionalities[0].split(" ").slice(0,2).join(" ")})]})]}),e.jsx(O,{type:"button",onClick:()=>p(n),children:"Learn more"}),d[n]&&e.jsx(I,{toggleOpen:()=>p(n),data:t})]},k())):e.jsx("p",{children:"Loading..."})}),l<(s?s.length:0)&&e.jsx(M,{type:"button",onClick:()=>f(t=>t+8),children:"Load more"})]})};export{D as default};
