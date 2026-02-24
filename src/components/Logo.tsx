import { Car } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-orange-500 p-2 rounded-lg">
        <Car className="text-white w-6 h-6" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-blue-600 font-black text-xl tracking-tighter">ANDREO</span>
        <span className="text-orange-500 font-bold text-[10px] tracking-[0.2em] uppercase">Estética Automotiva</span>
      </div>
    </div>
  );
}
