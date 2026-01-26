import React, { useState } from 'react';
import { Workflow, Map, FileCheck, ArrowRight } from 'lucide-react';
import { Badge } from '../compartido/Elementos';
import { CONTAINER_WIDTH } from '../../datos/constantes';

const InteractiveWorkflow = ({ t }) => {
    const [activeTab, setActiveTab] = useState(0);
    const workflowData = [
        { id: 0, tabTitle: t('tab_diagram'), icon: <Workflow size={14} />, color: "violet", targetId: "diagrama-bloques", badge: t('badge_comprehension'), title: t('tab_diagram_title'), description: t('tab_diagram_desc') },
        { id: 1, tabTitle: t('tab_plane'), icon: <Map size={14} />, color: "blue", targetId: "visualizacion-2d", badge: t('badge_location'), title: t('tab_plane_title'), description: t('tab_plane_desc') },
        { id: 2, tabTitle: t('tab_doc'), icon: <FileCheck size={14} />, color: "emerald", targetId: "documentacion", badge: t('badge_delivery'), title: t('tab_doc_title'), description: t('tab_doc_desc') }
    ];
    const currentData = workflowData[activeTab];
    const scrollToSection = (id) => { const element = document.getElementById(id); if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

    return (
        <div className={`w-full ${CONTAINER_WIDTH} mx-auto px-6 mb-40 relative`}>
            <div className="flex flex-col items-center">
                <div className="flex p-1 bg-white/5 rounded-full border border-white/5 mb-20 backdrop-blur-sm overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {workflowData.map((item) => (
                        <button key={item.id} onClick={() => { setActiveTab(item.id); }} className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${activeTab === item.id ? 'bg-white/90 text-[#1A1A10] scale-105' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
                            {item.icon}<span className="hidden md:inline">{item.tabTitle}</span>
                        </button>
                    ))}
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-[#202028] overflow-hidden group transition-all duration-500 hover:border-white/20 shadow-2xl">
                        <div className="absolute inset-8 border border-dashed border-white/10 rounded-xl flex items-center justify-center">
                            <div key={activeTab} className="text-center animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                                <div className="mb-4 text-slate-500 p-4 bg-white/5 rounded-full border border-white/5">
                                    {activeTab === 0 && <Workflow size={32} className="text-violet-400" />}
                                    {activeTab === 1 && <Map size={32} className="text-blue-400" />}
                                    {activeTab === 2 && <FileCheck size={32} className="text-emerald-400" />}
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{t('doc_preview_title')}{currentData.tabTitle}</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
                        <div>
                            <Badge className={`mb-6 ${activeTab === 0 ? 'border-violet-500/30 text-violet-400 bg-violet-500/10' : activeTab === 1 ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'}`}>{currentData.badge}</Badge>
                            <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">{currentData.title}</h3>
                            <p className="text-lg text-slate-400 font-light leading-relaxed border-l border-white/10 pl-6">{currentData.description}</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => scrollToSection(currentData.targetId)} className="group flex items-center gap-3 text-sm text-white hover:text-slate-300 transition-colors px-0 py-2">
                                <span className="font-medium underline underline-offset-4 decoration-white/20 group-hover:decoration-white">{t('explore_func')}</span><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveWorkflow;
