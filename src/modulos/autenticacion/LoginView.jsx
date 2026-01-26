import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { NewOrbitarLogo } from '../compartido/Elementos';




const LoginView = ({ onBack, t, currentLang, setLang }) => {
    const [showEmailFlow, setShowEmailFlow] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailContinue = () => {
        if (email.trim() !== "") {
            alert("Plataforma no disponible en esta vista.");
            // window.location.href = '/platform/index.html';
        }
    };

    const handleBackToLogin = () => {
        setShowVerification(false);
        setShowEmailFlow(false);
        setEmail('');
    };

    return (
        <div className="fixed inset-0 z-[200] flex flex-col overflow-x-hidden antialiased text-white font-sans animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ backgroundColor: '#0b0a10', fontFamily: "'Inter', sans-serif" }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Personalización Scrollbar para Login */
                ::-webkit-scrollbar { width: 8px; height: 8px; }
                ::-webkit-scrollbar-track { background: #0b0a10; }
                ::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); border-radius: 99px; border: 2px solid #0b0a10; }
                ::-webkit-scrollbar-thumb:hover { background-color: rgba(255, 255, 255, 0.2); }
                .bg-noise { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); will-change: transform; transform: translateZ(0); }
                .bg-glow { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -2; background: radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.06), rgba(11, 10, 16, 1)); will-change: transform; transform: translateZ(0); }
            `}} />

            <div className="bg-glow"></div>
            <div className="bg-noise"></div>

            <nav className="w-full flex justify-between items-center px-6 py-6 md:px-8 z-10">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide bg-transparent border-none outline-none"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{t('back')}</span>
                </button>

                <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-white" onClick={() => window.location.reload()}>
                    <NewOrbitarLogo className="w-6 h-6" />
                    <span className="text-sm font-bold tracking-wide hidden md:block select-none">ORBITAR</span>
                </div>
            </nav>

            <main className="flex-grow flex items-center justify-center p-4 md:p-6 relative z-10">
                <div className="relative w-full max-w-[1200px] mx-auto flex items-center -mt-12">

                    {/* Placeholder de Imagen */}
                    <div className="w-full h-[450px] md:h-[580px] ml-auto md:w-[82%] rounded-[2.5rem] overflow-hidden relative bg-[#13111a] border border-white/5 flex items-center justify-center group shadow-2xl shadow-purple-900/10">
                        <div className="text-center select-none opacity-60 scale-90">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-400 font-medium text-xs tracking-[0.2em] uppercase">{t('image_placeholder')}</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a10] via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Tarjeta de Login */}
                    <div className={`absolute left-0 md:left-12 top-1/2 transform -translate-y-1/2 mt-0 w-full max-w-[400px] px-4 md:px-0 z-20 transition-all duration-500 ${showVerification ? 'opacity-0 pointer-events-none translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
                        <div className="bg-[#13111a]/90 backdrop-blur-xl p-7 rounded-[1.75rem] shadow-2xl border border-white/10 ring-1 ring-white/5">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-center md:text-left tracking-tight text-white">
                                {t('login_title').split(' ').slice(0, 3).join(' ')} <br /> {t('login_title').split(' ').slice(3).join(' ')}
                            </h1>
                            <p className="text-gray-400 mb-6 text-center md:text-left text-xs md:text-sm font-light leading-relaxed tracking-wide">
                                {t('login_subtitle')}
                            </p>

                            <div className="space-y-2.5 text-xs md:text-sm font-medium">
                                {/* Google */}
                                <button className="w-full bg-white text-black py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-300">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                    {t('continue_google')}
                                </button>
                                {/* Apple */}
                                <button className="w-full bg-white text-black py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24.02-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.03 3.67-1.03 1.48.06 2.67 1.25 3.23 2.13-2.87 1.55-2.3 5.48.56 6.64-.54 1.76-1.53 3.29-2.54 4.49zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                                    {t('continue_apple')}
                                </button>

                                {/* Botón Toggle Email */}
                                {!showEmailFlow ? (
                                    <button onClick={() => setShowEmailFlow(true)} className="w-full bg-transparent border border-white/20 text-white py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-white/5 transition duration-300 group">
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        {t('continue_email')}
                                    </button>
                                ) : (
                                    <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-2.5">
                                        <div className="relative flex justify-center items-center py-1 mt-3">
                                            <div className="absolute w-full border-t border-white/10"></div>
                                            <div className="relative bg-[#13111a] px-3 text-[10px] font-medium uppercase tracking-wider text-gray-500">{t('or_separator')}</div>
                                        </div>
                                        <div className="relative mt-3">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            </div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder={t('email_placeholder')}
                                                className="w-full bg-[#13111a] text-white py-2.5 pl-11 pr-4 rounded-xl border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/50 placeholder-gray-500 transition duration-300 text-sm"
                                            />
                                        </div>
                                        <button onClick={handleEmailContinue} className="w-full bg-white/20 text-white py-2.5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/30 transition duration-300 font-semibold text-xs md:text-sm">
                                            {t('continue')}
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mt-5 text-center text-[9px] md:text-[10px] text-gray-500 leading-tight tracking-wide">
                                {t('terms_text_1')} <br />
                                <a href="#" className="hover:text-gray-300 transition-colors">{t('terms')}</a> {t('terms_text_2')} <a href="#" className="hover:text-gray-300 transition-colors">{t('privacy')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default LoginView;
