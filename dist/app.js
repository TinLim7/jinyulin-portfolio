const modal=document.querySelector('#lightbox');
const large=document.querySelector('#large-image');
const caption=document.querySelector('#image-caption');
let trigger=null;
for(const button of document.querySelectorAll('[data-image]')){button.addEventListener('click',()=>{trigger=button;large.src=button.dataset.image;large.alt=button.dataset.caption;caption.textContent=button.dataset.caption;modal.showModal();document.body.classList.add('modal-open');});}
document.querySelector('#close-lightbox').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(trigger)trigger.focus();});

document.documentElement.classList.add('js');
const navLinks=[...document.querySelectorAll('nav a')];
if('IntersectionObserver' in window){
  const revealer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealer.unobserve(entry.target);}}},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
  for(const el of document.querySelectorAll('[data-reveal]'))revealer.observe(el);
  const setActive=link=>{if(!link)return;navLinks.forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current');});link.classList.add('active');link.setAttribute('aria-current','true');};
  const spy=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){setActive(navLinks.find(a=>a.getAttribute('href')==='#'+entry.target.id));}}},{rootMargin:'-40% 0px -55% 0px'});
  for(const section of document.querySelectorAll('#work,#practice,#contact'))spy.observe(section);
}
const copyBtn=document.querySelector('#copy-email');
if(copyBtn){copyBtn.addEventListener('click',async()=>{const email=copyBtn.dataset.email;try{await navigator.clipboard.writeText(email);}catch(e){const input=document.createElement('input');input.value=email;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();document.execCommand('copy');input.remove();}
copyBtn.textContent='已复制 ✓';copyBtn.classList.add('copied');setTimeout(()=>{copyBtn.textContent='复制邮箱';copyBtn.classList.remove('copied');},2000);});}
