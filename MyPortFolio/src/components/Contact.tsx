import { useState } from 'react';
import {
  Mail, Send, MessageCircle, Github, Linkedin, MessageSquare, User, CheckCircle2, MapPin, AlertCircle, Loader2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
            <MessageSquare className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium text-gray-400">Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {/* Info card */}
            <div className="glass-card glass-card-hover p-7">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {/* Real Email */}
                <a href="mailto:sultanansari49272@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Mail className="w-5 h-5 text-brand-light" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white font-medium group-hover:text-brand-light transition-colors">
                      sultanansari49272@gmail.com
                    </div>
                  </div>
                </a>

                {/* Real Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-light" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-white font-medium">New Delhi, India · Remote</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card glass-card-hover p-7">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {/* Real GitHub Link */}
                <a
                  href="https://github.com/Sultan-ansari22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass-card glass-card-hover text-gray-300 hover:text-white font-medium text-sm transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub
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
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-7 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(138,99,248,0.1)] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(138,99,248,0.1)] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(138,99,248,0.1)] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(138,99,248,0.1)] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white font-semibold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'sent' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Message Sent!
                  </>
                ) : status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}