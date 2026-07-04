import "../styles/Footer.css";

function Footer() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/AaftabCharoliya",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aftab-charoliya",
    },
    {
      name: "Email",
      url: "mailto:charoliyaaftab99@gmail.com",
    },
  ];

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <h2 className="footer-title">Aftab Charoliya</h2>

        <p className="footer-subtitle">
          Data Analyst | Power BI | SQL | Excel | Python
        </p>

        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © 2026 Aftab Charoliya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;