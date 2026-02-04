document.addEventListener("DOMContentLoaded", () => {

  /* SCROLL REVEAL */
  const revealEls = document.querySelectorAll("section, .card");
  const reveal = () => {
    revealEls.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("revealed");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();

  /* NAV ACTIVE LINK */
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 120 &&
          scrollY < sec.offsetTop + sec.offsetHeight) {
        current = sec.id;
      }
    });

    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  /* EMAILJS */
  if (typeof emailjs !== "undefined") {
    emailjs.init("H9M-u9_E2OCZPDsqp");
  }

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn = document.querySelector(".send-btn");

  if (form && status && btn) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      status.textContent = "Sending message...";
      btn.classList.add("loading");

      emailjs.sendForm("service_93ptkeb", "template_a4991zd", form)
  .then(() => {

    // 🔹 AUTO-REPLY EMAIL TO USER
    emailjs.sendForm(
      "service_93ptkeb",
      "template_n7ii29b", // 
      form
    );

    status.textContent = "✅ Message sent successfully!";
    status.className = "success";
    form.reset();
    btn.classList.remove("loading");
  })

        .catch(err => {
          console.error(err);
          status.textContent = "❌ Failed to send message!";
          status.className = "error";
          btn.classList.remove("loading");
        });
    });
  }

});
