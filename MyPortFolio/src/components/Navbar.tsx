import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group cursor-pointer"
          >
            <span className="font-heading font-bold text-2xl text-white tracking-tight">
              Sultan<span className="gradient-text">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-brand to-cyan-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="relative px-5 py-2.5 rounded-full text-white text-sm font-semibold border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,99,248,0.2)] cursor-pointer"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="glass-card p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 px-4 py-3 rounded-lg border border-white/10 text-white font-semibold text-center hover:border-brand/50 transition-colors cursor-pointer"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}