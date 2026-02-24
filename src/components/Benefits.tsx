import { benefits } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-2">Por que nos escolher?</h2>
            <p className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Excelência em cada detalhamento do seu veículo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
                alt="Carro de luxo detalhado"
                className="w-full h-auto md:h-[400px] object-cover max-w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-black">Padrão Andreo</p>
                <p className="text-orange-400 font-bold">Qualidade Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
