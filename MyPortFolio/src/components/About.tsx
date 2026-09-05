import { Code2, ShieldCheck, Smartphone, User } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Component Architecture',
    description: 'Reusable, well-structured React components with separation of concerns and predictable state management.',
    color: 'text-brand-light',
    glow: 'from-brand/20 to-brand-dark/10',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication & Payments',
    description: 'JWT-based auth flows and Razorpay payment integration with proper validation and error handling.',
    color: 'text-cyan-accent',
    glow: 'from-cyan-accent/20 to-brand/10',
  },
  {
    icon: Smartphone,
    title: 'Performance & Mobile Responsiveness',
    description: 'Mobile-first layouts, optimized API calls, and fast load times across every device and screen size.',
    color: 'text-brand-light',
    glow: 'from-brand-dark/20 to-cyan-accent/10',
  },
];

export default function About() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <User className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium text-gray-400">About Me</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Workflow</span>
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card p-7 md:p-10">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I'm passionate about <span className="text-white font-medium">web architecture</span> and writing
              clean, maintainable code. My focus is on building <span className="text-brand-light font-medium">REST APIs</span> that
              are well-structured and secure, paired with <span className="text-cyan-accent font-medium">React front-ends</span> that
              feel fast and intuitive. I care deeply about code organization, reusability, and delivering
              products that scale gracefully from MVP to production.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card glass-card-hover p-7 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.glow} border border-white/10 flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-brand-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
