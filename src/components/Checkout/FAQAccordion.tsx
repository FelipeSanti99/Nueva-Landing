import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../ui/base';

const faqs = [
  {
    question: "¿Por qué piden mi tarjeta?",
    answer: "Para validar que eres una persona real y mantener la comunidad libre de bots."
  },
  {
    question: "¿Qué son los AR$ 20?",
    answer: "Es una validación de identidad obligatoria. Se realiza un cargo temporal de AR$ 20 que se reembolsa automáticamente a tu cuenta al instante."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "¡Claro! Puedes cancelar la prueba desde tu perfil con un solo clic antes de que terminen los 30 días sin ningún cargo."
  },
  {
    question: "¿Cuánto cuesta luego de la prueba?",
    answer: "El abono mensual es de AR$ 39.000. Te avisaremos antes de que termine tu periodo gratuito."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-white mb-2">Preguntas Frecuentes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden h-fit",
                isOpen 
                  ? "bg-[#121212] border-violet-500/30" 
                  : "bg-[#121212]/50 border-zinc-800 hover:border-zinc-700"
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-4 py-3 flex items-center justify-between text-left"
              >
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  isOpen ? "text-white" : "text-zinc-400"
                )}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={16} 
                  className={cn(
                    "text-zinc-500 transition-transform duration-200",
                    isOpen && "transform rotate-180 text-violet-400"
                  )} 
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-3 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
