import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/base';
import { ShieldCheck, Lock, ExternalLink, CreditCard } from 'lucide-react';
import { FAQAccordion } from '../FAQAccordion';

interface Step3Props {
  onBack: () => void;
}

export function Step3Payment({ onBack }: Step3Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Activación Segura</h2>
        <p className="text-zinc-400">Paso final para activar tu prueba gratuita.</p>
      </div>

      <div className="bg-violet-900/10 border border-violet-500/20 rounded-xl p-5 flex gap-4 items-start">
        <ShieldCheck className="text-violet-400 flex-shrink-0 mt-1" size={24} />
        <div className="space-y-2">
          <p className="text-sm font-medium text-violet-200">Validación de Identidad</p>
          <p className="text-sm text-violet-300/80 leading-relaxed">
            Para proteger la comunidad y validar tu identidad, realizaremos un cargo temporal de <span className="text-white font-semibold">AR$ 20 (100% reembolsable)</span>. No habrá cargos de suscripción por 30 días.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {/* Mercado Pago Button */}
        <Button 
          glow 
          className="w-full h-16 text-lg font-bold bg-[#009EE3] hover:bg-[#008ED0] text-white flex items-center justify-between px-6 group transition-all duration-300"
          onClick={() => alert("Redirigiendo a Mercado Pago...")}
        >
          <span className="flex items-center gap-3">
            <span className="bg-white/20 p-1.5 rounded-md">
              <ExternalLink size={20} />
            </span>
            Activar con Mercado Pago
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-normal bg-black/20 px-2 py-1 rounded">
            Recomendado
          </span>
        </Button>

        {/* Mobexx Button */}
        <Button 
          glow 
          className="w-full h-16 text-lg font-bold bg-[#1e1e2e] hover:bg-[#2a2a3c] border border-zinc-700 hover:border-violet-500/50 text-white flex items-center justify-start gap-3 px-6 transition-all duration-300"
          onClick={() => alert("Redirigiendo a Mobexx...")}
        >
          <span className="bg-violet-500/20 text-violet-400 p-1.5 rounded-md">
            <CreditCard size={20} />
          </span>
          Activar con Mobexx
        </Button>
      </div>

      {/* FAQ Section */}
      <FAQAccordion />

      <div className="space-y-6">
        <p className="text-center text-xs text-zinc-500">
          La transacción es 100% segura y está protegida por encriptación de grado bancario.
        </p>

        <div className="flex justify-center">
          <Button variant="ghost" onClick={onBack} className="text-sm text-zinc-500 hover:text-zinc-300">
            Volver al paso anterior
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300 pt-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-1 text-xs text-zinc-500">
            <ShieldCheck size={14} />
            <span>Norton Secured</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-500">
            <Lock size={14} />
            <span>PCI DSS Compliant</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
