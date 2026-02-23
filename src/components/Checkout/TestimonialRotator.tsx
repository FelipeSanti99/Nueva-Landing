import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "Pasé de no entender nada a gestionar mi propia cartera en 3 meses. Finanflix cambió mi relación con el dinero.",
    author: "Sofía M.",
    role: "Estudiante de Arquitectura",
    image: "https://picsum.photos/seed/sofia/100/100"
  },
  {
    id: 2,
    text: "La estrategia de gestión de riesgo salvó mis ahorros. No es solo trading, es una mentalidad de crecimiento.",
    author: "Lucas D.",
    role: "Emprendedor",
    image: "https://picsum.photos/seed/lucas/100/100"
  },
  {
    id: 3,
    text: "Recuperé el costo de la anualidad en mi primera semana aplicando lo aprendido en 'Finanzas desde Cero'.",
    author: "Martín G.",
    role: "Ingeniero",
    image: "https://picsum.photos/seed/martin/100/100"
  }
];

export function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[140px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
               <img 
                 src={testimonials[index].image}
                 alt={testimonials[index].author}
                 className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-zinc-300 italic leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <p className="text-xs font-medium text-zinc-500">
                — {testimonials[index].author}, {testimonials[index].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
