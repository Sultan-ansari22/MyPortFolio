import { ExternalLink, Github, FolderGit2, ShoppingCart, Newspaper, CheckCircle2, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'ApniShop — MERN E-Commerce Platform',
    badge: 'Full-Stack MERN',
    icon: ShoppingCart,
    description:
      'Complete online store built with MongoDB, Express, React, and Node.js. Features Redux cart state, JWT authentication, and Razorpay test payment gateway integration.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Razorpay API', 'Bootstrap'],
    demo: '#', // Add your Vercel or live link when ready
    github: 'https://github.com/Sultan-ansari22/Apnishop',
    accent: 'from-brand via-purple-500 to-brand-dark',
    badgeColor: 'bg-brand/10 text-brand-light border-brand/20',
    features: [
      'Full CRUD Product Catalog & Admin Dashboard',
      'Global Cart & Wishlist State with Redux Toolkit',
      'Secure Razorpay Payment Gateway Integration',
      'JWT User Authentication & Address Management',
    ],
  },
  {
    name: 'InkFlow — Real-Time News Portal',
    badge: 'REST API & Frontend',
    icon: Newspaper,
    description:
      'Modern, responsive news aggregator consuming live REST APIs. Features dynamic category filtering (Business, Tech, Sports), search query controls, and responsive card layouts.',
    tags: ['React.js', 'REST API', 'JavaScript (ES6+)', 'Bootstrap 5', 'Vite'],
    demo: '#', // Add your Vercel or live link when ready
    github: 'https://github.com/Sultan-ansari22/InkFlow',
    accent: 'from-cyan-accent via-blue-500 to-brand',
    badgeColor: 'bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20',
    features: [
      'Real-Time Live REST API Data Fetching',
      'Category Filtering & Keyword Search',
      'Responsive Mobile-First Grid Architecture',
      'Graceful Fallback for Empty / Broken Feeds',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-accent/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <FolderGit2 className="w-4 h-4 text-brand-light" />
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Real-world full-stack web applications featuring production MERN architecture and live REST API integrations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.name}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col border border-white/[0.08] hover:border-brand/40 transition-all duration-300 shadow-xl"
              >
                {/* 🖥️ Realistic Browser Window Top Bar */}
                <div className="bg-white/[0.03] border-b border-white/[0.06] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs text-gray-500 font-mono ml-2">
                      localhost:5173/{project.name.toLowerCase().split(' ')[0]}
                    </span>
                  </div>

                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Top Accent Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

                {/* Card Body */}
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Socials */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand-dark/10 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-brand-light" />
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>

                    {/* Key Features with Checkmarks */}
                    <div className="mb-6 space-y-2.5">
                      <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-light" /> Key Architectures & Features
                      </p>
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:border-brand/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white text-sm font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-[1.02] transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>

                    {project.demo !== '#' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-card glass-card-hover text-white text-sm font-semibold hover:border-brand/40 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-gray-500 text-xs font-medium cursor-default">
                        Localhost / Code Available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}