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
