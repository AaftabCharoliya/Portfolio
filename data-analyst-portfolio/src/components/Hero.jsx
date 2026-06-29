// import profile from "../assets/profile.jpeg";


// function Hero() {
//   return (
//     <section id="home" data-aos="fade-up"
//       style={{
//         textAlign: "center",
//         marginTop: "120px",
//       }}
//     >
//       <h1 style={{ fontSize: "clamp(35px, 6vw, 60px)" }}>
//         Hi, I'm Aftab Charoliya
//       </h1>

//       <h2 className="typing-text">Data Analyst</h2>

//       <p
//   style={{
//     fontSize: "18px",
//     color: "#cbd5e1",
//     maxWidth: "700px",
//     margin: "20px auto",
//     lineHeight: "1.7"
//   }}
// >
//   Turning raw data into actionable insights using
//   Power BI, SQL, Excel and Python.
// </p>

//       <p
//         style={{
//           marginTop: "15px",
//           color: "#94a3b8",
//         }}
//       >
//         Power BI | SQL | Excel | Python
//       </p>

//       <button className="hero-buttons"
//         style={{
//           marginTop: "25px",
//           padding: "12px 25px",
//           background: "#38bdf8",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         View Projects
//         <button className="hero-buttons"
//   style={{
//     marginLeft: "15px",
//     padding: "12px 25px",
//   }}
// >



//   <a href="https://github.com/AaftabCharoliya"
// >
//   <button className="hero-buttons"
//     style={{
//       marginLeft: "15px",
//       padding: "12px 25px",
//       borderRadius: "8px",
//       cursor: "pointer",
//     }}
//   >    GitHub Profile

//   </button>
//   </a>


//   {/* <a href="c:\Users\aaftab\OneDrive\Documents\Aaftab Resume 2.pdf"></a>
//   Download Resume */}
// </button>
//          </button>

        
// <a
//   href="/Aftab_Resume.pdf" download
//   target="_blank"
// >
//   <button className="hero-buttons"
//     style={{
//       marginLeft: "15px",
//       padding: "12px 25px",
//       borderRadius: "8px",
//       cursor: "pointer",
//     }}
//   >
//      Download Resume
//   </button>
// </a>



// <a
//   href="https://www.linkedin.com/in/aftab-charoliya"
//   target="_blank"
// >
//   <button className="hero-buttons"
//     style={{
//       marginLeft: "15px",
//       padding: "12px 25px",
//       borderRadius: "8px",
//       cursor: "pointer",
//     }}
//   >
//     LinkedIn Profile
//   </button>
// </a>



// <img
//   src={profile}
//   alt="Aftab"
//   className="profile-img"
// />

//     </section>
//   );
// }

// export default Hero;




import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      style={{
        textAlign: "center",
        marginTop: "120px",
        padding: "20px",
      }}
    >
      <h1
        data-aos="zoom-in"
        style={{
          fontSize: "clamp(35px, 6vw, 65px)",
          fontWeight: "700",
        }}
      >
        Hi, I'm Aftab Charoliya
      </h1>

      <h2
        className="typing-text"
        data-aos="fade-right"
        style={{
          marginTop: "10px",
        }}
      >
        Data Analyst
      </h2>

      <p
        data-aos="fade-left"
        style={{
          fontSize: "18px",
          color: "#cbd5e1",
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.7",
        }}
      >
        Turning raw data into actionable insights using Power BI,
        SQL, Excel and Python.
      </p>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "15px",
        }}
      >
        Power BI | SQL | Excel | Python
      </p>

      {/* Buttons */}

      <div
        data-aos="zoom-in-up"
        style={{
          marginTop: "35px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <a href="#projects">
          <button className="hero-btn">
            View Projects
          </button>
        </a>

        <a
          href="https://github.com/AaftabCharoliya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn">
            GitHub Profile
          </button>
        </a>

        <a
          href="/Aftab_Resume.pdf"
          download
        >
          <button className="hero-btn">
            Download Resume
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/aftab-charoliya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn">
            LinkedIn Profile
          </button>
        </a>
      </div>

      {/* Profile Image */}

      <div
        data-aos="flip-left"
        style={{
          marginTop: "40px",
        }}
      >
        <img
          src={profile}
          alt="Aftab"
          className="profile-img"
        />
      </div>
    </section>
  );
}

export default Hero;