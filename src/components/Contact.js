import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div style={{ height: "60px", marginTop: "-60px" }}></div>

      <div className="contact">
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hi, feel free to reach out!</p>
        
        <form
          action="mailto:satwikakoyyalamudi555@gmail.com" 
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
