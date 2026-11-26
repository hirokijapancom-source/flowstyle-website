/* FlowStyle CMS text loader: displays content saved by Pages CMS. */
(async()=>{
 const page=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
 try {
  const response=await fetch('/content/pages/'+encodeURIComponent(page)+'.json',{cache:'no-cache'});
  if(!response.ok)return;
  const data=await response.json();
  for(const key of ['heading','lead','closing']){
   const node=document.querySelector('[data-cms="'+key+'"]');
   if(node&&typeof data[key]==='string'){
    node.textContent=data[key];
    if(key==='lead')node.style.whiteSpace='pre-line';
   }
  }
 }catch(e){console.warn('CMS content unavailable, using embedded page text',e)}
})();
