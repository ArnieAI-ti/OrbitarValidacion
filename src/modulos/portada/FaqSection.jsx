
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CONTAINER_WIDTH } from '../../datos/constantes';

const TypewriterText = ({ text }) => {
    const [displayLength, setDisplayLength] = useState(0);

    React.useEffect(() => {
        setDisplayLength(0);
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                i++;
                setDisplayLength(i);
            } else {
                clearInterval(timer);
            }
        }, 20); // Slightly slower for better readability? No, user said "escibrieo". 20ms is 50 chars/sec. Good.

        return () => clearInterval(timer);
    }, [text]);

    return <span>{text.slice(0, displayLength)}</span>;
};

const FaqSection = ({ t }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
        { q: t('faq_q5'), a: t('faq_a5') },
        { q: t('faq_q6'), a: t('faq_a6') },
        { q: t('faq_q7'), a: t('faq_a7') },
    ];

    return (
        <section id="faq" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                        {t('faq_title')}
                    </h2>
                    <p className="text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        {t('faq_desc')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-2">
                    {faqs.map((faq, index) => (
                        <div key={index}
                            className={`group rounded-2xl transition-all duration-500 transform-gpu
                                ${activeIndex === index
                                    ? 'bg-[#181820] shadow-[0_0_20px_rgba(139,92,246,0.05)] scale-[1.003]'
                                    : 'bg-white/[0.015] hover:bg-white/[0.03] hover:scale-[1.003] hover:shadow-lg'}`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <span className={`ml-4 transition-all duration-300 shrink-0 ${activeIndex === index ? 'text-violet-300 rotate-180' : 'text-slate-500 group-hover:text-white'}`}>
                                    <ChevronDown size={20} />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-400 font-light leading-relaxed text-sm md:text-base px-6 pb-6">
                                    <div className="pt-2">
                                        {activeIndex === index && (
                                            <TypewriterText text={faq.a} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
