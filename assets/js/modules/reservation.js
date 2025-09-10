import emailjs from "@emailjs/browser";

export function initReservationForm() {
  const form = document.getElementById("reservationForm");
  const messageDiv = document.getElementById("reservationMessage");

  if (!form) return;

  emailjs.init(import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      guests: document.getElementById("guests").value,
      occasion: document.getElementById("occasion").value,
      comments: document.getElementById("comments").value,
    };

    emailjs
      .send(import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formData)
      .then(() => {
        messageDiv.textContent = "✅ Your reservation request has been sent successfully!";
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        messageDiv.textContent = "❌ Something went wrong. Please try again later.";
      });
  });
}
