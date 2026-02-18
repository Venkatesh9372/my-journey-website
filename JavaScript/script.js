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
   EMAILJS CONTACT FORM
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init("dIk0at32YBhuAHexW");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const button = form.querySelector("button[type='submit']");
        button.disabled = true;
        button.innerText = "Sending...";

        // Send to Admin
        emailjs.sendForm(
            "service_93ptkeb",
            "template_a4991zd",
            form
        )
        .then(() => {

            // Send Auto Reply (won't break main flow if it fails)
            emailjs.sendForm(
                "service_93ptkeb",
                "template_n7ii29b",
                form
            ).catch(err => {
                console.log("Auto-reply failed:", err);
            });

            showToast("Message sent successfully! 🎉 I'll reply within 24 hours.");
            form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            showToast("Failed to send message. Please try again.", true);
        })
        .finally(() => {
            button.disabled = false;
            button.innerText = "Send Message";
        });

    });

});


/* ======================================
   SIMPLE TOAST FUNCTION
====================================== */

function showToast(message, isError = false) {

    let toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "6px";
    toast.style.color = "#fff";
    toast.style.fontSize = "14px";
    toast.style.zIndex = "9999";
    toast.style.backgroundColor = isError ? "#ef4444" : "#22c55e";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
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
