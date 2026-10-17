import "../styles/Projects.css";

import dashboardImg from "../assets/amazon-dashboard.png";
import iplImg from "../assets/ipl-dashboard.png";
import zomatoImg from "../assets/zomato-dashboard.png";
import Image from "../assets/Screen.png";


function Projects() {
  const projects = [

    {
      title: "E-Commerce Big Data Analysis DashBoard",
      image: Image,
      description:
        "Analyzed e-commerce data using Python, Pandas and NumPy, and built a Power BI dashboard to track revenue, costs, profit margins, orders and regional sales.",
      tech: ["Power BI", "Pandas", "Numpy", "Python" ,"Data Analysis"],
      github: "https://github.com/AaftabCharoliya/E---Commerce-Big-Data-Analysis.git",
      demo:
        "https://github.com/AaftabCharoliya/E---Commerce-Big-Data-Analysis/blob/main/deskboard%20Screenshot%20.png",
    },

    {
      title: "IPL 2025 Dashboard",
      image: iplImg,
      description:
        "Interactive IPL 2025 dashboard providing insights into team performance, player statistics, match results and season trends.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/IPL%202025%20SCREENSHOT.png",
    },
    {
      title: "Zomato Dashboard",
      image: zomatoImg,
      description:
        "Power BI dashboard analysing restaurant ratings, cuisines, city-wise performance and customer preferences.",
      tech: ["Power BI", "Pandas", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/ZOMATO%20DASHBORD.png",
    },

     {
      title: "E-Commerce Dashboard",
      image: dashboardImg,
      description:
        "Power BI dashboard for sales analysis, KPI tracking, customer insights and product performance.",
      tech: ["Power BI", "Pandas", "Data Analysis"],
      github: "https://github.com/AaftabCharoliya/Data-Analytics-Project",
      demo:
        "https://github.com/AaftabCharoliya/Data-Analytics-Project/blob/main/E%20commerce999%20png.png",
    },

  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
            Real-world Data Analytics dashboards built using Power BI, SQL, Excel and Python.

        </p>

        <div className="project-container">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;