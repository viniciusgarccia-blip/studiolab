
import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section id="cases" className="py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 7-5 5-5-5"/><path d="m17 12-5 5-5-5"/></svg>
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-cyan-400 font-bold tracking-widest text-xs mb-4 uppercase">Diferencial: Case de Sucesso</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Recuperando o <span className="italic">Impossível</span></h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Desafio: Um cliente entregou material gravado em condições de iluminação extremamente desfavoráveis (subexposto e com ruído excessivo) que seria descartado.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 flex items-center justify-center bg-cyan-500 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">A Solução</h4>
                  <p className="text-gray-400 text-sm">Utilização de redução de ruído via IA e reconstrução de paleta de cores no DaVinci Resolve para resgatar a nitidez e vitalidade.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 flex items-center justify-center bg-cyan-500 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">O Resultado</h4>
                  <p className="text-gray-400 text-sm">Conteúdo vibrante que não apenas foi aprovado, mas superou as expectativas, gerando 3x mais engajamento que os vídeos anteriores do cliente.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="#contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20">
                QUERO RESULTADOS ASSIM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
