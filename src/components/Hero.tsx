import { businessData } from '../data/content';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1920"
          alt="Carro sendo lavado profissionalmente"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Atendemos Sidrolândia-MS e Região
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {businessData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            {businessData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar no WhatsApp
            </a>
            <a
              href="#orcamento"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              Pedir Orçamento
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
