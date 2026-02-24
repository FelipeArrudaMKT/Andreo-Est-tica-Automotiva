import Logo from './Logo';
import { businessData } from '../data/content';
import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Referência em estética automotiva em Cidrolândia - MS. 
              Cuidamos do seu patrimônio com os melhores produtos e técnicas do mercado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#orcamento" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Onde Estamos</h4>
            <div className="flex gap-3 text-gray-400 mb-4">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <span>{businessData.location}</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Atendemos Cidrolândia e região com agendamento prévio.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-gray-500 text-sm">
          <p>© {currentYear} {businessData.name} — Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com foco em alta performance automotiva.</p>
        </div>
      </div>
    </footer>
  );
}
