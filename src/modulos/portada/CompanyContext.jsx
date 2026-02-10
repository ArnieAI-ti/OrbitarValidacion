
import React, { useState } from 'react';
import { Badge } from '../compartido/Elementos';
import { CONTAINER_WIDTH } from '../../datos/constantes';
import { ArrowRight, RotateCcw, AlertCircle, Zap } from 'lucide-react';

const CompanyContext = ({ t }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section id="problema" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Left: Text Content */}
                    <div className="w-full md:w-1/2">
                        <Badge className="bg-white/5 text-gray-500 border-white/10 mb-6 uppercase tracking-[0.2em]">
                            {t('problem_badge')}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
                            {t('problem_section_title')}
                        </h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
                            {t('company_desc')}
                        </p>

                        {/* Interactive Link */}
                        <div
                            onClick={() => document.getElementById('arquitectura')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 group cursor-pointer w-fit"
                        >
                            <span className="text-sm font-medium text-white group-hover:underline underline-offset-4">{t('explore_functionality')}</span>
                            <span className="text-white transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>

                    {/* Right: Interactive Flip Card (Problem/Solution) */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* 3D Flip Container */}
                        <div className="relative w-full max-w-xl mx-auto h-[460px] perspective-[2000px] group transition-transform duration-500 hover:scale-[1.02]">

                            {/* Inner Card (Rotatable) - Spring Transition */}
                            <div className={`
                                relative w-full h-full transition-all duration-[800ms] transform-style-3d 
                                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                ${isFlipped ? 'rotate-y-180' : ''}
                            `}>

                                {/* === FRONT: PROBLEM === */}
                                <div className={`absolute inset-0 backface-hidden bg-[#191820] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-red-900/5 ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto select-text'}`}>
                                    {/* Background Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.01] via-transparent to-transparent"></div>
                                    <AlertCircle className="absolute -right-8 -bottom-8 text-red-500/[0.01] transform rotate-12" size={240} strokeWidth={0.5} />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full bg-[#191820]/50 backdrop-blur-[1px]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 bg-red-500/[0.02] rounded-xl border border-red-500/5 text-red-500/50">
                                                <AlertCircle size={20} />
                                            </div>
                                            <h3 className="text-xs font-bold tracking-[0.2em] text-red-500/30 uppercase">{t('prob_title')}</h3>
                                        </div>
                                        <p className="text-lg md:text-xl text-slate-300 font-light leading-snug mb-4">
                                            {t('prob_desc')}
                                        </p>
                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-start gap-3 text-sm text-slate-400 text-left"><div className="w-1.5 h-1.5 rounded-full bg-red-500/20 mt-1.5 shrink-0"></div><span>{t('prob_point_1')}</span></div>
                                            <div className="flex items-start gap-3 text-sm text-slate-400 text-left"><div className="w-1.5 h-1.5 rounded-full bg-red-500/20 mt-1.5 shrink-0"></div><span>{t('prob_point_2')}</span></div>
                                            <div className="flex items-start gap-3 text-sm text-slate-400 text-left"><div className="w-1.5 h-1.5 rounded-full bg-red-500/20 mt-1.5 shrink-0"></div><span>{t('prob_point_3')}</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* === BACK: SOLUTION === */}
                                <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-[#191820] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden shadow-lg shadow-black/50 transition-all duration-500 hover:border-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/5 ${isFlipped ? 'pointer-events-auto select-text' : 'pointer-events-none'}`}>
                                    {/* Background Effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.01] via-transparent to-transparent"></div>
                                    <Zap className="absolute -right-8 -bottom-8 text-emerald-500/[0.01] transform rotate-12" size={240} strokeWidth={0.5} />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full bg-[#191820]/50 backdrop-blur-[1px]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 bg-emerald-500/[0.02] rounded-xl border border-emerald-500/5 text-emerald-400/50">
                                                <Zap size={20} />
                                            </div>
                                            <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-500/30 uppercase">{t('sol_title')}</h3>
                                        </div>
                                        <p className="text-lg md:text-xl text-white font-medium leading-snug mb-4">
                                            {t('sol_desc')}
                                        </p>
                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-start gap-3 text-sm text-slate-300 text-left"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 shrink-0"></div><span>{t('sol_point_1')}</span></div>
                                            <div className="flex items-start gap-3 text-sm text-slate-300 text-left"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 shrink-0"></div><span>{t('sol_point_2')}</span></div>
                                            <div className="flex items-start gap-3 text-sm text-slate-300 text-left"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 shrink-0"></div><span>{t('sol_point_3')}</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* === TRIGGER BUTTON === */}
                                <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-50">
                                    <button
                                        onClick={() => setIsFlipped(!isFlipped)}
                                        className="bg-[#181820] border border-white/10 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
                                    >
                                        {isFlipped ? (
                                            <RotateCcw size={20} className="text-slate-400 group-hover/btn:text-emerald-400 transition-colors" />
                                        ) : (
                                            <ArrowRight size={20} className="text-slate-400 group-hover/btn:text-blue-400 transition-colors animate-pulse" />
                                        )}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Global Styles for 3D Transform */}
            <style>{`
                .perspective-\\[2000px\\] { perspective: 2000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </section>
    );
};

export default CompanyContext;
