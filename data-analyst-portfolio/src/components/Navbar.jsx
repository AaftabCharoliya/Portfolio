// function Navbar() {
//   return (
//     <nav className="navbar"
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "20px 50px",
//       }}
//     >
//       <h2 className="logo">Portfolio</h2>

//       <div className="nav-links">
//         <span style={{ marginRight: "20px" }}><a href="#home">Home</a></span>
//         <span style={{ marginRight: "20px" }}><a href="#about">About</a></span>
//         <span style={{ marginRight: "20px" }}><a href="#projects">Projects</a></span>
//         <span><a href="#contact">Contact</a></span>
//       </div>

//       <a
//   href="/Aftab_Resume.pdf" download
//   target="_blank"
// >
//   <button className="resume-btn">Resume</button>
//   </a>
//     </nav>
    
//   );
// }

// export default Navbar;




function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="/Aftab_Resume.pdf" download target="_blank" rel="noreferrer">
        <button className="resume-btn">Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;