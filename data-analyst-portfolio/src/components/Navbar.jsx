import "../styles/Navbar.css";

function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* <a
        href="/Aftab_Resume.pdf"
        download
        className="resume-btn"
      >
        Resume
      </a> */}
    </nav>
  );
}

export default Navbar;