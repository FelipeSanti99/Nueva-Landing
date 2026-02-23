import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './Sidebar';
import { Step1Auth } from './Steps/Step1Auth';
import { Step2Goals } from './Steps/Step2Goals';
import { Step3Payment } from './Steps/Step3Payment';
import { ChevronRight } from 'lucide-react';

export function CheckoutFlow() {
  const [step, setStep] = useState(1);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-violet-500/30">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-zinc-900">
        <motion.div 
          className="h-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]"
          initial={{ width: '33%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen pt-1">
        {/* Mobile Sidebar Accordion */}
        <Sidebar 
          isMobileOpen={isMobileSidebarOpen} 
          toggleMobile={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 relative overflow-hidden max-w-7xl mx-auto w-full">
          {/* Background Ambient Glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Header Container */}
          <div className="flex flex-col lg:block w-full mb-8 lg:mb-12 gap-5 lg:gap-0">
             {/* Header / Logo */}
            <div className="relative lg:absolute lg:top-8 lg:left-12 flex items-center gap-2 self-start">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center font-bold text-white">F</div>
              <span className="font-bold text-xl tracking-tight">Finanflix</span>
            </div>

            {/* Breadcrumbs (Visual only) */}
            <div className="flex items-center gap-2 text-sm text-zinc-500 self-start">
              <span className={step >= 1 ? "text-violet-400 font-medium" : ""}>Identificación</span>
              <ChevronRight size={14} />
              <span className={step >= 2 ? "text-violet-400 font-medium" : ""}>Objetivo</span>
              <ChevronRight size={14} />
              <span className={step >= 3 ? "text-violet-400 font-medium" : ""}>Activación</span>
            </div>
          </div>

          {/* Steps Container */}
          <div className="max-w-md w-full mx-auto relative z-10">
            {step === 1 && <Step1Auth onNext={nextStep} />}
            {step === 2 && <Step2Goals onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <Step3Payment onBack={prevStep} />}
          </div>
        </main>

        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:block w-[400px] xl:w-[450px] flex-shrink-0" />
      </div>
    </div>
  );
}
