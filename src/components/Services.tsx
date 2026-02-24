import { services } from '../data/content';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Nossos Serviços</h2>
          <p className="text-4xl font-black text-gray-900">Estética Automotiva Completa</p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
