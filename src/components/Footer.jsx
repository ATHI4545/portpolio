import { ExternalLink, Heart } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

const links = ['Home','About','Skills','Experience','Projects','Achievements','Contact'];

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

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      <div className="orb w-64 h-64 bg-purple-800 bottom-0 left-1/2 opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-['Space_Grotesk'] font-bold text-2xl gradient-text mb-1">Athityaa A</div>
            <div className="text-white/40 text-sm">Full-Stack Developer · AI & Data Science</div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-sm text-white/50 hover:text-purple-400 transition-colors">
                {l}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: 'https://github.com/ATHI4545', Icon: GithubIcon },
              { href: 'https://linkedin.com/in/athityaa-allimuthu45', Icon: LinkedinIcon },
              { href: 'https://codolio.com/profile/ATHITYAA', Icon: BehanceIcon }, 
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-white/30 text-sm flex items-center justify-center gap-1">
          Made by Athityaa A - 2026
        </div>
      </div>
    </footer>
  );
}
