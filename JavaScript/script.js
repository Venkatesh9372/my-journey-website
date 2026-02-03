/* ===============================
   DARK MODE TOGGLE
================================ */
const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.innerHTML = "☀️";
}

// Toggle theme
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.innerHTML = "🌙";
  }
});

/* ===============================
   SCROLL REVEAL (ON SCROLL, NOT LOAD)
================================ */
const revealElements = document.querySelectorAll("section, .card");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});


/* ===============================
   NAVBAR ACTIVE LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
