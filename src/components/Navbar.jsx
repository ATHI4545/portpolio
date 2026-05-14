import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['Home','About','Skills','Experience','Projects','Achievements','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('Home')}
            className="font-['Space_Grotesk'] font-bold text-xl tracking-tight cursor-none"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">AA</span>
            <span className="text-white/40 text-sm ml-1">portfolio</span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`nav-link text-sm font-medium cursor-none transition-colors ${
                  active === l ? 'text-purple-400 active' : 'text-white/60 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/assets/athityaa_resume.pdf"
            download
            className="hidden md:flex btn-primary text-sm items-center gap-2"
          >
            Resume ↓
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 cursor-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-dark overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {links.map(l => (
                  <button key={l} onClick={() => scrollTo(l)}
                    className="text-left text-white/70 hover:text-purple-400 transition-colors cursor-none">
                    {l}
                  </button>
                ))}
                <a href="/assets/athityaa_resume.pdf" download
                  className="btn-primary text-center">Resume ↓</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
