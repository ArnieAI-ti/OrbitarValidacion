import React from 'react';
import { CONTAINER_WIDTH } from '../../datos/constantes';
import { Linkedin, ExternalLink } from 'lucide-react';

const TeamSection = ({ t }) => {
    const team = [
        {
            name: "Arnie Paul Fuertes Andrade",
            role: t('founder_1_role'),
            desc: t('founder_1_desc'),
            linkedin: "https://www.linkedin.com/in/arnie-paul-fuertes-andrade-02855a323/",
        },
        {
            name: "Enrique Suárez Chalco",
            role: t('founder_2_role'),
            desc: t('founder_2_desc'),
            linkedin: "https://www.linkedin.com/in/enriquesuarezchalco/?locale=es_ES",
            company_linkedin: "https://www.linkedin.com/company/conautilatam/posts/?feedView=all"
        }
    ];

    return (
        <section id="equipo" className="py-24 border-t border-white/5">
            <div className={`${CONTAINER_WIDTH} mx-auto px-6`}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">{t('team_title')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative p-8 rounded-3xl bg-[#181820] border border-white/5 transition-all duration-500 hover:border-violet-500/20 hover:scale-[1.01] shadow-2xl overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                                <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">{member.role}</p>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                                    {member.desc.split(/(\*\*.*?\*\*)/).map((part, i) =>
                                        part.startsWith('**') && part.endsWith('**') ? (
                                            <strong key={i} className="text-white font-medium">
                                                {part.slice(2, -2)}
                                            </strong>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
                                    >
                                        <Linkedin size={14} />
                                        {t('profile_label')}
                                        <ExternalLink size={12} />
                                    </a>
                                    {member.company_linkedin && (
                                        <a
                                            href={member.company_linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
                                        >
                                            <Linkedin size={14} className="text-blue-400" />
                                            {t('conauti_linkedin')}
                                            <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-xs text-slate-600 tracking-wider uppercase">{t('company_mention')}</p>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
