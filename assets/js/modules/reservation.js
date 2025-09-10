export function initReservationForm() {
  const form = document.getElementById("reservationForm");
  const messageDiv = document.getElementById("reservationMessage");

  if (!form) return;

  emailjs.init("SbCCV7okgZsFUvVFK");

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
      .send("service_m3vrqen", "template_jazlfbc", formData)
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
