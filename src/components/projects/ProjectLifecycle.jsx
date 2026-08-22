import React, { useState, useRef } from 'react';
import { PROJECT_LIFECYCLE } from '../../data/projects';
import { motion } from 'framer-motion';
import { Compass, Database, Code, TestTube, Rocket, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const stepIcons = [Compass, Database, Code, TestTube, Rocket];

export const ProjectLifecycle = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef(null);

  const scrollToStep = (index) => {
    setActiveStep(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeStep > 0 ? activeStep - 1 : PROJECT_LIFECYCLE.length - 1;
    scrollToStep(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeStep < PROJECT_LIFECYCLE.length - 1 ? activeStep + 1 : 0;
    scrollToStep(nextIdx);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 280;
      const gap = 16;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      if (newIndex >= 0 && newIndex < PROJECT_LIFECYCLE.length) {
        setActiveStep(newIndex);
      }
    }
  };

  return (
    <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-800/80 light:border-slate-200/80">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20 light:border-indigo-200 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENGINEERING PIPELINE</span>
        </div>

        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-100 light:text-slate-900 tracking-tight">
          How I turn complex problems into{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
            production-ready systems.
          </span>
        </h3>
        
        <p className="text-slate-400 light:text-slate-600 text-xs sm:text-base mt-2 font-sans">
          From requirement analysis and PDO database design to security testing and deployment.
        </p>
      </motion.div>

      {/* Interactive Step Navigator Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-6 sm:mb-8 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max pb-2">
          {PROJECT_LIFECYCLE.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToStep(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 light:text-indigo-600 border-cyan-500/50 light:border-indigo-400 shadow-md scale-105'
                    : 'bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-600 border-slate-800 light:border-slate-200 hover:text-slate-200'
                }`}
              >
                <span className="text-cyan-400 light:text-indigo-600">{item.step}</span>
                <span>{item.phase}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Slide Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 no-scrollbar"
        >
          {PROJECT_LIFECYCLE.map((item, idx) => {
            const IconComp = stepIcons[idx] || Compass;
            const isActive = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => scrollToStep(idx)}
                className={`w-[82vw] sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4rem)/5)] shrink-0 snap-center rounded-2xl sm:rounded-3xl bg-slate-900/90 light:bg-white border transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'border-cyan-400 light:border-indigo-600 ring-2 ring-cyan-500/30 light:ring-indigo-500/30'
                    : 'border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/40'
                }`}
              >
                {/* Animated Top Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />

                <div className="p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row: Step # + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl sm:text-3xl font-black bg-gradient-to-br from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
                        {item.step}
                      </span>

                      <div className={`p-2.5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 light:bg-indigo-100 light:text-indigo-600'
                          : 'bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 border-cyan-500/20 light:border-indigo-200'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Phase Badge */}
                    <div className="text-[10px] font-mono font-extrabold text-cyan-400 light:text-indigo-600 uppercase tracking-widest mb-1">
                      {item.phase}
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-100 light:text-slate-900 mb-2 leading-tight">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tech Focus Tag & Step Indicator */}
                  <div>
                    {item.focus && (
                      <div className="mb-3 pt-2 border-t border-slate-800/50 light:border-slate-200 text-[10px] font-mono text-cyan-300/90 light:text-indigo-600 font-semibold truncate">
                        {item.focus}
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 light:text-slate-500 font-bold uppercase">
                        Step {idx + 1} of {PROJECT_LIFECYCLE.length}
                      </span>
                      <span className={`w-2 h-2 rounded-full transition-all ${
                        isActive ? 'bg-cyan-400 light:bg-indigo-600 scale-125 animate-pulse' : 'bg-slate-700 light:bg-slate-300'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Controls (< & >) & Dots */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5">
            {PROJECT_LIFECYCLE.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToStep(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === dotIdx
                    ? 'w-6 bg-gradient-to-r from-cyan-400 to-indigo-500'
                    : 'w-2 bg-slate-800 light:bg-slate-300 hover:bg-slate-700'
                }`}
                aria-label={`Go to pipeline step ${dotIdx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-900/90 light:bg-white text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-indigo-600 border border-slate-800 light:border-slate-200 transition-colors shadow-xs"
              aria-label="Previous pipeline step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-900/90 light:bg-white text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-indigo-600 border border-slate-800 light:border-slate-200 transition-colors shadow-xs"
              aria-label="Next pipeline step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
