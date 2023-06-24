function observed(entries) {
 if (entries[0].isIntersecting) {
   fixedaside.style.position = 'absolute';
   fixedaside.style.top = 'calc(' + footer.offsetTop + 'px - 100px - ' + fixedaside.parentElement.offsetTop + 'px)';
 }
 else {
   fixedaside.style.position = 'fixed';
   fixedaside.style.top = '0px';
 }
}l
const fixedaside=document.querySelector('fixedaside');
const footer = document.querySelector('footer');
const observer = new IntersectionObserver(observed);

observer.observe(footer);