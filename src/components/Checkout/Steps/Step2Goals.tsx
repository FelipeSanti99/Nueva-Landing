import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/base';
import { TrendingUp, ShieldAlert, GraduationCap } from 'lucide-react';
import { cn } from '../../ui/base';

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step2Goals({ onNext, onBack }: Step2Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const goals = [
    {
      id: 'trading-crypto',
      title: 'Trading & Cripto',
      description: 'Domina el análisis técnico, Bitcoin y mercados volátiles.',
      icon: TrendingUp,
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/50'
    },
    {
      id: 'risk-management',
      title: 'Gestión de Riesgo',
      description: 'Aprende a proteger tu capital y operar con estrategia.',
      icon: ShieldAlert,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/50'
    },
    {
      id: 'finance-zero',
      title: 'Finanzas desde Cero',
      description: 'Construye bases sólidas para tu futuro financiero.',
      icon: GraduationCap,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Personaliza tu ruta</h2>
        <p className="text-zinc-400">¿En qué área quieres especializarte? (Selecciona varias)</p>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => {
          const isSelected = selected.includes(goal.id);
          return (
            <button
              key={goal.id}
              onClick={() => toggleSelection(goal.id)}
              className={cn(
                "relative flex items-start p-4 rounded-2xl border transition-all duration-200 text-left group",
                isSelected 
                  ? `bg-[#121212] ${goal.border} ring-1 ring-offset-0 ${goal.border.replace('border', 'ring')}`
                  : "bg-[#121212] border-zinc-800 hover:border-zinc-700"
              )}
            >
              <div className={cn("flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors", goal.bg, goal.color)}>
                <goal.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className={cn("font-semibold text-lg mb-1 group-hover:text-white transition-colors", isSelected ? 'text-white' : 'text-zinc-200')}>
                  {goal.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {goal.description}
                </p>
              </div>
              <div className={cn(
                "absolute top-4 right-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all",
                isSelected 
                  ? "bg-violet-600 border-violet-600" 
                  : "border-zinc-700"
              )}>
                {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="ghost" onClick={onBack} className="w-1/3">
          Atrás
        </Button>
        <Button 
          onClick={onNext} 
          disabled={selected.length === 0}
          glow={selected.length > 0}
          className="w-2/3 h-14 text-lg"
        >
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
