
import React, { useEffect, useState } from 'react';
import { supabase, isConfigured } from '../services/supabase';
// Import Testimonial from types.ts as it is not exported from supabase.ts
import { Testimonial } from '../types';

const SocialProof: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const fallbackTestimonials: Testimonial[] = [
    { id: '1', name: "Ricardo Mendes", role: "Diretor de Marketing", text: "O Garcia Studio Lab transformou nossos vídeos. O nível de cor e ritmo foram cruciais.", image_url: "https://i.pravatar.cc/150?u=ricardo" },
    { id: '2', name: "Julia Costa", role: "Influenciadora", text: "Incrível como eles entendem minha identidade visual. Meus Reels estão em outro nível.", image_url: "https://i.pravatar.cc/150?u=julia" },
    { id: '3', name: "Carlos Rocha", role: "YouTuber", text: "O workflow com DaVinci resolveu problemas que eu achava impossíveis. Mestre da cor!", image_url: "https://i.pravatar.cc/150?u=carlos" }
  ];

  useEffect(() => {
    async function fetchTestimonials() {
      if (!isConfigured) {
        setTestimonials(fallbackTestimonials);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*');

        if (error) {
          console.warn('Supabase testimonials error (using fallback):', error.message);
          setTestimonials(fallbackTestimonials);
        } else if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } catch (err) {
        console.warn('Network error testimonials (using fallback):', err);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-black/50 border-b border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-1 md:mb-2">150+</div>
            <div className="text-[9px] md:text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Projetos de Elite</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-1 md:mb-2">2M+</div>
            <div className="text-[9px] md:text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Views Gerados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-1 md:mb-2">98%</div>
            <div className="text-[9px] md:text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Clientes Recorrentes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-1 md:mb-2">08+</div>
            <div className="text-[9px] md:text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Anos na Indústria</div>
          </div>
        </div>

        <div className="mb-8 md:mb-16">
          <h2 className="text-center text-cyan-400 font-bold tracking-widest text-[10px] md:text-xs mb-8 md:mb-12 uppercase">O Que Dizem os Clientes</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => <div key={i} className="h-64 bg-white/5 animate-pulse rounded-3xl"></div>)}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-3xl relative">
                  <div className="text-cyan-400 mb-4 md:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5C12.017 3.89543 12.9124 3 14.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V11C1.017 11.5523 0.569282 12 0.017 12H-0.983V5C-0.983 3.89543 -0.08757 3 1.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z"/></svg>
                  </div>
                  <p className="text-gray-300 italic mb-6 md:mb-8 font-light leading-relaxed text-sm md:text-base">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image_url} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cyan-500/30" />
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm">{t.name}</h4>
                      <p className="text-[10px] md:text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
