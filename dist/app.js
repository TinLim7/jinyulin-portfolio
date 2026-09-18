const modal=document.querySelector('#lightbox');
const large=document.querySelector('#large-image');
const caption=document.querySelector('#image-caption');
let trigger=null;
for(const button of document.querySelectorAll('[data-image]')){button.addEventListener('click',()=>{trigger=button;large.src=button.dataset.image;large.alt=button.dataset.caption;caption.textContent=button.dataset.caption;modal.showModal();document.body.classList.add('modal-open');});}
document.querySelector('#close-lightbox').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(trigger)trigger.focus();});
