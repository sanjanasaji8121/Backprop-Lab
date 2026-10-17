// Remembers the light/dark choice across pages (pages already toggle data-theme on <html>)
(function(){
  var r=document.documentElement;
  try{ var t=localStorage.getItem('bp-theme'); if(t){ r.setAttribute('data-theme',t); } }catch(e){}
  new MutationObserver(function(){
    try{ localStorage.setItem('bp-theme',r.getAttribute('data-theme')||''); }catch(e){}
  }).observe(r,{attributes:true,attributeFilter:['data-theme']});
})();
