/* ===============================
   DARK MODE TOGGLE
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  if (!toggle) {
    console.error("Theme toggle button not found!");
    return;
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.innerHTML = "☀️";
  }

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
});


/* ===============================
   SCROLL REVEAL
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

/* ===============================
   NAVBAR ACTIVE LINK
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

/* ===============================
   EMAILJS CONTACT FORM
================================ */
(function () {
  emailjs.init("H9M-u9_E2OCZPDsqp"); // 🔴 replace
})();

const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");
const sendBtn = document.querySelector(".send-btn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMsg.textContent = "Sending message...";
  statusMsg.className = "";
  sendBtn.classList.add("loading");

  emailjs.sendForm(
    "service_93ptkeb",     // ✅ your service ID
    "template_a4991zd",    // 🔴 replace
    this
  )
  .then(() => {
    statusMsg.textContent = "✅ Message sent successfully!";
    statusMsg.className = "success";
    contactForm.reset();
    sendBtn.classList.remove("loading");
  })
  .catch(() => {
    statusMsg.textContent = "❌ Failed to send message. Try again!";
    statusMsg.className = "error";
    sendBtn.classList.remove("loading");
  });
});
