import { useState } from "react";
import { send } from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = "service_oic3vw2";
    const templateID = "template_e18p2u6";
    const publicKey = "_udZWHl4mO8zkpsK3";

    send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000); // Clear message after 5s
      })
      .catch((err) => {
        console.error(err);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section className={styles.cardsContainer}>
      <article className={styles.profileCard}>
        <div className={styles.profileIntroduction}>
          <h2 className={styles.name}>Contact Me</h2>

          {/* CONTACT FORM */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "Sending..."}>
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* STATUS MESSAGE */}
          {status && <p className={styles.statusMessage}>{status}</p>}

          {/* CONTACT INFO */}
          <p className={styles.infoItem}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sacdalanjarence08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose email in Gmail"
            >
              sacdalanjarence08@gmail.com
            </a>
          </p>

          <p className={styles.infoItem}>
            <strong>Contact No:</strong> 0991-558-2745
          </p>

          {/* LINKS */}
          <div className={styles.links}>
            <a
              href="https://github.com/jarensz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jandel-clarrence-d-sacdalan-644a70393/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Contact;
