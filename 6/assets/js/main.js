
const progress = document.getElementById('scrollProgress');
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
function onScroll(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  if(progress) progress.style.width = scrolled + '%';
  if(header) header.classList.toggle('scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();
if(menuToggle && mobileNav){
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true':'false');
  });
}
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
