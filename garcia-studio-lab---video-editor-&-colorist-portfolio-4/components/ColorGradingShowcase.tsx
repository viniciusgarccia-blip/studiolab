
import React, { useState } from 'react';

const ColorGradingShowcase: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="grading" className="py-24 bg-[#0a0a0a] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">Arte Visual</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">A Magia do Color Grading</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Veja a transformação de material bruto (log) para o resultado final cinematográfico. A cor conta a história tanto quanto a imagem.
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
          {/* After Image (Graded) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=100&w=1920" 
              alt="After Color Grading" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-xs font-bold tracking-widest uppercase">Depois (Graded)</div>
          </div>

          {/* Before Image (Raw) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=100&w=1920&sepia=100&brightness=70" 
              alt="Before Color Grading" 
              className="w-full h-full object-cover max-w-none grayscale brightness-75"
              style={{ width: '100vw' }}
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-xs font-bold tracking-widest uppercase">Antes (LOG)</div>
          </div>

          {/* Slider Control */}
          <div 
            className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>

          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
          />
        </div>
        
        <div className="mt-8 flex justify-center gap-8">
           <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
              Resgate de Detalhes
           </div>
           <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
              Identidade Cromática
           </div>
           <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Tom Narrativo
           </div>
        </div>
      </div>
    </section>
  );
};

export default ColorGradingShowcase;
