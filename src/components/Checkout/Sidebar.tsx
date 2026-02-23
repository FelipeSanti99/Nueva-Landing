import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '../ui/base';
import { TestimonialRotator } from './TestimonialRotator';

interface SidebarProps {
  isMobileOpen?: boolean;
  toggleMobile?: () => void;
  className?: string;
}

export function Sidebar({ isMobileOpen, toggleMobile, className }: SidebarProps) {
  const features = [
    { icon: CheckCircle2, text: "Acceso a +400h de contenido" },
    { icon: CheckCircle2, text: "Comunidad VIP & Networking" },
    { icon: CheckCircle2, text: "Clases semanales en vivo" },
    { icon: CheckCircle2, text: "Informes mensuales exclusivos" },
  ];

  const content = (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Estás desbloqueando:</h3>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-zinc-200">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <feature.icon size={16} />
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
          <span className="text-zinc-400">Suscripción Finanflix</span>
          <span className="text-zinc-400 line-through">AR$ 39.000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-emerald-400 font-medium">Total hoy</span>
          <span className="text-2xl font-bold text-white">AR$ 0.00</span>
        </div>
        <div className="text-xs text-zinc-500 text-center">
          Prueba Finanflix Gratis (30 días). Cancela cuando quieras.
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-800">
        <TestimonialRotator />
      </div>
      
      <div className="flex items-center justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <ShieldCheck size={14} />
          <span>Norton Secured</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <Lock size={14} />
          <span>PCI DSS Compliant</span>
        </div>
      </div>
    </div>
  );

  // Desktop View
  if (!toggleMobile) {
    return (
      <div className={cn("h-full p-8 lg:p-12 bg-[#0A0A0A] border-l border-zinc-900/50", className)}>
        <div className="sticky top-12">
          {content}
        </div>
      </div>
    );
  }

  // Mobile Accordion View
  return (
    <div className="lg:hidden bg-[#0A0A0A] border-b border-zinc-900">
      <button 
        onClick={toggleMobile}
        className="w-full px-6 py-4 flex items-center justify-between text-zinc-200"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold">Resumen del pedido</span>
          <span className="text-emerald-400 font-bold ml-2">AR$ 0.00</span>
        </div>
        {isMobileOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
