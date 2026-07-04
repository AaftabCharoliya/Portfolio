import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "Power BI", level: 90, className: "powerbi" },
    { name: "SQL", level: 85, className: "sql" },
    { name: "Excel", level: 88, className: "excel" },
    { name: "Python", level: 82, className: "python" },
    { name: "Pandas", level: 80, className: "pandas" },
    { name: "NumPy", level: 75, className: "numpy" },
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="container">

        <h2
          className="section-title"
          data-aos="zoom-in"
        >
          My Skills
        </h2>

        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill"
            data-aos="fade-right"
            data-aos-delay={index * 150}
          >
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="bar">
              <div
                className={`fill ${skill.className}`}
              ></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;