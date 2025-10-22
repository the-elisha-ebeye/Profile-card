// script.js

document.addEventListener("DOMContentLoaded", () => {
  const nowEl = document.getElementById("now-ms");
  if (nowEl) {
    // Show current timestamp and update every second
    const tick = () => {
      const ms = Date.now();
      nowEl.textContent = String(ms);
      nowEl.setAttribute("datetime", new Date(ms).toISOString());
    };
    tick();
    setInterval(tick, 1000);
  }

  // Bio toggle feature
  const bioToggle = document.getElementById("bio-toggle");
  const bioParagraph = document.getElementById("bio-paragraph");

  if (bioToggle && bioParagraph) {
    bioToggle.addEventListener("click", () => {
      const expanded = bioToggle.getAttribute("aria-expanded") === "true";
      bioToggle.setAttribute("aria-expanded", String(!expanded));

      if (expanded) {
        bioParagraph.classList.add("bio-collapsed");
        bioToggle.textContent = "Show more";
      } else {
        bioParagraph.classList.remove("bio-collapsed");
        bioToggle.textContent = "Show less";
        bioParagraph.focus();
      }
    });
  }

  /* CONTACT FORM VALIDATION */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      const successMsg = document.getElementById("successMsg");

      const errors = {
        name: document.getElementById("error-name"),
        email: document.getElementById("error-email"),
        subject: document.getElementById("error-subject"),
        message: document.getElementById("error-message"),
      };

      Object.values(errors).forEach((el) => (el.textContent = ""));
      successMsg.textContent = "";

      let valid = true;

      if (!name.value.trim()) {
        errors.name.textContent = "Full name is required.";
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        errors.email.textContent = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(email.value)) {
        errors.email.textContent = "Please enter a valid email address.";
        valid = false;
      }

    
      if (!subject.value.trim()) {
        errors.subject.textContent = "Subject is required.";
        valid = false;
      }

      if (!message.value.trim()) {
        errors.message.textContent = "Message is required.";
        valid = false;
      } else if (message.value.trim().length < 10) {
        errors.message.textContent = "Message must be at least 10 characters.";
        valid = false;
      }

      //success
      if (valid) {
        successMsg.textContent = "✅ Message sent successfully!";
        form.reset();
      }
    });
  }
});
