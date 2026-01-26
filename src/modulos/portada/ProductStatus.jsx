import React from 'react';
import { CONTAINER_WIDTH } from '../../datos/constantes';
import { Badge } from '../compartido/Elementos';
import { CheckCircle2, Clock } from 'lucide-react';

const ProductStatus = ({ t }) => {
    const items = [
        { label: t('status_item_1'), completed: true },
        { label: t('status_item_2'), completed: true },
        { label: t('status_item_3'), completed: true },
        { label: t('status_item_4'), completed: true },
        { label: t('status_item_5'), completed: true },
        { label: t('status_item_6'), completed: true },
    ];

    return (
        <section id="estado" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <Badge className="bg-white/5 text-gray-500 border-white/10 mb-6">
                                {t('dev_active_badge')}
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                                {t('status_title')}
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed mb-8">
                                {t('status_desc').split(/(\*\*.*?\*\*)/).map((part, i) =>
                                    part.startsWith('**') && part.endsWith('**') ? (
                                        <strong key={i} className="text-white font-semibold">
                                            {part.slice(2, -2)}
                                        </strong>
                                    ) : (
                                        part
                                    )
                                )}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="grid gap-3">
                                {items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`group relative p-4 rounded-3xl border transition-all duration-500 animate-in fade-in slide-in-from-bottom-2 hover:translate-y-[-4px]
                                            ${item.completed
                                                ? 'bg-[#181820] border-white/5 shadow-sm'
                                                : 'bg-transparent border-white/5 hover:bg-white/[0.02]'}`}
                                        style={{
                                            animationDelay: `${idx * 100}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        <div className="flex items-center gap-4 transition-all duration-500 group-hover:translate-x-1">
                                            <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 bg-white/5 ${item.completed
                                                ? 'text-gray-500 group-hover:text-emerald-400'
                                                : 'text-gray-500'
                                                }`}>
                                                {item.completed ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                                            </div>
                                            <span className={`text-[13px] font-medium transition-colors duration-500 ${item.completed ? 'text-slate-300 group-hover:text-white' : 'text-slate-500'}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductStatus;
