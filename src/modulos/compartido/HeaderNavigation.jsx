import React from 'react';

const HeaderNavigation = ({ currentView, setView, t }) => {
    const commonStyle = "text-xs font-medium transition-all duration-300 tracking-wider uppercase pb-1.5 border-b-2 border-transparent hover:border-purple-400 hover:text-white";
    const getLinkClass = (viewName) => {
        const isActive = currentView === viewName;
        const activeColor = 'text-white font-bold';
        const inactiveColor = 'text-slate-500';
        return `${commonStyle} ${isActive ? activeColor : inactiveColor}`;
    }
    return (
        <div className="flex items-center gap-8">
            <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className={commonStyle + " text-slate-500 hover:text-white"}>{t('home')}</a>
            <a href="#vision" onClick={(e) => { e.preventDefault(); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' }); }} className={commonStyle + " text-slate-500 hover:text-white"}>{t('footer_link_vision')}</a>
            <a href="#arquitectura" onClick={(e) => { e.preventDefault(); document.getElementById('arquitectura')?.scrollIntoView({ behavior: 'smooth' }); }} className={commonStyle + " text-slate-500 hover:text-white"}>{t('footer_link_how')}</a>
            <a href="#documentos" onClick={(e) => { e.preventDefault(); document.getElementById('documentos')?.scrollIntoView({ behavior: 'smooth' }); }} className={commonStyle + " text-slate-500 hover:text-white"}>{t('modules_title')}</a>
            <a href="#estado" onClick={(e) => { e.preventDefault(); document.getElementById('estado')?.scrollIntoView({ behavior: 'smooth' }); }} className={commonStyle + " text-slate-500 hover:text-white"}>{t('nav_standards')}</a>
        </div>
    );
};

export default HeaderNavigation;
