document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     Intersection Observer
  ========================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".card, .section-title").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  /* =========================
     Glow Orb
  ========================== */
  const orb = document.querySelector(".glow-orb");
  if (orb) {
    document.addEventListener("mousemove", e => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      orb.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`;
    });
  }

  /* =========================
     Gold Cursor
  ========================== */
  const cursor = document.querySelector(".gold-cursor");
  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

  /* =========================
     Navbar shrink + blur
  ========================== */
  const navbar = document.querySelector(".navbar");
  function handleNavbar() {
    if (!navbar) return;

    if (window.scrollY > 80) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  }
  window.addEventListener("scroll", handleNavbar);
  handleNavbar();

  /* =========================
     Scroll Progress Bar
  ========================== */
  const progress = document.querySelector(".scroll-progress");
  function updateProgress() {
    if (!progress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = percent + "%";
  }
  window.addEventListener("scroll", () => requestAnimationFrame(updateProgress));
  updateProgress();

  /* =========================
     Scroll Indicator Click
  ========================== */
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });
  }

  /* =========================
     Intro Animation
  ========================== */
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.classList.add("fade-out");
      setTimeout(() => { intro.style.display = "none"; }, 2000);
    }, 2500);
  }

  /* =========================
     EmailJS Contact Form
  ========================== */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const now = new Date();
      const time = now.toLocaleString();

      const templateParams = {
        title: "Contact Us",
        name: form.querySelector('[name="from_name"]').value,
        email: form.querySelector('[name="from_email"]').value,
        message: form.querySelector('[name="message"]').value,
        time: time
      };

      emailjs.send('service_d3uqyfz', 'template_x9hrazj', templateParams)
        .then(() => {
          status.textContent = "Message sent! 🎉";
          status.style.color = "var(--gold)";
          form.reset();
        })
        .catch(err => {
          console.error(err);
		  status.innerHTML = `Oops! System busy. Please email me directly: <a href="mailto:contact@alaveid.com" style="color:var(--gold); text-decoration:underline;">contact@alaveid.com</a>`;
          status.style.color = "var(--text-main)";
        });
    });
  }

});