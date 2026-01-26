import React, { useState, useEffect, useRef } from 'react';
import { Languages } from 'lucide-react';

const LanguageSelector = ({ currentLang, setLang, btnClass = "w-9 h-9", iconSize = 16, containerClass = "z-[110]" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className={`fixed bottom-6 right-6 ${containerClass}`}>
            <div className={`absolute bottom-full right-0 mb-2 w-32 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right transform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}>
                <div className="flex flex-col divide-y divide-white/5">
                    <button
                        onClick={() => { setLang('es'); setIsOpen(false); }}
                        className="w-full flex items-center gap-2 px-3 py-3 text-xs font-normal transition-colors hover:bg-white/5 hover:text-white text-slate-400 text-left group"
                    >
                        <span className="text-slate-500 uppercase tracking-wider text-[10px] w-4 group-hover:text-white">ES</span><span>Español</span>
                    </button>
                    <button
                        onClick={() => { setLang('en'); setIsOpen(false); }}
                        className="w-full flex items-center gap-2 px-3 py-3 text-xs font-normal transition-colors hover:bg-white/5 hover:text-white text-slate-400 text-left group"
                    >
                        <span className="text-slate-500 uppercase tracking-wider text-[10px] w-4 group-hover:text-white">US</span><span>English</span>
                    </button>
                </div>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${btnClass} rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105
           ${isOpen
                        ? 'bg-[#1A1A1A] text-purple-400 border-white/5'
                        : 'bg-[#1A1A1A] text-slate-600 border-white/5 hover:text-purple-400'
                    }`}
            >
                <Languages size={iconSize} />
            </button>
        </div>
    );
};

export default LanguageSelector;
