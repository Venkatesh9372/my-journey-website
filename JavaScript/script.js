/* ======================================
   DARK MODE TOGGLE (Persists)
====================================== */
const themeToggle = document.createElement("button");
themeToggle.id = "themeToggle";
themeToggle.innerHTML = "☀️";
document.body.appendChild(themeToggle);

const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.remove("dark");
    themeToggle.innerHTML = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙";
    }
});

/* ======================================
   SCROLL REVEAL ANIMATIONS
====================================== */
const revealElements = document.querySelectorAll("section, .card, .cert-card, .skill-card, .project-card, .education-item");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) {
            el.classList.add("revealed");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ======================================
   NAVBAR: ACTIVE LINK + GLASS EFFECT
====================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    // Active navigation
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // Navbar glass effect
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(18, 18, 22, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'var(--bg-light)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

/* ======================================
   CERTIFICATE PDF HANDLER
====================================== */
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const href = btn.getAttribute('href');
        window.open(href, "_blank");
    });
});

/* ======================================
   EMAILJS CONTACT FORM (YOUR KEYS ✅)
====================================== */
(function() {
    emailjs.init("H9M-u9_E2OCZPDsqp");
})();

document.getElementById("contact-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const form = this;
    
    // Send to admin
    emailjs.sendForm("service_93ptkeb", "template_a4991zd", form)
        .then(() => {
            // Auto-reply to user
            emailjs.sendForm("service_93ptkeb", "template_n7ii29b", form)
                .then(() => {
                    showToast("Message sent successfully! 🎉 I'll reply within 24 hours.");
                    form.reset();
                });
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            showToast("Failed to send message. Try emailing me directly!", true);
        });
});

/* ======================================
   TOAST NOTIFICATIONS
====================================== */
function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = `toast ${isError ? "error" : ""}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 150);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

/* ======================================
   SMOOTH SCROLLING FOR ANCHOR LINKS
====================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target && targetId !== "#") {
            e.preventDefault();
            target.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    });
});
