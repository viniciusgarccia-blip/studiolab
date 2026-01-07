
import React, { useState, useRef, useEffect } from 'react';
import { getConsultationResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { 
      role: 'bot', 
      text: 'PROTOCOL_INIT: Garcia Studio Neural Engine v4.0.2 ativado. Analisando parâmetros de workflow e ciência de cor. Como posso elevar a autoridade visual do seu projeto hoje?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getConsultationResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'SYSTEM_ERR: Falha na decodificação do buffer. Tente novamente.' }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-20 md:py-32 bg-[#020202] relative overflow-hidden scroll-mt-24">
      {/* Camadas Atmosféricas */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Título Responsivo */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="animate-fade-in w-full md:w-auto">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full"></span>
              </div>
              <span className="text-[8px] md:text-[9px] font-mono font-black text-gray-500 uppercase tracking-[0.4em] md:tracking-[0.5em]">Neural Optimization Unit</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
              Consultoria<span className="font-sans font-thin text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-700">Inteligente</span>
            </h2>
          </div>
          
          <div className="hidden md:flex flex-col items-end">
            <div className="flex gap-0.5 mb-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`w-1 h-4 ${i < 6 ? 'bg-cyan-500/50' : 'bg-white/5'}`}></div>
              ))}
            </div>
            <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">Core_Latency: 14ms</p>
          </div>
        </div>

        {/* Console Industrial Container */}
        <div className="relative group/console">
          {/* Brackets Decorativos (Escondidos em mobile muito pequeno para limpar UI) */}
          <div className="hidden sm:block absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/10 group-hover:border-cyan-500/30 transition-all duration-700"></div>
          <div className="hidden sm:block absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/10 group-hover:border-cyan-500/30 transition-all duration-700"></div>

          <div className="bg-[#080808] border border-white/5 rounded-xl md:rounded-sm overflow-hidden flex flex-col h-[550px] md:h-[750px] shadow-[0_40px_100px_rgba(0,0,0,1)] relative">
            
            {/* Efeito Scanline sutil - Reduzido no mobile */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.01] md:opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

            {/* Header do Terminal Adaptativo */}
            <div className="px-5 md:px-10 py-4 md:py-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-6">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/10 border border-red-500/20"></div>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/10 border border-green-500/20 animate-pulse"></div>
                </div>
                <div className="h-3 w-px bg-white/5 mx-1 md:mx-2"></div>
                <span className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] truncate max-w-[120px] md:max-w-none"> Garcia_Studio_Node_Primary </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                 <span className="text-[7px] md:text-[8px] font-mono text-cyan-500/40 uppercase tracking-widest hidden xs:inline">Buffer_100%</span>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>
            </div>

            {/* Area de Mensagens Adaptativa */}
            <div className="flex-1 overflow-y-auto p-5 md:p-10 space-y-8 md:space-y-12 scrollbar-hide">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-zoom-in`}
                >
                  <div className={`relative max-w-[95%] md:max-w-[80%] px-5 md:px-8 py-4 md:py-6 rounded-lg md:rounded-sm font-mono text-[11px] md:text-[13px] leading-relaxed transition-all duration-500 ${
                    m.role === 'user' 
                    ? 'bg-white text-black font-bold shadow-xl' 
                    : 'bg-white/[0.02] border border-white/5 text-gray-400 italic'
                  }`}>
                    {m.role === 'bot' && (
                      <div className="absolute -top-2.5 -left-1 md:-top-3 md:-left-2 text-[7px] md:text-[8px] bg-cyan-500 text-black px-1.5 md:px-2 py-0.5 font-black uppercase tracking-tighter shadow-lg">
                        AI_OUTPUT
                      </div>
                    )}
                    {m.text}
                    {m.role === 'bot' && i === messages.length - 1 && !isLoading && (
                      <span className="inline-block w-2 h-4 md:w-2.5 md:h-5 bg-cyan-500/60 ml-2 md:ml-3 animate-pulse align-middle"></span>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-white/[0.01] border border-white/5 px-5 md:px-8 py-4 md:py-6 rounded-sm flex items-center gap-4 md:gap-6">
                    <div className="flex gap-1 md:gap-1.5">
                      <div className="w-1 h-3 md:w-1.5 md:h-4 bg-cyan-500/40 animate-[bounce_1s_infinite_0ms]"></div>
                      <div className="w-1 h-3 md:w-1.5 md:h-4 bg-cyan-500/40 animate-[bounce_1s_infinite_200ms]"></div>
                      <div className="w-1 h-3 md:w-1.5 md:h-4 bg-cyan-500/40 animate-[bounce_1s_infinite_400ms]"></div>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em] font-black italic">Processando...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input de Comando Otimizado para Touch */}
            <div className="p-4 md:p-8 bg-black border-t border-white/5 relative group/input">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
              
              <div className="flex items-center gap-3 md:gap-6 max-w-5xl mx-auto">
                <div className="text-cyan-500 font-mono font-black text-base md:text-xl animate-pulse hidden xs:block">
                  &gt;
                </div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={window.innerWidth < 640 ? "PROMPT..." : "DIGITE SEU PROMPT DE CONSULTORIA..."}
                  className="flex-1 bg-[#0c0c0c] md:bg-transparent border border-white/5 md:border-none rounded-lg md:rounded-none px-4 md:px-0 py-3 md:py-4 text-xs font-mono text-white focus:outline-none placeholder:text-gray-800 tracking-tight uppercase"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`group relative overflow-hidden px-5 md:px-8 py-3 rounded-lg md:rounded-sm font-mono text-[10px] md:text-[11px] font-black uppercase transition-all duration-700 min-w-[80px] md:min-w-[120px] ${
                    isLoading || !input.trim() 
                    ? 'text-gray-800 border border-white/5 cursor-not-allowed opacity-50' 
                    : 'text-white border border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500 hover:text-black'
                  }`}
                >
                  <span className="relative z-10">{isLoading ? '...' : 'Exec'}</span>
                </button>
              </div>
              
              {/* Footer de Metadados Simplificado em Mobile */}
              <div className="mt-4 md:mt-8 flex justify-between items-center opacity-30 px-2 md:px-6 border-t border-white/[0.02] pt-4 md:pt-6">
                 <div className="flex gap-4 md:gap-8">
                    <span className="text-[7px] md:text-[8px] font-mono text-white uppercase tracking-[0.2em] md:tracking-[0.3em] truncate max-w-[80px] md:max-w-none">Auth: OK</span>
                    <span className="hidden sm:inline text-[8px] font-mono text-white uppercase tracking-[0.3em]">Mode: High_Performance</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[7px] md:text-[8px] font-mono text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">Stable</span>
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Footer Extra Adaptativo */}
        <div className="mt-10 md:mt-16 text-center">
           <p className="text-[8px] md:text-[10px] text-gray-800 md:text-gray-700 font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4">Garcia Neural Interface v4.0.2</p>
           <div className="w-px h-8 md:h-12 bg-gradient-to-b from-gray-800 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
