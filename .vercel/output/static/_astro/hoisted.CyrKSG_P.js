import{I as u}from"./index.D5HYR69K.js";let t=1,s=1,m="";const i=12;document.addEventListener("DOMContentLoaded",async()=>{await r(),window.addEventListener("search",async c=>{m=c.detail,t=1,await r()});const n=document.getElementById("prev-page"),e=document.getElementById("next-page");n?.addEventListener("click",async()=>{t>1&&(t--,await r())}),e?.addEventListener("click",async()=>{t<s&&(t++,await r())})});async function r(){try{const n="https://cloud.orama.run/v1/indexes/recipes-xxd87u".trim(),e="6CUTVNN0HszQzItLb4CkWh7oORG3QVIX".trim(),o=await new u({endpoint:n,api_key:e}).search({term:m,mode:"fulltext",limit:i,offset:(t-1)*i});s=Math.ceil(o.count/i),g(o)}catch(n){console.error("Search error:",n);const e=document.getElementById("recipes-grid");e&&(e.innerHTML='<p class="col-span-full text-center text-red-500">Error loading recipes. Please try again later.</p>')}}function g(n){const e=document.getElementById("recipes-grid"),c=document.getElementById("prev-page"),o=document.getElementById("next-page"),d=document.getElementById("current-page"),l=document.getElementById("total-pages");c&&(c.disabled=t<=1),o&&(o.disabled=t>=s),d&&(d.textContent=t.toString()),l&&(l.textContent=s.toString()),e&&n.hits.length>0?(e.innerHTML="",n.hits.forEach(a=>{const p=document.createElement("div");p.innerHTML=`
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">${a.document.name}</h3>
              
              <div class="mb-2">
                <span class="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  ${a.document.category}
                </span>
              </div>

              <p class="text-gray-600 mb-4">${a.document.description}</p>

              <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>🕒 ${a.document.timing.totalTime} mins</span>
                <span>👥 Serves ${a.document.servings}</span>
                <span>🔥 ${Math.round(a.document.nutrition.calories)} cal</span>
              </div>
              
              <a href="/recipe/${encodeURIComponent(a.document.id)}?name=${encodeURIComponent(a.document.name)}"
                class="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                View Recipe
              </a>
            </div>
          </div>
        `,e.appendChild(p)})):e&&(e.innerHTML='<p class="col-span-full text-center text-gray-500">No recipes found</p>')}
