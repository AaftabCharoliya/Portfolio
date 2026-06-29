function Contact() {
  return (
    <section id="contact" data-aos="fade-up"
      style={{
        padding: "80px 50px",
        textAlign: "center",
      }}
    >
      {/* <h2>Mobail No: 9313872789</h2>

      <p>Email: charoliyaaaftab99@gmail.com</p>

      <p>GitHub: https://github.com/AaftabCharoliya/Data-Analytics-Project.git</p>

      <p>LinkedIn: https://www.linkedin.com/in/aftab-charoliya</p> */}

      <section id="contact" className="contact">
  <h2>Contact Me</h2>

  <div className="contact-card">
    <p>📱 Mobile Number</p>
    <p>📧 Email: charoliyaaftab99@gmail.com</p>

    <p>
      💻 GitHub:
      <a
        href="https://github.com/AaftabCharoliya/Data-Analytics-Project.git"
        target="_blank"
      >
        Visit Profile
      </a>
    </p>

    <p>
      🔗 LinkedIn:
      <a
        href=" https://www.linkedin.com/in/aftab-charoliya"
        target="_blank"
      >
        Visit Profile
      </a>
    </p>
  </div>
</section>
    </section>
  );
}

export default Contact;