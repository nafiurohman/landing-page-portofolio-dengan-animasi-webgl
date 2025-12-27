const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST API"]
  },
  {
    category: "Desain",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Desain UI/UX", "Prototyping"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Agile"]
  }
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Perusahaan Teknologi",
    period: "2022 - Sekarang",
    description: "Memimpin pengembangan frontend untuk aplikasi enterprise."
  },
  {
    role: "Full Stack Developer",
    company: "Agensi Digital",
    period: "2020 - 2022",
    description: "Membangun aplikasi web dan mobile untuk berbagai klien."
  },
  {
    role: "UI/UX Designer",
    company: "Startup",
    period: "2019 - 2020",
    description: "Mendesain antarmuka pengguna dan meningkatkan pengalaman pengguna."
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            03 — Keahlian & Pengalaman
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Apa yang Saya Lakukan
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((skill, index) => (
            <div key={skill.category} className="group">
              <div className="relative p-6 border border-border bg-card hover:border-primary/50 transition-colors duration-500">
                {/* Number */}
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  0{index + 1}
                </span>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {skill.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-12">Pengalaman</h3>
          
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
              >
                {/* Period */}
                <div className="text-sm text-muted-foreground">
                  {exp.period}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;