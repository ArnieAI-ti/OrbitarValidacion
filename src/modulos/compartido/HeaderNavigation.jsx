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
            <button onClick={() => setView('ingenieria')} className={getLinkClass('ingenieria')}>{t('home')}</button>
        </div>
    );
};

export default HeaderNavigation;
