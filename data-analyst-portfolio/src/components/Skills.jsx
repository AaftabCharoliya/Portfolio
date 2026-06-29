// function Skills() {
//   // const skills = ["Power BI", "SQL", "Excel", "Python"];

//   return (
//     <section data-aos="fade-up"
//      style={{ padding: "80px 50px" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "40px",
//           fontSize: "35px",
//         }}
//       >
//         My Skills
//       </h2>


//      <div className="skill">
//   <div className="skill-header">
//     <span>Power BI</span>
//     <span>90%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>


// <div className="skill">
//   <div className="skill-header">
//     <span>SQL</span>
//     <span>85%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>

//  <div className="skill">
//   <div className="skill-header">
//     <span>Excle</span>
//     <span>80%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>

// <div className="skill">
//   <div className="skill-header">
//     <span>Python</span>
//     <span>85%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>



// <div className="skill">
//   <div className="skill-header">
//     <span>Pandas</span>
//     <span>85%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>



// <div className="skill">
//   <div className="skill-header">
//     <span>Numpay</span>
//     <span>78%</span>
//   </div>

//   <div className="bar">
//     <div className="fill powerbi"></div>
//   </div>
// </div>


//     </section>
//   );
// }

// export default Skills;




function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      style={{
        padding: "100px 20px",
        maxWidth: "850px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#38bdf8",
          marginBottom: "50px",
        }}
      >
        My Skills
      </h2>

      {/* Power BI */}
      <div className="skill">
        <div className="skill-header">
          <span>Power BI</span>
          <span>90%</span>
        </div>

        <div className="bar">
          <div className="fill powerbi"></div>
        </div>
      </div>

      {/* SQL */}
      <div className="skill">
        <div className="skill-header">
          <span>SQL</span>
          <span>85%</span>
        </div>

        <div className="bar">
          <div className="fill sql"></div>
        </div>
      </div>

      {/* Excel */}
      <div className="skill">
        <div className="skill-header">
          <span>Excel</span>
          <span>88%</span>
        </div>

        <div className="bar">
          <div className="fill excel"></div>
        </div>
      </div>

      {/* Python */}
      <div className="skill">
        <div className="skill-header">
          <span>Python</span>
          <span>82%</span>
        </div>

        <div className="bar">
          <div className="fill python"></div>
        </div>
      </div>

      {/* Pandas */}
      <div className="skill">
        <div className="skill-header">
          <span>Pandas</span>
          <span>80%</span>
        </div>

        <div className="bar">
          <div className="fill pandas"></div>
        </div>
      </div>

      {/* NumPy */}
      <div className="skill">
        <div className="skill-header">
          <span>NumPy</span>
          <span>75%</span>
        </div>

        <div className="bar">
          <div className="fill numpy"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;