import React, { useState, useEffect, useMemo, memo } from 'react';
import { Globe, Sparkles, Edit3, FileType, FileText, Check, Rocket, RefreshCw, Zap, Play, ArrowRight, ArrowLeft } from 'lucide-react';
import { Badge } from '../compartido/Elementos';

import CompanyContext from './CompanyContext';
import ArchitectureWorkflow from './ArchitectureWorkflow';
import ProductStatus from './ProductStatus';
import TeamSection from './TeamSection';

import { CONTAINER_WIDTH } from '../../datos/constantes';

// Memoize stable sub-sections to prevent unnecessary re-renders
const MemoizedCompanyContext = memo(CompanyContext);
const MemoizedArchitectureWorkflow = memo(ArchitectureWorkflow);
const MemoizedProductStatus = memo(ProductStatus);
const MemoizedTeamSection = memo(TeamSection);

const renderBold = (text) => {
    if (!text) return text;
    return text.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index} className="font-bold text-slate-200">{part}</strong> : part
    );
};

const PREVIEW_IMAGES = [
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_dashboard.png`,
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_chat.png`,
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_projects.png`,
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_document_v2.png`,
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_repository_updated.png`,
    `${import.meta.env.BASE_URL}assets/images/platform_previews/preview_file_updated.png`
];

const IngenieriaView = ({ activeDocFeature, setActiveDocFeature, t }) => {
    const [activePreview, setActivePreview] = useState(0);

    // Optimized: Preload next and previous images for the slider
    useEffect(() => {
        const nextIdx = (activePreview + 1) % PREVIEW_IMAGES.length;
        const prevIdx = (activePreview - 1 + PREVIEW_IMAGES.length) % PREVIEW_IMAGES.length;

        [PREVIEW_IMAGES[nextIdx], PREVIEW_IMAGES[prevIdx]].forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [activePreview]);

    return (
        <>
            <section id="hero" className="relative pt-44 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
                {/* Background Grid & Ambient Light */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Badge className="bg-white/5 text-violet-200 border-violet-500/20 backdrop-blur-md px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            {t('hero_badge')}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-8 text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 max-w-6xl mx-auto drop-shadow-2xl">
                        {t('hero_title_1')}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-400 animate-gradient-x bg-[length:200%_auto]">
                            {t('hero_title_2')}
                        </span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <p className="text-lg text-slate-400 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                            {t('hero_desc')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('login_btn')} <ArrowRight size={18} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            <button
                                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm flex items-center gap-2"
                            >
                                <Play size={18} className="fill-white" /> {t('video_title')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es Orbitar? (Sección suavizada y minimalista) */}
            <section id="vision" className="py-24 border-t border-white/5 relative">
                <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                                {t('business_title')}
                            </h2>
                            <p className="text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                                {renderBold(t('business_summary'))}
                            </p>
                            <p className="text-violet-300/80 font-medium text-sm max-w-2xl mx-auto leading-relaxed mt-6 bg-violet-900/10 border border-violet-500/20 py-3 px-6 rounded-xl inline-block">
                                {t('business_disclaimer')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Innovation Card */}
                            <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                        <Rocket size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors">
                                        {t('business_desc_1')}
                                    </p>
                                </div>
                            </div>

                            {/* Intelligence Card */}
                            <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                        <RefreshCw size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors">
                                        {t('business_desc_2')}
                                    </p>
                                </div>
                            </div>

                            {/* Scalability Card */}
                            <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                        <Zap size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors">
                                        {t('business_desc_3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <MemoizedCompanyContext t={t} />

            {/* Espacio para Demo Video */}
            <section id="demo" className="py-32 border-t border-white/5">
                <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                            {t('video_title')}
                        </h2>
                    </div>

                    <div className="w-full max-w-6xl mx-auto aspect-video rounded-[32px] bg-[#181820] border border-white/5 flex items-center justify-center overflow-hidden relative group shadow-2xl transition-all duration-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.02)] hover:scale-[1.02]">
                        <img
                            key={activePreview}
                            src={PREVIEW_IMAGES[activePreview]}
                            alt={t('video_title')}
                            loading={activePreview === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 transition-all duration-1000"
                        />

                        {/* Navigation Buttons */}
                        {activePreview > 0 && (
                            <button
                                onClick={() => setActivePreview(prev => prev - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#181820] border border-white/10 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn z-10"
                            >
                                <ArrowLeft size={18} className="text-slate-400 group-hover/btn:text-blue-400 transition-colors" />
                            </button>
                        )}

                        {activePreview < 5 && (
                            <button
                                onClick={() => setActivePreview(prev => prev + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#181820] border border-white/10 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn z-10"
                            >
                                <ArrowRight size={18} className="text-slate-400 group-hover/btn:text-blue-400 transition-colors" />
                            </button>
                        )}

                        {activePreview === 5 && (
                            <button
                                onClick={() => setActivePreview(0)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#181820] border border-white/10 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn z-10"
                            >
                                <RefreshCw size={18} className="text-slate-400 group-hover/btn:text-emerald-400 transition-colors" />
                            </button>
                        )}

                        {/* Dots Indicator */}
                        <div className="absolute bottom-6 flex gap-2 z-10">
                            {[0, 1, 2, 3, 4, 5].map(idx => (
                                <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${activePreview === idx ? 'bg-white w-6' : 'bg-white/40'}`}></div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-6 py-3 border border-white/20 text-slate-300 font-light text-sm rounded-full transition-all duration-700 ease-in-out hover:bg-white hover:text-black hover:border-white hover:scale-110 active:scale-95 z-20"
                        >
                            <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase">
                                {t('access_btn')}
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 opacity-70 group-hover:opacity-100" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <MemoizedArchitectureWorkflow t={t} />

            <section id="documentos" className="py-32 relative border-t border-white/5">
                <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                            {t('modules_title')}
                        </h2>
                        <p className="text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                            {renderBold(t('modules_desc'))}
                        </p>
                    </div>

                    <div className="overflow-hidden flex flex-col md:flex-row bg-[#121218] rounded-[40px] border border-white/5">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center relative z-10 lg:p-16">
                            <div className="flex flex-col gap-8">
                                {[
                                    { id: 0, icon: <Sparkles size={20} />, title: t('mod_budget'), desc: t('mod_budget_desc'), color: 'violet' },
                                    { id: 1, icon: <Edit3 size={20} />, title: t('mod_memory'), desc: t('mod_memory_desc'), color: 'blue' },
                                    { id: 2, icon: <FileType size={20} />, title: t('mod_philosophy'), desc: t('mod_philosophy_desc'), color: 'violet' }
                                ].map((feature) => (
                                    <div key={feature.id} className="flex gap-5 group cursor-pointer" onMouseEnter={() => setActiveDocFeature(feature.id)}>
                                        <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-500 ${activeDocFeature === feature.id
                                            ? `bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]`
                                            : 'bg-white/5 text-slate-500'
                                            } group-hover:bg-${feature.color}-500/10 group-hover:text-${feature.color}-400`}>
                                            {feature.icon}
                                        </div>
                                        <div className={`${activeDocFeature === feature.id ? 'opacity-100' : 'opacity-40'} group-hover:opacity-100 transition-all duration-500`}>
                                            <h4 className={`text-base font-medium mb-1 transition-colors duration-500 ${activeDocFeature === feature.id ? 'text-white' : 'text-slate-400'} group-hover:text-white`}>{feature.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-4 pt-4 border-t border-white/5 pl-[76px]">
                                    <p className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${activeDocFeature === 2 ? 'text-white' : 'text-slate-600'}`}>
                                        {t('mod_view_more')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative min-h-[500px] bg-[#0A0A10]/50 flex items-center justify-center p-8 overflow-hidden">
                            <div key={activeDocFeature} className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 animate-in fade-in zoom-in-95">
                                {activeDocFeature === 0 && (
                                    <div className="w-full max-w-[340px] bg-[#1C1C24] border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative">
                                        <div className="absolute -top-3 -right-3 bg-violet-600 text-white p-3 rounded-xl shadow-xl animate-bounce"><Sparkles size={18} /></div>
                                        <div className="mb-6 pb-6 border-b border-white/5 flex gap-3 items-center"><span className="w-3 h-3 rounded-full bg-violet-500"></span><span className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase font-bold">{t('mod_budget')}</span></div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center"><div className="w-1/2 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
                                            <div className="flex justify-between items-center"><div className="w-2/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
                                            <div className="flex justify-between items-center"><div className="w-1/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center"><div className="h-3 w-1/4 bg-white/5 bg-violet-500/20 rounded-full"></div><div className="text-sm text-violet-400 font-mono font-bold tracking-tight">{t('card_budget_total')}</div></div>
                                    </div>
                                )}
                                {activeDocFeature === 1 && (
                                    <div className="w-full max-w-[340px] bg-[#1C1C24] border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative">
                                        <div className="mb-6 pb-6 border-b border-white/5 flex gap-3 items-center"><span className="w-3 h-3 rounded-full bg-blue-500"></span><span className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase font-bold">{t('mod_memory')}</span></div>
                                        <div className="space-y-5">
                                            <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                            <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                            <div className="h-2 w-[85%] bg-white/10 rounded-full"></div>
                                            <div className="p-4 border border-dashed border-blue-500/30 rounded-2xl bg-blue-500/5 text-[10px] text-blue-200/90 font-mono flex items-center gap-3"><div className="w-1 h-4 bg-blue-500 animate-pulse rounded-full"></div> {t('card_memory_analyzing')}</div>
                                        </div>
                                    </div>
                                )}
                                {activeDocFeature === 2 && (
                                    <div className="w-full max-w-[340px] bg-[#1C1C24] border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative">
                                        <div className="mb-6 pb-6 border-b border-white/5 flex gap-3 items-center"><span className="w-3 h-3 rounded-full bg-violet-500"></span><span className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase font-bold">{t('mod_philosophy')}</span></div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-[11px] text-slate-300 font-light transition-colors duration-500 group-hover:text-white/80"><Check size={14} className="text-slate-500 transition-colors duration-500 group-hover:text-white" /> {t('card_phil_obj')}</div>
                                            <div className="flex items-center gap-3 text-[11px] text-slate-300 font-light transition-colors duration-500 group-hover:text-white/80"><Check size={14} className="text-slate-500 transition-colors duration-500 group-hover:text-white" /> {t('card_phil_analysis')}</div>
                                            <div className="flex items-center gap-3 text-[11px] text-slate-400 opacity-60 font-light transition-colors duration-500 group-hover:text-white/80"><Check size={14} className="text-slate-500 transition-colors duration-500 group-hover:text-white" /> {t('card_phil_others')}</div>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-2">
                                            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
                                                <FileText size={32} className="text-red-500" />
                                            </div>
                                            <span className="text-[10px] font-bold text-red-400 tracking-widest">PDF</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MemoizedProductStatus t={t} />



            {/* Equipo Fundador */}
            <MemoizedTeamSection t={t} />



        </>
    );

};

export default IngenieriaView;

