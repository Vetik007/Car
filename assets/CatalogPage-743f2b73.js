import{n as s,r as a,u as h,g as x,t as l,j as e}from"./index-5af99d4c.js";import{u as w,d as y,S as b,a as v,M as I,n as S}from"./defolt-0d8e1727.js";const k=s.div`
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
`,E=s.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-bottom: 100px;
`,F=s.li`
  position: relative;
  width: 274px;
  height: 426px;
  text-align: center;
`,L=s.div`
  margin-top: 14px;
  margin-bottom: 28px;
`,g=s.p`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 0, 7;
  font-style: normal;
  color: #12141780 50%;
`,C=s.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
`,M=s.button`
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
`,O=s.button`
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
`,B=s.img`
  border-radius: 14px;
`,D=()=>{const[m,f]=a.useState(!1),r=h(t=>t.car.isFavorites),i=w(),o=h(t=>t.car.carData),[d,u]=a.useState(8);a.useEffect(()=>{i(x());const t=JSON.parse(localStorage.getItem("isFavorites")||"[]");t.length>0&&t.forEach(n=>{i(l(n))})},[i]);const[p,j]=a.useState(new Array(o.length).fill(!1)),c=t=>{const n=[...p];n[t]=!n[t],j(n)};return a.useEffect(()=>{i(x());const t=JSON.parse(localStorage.getItem("isFavorites")||"[]");t.length>0&&t.forEach(n=>{i(l(n))})},[i]),a.useEffect(()=>{localStorage.setItem("isFavorites",JSON.stringify(r))},[r]),e.jsxs(k,{className:"container",children:[e.jsx(E,{className:"list",children:o&&o.length>0?o.slice(0,d).map((t,n)=>e.jsxs(F,{className:"blok",children:[e.jsx(B,{src:m?y:t.img,alt:t.make,width:274,height:268,onError:()=>{f(!0)}}),e.jsx(C,{type:"button",onClick:()=>i(l(t.id)),children:r.includes(t.id)?e.jsx(v,{width:"16",height:"16"}):e.jsx(b,{width:"16",height:"16"})}),e.jsxs(L,{children:[e.jsxs("h3",{children:[e.jsx("span",{children:t.make})," ",e.jsx("span",{children:t.model}),e.jsx("span",{children:t.year}),t.rentalPrice]}),e.jsxs(g,{children:[e.jsx("span",{children:t.address.split(", ")[1]})," |",e.jsx("span",{children:t.address.split(", ")[2]})," |",e.jsx("span",{children:t.rentalCompany})]}),e.jsxs(g,{children:[e.jsx("span",{children:t.type})," | ",e.jsx("span",{children:t.model})," |",e.jsx("span",{children:t.id})," |",e.jsx("span",{children:t.functionalities[0].split(" ").slice(0,2).join(" ")})]})]}),e.jsx(O,{type:"button",onClick:()=>c(n),children:"Learn more"}),p[n]&&e.jsx(I,{toggleOpen:()=>c(n),data:t})]},S())):e.jsx("p",{children:"Loading..."})}),d<(o?o.length:0)&&e.jsx(M,{type:"button",onClick:()=>u(t=>t+8),children:"Load more"})]})};export{D as default};
