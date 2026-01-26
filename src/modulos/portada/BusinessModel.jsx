import React from 'react';
import { CONTAINER_WIDTH } from '../../datos/constantes';
import { CreditCard, ShieldCheck, Users } from 'lucide-react';
import { Badge } from '../compartido/Elementos';

const BusinessModel = ({ t }) => {
    return (
        <section id="modelo" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                            {t('model_title')}
                        </h2>
                        <p className="text-gray-400 font-light max-w-2xl mx-auto">
                            {t('model_desc').split(/(\*\*.*?\*\*)/).map((part, i) =>
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

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Suscripción */}
                        <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <CreditCard size={24} className="text-gray-500 transition-colors duration-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-gray-500 font-medium mb-2 text-base uppercase tracking-tight transition-colors duration-300 group-hover:text-white">
                                    {t('model_card_1_title')}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-[200px] mx-auto transition-colors duration-300 group-hover:text-gray-400">
                                    {t('model_card_1_desc')}
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Corporativo */}
                        <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <Users size={24} className="text-gray-500 transition-colors duration-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-gray-500 font-medium mb-2 text-base uppercase tracking-tight transition-colors duration-300 group-hover:text-white">
                                    {t('model_card_2_title')}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-[200px] mx-auto transition-colors duration-300 group-hover:text-gray-400">
                                    {t('model_card_2_desc')}
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Seguridad */}
                        <div className="group relative p-6 rounded-3xl bg-[#181820] border border-white/5 transition-all hover:translate-y-[-4px]">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-4 rounded-2xl bg-white/5 mb-4">
                                    <ShieldCheck size={24} className="text-gray-500 transition-colors duration-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-gray-500 font-medium mb-2 text-base uppercase tracking-tight transition-colors duration-300 group-hover:text-white">
                                    {t('model_card_3_title')}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-[200px] mx-auto transition-colors duration-300 group-hover:text-gray-400">
                                    {t('model_card_3_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessModel;
