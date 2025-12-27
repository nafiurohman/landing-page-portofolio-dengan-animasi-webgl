import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Platform E-Commerce",
    category: "Pengembangan Web",
    description: "Platform e-commerce modern dengan pengalaman pengguna yang mulus dan integrasi pembayaran.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    year: "2024"
  },
  {
    id: 2,
    title: "Aplikasi Mobile Banking",
    category: "Desain UI/UX",
    description: "Antarmuka mobile banking yang intuitif dirancang untuk keterlibatan pengguna maksimal.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Figma", "Prototyping", "User Research"],
    year: "2024"
  },
  {
    id: 3,
    title: "Dashboard AI",
    category: "Pengembangan Web",
    description: "Dashboard analitik real-time yang didukung oleh algoritma machine learning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "Python", "TensorFlow"],
    year: "2023"
  },
  {
    id: 4,
    title: "Identitas Brand",
    category: "Branding",
    description: "Sistem identitas brand lengkap untuk perusahaan startup teknologi.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    year: "2023"
  },
  {
    id: 5,
    title: "Aplikasi Media Sosial",
    category: "Pengembangan Mobile",
    description: "Platform sosial kaya fitur dengan pesan real-time dan berbagi konten.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "WebSocket"],
    year: "2023"
  },
  {
    id: 6,
    title: "Website Portfolio",
    category: "Pengembangan Web",
    description: "Portfolio kreatif dengan animasi imersif dan elemen interaktif.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["Three.js", "GSAP", "WebGL"],
    year: "2024"
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              02 — Proyek
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Karya Terpilih
            </h2>
          </div>
          <button className="group text-sm tracking-widest text-foreground/60 hover:text-foreground transition-colors uppercase flex items-center gap-2">
            Lihat Semua Proyek
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-background/80 transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-sm text-foreground/80 max-w-xs">
                      {project.description}
                    </p>
                    <button className="mt-6 px-6 py-2 border border-foreground/20 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                      Lihat Proyek
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-border/50 text-muted-foreground rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;