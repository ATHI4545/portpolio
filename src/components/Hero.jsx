import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MapPin, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

// Inline brand icons (since lucide-react v1.9 doesn't include brand icons)
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const BehanceIcon = ({ size = 18 }) => <FaBehance size={size} />;

/* Floating particles */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 40}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            animationDuration: `${Math.random() * 8 + 5}s`,
            animationDelay: `${Math.random() * 6}s`,
            opacity: Math.random() * 0.6 + 0.2,
            background: i % 3 === 0 ? '#d946ef' : i % 3 === 1 ? '#a855f7' : '#c084fc',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Orbs */}
      <div className="orb w-96 h-96 bg-purple-700 top-1/4 -left-32" />
      <div className="orb w-80 h-80 bg-fuchsia-600 bottom-10 right-0 opacity-20" />
      <div className="orb w-60 h-60 bg-purple-400 top-10 right-1/3 opacity-15" />
      <Particles />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-purple-500/10 animate-rotate-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/08 animate-rotate-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-1.5 glass rounded-full px-5 py-2 mb-5"
          >
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/70">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="section-title text-white mb-2 text-glow"
          >
            Athityaa A
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl font-semibold mb-6"
          >
            <span className="text-white/50">I am </span>
            <TypeAnimation
              sequence={[
                'a Creative Problem Solver', 2000,
                'a Data Analyst', 2000,
                'an AI & Full Stack Developer', 2000,
                'a Leader', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-white/60 text-base leading-relaxed mb-8 max-w-lg"
          >
            Leveraging knowledge in Artificial Intelligence & Data Science while enhancing skills in Web Development and Data
            Analytics. Aspiring Full-Stack Developer contributing innovative solutions and building impactful applications.
            B.Tech AI & Data Science student with hands-on internship experience at leading tech companies.
          </motion.p>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { icon: MapPin, label: 'Tiruchengode, Tamil Nadu' },
              { icon: Mail, label: 'athikuti4@gmail.com' },
              { icon: Phone, label: '+91 9345664042' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/60 glass rounded-full px-3 py-1.5">
                <Icon size={13} className="text-purple-400" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <a href="/assets/Athityaa_Resume_.pdf" download className="btn-outline">
              Download Resume ↓
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4"
          >
            {[
              { href: 'https://github.com/ATHI4545', icon: GithubIcon, label: 'GitHub' },
              { href: 'https://linkedin.com/in/athityaa-allimuthu45', icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'https://codolio.com/profile/ATHITYAA', icon: BehanceIcon, label: 'Codolio' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip w-10 h-10 glass rounded-xl flex items-center justify-center text-purple-400 hover:text-purple-300 hover:glow-purple transition-all duration-300 poly-card"
                data-tip={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-[-16px] rounded-full border border-purple-500/15 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />

            {/* Morphic blob background */}
            <div className="absolute inset-[-8px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-purple-800 hero-blob opacity-50" />

            {/* Photo container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-500/40 glow-purple animate-float">
              <img
                src="/assets/Athityaa_image.jpeg"
                alt="Athityaa A"
                className="w-full h-full object-cover object-center"
              />
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-900/20 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 text-center"
            >
              <div className="text-xl font-bold gradient-text">2</div>
              <div className="text-xs text-white/60">Internships</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2.5 text-center"
            >
              <div className="text-xl font-bold gradient-text">300+</div>
              <div className="text-xs text-white/60">LeetCode</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
