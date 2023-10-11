import{R as x,a as k,c as L,r as u,b as a,n as l,j as n,d as m}from"./index-c4be7e8d.js";function C(e=x){const t=e===x?k:L(e);return function(){const{store:i}=t();return i}}const E=C();function S(e=x){const t=e===x?E:C(e);return function(){return t().dispatch}}const Z=S();let G=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const K=e=>u.createElement("svg",{width:18,height:16,viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M15.63 2.4575C15.2469 2.07425 14.7921 1.77023 14.2915 1.56281C13.7909 1.35539 13.2543 1.24863 12.7125 1.24863C12.1706 1.24863 11.634 1.35539 11.1334 1.56281C10.6329 1.77023 10.178 2.07425 9.79497 2.4575L8.99997 3.2525L8.20497 2.4575C7.4312 1.68373 6.38174 1.24903 5.28747 1.24903C4.19319 1.24903 3.14374 1.68373 2.36997 2.4575C1.5962 3.23127 1.1615 4.28072 1.1615 5.375C1.1615 6.46927 1.5962 7.51873 2.36997 8.2925L3.16497 9.0875L8.99997 14.9225L14.835 9.0875L15.63 8.2925C16.0132 7.90943 16.3172 7.45461 16.5247 6.95401C16.7321 6.45342 16.8388 5.91686 16.8388 5.375C16.8388 4.83313 16.7321 4.29657 16.5247 3.79598C16.3172 3.29539 16.0132 2.84056 15.63 2.4575Z",stroke:"white",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),V=e=>u.createElement("svg",{width:18,height:16,viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M15.63 2.4575C15.2469 2.07425 14.7921 1.77023 14.2915 1.56281C13.7909 1.35539 13.2543 1.24863 12.7125 1.24863C12.1706 1.24863 11.634 1.35539 11.1334 1.56281C10.6329 1.77023 10.178 2.07425 9.79497 2.4575L8.99997 3.2525L8.20497 2.4575C7.4312 1.68373 6.38174 1.24903 5.28747 1.24903C4.19319 1.24903 3.14374 1.68373 2.36997 2.4575C1.5962 3.23127 1.1615 4.28072 1.1615 5.375C1.1615 6.46927 1.5962 7.51873 2.36997 8.2925L3.16497 9.0875L8.99997 14.9225L14.835 9.0875L15.63 8.2925C16.0132 7.90943 16.3172 7.45461 16.5247 6.95401C16.7321 6.45342 16.8388 5.91686 16.8388 5.375C16.8388 4.83313 16.7321 4.29657 16.5247 3.79598C16.3172 3.29539 16.0132 2.84056 15.63 2.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),z=e=>{if(e){const[,t,r]=e.split(",");return{city:t,country:r}}};var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=a.createContext&&a.createContext(j),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c.apply(this,arguments)},O=globalThis&&globalThis.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function v(e){return e&&e.map(function(t,r){return a.createElement(t.tag,c({key:r},t.attr),v(t.child))})}function R(e){return function(t){return a.createElement(B,c({attr:c({},e.attr)},t),v(e.child))}}function B(e){var t=function(r){var i=e.attr,o=e.size,d=e.title,f=O(e,["attr","size","title"]),p=o||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,f,{className:s,style:c(c({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&a.createElement("title",null,d),e.children)};return w!==void 0?a.createElement(w.Consumer,null,function(r){return t(r)}):t(j)}function I(e){return R({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(e)}const M=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 100;
`,_=l.div`
  position: relative;
  overflow: auto;
  width: 561px;
  max-height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
`,N=l.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  height: 30px;
  width: 30px;
  right: 10px;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
`,T=l(I)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: color 200ms linear;
  width: 16px;
  height: 16px;
  :hover {
    color: #3470ff;
  }
`,F=l.img`
  width: 469px;
  height: 248px;
  margin-bottom: 14px;
  margin: 0 auto 14px;
  border-radius: 14px;
  object-fit: cover;
`,P=l.p`
  color: #121417;
  line-height: 142.857%;
  margin-bottom: 24px;
`,b=l.p`
  color: #121417;
  line-height: 142.857%;
  font-weight: 500;
  margin-bottom: 8px;
`,D=l.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* width: 461px; */
  margin-bottom: 24px;
`,h=l.li`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;

  color: #121417;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.24px;

  & > span {
    font-weight: 600;
    color: #3470ff;
  }
`,$=l.p`
  color: #121417;
  font-size: ${e=>e.fs}px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`,A=l.span`
  color: #3470ff;
`,g=l.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  margin-bottom: ${e=>e.mb}px;
  max-height: 39px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 160%;

  & > li {
    position: relative;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      display: block;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      height: 16px;
      top: 2px;
      right: -6px;
    }
  }
`,H=l.button`
  color: #ffffff;
  font-weight: 600;
  line-height: 142.857%;

  background: #3470ff;
  padding: ${e=>e.padding};
  border-radius: 12px;
  border: none;

  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,W=H.withComponent("a"),Y=({toggleOpen:e,data:t})=>{u.useEffect(()=>{const s=y=>{y.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const r=s=>{s.currentTarget===s.target&&e()},i=z(t.address),o=t.rentalConditions.split(`
`),[d,f]=o[0].split(":"),p=Number(t.mileage).toLocaleString("en-US");return n.jsx(M,{onClick:r,children:n.jsxs(_,{children:[n.jsx(N,{onClick:e,children:n.jsx(T,{})}),n.jsx(F,{src:t.img,alt:""}),n.jsx($,{fs:18,children:n.jsxs("span",{children:[t==null?void 0:t.make," ",n.jsx(A,{children:t==null?void 0:t.model}),", ",t==null?void 0:t.year]})}),n.jsxs(g,{mb:14,children:[n.jsx("li",{children:i==null?void 0:i.city}),n.jsx("li",{children:i==null?void 0:i.country}),n.jsxs("li",{children:["Id:",t.id]}),n.jsxs("li",{children:["Year:",t.year]}),n.jsxs("li",{children:["Type:",t.type]}),n.jsxs("li",{children:["Fuel Consumption:",t.fuelConsumption]}),n.jsxs("li",{children:["Engine Size:",t.engineSize]})]}),n.jsx(P,{children:t.description}),n.jsx(b,{children:"Accessories and functionalities:"}),n.jsx(g,{mb:5,children:t.accessories.map(s=>n.jsx("li",{children:s},m()))}),n.jsx(g,{mb:24,children:t.functionalities.map(s=>n.jsx("li",{children:s},m()))}),n.jsx(b,{children:"Rental Conditions:"}),n.jsxs(D,{children:[n.jsxs(h,{children:[d,":",n.jsx("span",{children:f})]}),n.jsx(h,{children:o[1]}),n.jsx(h,{children:o[2]}),n.jsxs(h,{children:["Mileage: ",n.jsx("span",{children:p})]}),n.jsxs(h,{children:["Price: ",n.jsx("span",{children:t.rentalPrice})]})]}),n.jsx(W,{href:"tel:+380730000000",padding:"12px 50px",children:"Rental car"})]})})},q="/Car/assets/defolt-61b3031b.jpg";export{Y as M,K as S,V as a,q as d,G as n,Z as u};
