const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            01 — About
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Passionate about creating
            <br />
            <span className="text-primary">digital experiences</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a creative developer and designer based in Indonesia, specializing in building 
              exceptional digital experiences. With a passion for clean code and beautiful design, 
              I bring ideas to life through innovative web applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech started with a curiosity about how things work on the web. 
              Today, I focus on creating seamless user experiences that combine aesthetics 
              with functionality.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source, or capturing moments through photography.
            </p>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-12">
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">50+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">10+</span>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4 border-t border-border pt-8">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground">Indonesia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="text-foreground">hello@nafiurohman.dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-primary">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;