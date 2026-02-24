import { galleryImages } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Nossa Galeria</h2>
          <p className="text-4xl font-black text-gray-900">Resultados Surpreendentes</p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Ver Detalhes
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] overflow-hidden max-w-4xl w-full shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-gray-100 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-[300px] md:h-auto">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{selectedImage.title}</h3>
                  <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full"></div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedImage.details}
                  </p>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all self-start"
                  >
                    Fechar Galeria
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
