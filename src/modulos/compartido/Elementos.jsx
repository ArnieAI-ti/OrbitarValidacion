import React from 'react';

export const CustomBotIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="3" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
);

export const Badge = ({ children, className }) => (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${className}`}>
        {children}
    </span>
);

export const Button = ({ children, variant = 'primary', className, ...props }) => {
    const TRANSITIONS = "transition-all duration-500 ease-out";
    const baseStyle = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium ${TRANSITIONS} text-xs tracking-wide active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`;
    const variants = {
        primary: "bg-white text-[#1A1A1A] hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]",
        secondary: "bg-transparent text-slate-400 border border-white/10 hover:border-white hover:text-white hover:bg-white/5",
        ghost: "text-slate-500 hover:text-white"
    };
    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const NewOrbitarLogo = ({ className }) => (
    <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="Orbitar Logo" className={className} decoding="async" />
);
