import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>Your Mobile Number</span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>
              <a href="mailto:charoliyaaftab99@gmail.com">
                charoliyaaftab99@gmail.com
              </a>
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <a
              href="https://github.com/AaftabCharoliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a
              href="https://www.linkedin.com/in/aftab-charoliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



