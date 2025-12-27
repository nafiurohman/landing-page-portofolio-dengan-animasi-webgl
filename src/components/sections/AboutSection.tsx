const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            01 — Tentang
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Bersemangat menciptakan
            <br />
            <span className="text-primary">pengalaman digital</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Saya adalah pengembang kreatif dan desainer yang berbasis di Indonesia, 
              mengkhususkan diri dalam membangun pengalaman digital yang luar biasa. 
              Dengan passion untuk kode yang bersih dan desain yang indah, 
              saya mewujudkan ide melalui aplikasi web yang inovatif.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Perjalanan saya di dunia teknologi dimulai dengan rasa ingin tahu tentang 
              bagaimana hal-hal bekerja di web. Hari ini, saya fokus pada menciptakan 
              pengalaman pengguna yang mulus yang menggabungkan estetika dengan fungsionalitas.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Ketika saya tidak sedang coding, Anda akan menemukan saya menjelajahi 
              teknologi baru, berkontribusi pada open source, atau mengabadikan momen 
              melalui fotografi.
            </p>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-12">
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">50+</span>
                <p className="text-sm text-muted-foreground">Proyek Selesai</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground">Klien Puas</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">10+</span>
                <p className="text-sm text-muted-foreground">Penghargaan</p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4 border-t border-border pt-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lokasi</span>
                <span className="text-foreground">Indonesia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="text-foreground">nafiurohman25@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ketersediaan</span>
                <span className="text-primary">Terbuka untuk bekerja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;