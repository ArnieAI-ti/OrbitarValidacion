import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({ t }) => {
    const [position, setPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef(null);
    const handleMove = useCallback((clientX) => {
        if (containerRef.current) {
            const { left, width } = containerRef.current.getBoundingClientRect();
            const x = clientX - left;
            const newPos = Math.min(Math.max((x / width) * 100, 0), 100);
            setPosition(newPos);
        }
    }, []);
    const onMouseMove = (e) => { if (isResizing) handleMove(e.clientX); };
    const onTouchMove = (e) => { if (isResizing) handleMove(e.touches[0].clientX); };
    const onMouseUp = () => setIsResizing(false);
    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', onMouseMove); window.addEventListener('mouseup', onMouseUp); window.addEventListener('touchmove', onTouchMove); window.addEventListener('touchend', onMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mouseup', onMouseUp); window.removeEventListener('touchmove', onTouchMove); window.removeEventListener('touchend', onMouseUp);
        };
    }, [isResizing, handleMove]);

    return (
        <div ref={containerRef} className="relative w-full aspect-[21/9] rounded-2xl border border-white/10 bg-[#181820] overflow-hidden group cursor-ew-resize select-none shadow-2xl" onMouseDown={(e) => { setIsResizing(true); handleMove(e.clientX); }} onTouchStart={(e) => { setIsResizing(true); handleMove(e.touches[0].clientX); }}>
            <div className="absolute inset-0 bg-[#202028] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.2]"></div>
                <div className="absolute top-4 right-4 bg-[#181820]/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-[10px] text-white font-medium pointer-events-none">{t('visual_after')}</div>
            </div>
            <div className="absolute inset-0 bg-[#282830] border-r border-white/20 overflow-hidden" style={{ width: `${position}%` }}>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-[10px] text-slate-300 font-medium pointer-events-none">{t('visual_before')}</div>
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${position}%` }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:scale-110 transition-transform"><MoveHorizontal size={14} /></div></div>
        </div>
    );
};

export default BeforeAfterSlider;
