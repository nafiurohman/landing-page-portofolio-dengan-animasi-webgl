import { ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nafiurohman. All rights reserved.
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <span className="tracking-wider uppercase">Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>

          {/* Credits */}
          <div className="text-sm text-muted-foreground">
            Designed & Built with passion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;