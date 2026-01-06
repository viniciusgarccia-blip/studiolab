
import React, { useState } from 'react';
import { supabase, isConfigured } from '../services/supabase';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  vision?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Color Grading de Elite',
    vision: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.name.trim().length < 3) {
      newErrors.name = 'Por favor, insira seu nome completo (mín. 3 caracteres).';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Insira um endereço de e-mail profissional válido.';
    }

    if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Insira um telefone válido (com DDD).';
    }
    
    if (formData.vision.trim().length < 20) {
      newErrors.vision = 'Conte um pouco mais sobre seu projeto (mín. 20 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (!isConfigured) {
      console.warn('Configuração de banco de dados ausente.');
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      // Agora enviamos o 'phone' diretamente para sua própria coluna
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name.trim(), 
            company: formData.company.trim(), 
            email: formData.email.trim(), 
            phone: formData.phone.trim(),
            service: formData.service, 
            message: formData.vision.trim() 
          }
        ]);

      if (error) {
        console.error('Database Error:', error.message);
        setStatus('error');
      } else {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', service: 'Color Grading de Elite', vision: '' });
        setErrors({});
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error('Submission Catch:', err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h2 className="text-cyan-400 font-bold tracking-widest text-[10px] mb-6 uppercase">Vamos Criar Juntos</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Dê ao seu projeto o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">tratamento de elite</span> que ele merece.
            </h3>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-md">
              Seja para um comercial, documentário ou estratégia agressiva de redes sociais, estou pronto para elevar seu padrão visual.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <a 
                href="https://wa.me/43991755542" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group block"
              >
                <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Rápido</h4>
                <p className="text-white text-sm">WhatsApp Business</p>
              </a>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Profissional</h4>
                <p className="text-white text-sm">LinkedIn Portfólio</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-md shadow-2xl relative">
            {status === 'success' && (
              <div className="absolute inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center text-center p-8 rounded-[2rem] animate-fade-in">
                <div className="w-20 h-20 bg-cyan-500 text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Proposta Recebida!</h4>
                <p className="text-gray-400 text-sm">O Garcia Studio Lab analisará sua visão e entrará em contato em até 24h.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nome</label>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    type="text" 
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-white/10'} py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-800 text-sm`} 
                    placeholder="Nome completo" 
                  />
                  {errors.name && <p className="text-[9px] text-red-400 font-medium uppercase tracking-tighter">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Empresa</label>
                  <input 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-800 text-sm" 
                    placeholder="Marca/Projeto" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">E-mail Profissional</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    type="email" 
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500/50' : 'border-white/10'} py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-800 text-sm`} 
                    placeholder="seu@email.com" 
                  />
                  {errors.email && <p className="text-[9px] text-red-400 font-medium uppercase tracking-tighter">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Telefone de Contato</label>
                  <input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    type="tel" 
                    className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500/50' : 'border-white/10'} py-3 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-800 text-sm`} 
                    placeholder="(00) 00000-0000" 
                  />
                  {errors.phone && <p className="text-[9px] text-red-400 font-medium uppercase tracking-tighter">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Serviço Desejado</label>
                <div className="relative">
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer text-sm pr-10"
                  >
                    <option className="bg-[#111]">Color Grading de Elite</option>
                    <option className="bg-[#111]">Edição Narrativa Completa</option>
                    <option className="bg-[#111]">Motion Graphics & VFX</option>
                    <option className="bg-[#111]">Outro Projeto Customizado</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Conte sua visão</label>
                <textarea 
                  name="vision" 
                  value={formData.vision} 
                  onChange={handleChange} 
                  rows={4} 
                  className={`w-full bg-transparent border-b ${errors.vision ? 'border-red-500/50' : 'border-white/10'} py-3 focus:outline-none focus:border-cyan-500 transition-all resize-none placeholder:text-gray-800 text-sm`} 
                  placeholder="Quais são os objetivos do seu vídeo? Qual a duração estimada?"
                ></textarea>
                {errors.vision && <p className="text-[9px] text-red-400 font-medium uppercase tracking-tighter">{errors.vision}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-5 bg-white text-black font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-[1.01] shadow-xl disabled:opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10 uppercase tracking-widest text-[11px]">
                  {status === 'sending' ? 'Processando...' : 'ENVIAR PROPOSTA AGORA'}
                </span>
                <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
                   <p className="text-[9px] text-red-400 uppercase tracking-widest font-bold">Falha na conexão. Tente novamente em instantes.</p>
                </div>
              )}
              
              <div className="flex items-center justify-between text-[9px] text-gray-600 font-bold uppercase tracking-widest px-1">
                <span>Resposta em até 24h</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Online Agora
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
