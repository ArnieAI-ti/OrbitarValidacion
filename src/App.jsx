import React, { useState, useEffect, useCallback, Suspense, memo } from 'react';
import { translations } from './datos/idiomas';
import { NewOrbitarLogo, Button } from './modulos/compartido/Elementos';
import HeaderNavigation from './modulos/compartido/HeaderNavigation';

import Footer from './modulos/compartido/Footer';

// Memoize sub-components to prevent re-renders when App state (like 'scrolled') changes
const MemoizedHeaderNavigation = memo(HeaderNavigation);
const MemoizedFooter = memo(Footer);

// Lazy Load Views for Performance
const LoginView = React.lazy(() => import('./modulos/autenticacion/LoginView'));
const IngenieriaView = React.lazy(() => import('./modulos/portada/IngenieriaView'));

/* --- COMPONENTE PRINCIPAL APP --- */
const App = () => {
    const [currentView, setView] = useState('ingenieria');
    const [activeDiagramBlockId, setActiveDiagramBlockId] = useState(null);
    const [activeDocFeature, setActiveDocFeature] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [isLoginView, setIsLoginView] = useState(false);
    const [currentLang, setLang] = useState(() => {
        const browserLang = typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage) : 'es';
        return browserLang?.toLowerCase().startsWith('en') ? 'en' : 'es';
    });

    // Función de traducción
    const t = useCallback((key) => {
        if (translations[currentLang] && translations[currentLang][key]) return translations[currentLang][key];
        if (translations['en'] && translations['en'][key]) return translations['en'][key];
        return key;
    }, [currentLang]);

    useEffect(() => {
        // Forzar que la página empiece arriba al recargar
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        let rafId;
        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const isScrolled = window.scrollY > 50;
                setScrolled((prev) => prev !== isScrolled ? isScrolled : prev);
                rafId = null;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // NUEVO: Función para cambiar la vista y forzar el scroll al inicio.
    const setViewAndScroll = useCallback((view) => {
        setView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleLoginClick = useCallback(() => {
        setIsLoginView(true);
    }, []);

    if (isLoginView) {
        return (
            <Suspense fallback={<div className="min-h-screen bg-[#0D0D14]"></div>}>
                <LoginView onBack={() => setIsLoginView(false)} t={t} currentLang={currentLang} setLang={setLang} />
            </Suspense>
        );
    }

    const renderView = () => {
        switch (currentView) {
            case 'ingenieria': return <IngenieriaView activeDiagramBlockId={activeDiagramBlockId} setActiveDiagramBlockId={setActiveDiagramBlockId} activeDocFeature={activeDocFeature} setActiveDocFeature={setActiveDocFeature} t={t} />;
            case 'educativo': return <section id="educativo" className="relative min-h-screen py-40 border-t border-white/5 bg-white/[0.01]"><div className={`${CONTAINER_WIDTH} mx-auto px-6`}></div></section>;
            case 'home': return <section id="home" className="relative min-h-screen py-40 border-t border-white/5 bg-white/[0.01]"><div className={`${CONTAINER_WIDTH} mx-auto px-6`}></div></section>;
            default: return <IngenieriaView activeDiagramBlockId={activeDiagramBlockId} setActiveDiagramBlockId={setActiveDiagramBlockId} activeDocFeature={activeDocFeature} setActiveDocFeature={setActiveDocFeature} t={t} />;
        }
    };

    const CONTAINER_WIDTH = "max-w-6xl";

    return (
        <div className="min-h-screen bg-[#0D0D14] text-slate-200 font-sans selection:bg-white/20 selection:text-white relative" style={{ zoom: '90%' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
        /* Scrollbar Global */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0D0D14;
        }
        ::-webkit-scrollbar-thumb {
          background: #27272a; 
          border-radius: 5px;
          border: 2px solid #0D0D14;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3f3f46; 
        }
      `}} />
            {/* GPU Accelerated Static Background */}
            <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
                <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[1200px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#0D0D14]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent border-transparent py-5'}`}>
                <div className={`${CONTAINER_WIDTH} mx-auto px-6 flex items-center justify-between`}>
                    <div className="flex items-center flex-shrink-0">
                        {/* Se usa setViewAndScroll aquí también */}
                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.location.reload()}>
                            <NewOrbitarLogo className="w-7 h-7 text-purple-100/90 group-hover:text-purple-50 transition-colors" /><span translate="no" className="notranslate text-sm font-bold tracking-widest text-white">ORBITAR</span>
                        </div>
                    </div>
                    {/* Se pasa setViewAndScroll al componente de navegación */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:block"><MemoizedHeaderNavigation currentView={currentView} setView={setViewAndScroll} t={t} /></div>
                    <div className="flex items-center flex-shrink-0 gap-6">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdJA70NBZpnUnfJGwBGw4XybJGPPWzP9q_MiMcRXp-sbBWT2Q/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black rounded-xl px-6 py-2.5 text-xs font-semibold transition-all duration-700 ease-in-out hover:scale-110 active:scale-95"
                        >
                            {t('access_btn')}
                        </a>
                    </div>
                </div>
            </nav>

            {/* Usar containerClass para z-index si es soportado, o volver a btnClass/iconSize */}
            {/* LanguageSelector removed */}            {/* Usar containerClass para z-index si es soportado, o volver a btnClass/iconSize */}
            {/* LanguageSelector removed */}

            <div className={`transition-all duration-1000 opacity-100`}>
                <Suspense fallback={<div className="min-h-screen"></div>}>
                    {renderView()}
                </Suspense>
                <MemoizedFooter t={t} />
            </div>
        </div>
    );
};

export default App;
