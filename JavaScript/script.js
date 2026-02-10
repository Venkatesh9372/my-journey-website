document.addEventListener("DOMContentLoaded", () => {

  emailjs.init("H9M-u9_E2OCZPDsqp");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "#64748b";

    // 1️⃣ Send mail to YOU
    emailjs.sendForm("service_93ptkeb", "template_a4991zd", form)

    .then(() => {
      // 2️⃣ Send auto-reply to USER
      return emailjs.sendForm(
        "service_93ptkeb",
        "template_user",
        form
      );
    })
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "#22c55e";
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      status.textContent = "❌ Failed to send message.";
      status.style.color = "#ef4444";
    });
  });

});
