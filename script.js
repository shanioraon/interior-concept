function toggleForm() {
  const form = document.getElementById("popupForm");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

function sendWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !message) {
    alert("Please fill all fields.");
    return;
  }

  const text = `Customer Details:\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
  const whatsappURL = `https://wa.me/916201286189?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
}
