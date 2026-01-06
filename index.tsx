import './index.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Importações dos seus componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ColorGradingShowcase from './components/ColorGradingShowcase';
import SocialProof from './components/SocialProof';
import Tools from './components/Tools';
import CaseStudy from './components/CaseStudy';
import AIConsultant from './components/AIConsultant';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        const targetElement = targetId === "" 
          ? document.body 
          : document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <ColorGradingShowcase />
        <Portfolio />
        <CaseStudy />
        <Tools />
        <AIConsultant />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

// MOTOR DO REACT (Ajustado para não dar erro)
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
