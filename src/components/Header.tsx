import { useState, useEffect } from 'react';
import Logo from './Logo';
import { businessData } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#orcamento' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio">
          <Logo />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${businessData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Agendar Agora
          </a>
        </nav>

        {/* Mobile Menu Button (Simplified for this landing page) */}
        <div className="md:hidden">
           <a
            href={`https://wa.me/${businessData.whatsapp}`}
            className="bg-orange-500 text-white p-2 rounded-lg"
          >
            <span className="text-xs font-bold">AGENDAR</span>
          </a>
        </div>
      </div>
    </header>
  );
}
