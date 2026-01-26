import React from 'react';
import { NewOrbitarLogo } from './Elementos';
import { CONTAINER_WIDTH } from '../../datos/constantes';

const Footer = ({ t }) => {
    return (
        <footer className="py-10 px-6 border-t border-white/5 bg-[#0A0A10]">
            <div className={`${CONTAINER_WIDTH} mx-auto flex flex-col md:flex-row justify-between items-start gap-12`}>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-white group cursor-default">
                        <NewOrbitarLogo className="w-6 h-6 text-purple-100/90" />
                        <span translate="no" className="notranslate font-bold text-sm tracking-widest">ORBITAR</span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-xs leading-relaxed">{t('footer_desc')}</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <span className="text-sm text-slate-400 font-medium mb-1">{t('contact_label')}</span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-slate-500 hover:text-white transition-colors cursor-default">{t('contact_phone_arnie')}</span>
                            <a href={`mailto:${t('contact_email_arnie')}`} className="text-xs text-slate-500 hover:text-white transition-colors ml-0 mb-2">{t('contact_email_arnie')}</a>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-slate-500 hover:text-white transition-colors cursor-default">{t('contact_phone_enrique')}</span>
                            <a href={`mailto:${t('contact_email_enrique')}`} className="text-xs text-slate-500 hover:text-white transition-colors ml-0">{t('contact_email_enrique')}</a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                    <div className="flex flex-col gap-4">
                        <span className="text-white mb-2">{t('footer_header_product')}</span>
                        <a href="#vision" className="hover:text-white transition-colors">{t('footer_link_vision')}</a>
                        <a href="#problema" className="hover:text-white transition-colors">{t('footer_link_problem')}</a>
                        <a href="#demo" className="hover:text-white transition-colors">{t('footer_link_video')}</a>
                        <a href="#arquitectura" className="hover:text-white transition-colors">{t('footer_link_how')}</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white mb-2">{t('footer_header_project')}</span>
                        <a href="#documentos" className="hover:text-white transition-colors">{t('footer_link_docs')}</a>
                        <a href="#estado" className="hover:text-white transition-colors">{t('footer_link_status')}</a>
                        <a href="#equipo" className="hover:text-white transition-colors">{t('footer_link_team')}</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white mb-2">{t('footer_header_nav')}</span>
                        <a href="#hero" className="hover:text-white transition-colors">{t('home')}</a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            {t('access_btn')}
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${CONTAINER_WIDTH} mx-auto mt-10 pt-8 border-t border-white/5 text-xs text-slate-700 flex flex-col md:flex-row justify-between items-center gap-4`}>
                <span>{t('footer_copyright')}</span>
            </div>
        </footer>
    );
};

export default Footer;
