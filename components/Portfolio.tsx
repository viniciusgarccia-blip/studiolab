
import React, { useEffect } from 'react';

const Portfolio: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#050505] scroll-mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Seção */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-cyan-400 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase">Directing & Post-Production</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
            Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 italic">Showreel de Elite</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            A essência do meu trabalho em um único lugar. Assista à apresentação oficial do meu workflow cinematográfico.
          </p>
        </div>

        {/* Showreel Principal */}
        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-cyan-500/10 blur-[120px] rounded-[3rem] opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-cyan-500/40">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1151212460?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="Portfólio | Garcia Studio Lab"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center flex flex-col items-center">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-8 animate-pulse">Workflow Cinematográfico</p>
          <div className="mb-12">
             <div className="w-px h-16 bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent"></div>
          </div>
          <a 
            href="#contact" 
            className="group relative overflow-hidden px-12 py-5 bg-white text-black text-sm md:text-base font-bold rounded-2xl transition-all hover:scale-105 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/20 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              QUERO ELEVAR MEU PROJETO
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-widest font-medium">Disponível para novos projetos internacionais</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
