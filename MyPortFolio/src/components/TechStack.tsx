import { Layers, Server, Database, Wrench, Sparkles, Check } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    tag: 'Client-Side & UI',
    icon: Layers,
    color: 'text-brand-light',
    glow: 'from-brand/20 to-brand-dark/10',
    borderColor: 'group-hover:border-brand/40',
    topAccent: 'from-brand via-purple-500 to-brand-dark',
    skills: [
      'React.js',
      'Redux Toolkit',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Bootstrap 5',
      'Vite',
    ],
  },
  {
    title: 'Backend & API Architecture',
    tag: 'Server & Logic',
    icon: Server,
    color: 'text-cyan-accent',
    glow: 'from-cyan-accent/20 to-brand/10',
    borderColor: 'group-hover:border-cyan-accent/40',
    topAccent: 'from-cyan-accent via-blue-500 to-brand',
    skills: [
      'RESTful API Design',
      'Node.js',
      'Express.js',
      'JWT Authentication',
      'MVC Architecture',
      'Middleware Design',
      'API Route Controllers',
      'Postman Testing',
    ],
  },
  {
    title: 'Database & Data Modeling',
    tag: 'Persistence & NoSQL',
    icon: Database,
    color: 'text-brand-light',
    glow: 'from-brand-dark/20 to-cyan-accent/10',
    borderColor: 'group-hover:border-brand/40',
    topAccent: 'from-purple-600 to-cyan-accent',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'Schema Validation',
      'CRUD Operations',
      'Data Aggregations',
      'MongoDB Atlas',
    ],
  },
  {
    title: 'Tools, DevOps & Integrations',
    tag: 'Workflow & Cloud',
    icon: Wrench,
    color: 'text-cyan-accent',
    glow: 'from-brand/20 to-cyan-accent/10',
    borderColor: 'group-hover:border-cyan-accent/40',
    topAccent: 'from-brand-dark to-purple-500',
    skills: [
      'Razorpay Payment Gateway',
      'Git Version Control',
      'GitHub Workflows',
      'Vercel Deployment',
      'npm / Package Management',
      'VS Code Environment',
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-brand-light" />
            <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Full-Stack <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            End-to-end technologies I use to build scalable user interfaces, secure backend servers, and maintainable databases.
          </p>
        </div>

        {/* Skill categories 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card glass-card-hover rounded-2xl overflow-hidden p-7 md:p-8 group border border-white/[0.08] ${category.borderColor} transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Top Accent Line */}
                <div className={`-mt-7 -mx-7 md:-mt-8 md:-mx-8 mb-6 h-1 bg-gradient-to-r ${category.topAccent}`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.glow} border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-light transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-xs text-gray-500 font-medium">
                          {category.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:text-white hover:border-brand/40 hover:bg-white/[0.07] hover:scale-[1.03] transition-all duration-200 cursor-default shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-light/70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-footer check */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Production-ready &amp; component-tested</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-white/[0.08] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          <p className="text-sm text-gray-300 font-medium m-0">
            Committed to building with clean MVC architecture, RESTful API conventions, and secure payment flows.
          </p>
        </div>
      </div>
    </section>
  );
}