import React, { memo } from 'react';
import { Edit3, Sparkles, FileType } from 'lucide-react';
import { CONTAINER_WIDTH } from '../../datos/constantes';

const FeatureCard = memo(({ feature, isActive, setActive }) => (
    <div
        className="flex gap-5 group cursor-pointer"
        onMouseEnter={() => setActive(feature.id)}
    >
        <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-500 ${isActive
                ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                : 'bg-white/5 text-slate-500'
            } group-hover:bg-${feature.color}-500/10 group-hover:text-${feature.color}-400`}>
            {feature.icon}
        </div>
        <div className={`${isActive ? 'opacity-100' : 'opacity-40'} group-hover:opacity-100 transition-all duration-500`}>
            <h4 className={`text-base font-medium mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400'
                } group-hover:text-white`}>{feature.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">{feature.desc}</p>
        </div>
    </div>
));

const PreviewBudget = memo(({ t }) => (
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
));

const PreviewMemory = memo(({ t }) => (
    <div className="w-full max-w-[340px] bg-[#1C1C24] border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative">
        <div className="mb-6 pb-6 border-b border-white/5 flex gap-3 items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase font-bold">{t('mod_memory')}</span>
        </div>
        <div className="space-y-4">
            <div className="flex justify-between items-center"><div className="w-1/2 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
            <div className="flex justify-between items-center"><div className="w-2/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
            <div className="flex justify-between items-center"><div className="w-1/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="h-3 w-1/4 bg-blue-500/20 rounded-full"></div>
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold">
                TOTAL
            </div>
        </div>
    </div>
));

const PreviewPhilosophy = memo(({ t }) => (
    <div className="w-full max-w-[340px] bg-[#1C1C24] border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative">
        <div className="mb-6 pb-6 border-b border-white/5 flex gap-3 items-center">
            <span className="w-3 h-3 rounded-full bg-violet-500"></span>
            <span className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase font-bold">{t('mod_philosophy')}</span>
        </div>
        <div className="space-y-4">
            <div className="flex justify-between items-center"><div className="w-1/2 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
            <div className="flex justify-between items-center"><div className="w-2/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
            <div className="flex justify-between items-center"><div className="w-1/3 h-2.5 bg-white/10 rounded-full"></div><div className="w-12 h-2.5 bg-white/10 rounded-full"></div></div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="h-3 w-1/4 bg-violet-500/20 rounded-full"></div>
            <div className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-400 font-bold">
                TOTAL
            </div>
        </div>
    </div>
));

const DocumentationSection = ({ t, activeDocFeature, setActiveDocFeature, renderBold }) => {
    const features = [
        { id: 1, icon: <Edit3 size={20} />, title: t('mod_memory'), desc: t('mod_memory_desc'), color: 'blue' },
        { id: 0, icon: <Sparkles size={20} />, title: t('mod_budget'), desc: t('mod_budget_desc'), color: 'violet' },
        { id: 2, icon: <FileType size={20} />, title: t('mod_philosophy'), desc: t('mod_philosophy_desc'), color: 'violet' }
    ];

    return (
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
                            {features.map((feature) => (
                                <FeatureCard
                                    key={feature.id}
                                    feature={feature}
                                    isActive={activeDocFeature === feature.id}
                                    setActive={setActiveDocFeature}
                                />
                            ))}
                            <div className="mt-4 pt-4 border-t border-white/5 pl-[38px]">
                                <p className={`text-[10px] uppercase tracking-widest transition-colors duration-500 whitespace-pre-line ${activeDocFeature === 2 ? 'text-white' : 'text-slate-600'}`}>
                                    {t('mod_view_more')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative min-h-[500px] bg-[#0A0A10]/50 flex items-center justify-center p-8 overflow-hidden">
                        <div key={activeDocFeature} className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 animate-in fade-in zoom-in-95">
                            {activeDocFeature === 0 && <PreviewBudget t={t} />}
                            {activeDocFeature === 1 && <PreviewMemory t={t} />}
                            {activeDocFeature === 2 && <PreviewPhilosophy t={t} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(DocumentationSection);
