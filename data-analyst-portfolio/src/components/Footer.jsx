// function Footer() {
//   return (
//     <footer className="footer" data-aos="fade-up">
//       <h3>Aftab Charoliya</h3>
//       <p>Data Analyst Portfolio</p>
//       <p>GitHub | LinkedIn | Email</p>
//       <p>© 2026 All Rights Reserved</p>
//     </footer>
//   );
// }

// export default Footer;



function Footer() {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
      style={{
        padding: "50px 20px",
        textAlign: "center",
        background: "#111827",
        marginTop: "80px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          marginBottom: "10px",
        }}
      >
        Aftab Charoliya
      </h2>

      <p
        style={{
          color: "#9CA3AF",
          marginBottom: "20px",
        }}
      >
        Data Analyst | Power BI | SQL | Excel | Python
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://github.com/AaftabCharoliya"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38BDF8", textDecoration: "none" }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aftab-charoliya"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#38BDF8", textDecoration: "none" }}
        >
          LinkedIn
        </a>

        <a
          href="mailto:charoliyaaaftab99@gmail.com"
          style={{ color: "#38BDF8", textDecoration: "none" }}
        >
          Email
        </a>
      </div>

      <p
        style={{
          color: "#6B7280",
          fontSize: "14px",
        }}
      >
        © 2026 Aftab Charoliya. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;