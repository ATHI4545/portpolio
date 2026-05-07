import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const outer = document.getElementById('cursor-outer');
    const inner = document.getElementById('cursor-inner');
    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.left = mouseX + 'px';
      inner.style.top = mouseY + 'px';
    };

    const raf = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      outer.style.left = outerX + 'px';
      outer.style.top = outerY + 'px';
      requestAnimationFrame(raf);
    };

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('mousemove', onMove);
    requestAnimationFrame(raf);

    const els = document.querySelectorAll('a, button, .poly-card, .tag, .btn-primary, .btn-outline');
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return null;
}
