// site.js — shared chrome for QuRes subpages (nav, clock)
(function(){
  var header=document.getElementById('header'), navBlur=document.getElementById('navBlur'), burger=document.getElementById('burger');
  if(burger){ burger.onclick=function(){ header.classList.toggle('open'); navBlur.classList.toggle('show', header.classList.contains('open')); }; }
  if(navBlur){ navBlur.onclick=function(){ header.classList.remove('open'); navBlur.classList.remove('show'); }; }
  document.querySelectorAll('.nav-link,.nav-cta a').forEach(function(a){ a.addEventListener('click',function(){ header.classList.remove('open'); navBlur.classList.remove('show'); }); });
var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
