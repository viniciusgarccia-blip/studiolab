
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; top: string; left: string; size: string; duration: string; delay: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 300 + 100}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      <div className="noise-bg"></div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
      
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000" 
          alt="Video Editing Studio Background" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/10 uppercase animate-pulse">
          Especialista em Pós-Produção de Elite
        </span>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 md:mb-8">
          Transforme Sua Visão em <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Narrativas Visuais</span> de Alto Impacto
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
          Domine o engajamento e a percepção de marca através de edição narrativa e color grading cinematográfico. <span className="text-white font-medium">Eleve o nível do seu conteúdo hoje.</span>
        </p>

        <p className="text-xs md:text-sm lg:text-base text-cyan-400/80 mb-10 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-wider">
          Aumente o engajamento do seu público e transmita profissionalismo inquestionável através de narrativas visuais que capturam a essência da sua marca.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-black text-sm md:text-base font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20"
          >
            SOLICITE UM ORÇAMENTO
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-white/20 text-white text-sm md:text-base font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all"
          >
            VER MEU PORTFÓLIO
          </a>
        </div>
      </div>

      {/* Correção de alinhamento: Usando inset-x-0 para centralização absoluta garantida */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center animate-bounce opacity-30 pointer-events-none z-20">
        <span className="text-[10px] tracking-[0.4em] uppercase mb-2 font-bold text-white">Descubra</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
