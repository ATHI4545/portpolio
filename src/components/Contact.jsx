import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBehance } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);
const BehanceIcon = ({ size = 16 }) => <FaBehance size={size} />;

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/ATHI4545', desc: 'ATHI4545' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/athityaa-allimuthu45', desc: 'athityaa-allimuthu45' },
  { icon: BehanceIcon, label: 'Codolio', href: 'https://codolio.com/profile/ATHITYAA', desc: 'ATHITYAA' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🛡️ Honeypot check (blocks bots)
    if (honeypot) {
      console.log("Bot detected 🚫");
      return;
    }

    const templateParams = {
      name: form.name,
      email: form.email,
      title: form.subject,
      message: form.message,
    };

    // NOTE: You will need to create an account at emailjs.com and 
    // replace these placeholders with your actual Service ID, Template ID, and Public Key.
    emailjs.send(
      'service_hipb1yh', 
      'template_8z9spkq', 
      templateParams, 
      'bfVWZPp19084fTvIh'
    )
    .then(() => {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-grid">
      <div className="orb w-96 h-96 bg-purple-700 top-1/2 left-0 opacity-15" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Get In Touch</span>
          <h2 className="section-title gradient-text mt-3">Let's Work Together</h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            {[
              { icon: Mail, label: 'Email', value: 'athikuti4@gmail.com', href: 'mailto:athikuti4@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9345664042', href: 'tel:+919345664042' },
              { icon: MapPin, label: 'Location', value: 'Tiruchengode, Tamil Nadu, India', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-dark rounded-2xl p-5 poly-card flex items-center gap-4">
                <div className="w-11 h-11 gradient-purple rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm text-white/80 hover:text-purple-400 transition-colors">{value}</a>
                  ) : (
                    <div className="text-sm text-white/80">{value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-dark rounded-2xl p-5">
              <div className="text-sm text-white/40 mb-4">Connect With Me</div>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, desc }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors group">
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs text-white/40">{desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="glass-dark rounded-3xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                >
                  <CheckCircle2 size={56} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="hidden_field"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Athityaa A' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'athi45@gmail.com' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label className="block text-sm text-white/60 mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required
                          value={form[id]}
                          onChange={e => setForm({ ...form, [id]: e.target.value })}
                          className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/50 transition-colors bg-transparent border border-white/10"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Project collaboration / Job opportunity..."
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/50 transition-colors bg-transparent border border-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/50 transition-colors bg-transparent border border-white/10 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
