
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full"></div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1200" 
                alt="Garcia Studio Lab - Editor & Colorista" 
                className="relative rounded-3xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 p-6 md:p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl hidden md:block">
                <p className="text-cyan-400 font-serif font-bold text-3xl md:text-4xl mb-1">Elite</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Workflow Standard</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-cyan-400 font-bold tracking-[0.2em] text-[9px] md:text-[10px] mb-4 md:mb-6 uppercase">A Jornada do Criador</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 md:mb-8 leading-tight">
              Sinergia Entre <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Performance Física</span> e Técnica Visual
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-gray-400 leading-relaxed text-base md:text-lg font-light">
              <p>
                Minha carreira é movida pela precisão. Como **Personal Trainer**, aprendi que a performance de elite exige atenção aos mínimos detalhes — uma filosofia que transpus integralmente para a pós-produção de vídeo.
              </p>
              <p>
                Não entrego apenas edições; entrego autoridade. Utilizo minha expertise em marketing visual para garantir que cada projeto que passa pelo meu workflow comunique profissionalismo instantâneo e gere conexão emocional real com o público.
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-white italic font-serif text-lg md:text-xl leading-relaxed">
                  "A excelência não é um ato, é um hábito. Em cada corte e em cada máscara de cor, busco a narrativa perfeita que o seu projeto merece."
                </p>
                <p className="mt-4 text-cyan-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">— Garcia Studio Lab</p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
              <a href="#contact" className="w-full sm:w-auto text-center px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all">
                Conheça meu Método
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
