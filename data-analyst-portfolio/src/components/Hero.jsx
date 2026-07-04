import "../styles/Hero.css";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <h1 className="hero-title" data-aos="zoom-in">
        Hi, I'm Aftab Charoliya
      </h1>

      <h2 className="typing-text" data-aos="fade-right">
        Data Analyst
      </h2>

      <p className="hero-description" data-aos="fade-left">
        Turning raw data into actionable insights using Power BI, SQL,
        Excel and Python.
      </p>

      <p className="hero-skills">
        Power BI | SQL | Excel | Python
      </p>

      <div className="hero-buttons" data-aos="zoom-in-up">
        <a href="#projects" className="hero-btn">
          View Projects
        </a>

        <a
          href="https://github.com/AaftabCharoliya"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          GitHub Profile
        </a>

        <a
          href="/Aftab_Resume.pdf"
          download
          className="hero-btn"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/aftab-charoliya"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          LinkedIn Profile
        </a>
      </div>

      <div className="hero-image" data-aos="flip-left">
        <img
          src={profile}
          alt="Aftab Charoliya"
          className="profile-img"
        />
      </div>
    </section>
  );
}

export default Hero;