import React, { useState } from 'react';
import { CONTAINER_WIDTH } from '../../datos/constantes';
import { LayoutDashboard, MessageSquare, Database, Sparkles, UploadCloud } from 'lucide-react';

const renderBold = (text) => {
    if (!text) return text;
    return text.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index} className="font-bold text-slate-200">{part}</strong> : part
    );
};

const ArchitectureWorkflow = ({ t }) => {
    return (
        <section id="arquitectura" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                        {t('arch_title')}
                    </h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                        {renderBold(t('arch_desc'))}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-start">

                        {/* Step 1: Chat AI */}
                        <div className="relative z-20 flex flex-col items-center text-center group cursor-default animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            <div className="w-full bg-[#181820] p-6 rounded-3xl border border-white/5 flex flex-col items-center transition-all hover:translate-y-[-4px] z-20">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <UploadCloud size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-base font-medium text-gray-500 mb-2 group-hover:text-white transition-colors uppercase tracking-tight">{t('arch_chat_title')}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors font-light">{t('arch_chat_desc')}</p>
                            </div>
                        </div>

                        {/* Step 2: Home */}
                        <div className="relative z-20 flex flex-col items-center text-center group cursor-default animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                            <div className="w-full bg-[#181820] p-6 rounded-3xl border border-white/5 flex flex-col items-center transition-all hover:translate-y-[-4px] z-20">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <Sparkles size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-base font-medium text-gray-500 mb-2 group-hover:text-white transition-colors uppercase tracking-tight">{t('arch_home_title')}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors font-light">{t('arch_home_desc')}</p>
                            </div>
                        </div>

                        {/* Step 3: Repository */}
                        <div className="relative z-20 flex flex-col items-center text-center group cursor-default animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                            <div className="w-full bg-[#181820] p-6 rounded-3xl border border-white/5 flex flex-col items-center transition-all hover:translate-y-[-4px] z-20">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <LayoutDashboard size={24} className="text-gray-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-base font-medium text-gray-500 mb-2 group-hover:text-white transition-colors uppercase tracking-tight">{t('arch_repo_title')}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-400 transition-colors font-light">{t('arch_repo_desc')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureWorkflow;
