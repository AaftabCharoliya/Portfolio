import "../styles/Stats.css";

function Stats() {
  const stats = [
    {
      value: "3+",
      label: "Projects Completed",
    },
    {
      value: "6+",
      label: "Tools Used",
    },
    {
      value: "100%",
      label: "Self Learning",
    },
    {
      value: "1.5+",
      label: "Years Practice",
    },
  ];

  return (
    <section className="stats" data-aos="fade-up">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-card">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;