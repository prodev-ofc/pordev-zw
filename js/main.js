function filterApps(){
 const q=document.getElementById('searchBox').value.toLowerCase();
 document.querySelectorAll('.app-card').forEach(c=>{
   c.style.display=c.innerText.toLowerCase().includes(q)?'':'none';
 });
}
function openApp(id){
 const routes={
  'image-gen':'apps/image.html',
  'driving':'apps/driving.html',
  'culture':'apps/culture.html',
  'tts':'apps/tts.html',
  'translator':'apps/translator.html',
  'bible':'apps/bible.html',
  'news':'apps/news.html'
 };
 if(routes[id]){
   location.href='/'+routes[id];
 } else {
   const modal=document.getElementById('appModal');
   if(modal){
     modal.classList.remove('hidden');
     const t=document.getElementById('modalTitle');
     if(t) t.innerText=id.replace(/-/g,' ').toUpperCase()+' - BUILDING NEXT';
   } else {
     alert(id+' - Coming next! Tell me to build it.');
   }
 }
}
function closeApp(){
 const m=document.getElementById('appModal');
 if(m) m.classList.add('hidden');
}
