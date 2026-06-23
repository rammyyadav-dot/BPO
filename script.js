function slide(id,dir){const el=document.getElementById(id); if(el) el.scrollBy({left:dir*330,behavior:"smooth"});}
document.querySelectorAll(".main-nav a,.mobile-nav a").forEach(a=>{if(location.pathname.endsWith(a.getAttribute("href")))a.classList.add("active")});
