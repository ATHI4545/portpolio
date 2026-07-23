import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { FaDna, FaCar, FaMap, FaChartBar, FaHome, FaTachometerAlt } from 'react-icons/fa';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const projects = [
  {
    title: 'ARS SmartTrack',
    subtitle: 'Full-Stack Productivity & Developer Dashboard',
    category: 'AI/Full-Stack',
    icon: FaTachometerAlt,
    color: 'from-cyan-500 to-blue-600',
    tags: ['React 19', 'Node.js', 'Firebase', 'Groq AI', 'NVIDIA API', 'GitHub API', 'LeetCode API', 'Cloudinary'],
    description: 'A full-stack personal productivity and developer-progress tracking dashboard unifying task management, coding analytics, and skill-growth tracking — secured with a three-tier architecture proxying all sensitive operations through an authenticated Express backend.',
    points: [
      'Re-architected from client-only to a secured three-tier architecture (React → Express → Firebase)',
      'Integrated Groq AI chatbot, NVIDIA API for learning roadmaps, GitHub REST API & alfa-leetcode-api for live stats',
      'Drag-and-drop task management with @hello-pangea/dnd and animated UI via Framer Motion',
      'Cloudinary-powered certificate/resume storage with Multer file upload pipeline',
      'Fixed streak calculation bugs and timezone-related date parsing errors in production',
    ],
    github: 'https://github.com/ATHI4545',
    website: 'https://notes-self-track-2gml.vercel.app/login',
  },
  {
    title: 'Protein Bind Analysis with Chatbot',
    subtitle: 'AI-Powered Drug Discovery',
    category: 'AI/Full-Stack',
    icon: FaDna,
    color: 'from-purple-600 to-fuchsia-500',
    tags: ['NVIDIA API', 'Python', 'Chatbot', 'Data Science'],
    description: 'Developed an AI-based chatbot to assist in protein binding affinity predictions using the NVIDIA API for high-throughput computation and visualization.',
    points: ['Integrated NVIDIA API for high-throughput computation and prediction', 'Enabled analysis of 500+ protein interactions per week', 'Helped improve drug discovery research speed'],
    github: 'https://github.com/ATHI4545/project',
    website: 'https://protein-bind-gamma.vercel.app/',
  },
  {
    title: 'Car Showroom Booking Web Application',
    subtitle: 'Full-Stack Car Booking Platform',
    category: 'Development',
    icon: FaCar,
    color: 'from-violet-600 to-purple-500',
    tags: ['React.js', 'Firebase', '3D Models', 'HTML', 'CSS', 'JavaScript'],
    description: 'Developed a full-stack car showroom booking website with 3D model integration for interactive user experience.',
    points: ['Integrated 3D car models for interactive user experience', 'Implemented car booking and appointment system', 'Built responsive frontend using React.js'],
    github: 'https://github.com/ATHI4545/torque_hub',
  },
  {
    title: 'AI Roadmap Generator',
    subtitle: 'Personalized Learning Path Creator',
    category: 'AI/Full-Stack',
    icon: FaMap,
    color: 'from-fuchsia-600 to-pink-500',
    tags: ['AI', 'JavaScript', 'Database', 'Recommendation System', 'ML'],
    description: 'Built an intelligent learning roadmap generator that recommends personalized learning paths based on user goals and available resources.',
    points: ['Integrated 500+ learning resources database', 'Implemented AI-powered recommendation logic', 'Reduced roadmap creation time by 30%'],
    github: 'https://github.com/ATHI4545',
  },
  {
    title: 'Sales Market Analysis',
    subtitle: 'Business Intelligence Dashboard',
    category: 'Data Analytics',
    icon: FaChartBar,
    color: 'from-blue-600 to-cyan-500',
    tags: ['Power BI', 'Data Analysis', 'Visualization', 'JavaScript', 'React'],
    description: 'Business intelligence dashboard for sales and market analysis with interactive data visualization and real-time insights.',
    points: ['Interactive data visualization with multiple charts', 'Real-time sales metrics and KPIs', 'Market trend analysis and forecasting'],
    website: 'https://bi-project-pied.vercel.app/',
  },
  {
    title: 'House Price Prediction',
    subtitle: 'Machine Learning Prediction Model',
    category: 'AI/Full-Stack',
    icon: FaHome,
    color: 'from-orange-600 to-red-500',
    tags: ['Machine Learning', 'Python', 'React', 'Data Science', 'Prediction Model'],
    description: 'Machine learning model for predicting house prices based on various features, with an interactive web interface for predictions.',
    points: ['ML model trained on real estate data', 'Feature-based price estimation', 'Interactive prediction interface with user-friendly form'],
    website: 'https://house-price-prediction-sage.vercel.app/login',
  },
];

const categories = ['All', 'AI/Full-Stack', 'Development', 'Data Analytics'];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ type: 'spring', damping: 20 }}
        className="relative glass-dark rounded-3xl p-8 max-w-lg w-full z-10 border border-purple-500/30"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
          <X size={20} />
        </button>

        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl mb-5 glow-purple`}>
          <project.icon size={40} className="text-white" />
        </div>

        <div className="tag mb-2">{project.category}</div>
        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-purple-400 text-sm mb-4">{project.subtitle}</p>
        <p className="text-white/65 text-sm leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.points.map((p, i) => (
            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
              <ChevronRight size={14} className="text-purple-400" />
              {p}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm">
              <GithubIcon size={15} /> View on GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm">
              <ExternalLink size={15} /> Visit Website
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section relative overflow-hidden bg-grid">
      <div className="orb w-96 h-96 bg-purple-700 top-0 left-1/3 opacity-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Portfolio</span>
          <h2 className="section-title gradient-text mt-3">Featured Projects</h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            A curated selection of design and development projects showcasing my range of skills.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat ? 'gradient-purple text-white shadow-lg' : 'glass text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="glass-dark rounded-2xl p-6 poly-card group relative overflow-hidden"
                onClick={() => setSelected(project)}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="animate-shimmer absolute inset-0 rounded-2xl" />
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <project.icon size={28} className="text-white" />
                </div>

                <div className="tag mb-2 text-xs">{project.category}</div>
                <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-white/55 text-sm line-clamp-2 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0,3).map(t => <span key={t} className="tag text-xs">{t}</span>)}
                </div>

                <div className="flex items-center gap-1.5 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  View Details <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
