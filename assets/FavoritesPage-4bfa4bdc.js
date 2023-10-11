import{n,L as w,r as o,u as v,g as b,j as t}from"./index-9d70d1e2.js";import{u as S,d as k,S as F,a as I,M as C,n as L}from"./defolt-856ba1a3.js";const M=n.div`
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

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`,O=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-bottom: 100px;
`,B=n.li`
  position: relative;
  width: 274px;
  height: 426px;
  text-align: center;
`,E=n.div`
  margin-top: 14px;
  margin-bottom: 28px;
`,x=n.p`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 0, 7;
  font-style: normal;
  color: #12141780 50%;
`,N=n.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
`,z=n.button`
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
`,D=n.button`
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
`,J=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  margin-top: 50px;
`,P=n.p`
  font-size: 30px;
  margin-bottom: 20px;
`,W=n(w)`
  font-size: 30px;
  font-weight: bold;
`,R=()=>{const[a,h]=o.useState(JSON.parse(localStorage.getItem("isFavorites"))||[]),s=v(e=>e.car.carData.filter(i=>a.includes(i.id))),[g,m]=o.useState(!1),[r,f]=o.useState(8),l=S(),u=e=>{if(a.includes(e)){const c=a.filter(y=>y!==e);h(c),localStorage.setItem("isFavorites",JSON.stringify(c))}},[d,j]=o.useState(new Array(s.length).fill(!1)),p=e=>{const i=[...d];i[e]=!i[e],j(i)};return o.useEffect(()=>{l(b())},[l]),t.jsxs(M,{className:"container",children:[t.jsx(O,{className:"list",children:s&&s.length>0?s.slice(0,r).map((e,i)=>t.jsxs(B,{className:"blok",children:[t.jsx("img",{src:g?k:e.img,alt:e.make,width:274,height:268,onError:()=>{m(!0)}}),t.jsx(N,{type:"button",onClick:()=>u(e.id),children:a.includes(e.id)?t.jsx(I,{width:"16",height:"16"}):t.jsx(F,{width:"16",height:"16"})}),t.jsxs(E,{children:[t.jsxs("h3",{children:[t.jsx("span",{children:e.make})," ",t.jsx("span",{children:e.model}),t.jsx("span",{children:e.year}),e.rentalPrice]}),t.jsxs(x,{children:[t.jsx("span",{children:e.address.split(", ")[1]})," |",t.jsx("span",{children:e.address.split(", ")[2]})," |",t.jsx("span",{children:e.rentalCompany})]}),t.jsxs(x,{children:[t.jsx("span",{children:e.type})," | ",t.jsx("span",{children:e.model})," |",t.jsx("span",{children:e.id})," |",t.jsx("span",{children:e.functionalities[0].split(" ").slice(0,2).join(" ")})]})]}),t.jsx(D,{type:"button",onClick:()=>p(i),children:"Learn more"}),d[i]&&t.jsx(C,{toggleOpen:()=>p(i),data:e})]},L())):t.jsxs(J,{children:[t.jsx(P,{children:"No favorite cars found. "}),t.jsx("p",{children:t.jsx(W,{to:"/catalog",children:"Go to Catalog"})})]})}),r<(s?s.length:0)&&t.jsx(z,{type:"button",onClick:()=>f(e=>e+8),children:"Load more"})]})};export{R as default};
