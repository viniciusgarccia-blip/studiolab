
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Motion', href: '#hero', id: 'hero' },
    { name: 'History', href: '#about', id: 'about' },
    { name: 'Expertise', href: '#services', id: 'services' },
    { name: 'Color', href: '#grading', id: 'grading' },
    { name: 'Showreel', href: '#portfolio', id: 'portfolio' },
    { name: 'Tech', href: '#tools', id: 'tools' },
    { name: 'IA', href: '#ai-consultant', id: 'ai-consultant' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 px-4 md:px-12 py-6 md:py-8 ${
        isScrolled ? 'md:py-4' : 'md:py-8'
      }`}>
        <div className="mx-auto max-w-screen-2xl flex justify-between items-center">
          
          {/* Brand - Left Side */}
          <a 
            href="#hero" 
            className="relative z-[110] flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold tracking-[-0.05em] leading-none text-white group-hover:text-cyan-400 transition-colors uppercase">
                Garcia Studio Lab
              </span>
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-500 uppercase mt-1">Elite Post-Production</span>
            </div>
          </a>
          
          {/* Desktop Navigation - Center Pill */}
          <div className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`relative px-5 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 rounded-full ${
                      activeSection === link.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {activeSection === link.id && (
                      <div className="absolute inset-0 bg-white/5 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            <a 
              href="#contact" 
              className="hidden sm:flex relative items-center gap-2 group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-cyan-400 transition-colors">Start Project</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </a>

            {/* Menu Toggle */}
            <button 
              className="relative z-[110] p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col gap-1.5 overflow-hidden">
                <span className={`h-0.5 bg-white transition-all duration-500 origin-right ${isMobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-10 opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-500 origin-right ${isMobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Studio Menu Overlay */}
      <div className={`fixed inset-0 z-[95] transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] ${
        isMobileMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {/* Deep Black Background with noise */}
        <div className="absolute inset-0 bg-[#020202]">
           <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        
        {/* Studio Elements Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
           <div className="text-[30vw] font-serif font-black text-white/[0.02] leading-none select-none">
              GARCIA
           </div>
        </div>

        <div className="relative h-full flex flex-col pt-32 pb-12 px-8 md:px-24">
          <div className="grid lg:grid-cols-2 h-full items-center">
            
            {/* Nav Section */}
            <div className="flex flex-col space-y-2">
              <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.5em] mb-8">Navigation Menu</p>
              {navLinks.map((link, index) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={closeMenu}
                  className={`group flex items-baseline gap-6 text-5xl md:text-8xl font-serif font-bold transition-all duration-700 ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + index * 80}ms` }}
                >
                  <span className="text-gray-800 text-lg md:text-2xl font-sans group-hover:text-cyan-500 transition-colors">0{index + 1}</span>
                  <span className="text-white group-hover:text-cyan-400 group-hover:italic transition-all uppercase tracking-tighter">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Meta & Social Section */}
            <div className={`hidden lg:flex flex-col items-end text-right space-y-12 transition-all duration-1000 ${
              isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{ transitionDelay: '600ms' }}>
               <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Localização</p>
                  <p className="text-white text-lg font-light">São Paulo, BR <span className="text-cyan-500">—</span> Global Ready</p>
               </div>
               
               <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Connect</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://instagram.com/garciastudiolab_" target="_blank" className="text-2xl text-white hover:text-cyan-400 transition-colors">Instagram</a>
                    <a href="#" className="text-2xl text-white hover:text-cyan-400 transition-colors">LinkedIn</a>
                    <a href="https://wa.me/43991755542" className="text-2xl text-white hover:text-cyan-400 transition-colors">WhatsApp</a>
                  </div>
               </div>

               <div className="pt-12 border-t border-white/5 w-64">
                  <p className="text-[9px] font-bold text-gray-600 uppercase leading-relaxed tracking-widest">
                    Garcia Studio Lab é focado em elevar marcas através de narrativas visuais e color grading de nível mundial.
                  </p>
               </div>
            </div>
          </div>

          {/* Bottom Footer Overlay */}
          <div className={`mt-auto flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-1000 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
             <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Estúdio Aberto para Reservas</span>
             </div>
             <p className="text-[10px] text-gray-500 uppercase tracking-widest">&copy; {new Date().getFullYear()} Garcia Studio Lab | Visual Arts</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
