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

<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", () => {

  // Initialize EmailJS with your Public Key
  emailjs.init("H9M-u9_E2OCZPDsqp");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Set reply_to dynamically from email field
    form.reply_to.value = form.email.value;

    status.textContent = "Sending message...";
    status.style.color = "#64748b";

    emailjs.sendForm(
      "service_93ptkeb",   // Service ID
      "template_a4991zd",  // Template ID
      form
    )
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "#22c55e";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      status.textContent = "❌ Failed to send message. Please try again.";
      status.style.color = "#ef4444";
    });
  });

});
</script>

