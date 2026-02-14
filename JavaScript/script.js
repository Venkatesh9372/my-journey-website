/* ======================================
   DARK MODE TOGGLE
====================================== */
const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  if (toggle) toggle.innerHTML = "☀️";
}

// Toggle theme
if (toggle) {
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
}


/* ======================================
   SCROLL REVEAL ANIMATION
====================================== */
const revealElements = document.querySelectorAll("section, .card, .cert-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ======================================
   NAVBAR ACTIVE LINK ON SCROLL
====================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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


/* ======================================
   OPEN CERTIFICATE PDF
====================================== */
function openPDF(path) {
  window.open(path, "_blank");
}

/* EMAILJS INIT /
(function () {
  emailjs.init("H9M-u9_E2OCZPDsqp"); // ✅ Public Key
})();

/ CONTACT FORM SUBMIT /
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  // 1️⃣ Send email to YOU (Admin email)
  emailjs.sendForm(
    "service_93ptkeb",
    "template_a4991zd", // ✅ your main template
    form
  ).then(() => {

    // 2️⃣ Send AUTO-REPLY to USER
    emailjs.sendForm(
      "service_93ptkeb",
      "template_n7ii29b", // 🔴 replace with auto-reply template ID
      form
    );

    showToast("Message sent successfully!");
    form.reset();

  }).catch((error) => {
    console.error("EmailJS Error:", error);
    showToast("Failed to send message", true);
  });
});

/ TOAST */
function showToast(msg, error = false) {
  const t = document.createElement("div");
  t.className = toast ${error ? "error" : ""};
  t.textContent = msg;
  document.body.appendChild(t);

  setTimeout(() => t.classList.add("show"), 100);
  setTimeout(() => t.remove(), 3000);
}
