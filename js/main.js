// Intersection Observer for fade-in
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll(".card, .section-title").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});

// Glow Orb movement
const orb = document.querySelector(".glow-orb");
document.addEventListener("mousemove", e=>{
  const x=(window.innerWidth/2 - e.clientX)/40;
  const y=(window.innerHeight/2 - e.clientY)/40;
  orb.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px)`;
});

// Gold cursor
const cursor=document.querySelector(".gold-cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// Particle trail
document.addEventListener("mousemove", e=>{
  const p=document.createElement("div");
  p.className="particle";
  p.style.left=e.clientX+"px";
  p.style.top=e.clientY+"px";
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),600);
});

// Sticky navbar scroll shrink
const navbar=document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
  if(window.scrollY>50) navbar.classList.add("shrink");
  else navbar.classList.remove("shrink");
});


const intro = document.getElementById('intro');

// 2.5s logó animáció után fade out
setTimeout(() => {
    intro.classList.add('fade-out');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 2000); // fade duration
}, 2500);