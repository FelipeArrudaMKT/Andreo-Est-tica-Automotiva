import { businessData } from '../data/content';
import { MapPin, Clock, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = `Olá! Vim pelo site e gostaria de um orçamento.\n\nNome: ${formData.nome}\nWhatsApp: ${formData.telefone}\nServiço/Mensagem: ${formData.mensagem}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessData.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setFormData({ nome: '', telefone: '', mensagem: '' });
  };

  return (
    <section id="orcamento" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Contato</h2>
          <p className="text-4xl font-black text-gray-900">Peça seu Orçamento</p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-5 items-start">
              <div className="bg-blue-600 p-3 rounded-2xl text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Localização</h4>
                <p className="text-gray-600 text-sm">{businessData.location}</p>
                <p className="text-gray-400 text-xs mt-1">Atendemos toda a região</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-5 items-start">
              <div className="bg-orange-500 p-3 rounded-2xl text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Horário</h4>
                <p className="text-gray-600 text-sm">{businessData.hours}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-5 items-start">
              <div className="bg-green-500 p-3 rounded-2xl text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                <p className="text-gray-600 text-sm">{businessData.whatsappDisplay}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white p-10 rounded-[40px] shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-bold text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefone"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="(67) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">Mensagem / Serviço Desejado</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                  placeholder="Descreva o que seu veículo precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
              >
                <Send className="w-5 h-5" />
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
