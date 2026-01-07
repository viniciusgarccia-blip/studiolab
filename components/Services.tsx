
import React from 'react';

const services = [
  {
    title: "Color Grading & Correção",
    description: "Criação de paletas de cores que definem o tom e a atmosfera, garantindo consistência e qualidade técnica impecável em cada frame.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26a7 7 0 0 0 3-5.74 7 7 0 0 0-7-7z"/></svg>
  },
  {
    title: "Edição & Montagem",
    description: "Estruturação narrativa (storytelling), ritmo (pacing) e cortes precisos para maximizar engajamento e clareza da mensagem final.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 3v18"/><path d="M15 3v18"/><path d="M3 8h18"/><path d="M3 12h18"/><path d="M3 16h18"/></svg>
  },
  {
    title: "Finalização Avançada",
    description: "Aplicação de técnicas de nitidez, redução de ruído e ajustes finos para um produto premium pronto para qualquer plataforma.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
  },
  {
    title: "Motion Graphics",
    description: "Elementos gráficos dinâmicos e informativos que guiam o espectador e trazem modernidade e energia para o vídeo.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.6-7.4"/><path d="m9 11 1 9"/><path d="m15 11-1 9"/></svg>
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:metric-16">
          <h2 className="text-cyan-400 font-bold tracking-widest text-[10px] md:text-sm mb-4 uppercase">Especialidades</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Como Elevar o Seu Conteúdo</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            Domínio técnico absoluto nas melhores ferramentas do mercado para entregar resultados cinematográficos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-500 inline-block p-3 md:p-4 bg-cyan-400/5 rounded-xl border border-cyan-400/10">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-400 transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light text-xs md:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
