import React from 'react';
import { motion } from 'motion/react';
import { Button, Input } from '../../ui/base';
import { Mail, User, Phone, ChevronDown } from 'lucide-react';

interface Step1Props {
  onNext: () => void;
}

export function Step1Auth({ onNext }: Step1Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Identificación</h2>
        <p className="text-zinc-400">Comienza tu transformación financiera hoy.</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">Nombre</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
              <Input 
                id="firstName" 
                type="text" 
                placeholder="Juan" 
                className="pl-10 h-12 bg-[#121212] border-zinc-800 focus:border-violet-500"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">Apellido</label>
            <Input 
              id="lastName" 
              type="text" 
              placeholder="Pérez" 
              className="h-12 bg-[#121212] border-zinc-800 focus:border-violet-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
            <Input 
              id="email" 
              type="email" 
              placeholder="juan.perez@ejemplo.com" 
              className="pl-10 h-12 bg-[#121212] border-zinc-800 focus:border-violet-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Celular</label>
          <div className="flex gap-3">
            <div className="relative w-28 flex-shrink-0">
              <select 
                className="w-full h-12 appearance-none rounded-xl border border-zinc-800 bg-[#121212] px-3 py-2 text-sm text-zinc-100 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                defaultValue="+54"
              >
                <option value="+54">🇦🇷 +54</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+57">🇨🇴 +57</option>
                <option value="+56">🇨🇱 +56</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <ChevronDown className="absolute right-2 top-4 h-4 w-4 text-zinc-500 pointer-events-none" />
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
              <Input 
                id="phone" 
                type="tel" 
                placeholder="11 1234 5678" 
                className="pl-10 h-12 bg-[#121212] border-zinc-800 focus:border-violet-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" glow className="w-full h-14 text-lg">
            Continuar
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
