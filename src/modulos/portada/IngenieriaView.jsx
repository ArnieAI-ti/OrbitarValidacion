import React, { useState, useEffect, useCallback, memo } from 'react';
import { Rocket, RefreshCw, Zap, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '../compartido/Elementos';

import CompanyContext from './CompanyContext';
import ArchitectureWorkflow from './ArchitectureWorkflow';
import ProductStatus from './ProductStatus';
import TeamSection from './TeamSection';
import FaqSection from './FaqSection';
import DocumentationSection from './DocumentationSection';

import { CONTAINER_WIDTH } from '../../datos/constantes';

// Memoize stable sub-sections to prevent unnecessary re-renders
const MemoizedCompanyContext = memo(CompanyContext);
const MemoizedArchitectureWorkflow = memo(ArchitectureWorkflow);
const MemoizedProductStatus = memo(ProductStatus);
const MemoizedFaqSection = memo(FaqSection);
const MemoizedTeamSection = memo(TeamSection);
const MemoizedDocumentationSection = memo(DocumentationSection);

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

const useImagePreloader = (currentIndex, images) => {
    useEffect(() => {
        const nextIdx = (currentIndex + 1) % images.length;
        const prevIdx = (currentIndex - 1 + images.length) % images.length;

        [images[nextIdx], images[prevIdx]].forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [currentIndex, images]);
};

const IngenieriaView = ({ activeDocFeature, setActiveDocFeature, t }) => {
    const [activePreview, setActivePreview] = useState(0);

    // Custom hook for preloading images
    useImagePreloader(activePreview, PREVIEW_IMAGES);

    const nextPreview = useCallback(() => {
        setActivePreview(prev => (prev + 1) % PREVIEW_IMAGES.length);
    }, []);

    const prevPreview = useCallback(() => {
        setActivePreview(prev => (prev - 1 + PREVIEW_IMAGES.length) % PREVIEW_IMAGES.length);
    }, []);

    const scrollToSection = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <>
            {/* 1. HERO MAIN (Text & CTAs only) */}
            <section id="hero" className="relative pt-44 pb-32 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center">
                {/* Background Grid & Ambient Light */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
                    <div className="inline-block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Badge className="bg-white/5 text-violet-200 border-violet-500/20 backdrop-blur-md px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            {t('hero_badge')}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 drop-shadow-2xl">
                        <span className="block">{t('hero_title_1')}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-400 animate-gradient-x bg-[length:200%_auto] py-2">
                            {t('hero_title_2')}
                        </span>
                        <span className="block text-violet-200">{t('hero_title_3')}</span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                            {t('hero_desc')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Button 1: Agendar Demo */}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('hero_cta_demo')} <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            {/* Button 2: Solicitar Acceso */}
                            <a
                                href="#conceptual-view"
                                onClick={(e) => { e.preventDefault(); scrollToSection('conceptual-view'); }}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm flex items-center gap-2 cursor-pointer"
                            >
                                {t('hero_cta_access')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VISION (Qué es Orbitar) */}
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

            {/* 3. PROBLEM */}
            <MemoizedCompanyContext t={t} />

            {/* 4. SOLUTION (Architecture/Workflow) */}
            <MemoizedArchitectureWorkflow t={t} />

            {/* 5. CONCEPTUAL VIEW (Carousel) */}
            <section id="conceptual-view" className="py-24 border-t border-white/5 bg-[#0A0A10]">
                <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                            {t('video_title')}
                        </h2>
                    </div>

                    <div className="w-full max-w-6xl mx-auto aspect-video rounded-[32px] bg-[#181820] border border-white/5 flex items-center justify-center overflow-hidden relative group shadow-2xl transition-all duration-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.02)] hover:scale-[1.01]">
                        <img
                            key={activePreview}
                            src={PREVIEW_IMAGES[activePreview]}
                            alt="Platform Preview"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 transition-all duration-700"
                        />

                        {/* Navigation Buttons */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <button
                                onClick={prevPreview}
                                className="bg-[#181820]/80 backdrop-blur-sm border border-white/10 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all pointer-events-auto"
                            >
                                <ArrowLeft size={20} className="text-slate-300" />
                            </button>
                            <button
                                onClick={nextPreview}
                                className="bg-[#181820]/80 backdrop-blur-sm border border-white/10 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all pointer-events-auto"
                            >
                                <ArrowRight size={20} className="text-slate-300" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-6 flex gap-2 z-10">
                            {PREVIEW_IMAGES.map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${activePreview === idx ? 'bg-violet-500 w-8' : 'bg-white/20 w-1.5'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA after Conceptual View */}
            <div className="flex justify-center pb-24 component-padding border-b border-white/5 bg-[#0A0A10]">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <span className="relative z-10 flex items-center gap-2">{t('hero_cta_demo')} <ArrowUpRight size={18} /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
            </div>

            {/* 7. DOCUMENTATION */}
            <MemoizedDocumentationSection
                t={t}
                activeDocFeature={activeDocFeature}
                setActiveDocFeature={setActiveDocFeature}
                renderBold={renderBold}
            />

            {/* 8. STANDARDS (ISO etc) */}
            <MemoizedProductStatus t={t} />

            {/* 9. FAQ */}
            <MemoizedFaqSection t={t} />

            {/* 10. TEAM */}
            <MemoizedTeamSection t={t} />

        </>
    );

};

export default memo(IngenieriaView);
