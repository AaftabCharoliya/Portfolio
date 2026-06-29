// function About() {
//   return (
//     <section id="about" data-aos="fade-up"
//       style={{
//         padding: "80px 50px",
//         textAlign: "center",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>
//         About Me
//       </h2>

//       <p
//         style={{
//           maxWidth: "700px",
//           margin: "auto",
//           lineHeight: "1.8",
//         }}
//       >
//         I am a Data Analyst passionate about
//         transforming raw data into meaningful insights.
//         I work with Power BI, SQL, Excel and Python
//         to build dashboards and data-driven solutions.
//       </p>
//     </section>
//   );
// }

// export default About;



function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "20px",
          color: "#38bdf8",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <p
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#cbd5e1",
          }}
        >
          I am a passionate Data Analyst skilled in transforming raw
          data into meaningful insights using Power BI, SQL, Excel and
          Python. I enjoy building interactive dashboards, analyzing
          business performance and solving real-world problems through
          data-driven decision making.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <span className="skill-badge">Power BI</span>
          <span className="skill-badge">SQL</span>
          <span className="skill-badge">Excel</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">Pandas</span>
          <span className="skill-badge">Numpay</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div className="about-stat">
            <h3>3+</h3>
            <p>Projects</p>
          </div>

          <div className="about-stat">
            <h3>6+</h3>
            <p>Tools</p>
          </div>

          <div className="about-stat">
            <h3>100%</h3>
            <p>Learning Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;