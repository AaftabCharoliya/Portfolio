function Stats() {
  return (
    <section  data-aos="fade-up"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "60px 20px",
        flexWrap: "wrap",
      }}
    >
      <div className="card">
        <h2>3+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="card">
        <h2>6+</h2>
        <p>Tools Used</p>
      </div>

      <div className="card">
        <h2>100%</h2>
        <p>Self Learning</p>
      </div>

      <div className="card">
        <h2>1.5+</h2>
        <p>Years Practice</p>
      </div>
    </section>
  );
}

export default Stats;