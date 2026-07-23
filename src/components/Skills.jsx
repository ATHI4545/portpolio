import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenTool, Code, Database, Search, Brain, Star,
  Layers, Monitor, Smartphone, BarChart2, GitBranch } from 'lucide-react';

const categories = [
  {
    label: 'Programming Languages',
    icon: Code,
    color: 'from-purple-600 to-fuchsia-500',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'C', level: 70, icon: '⚙️' },
      { name: 'JavaScript', level: 78, icon: '⚡' },
    ],
  },
  {
    label: 'Web Development',
    icon: Monitor,
    color: 'from-violet-600 to-purple-500',
    skills: [
      { name: 'React.js', level: 82, icon: '⚛️' },
      { name: 'HTML & CSS', level: 88, icon: '🌐' },
      { name: 'Firebase', level: 80, icon: '🔥' },
      { name: 'MongoDB', level: 75, icon: '🗄️' },
    ],
  },
  {
    label: 'Data & AI',
    icon: Brain,
    color: 'from-fuchsia-600 to-pink-500',
    skills: [
      { name: 'Machine Learning', level: 78, icon: '🤖' },
      { name: 'Artificial Intelligence', level: 80, icon: '🧠' },
      { name: 'Data Analytics', level: 82, icon: '📊' },
      { name: 'Data Visualization', level: 75, icon: '📈' },
    ],
  },
  {
    label: 'Tools & Technologies',
    icon: Layers,
    color: 'from-purple-700 to-indigo-600',
    skills: [
      { name: 'Power BI', level: 75, icon: '📊' },
      { name: 'Tableau', level: 72, icon: '📉' },
      { name: 'MySQL', level: 78, icon: '🗂️' },
      { name: 'MS Dynamics 365', level: 70, icon: '🔷' },
    ],
  },
  {
    label: 'DevOps',
    icon: GitBranch,
    color: 'from-orange-600 to-red-500',
    skills: [
      { name: 'Git', level: 80, icon: '🌿' },
      { name: 'GitHub', level: 82, icon: '🐙' },
      { name: 'Version Control', level: 78, icon: '🔀' },
      { name: 'CI/CD Workflows', level: 65, icon: '⚙️' },
    ],
  },
];

function SkillBar({ name, level, icon, inView, delay }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-white/80 flex items-center gap-2">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-xs text-purple-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill h-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section relative overflow-hidden bg-grid">
      <div className="orb w-96 h-96 bg-fuchsia-700 bottom-0 left-0 opacity-15" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Technical Expertise</span>
          <h2 className="section-title gradient-text mt-3">Skills & Capabilities</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.label}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'gradient-purple text-white shadow-lg glow-purple'
                    : 'glass text-white/60 hover:text-white'
                }`}
              >
                <Icon size={15} />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Active category */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-dark rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${categories[active].color} px-4 py-2 rounded-xl mb-6`}>
                {(() => { const Icon = categories[active].icon; return <Icon size={18} className="text-white" />; })()}
                <span className="font-semibold text-white">{categories[active].label}</span>
              </div>
              {categories[active].skills.slice(0,2).map((s, i) => (
                <SkillBar key={s.name} {...s} inView={inView} delay={i * 0.15} />
              ))}
            </div>
            <div className="flex flex-col justify-end">
              {categories[active].skills.slice(2).map((s, i) => (
                <SkillBar key={s.name} {...s} inView={inView} delay={i * 0.15 + 0.3} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* All skills as tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {['Figma','Photoshop','HTML','CSS','JavaScript','React','MySQL','Git','GitHub','Microsoft Dynamics 365','Wireframing','Prototyping','User Flows','Responsive Design','Design Systems','User Personas','Usability Testing','Competitor Analysis'].map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.04 }}
              className="tag"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
