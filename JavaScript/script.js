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

/* Replace certificate handler with this */
document.addEventListener('DOMContentLoaded', function() {
    // Certificate buttons - Direct link open
    document.querySelectorAll('.view-btn').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            console.log('Opening PDF:', href); // Debug
            
            if (href && href.includes('.pdf')) {
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        });
    });
});

/* ======================================
   EMAILJS CONTACT FORM (FIXED VERSION)
====================================== */

document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "H9M-u9_E2OCZPDsqp",
  });

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Send to admin
    emailjs.sendForm("service_93ptkeb", "template_a4991zd", form)
      .then(() => {

        // Auto reply to user
        return emailjs.sendForm("service_93ptkeb", "template_n7ii29b", form);

      })
      .then(() => {
        alert("Message sent successfully! 🎉");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Check console.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
      });

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
