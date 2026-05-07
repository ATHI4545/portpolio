import './index.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Custom cursor DOM elements injected at root level
function CursorElements() {
  useEffect(() => {
    // Create cursor elements
    const outer = document.createElement('div');
    outer.id = 'cursor-outer';
    const inner = document.createElement('div');
    inner.id = 'cursor-inner';
    document.body.appendChild(outer);
    document.body.appendChild(inner);

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.left = mouseX + 'px';
      inner.style.top = mouseY + 'px';
    };

    const tick = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      outer.style.left = outerX + 'px';
      outer.style.top = outerY + 'px';
      rafId = requestAnimationFrame(tick);
    };

    const addHover = () => {
      document.querySelectorAll('a, button, .poly-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    // Re-run hover attachment after a short delay (for dynamic elements)
    setTimeout(addHover, 1000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      outer.remove();
      inner.remove();
    };
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <CursorElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
