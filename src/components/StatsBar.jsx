const stats = [
  { value: "10+", label: "Years of Industry Experience" },
  { value: "3000+", label: "Satisfied Clients Worldwide" },
  { value: "200+", label: "Startups & Enterprises Trust Us" },
];

function StatsBar() {
  return (
    <section className="bg-[#0f172a] py-12">
      <div className="container-wrap grid gap-6 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-extrabold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
