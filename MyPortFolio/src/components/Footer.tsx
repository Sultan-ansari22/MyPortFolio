import { Github,MessageCircle, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-heading font-bold text-xl text-white">
            Sultan Ansari <span className="gradient-text">.</span>
          </span>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {/* Real GitHub Link */}
            <a
              href="https://github.com/Sultan-ansari22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919650195663?text=Hi%20Sultan,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass-card glass-card-hover text-gray-300 hover:text-emerald-400 font-medium text-sm transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>

            {/* Real Email Link */}
            <a
              href="mailto:sultanansari49272@gmail.com"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Sultan Ansari. Made with</span>
            <Heart className="w-4 h-4 text-brand fill-brand" />
            <span>and code.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}