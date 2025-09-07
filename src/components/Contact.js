import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rs200143@rguktsklm.ac.in&su=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;

    window.open(gmailUrl, "_blank"); // Open Gmail in new tab
  };

  return (
    <section id="contact">
      <div style={{ height: "60px", marginTop: "-60px" }}></div>

      <div className="contact">
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hi, feel free to reach out!</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
