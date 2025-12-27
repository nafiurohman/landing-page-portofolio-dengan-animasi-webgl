import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 sm:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            04 — Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl">
            Have a project in mind? I'd love to hear from you. Send me a message 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-foreground/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-foreground/80">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group relative px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12">
            {/* Direct Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:hello@nafiurohman.dev"
                  className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-foreground">hello@nafiurohman.dev</p>
                  </div>
                </a>

                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-foreground">+62 812 3456 7890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-foreground/70">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Follow Me</h3>
              
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
              <p className="text-sm text-foreground/70">
                I'm currently open to new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;