import { MessageCircle } from 'lucide-react';
import { businessData } from '../data/content';

export default function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${businessData.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Agendar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
