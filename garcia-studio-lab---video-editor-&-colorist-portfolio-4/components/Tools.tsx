
import React from 'react';

const workflowStages = [
  {
    step: "01",
    name: "Narrative Assembly",
    tool: "Premiere Pro",
    tech: "NLE / Storytelling",
    specs: "Frame-accurate / Proxy Workflow",
    desc: "A base da história. Organização meticulosa e ritmo narrativo focado em retenção e impacto emocional."
  },
  {
    step: "02",
    name: "Visual Synthesis",
    tool: "After Effects",
    tech: "VFX / Motion",
    specs: "32-bit Float / Linear Space",
    desc: "Refinamento visual. Composição de efeitos, motion design e limpeza de imagem com precisão de pixel."
  },
  {
    step: "03",
    name: "Color Science",
    tool: "DaVinci Resolve",
    tech: "Color Grading",
    specs: "ACES 1.3 / HDR Mastering",
    desc: "A alma da imagem. Manipulação cromática avançada para criar atmosferas cinematográficas e autoridade visual."
  },
  {
    step: "04",
    name: "Sonic Precision",
    tool: "Adobe Audition",
    tech: "Audio Post",
    specs: "LUFS Normalization / EQ Lab",
    desc: "Imersão total. Mixagem e masterização de áudio para garantir que a sonoridade seja tão potente quanto a imagem."
  }
];

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-32 bg-[#050505] scroll-mt-24 relative overflow-hidden">
      {/* Elementos de fundo minimalistas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase">Industrial Standard</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none">
              Protocolo de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 italic">Pós-Produção</span>
            </h3>
          </div>
          <div className="text-right hidden lg:block">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] mb-2">Current Status</p>
            <p className="text-white font-mono text-xs tracking-widest uppercase">Pipeline Optimized / 100% Ready</p>
          </div>
        </div>

        {/* Pipeline Workflow - Minimalist Vertical/Horizontal Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          {workflowStages.map((stage, index) => (
            <div 
              key={index}
              className="group relative p-10 bg-[#080808] transition-all duration-700 hover:bg-[#0c0c0c] cursor-default"
            >
              {/* Overlay de gradiente sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl font-serif font-bold text-white/5 group-hover:text-cyan-500/20 transition-colors duration-700">
                    {stage.step}
                  </span>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                      {stage.tech}
                    </p>
                    <p className="text-[8px] font-mono text-gray-700 uppercase mt-1">
                      {stage.specs}
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-700">
                  {stage.name}
                </h4>
                
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  {stage.desc}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Powered by</span>
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white transition-colors uppercase">
                    {stage.tool}
                  </span>
                </div>
              </div>

              {/* Indicador de progresso visual */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Footer da Seção - Technical Info */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 px-4 opacity-40">
           <div className="flex gap-12">
              <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">Color Space</span>
                 <span className="text-[10px] text-white font-mono uppercase">Davinci Wide Gamut</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">Bit Depth</span>
                 <span className="text-[10px] text-white font-mono uppercase">32-Bit Float</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">Frame Accuracy</span>
                 <span className="text-[10px] text-white font-mono uppercase">SMPTE Standard</span>
              </div>
           </div>
           
           <div className="text-[9px] font-bold text-cyan-500 uppercase tracking-[0.4em] italic">
              Verified Elite Workflow
           </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
