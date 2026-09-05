import { ArrowRight, Download, Rocket, Zap } from 'lucide-react';

const profileImg = '/pic1.jpeg';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
    >
      {/* Ambient mesh gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-accent/10 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-6 animate-fade-up">
              <span className="relative flex items-center">
                <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-neon-green opacity-75 animate-pulse-dot" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon-green" />
              </span>
              <span className="text-sm font-medium text-gray-300">Available for Full-Stack Opportunities</span>
            </div>

            {/* Main title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-5 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Building Scalable <span className="gradient-text">Full-Stack Web Apps</span> &amp; REST APIs
            </h1>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Hi, I'm Sultan Ansari — a Full-Stack MERN Developer crafting responsive web interfaces and secure backend API architectures.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white font-semibold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full glass-card glass-card-hover text-white font-semibold transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {[
                { value: '5+', label: 'Projects Built' },
                { value: 'MERN', label: 'Full-Stack' },
                { value: 'REST', label: 'API Architecture' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative">
              {/* Glowing gradient border frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-[2rem] p-[2px] bg-gradient-to-br from-brand via-brand-dark to-cyan-accent animate-glow-pulse">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-base-card relative">
                  {/* 🖼️ Profile Image with Auto .jpeg/.jpg detection */}
                  <img
                    src={profileImg}
                    alt="Sultan Ansari"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If .jpeg fails, automatically try .jpg
                      if (!e.currentTarget.src.endsWith('.jpg')) {
                        e.currentTarget.src = '/pic1.jpg';
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating badge 1 - top left */}
              <div className="absolute -top-5 -left-4 sm:-left-8 glass-card px-4 py-2.5 flex items-center gap-2 animate-float shadow-xl">
                <Rocket className="w-4 h-4 text-brand-light" />
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">MERN Stack Specialist</span>
              </div>

              {/* Floating badge 2 - bottom right */}
              <div className="absolute -bottom-5 -right-4 sm:-right-8 glass-card px-4 py-2.5 flex items-center gap-2 animate-float-slow shadow-xl" style={{ animationDelay: '1s' }}>
                <Zap className="w-4 h-4 text-cyan-accent" />
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">REST APIs &amp; Web Architecture</span>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-8 right-12 w-2 h-2 rounded-full bg-brand animate-pulse-dot" />
              <div className="absolute -bottom-8 left-12 w-2 h-2 rounded-full bg-cyan-accent animate-pulse-dot" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}