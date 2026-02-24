import { testimonials } from '../data/content';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Depoimentos</h2>
          <p className="text-4xl font-black text-gray-900">O que dizem nossos clientes</p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-50 opacity-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <span className="font-bold text-gray-900">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
