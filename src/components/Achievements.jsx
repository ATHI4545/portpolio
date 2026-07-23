import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code2, Palette, Globe, Zap, Award, ExternalLink } from 'lucide-react';


const achievements = [
  {
    icon: Code2,
    emoji: '🧬',
    title: 'Protein Binding Analysis',
    desc: 'Expedited protein binding affinity predictions enabling researchers to analyze 500+ protein interactions weekly, accelerating drug discovery.',
    color: 'from-purple-600 to-fuchsia-500',
  },
  {
    icon: Globe,
    emoji: '💻',
    title: '15+ Critical Bugs Fixed',
    desc: 'Fixed 15+ bugs in client project websites using React.js, improving code reliability and reducing user-reported issues significantly.',
    color: 'from-violet-600 to-purple-500',
  },
  {
    icon: Palette,
    emoji: '📊',
    title: '5,000 Customer Records',
    desc: 'Conducted data cleaning and preprocessing on 5,000 customer records, improving data quality by 20% and marketing list accuracy.',
    color: 'from-fuchsia-600 to-pink-500',
  },
  {
    icon: Trophy,
    emoji: '🏆',
    title: '2nd Place – Technical Presentation',
    desc: 'Awarded 2nd place in technical project presentation at Kongu Engineering College, showcasing exceptional presentation skills.',
    color: 'from-yellow-600 to-amber-500',
  },
];

const certificates = [
  {
    title: 'Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur',
    badge: 'Elite + Silver',
    badgeBg: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
    emoji: '🌐',
    color: 'from-cyan-600 to-blue-600',
    file: '/assets/IOT.pdf',
  },
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL — IIT Madras',
    badge: 'Elite',
    badgeBg: 'bg-purple-500/15 text-purple-300 border border-purple-500/30',
    emoji: '📊',
    color: 'from-violet-600 to-purple-600',
    file: '/assets/Data Analytics with Python.pdf',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section relative overflow-hidden">
      <div className="orb w-80 h-80 bg-fuchsia-700 bottom-0 right-0 opacity-15" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Milestones</span>
          <h2 className="section-title gradient-text mt-3">Achievements</h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ icon: Icon, emoji, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark rounded-2xl p-6 poly-card text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {emoji}
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* NPTEL Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="font-bold text-white text-xl mb-6 text-center flex items-center justify-center gap-2">
            <Award size={20} className="text-yellow-400" />
            NPTEL Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.58 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark rounded-2xl p-6 poly-card group flex items-start gap-5"
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {cert.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-base">{cert.title}</h4>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cert.badgeBg}`}>
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mb-4">{cert.issuer}</p>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    View Certificate
                    <ExternalLink
                      size={13}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.72, duration: 0.6 }}
          className="mt-8 glass-dark rounded-3xl p-8"
        >
          <h3 className="font-bold text-white text-xl mb-6 text-center flex items-center justify-center gap-2">
            <Zap size={20} className="text-purple-400" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { skill: 'Problem Solving', emoji: '🧩' },
              { skill: 'Team Collaboration', emoji: '🤝' },
              { skill: 'Data Analysis', emoji: '📊' },
              { skill: 'Critical Thinking', emoji: '🧠' },
              { skill: 'Quick Learning', emoji: '⚡' },
              { skill: 'Time Management', emoji: '⏰' },
              { skill: 'Adaptability', emoji: '🔄' },
              { skill: 'Technical Communication', emoji: '💬' },
            ].map(({ skill, emoji }) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glass rounded-xl px-4 py-2.5 flex items-center gap-2"
              >
                <span>{emoji}</span>
                <span className="text-sm text-white/75 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
