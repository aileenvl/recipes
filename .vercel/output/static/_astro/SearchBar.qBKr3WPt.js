import{j as e}from"./jsx-runtime.C8tID1Hn.js";import{r as u}from"./index.5XC2200L.js";function p(){const[r,s]=u.useState(""),a=t=>{t.preventDefault();const o=new CustomEvent("search",{detail:r,bubbles:!0,composed:!0});window.dispatchEvent(o)};return e.jsx("form",{onSubmit:a,className:"w-full max-w-xl",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:r,onChange:t=>s(t.target.value),placeholder:"Search recipes...",className:"w-full px-4 py-2 text-gray-900 border rounded-lg focus:outline-none focus:border-purple-500"}),e.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700",children:"Search"})]})})}export{p as default};
