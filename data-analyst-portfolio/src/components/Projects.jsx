import dashboardImg from "../assets/amazon-dashboard.png";
import iplImg from "../assets/ipl-dashboard.png";
import zomatoImg from "../assets/zomato-dashboard.png";

// function Projects() { 
// return (
//     <section id="projects"  data-aos="fade-up"
//       style={{
//         padding: "80px 50px",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "40px",
//           fontSize: "35px",
//         }}
//       >
//         My Projects
//       </h2> 

// <div className="project-container">
//       <div className="card">
//         <img
//           src={dashboardImg}
//           alt="Amazon Dashboard"
//           style={{
//             width: "100%",
//             borderRadius: "10px",
//             marginBottom: "15px",
//           }}
//         />

//         <h3>E-commerce Dashboard</h3>

//         <p>
//           Power BI dashboard for sales analysis,
//           KPI tracking and product performance.
//         </p>
//         <div
//   style={{
//     marginTop: "10px",
//   }}
// >
//   <span>Power BI</span> | <span>Excel</span> | <span>Data Analysis</span>


//   <div className="project-buttons">
//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project.git">GitHub</a>

//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/E%20commerce999%20png.png">
//     Live Demo
//   </a>
// </div>

  
// </div>
//       </div>
     






//       <div className="card" style={{ marginTop: "20px" }}>
//         <img
//   src={iplImg}
//   alt="IPL Dashboard"
//   style={{
//     width: "100%",
//     borderRadius: "10px",
//     marginBottom: "15px",
//   }}
// />
//   <h3>IPL 2025 Data Analysis Dashboard</h3>

//   <p>
//     An interactive data analysis project based on IPL 2025 data.
//     The dashboard provides insights into team performance,
//     player statistics, match results, win percentages and season trends.
//   </p>

//   <div style={{ marginTop: "10px" }}>
//     <span>Power BI</span> | <span>Excel</span> | <span>Data Analysis</span>


//      <div className="project-buttons">
//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project.git">GitHub</a>

//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/IPL%202025%20SCREENSHOT.png">
//     Live Demo
//   </a>
// </div>
//   </div>
// </div>





// <div className="card" style={{ marginTop: "20px" }}>

//   <img
//     src={zomatoImg}
//     alt="Zomato Dashboard"
//     style={{
//       width: "100%",
//       borderRadius: "10px",
//       marginBottom: "15px",
//     }}
//   />

//   <h3>Zomato Dashboard Analysis</h3>

//   <p>
//     Interactive Zomato dashboard built using Power BI.
//     This project analyzes restaurant ratings, cuisines,
//     city-wise performance, customer preferences and
//     restaurant trends.
//   </p>

//   <div style={{ marginTop: "10px" }}>
//     <span>Power BI</span> | <span>Excel</span> | <span>Data Analysis</span>


//      <div className="project-buttons">
//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project.git">GitHub</a>

//   <a href="https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/ZOMATO%20DASHBORD.png">
//     Live Demo
//   </a>
// </div>
    
//   </div>

// </div>
// </div>

//     </section>

//   );
// }


// export default Projects;



function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      image: dashboardImg,
      description:
        "Power BI dashboard for sales analysis, KPI tracking, customer insights and product performance.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project.git",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/E%20commerce999%20png.png",
    },

    {
      title: "IPL 2025 Dashboard",
      image: iplImg,
      description:
        "Interactive IPL 2025 dashboard providing insights into team performance, player statistics, match results and season trends.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project.git",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/IPL%202025%20SCREENSHOT.png",
    },

    {
      title: "Zomato Dashboard",
      image: zomatoImg,
      description:
        "Power BI dashboard analysing restaurant ratings, cuisines, city-wise performance and customer preferences.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project.git",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/ZOMATO%20DASHBORD.png",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      style={{
        padding: "90px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        Featured Projects
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#888",
          marginBottom: "50px",
        }}
      >
        Some of my best Data Analytics Projects
      </p>

      <div className="project-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

