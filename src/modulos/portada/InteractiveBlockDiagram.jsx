import React from 'react';
import { Database, Cpu, Zap } from 'lucide-react';

const InteractiveBlockDiagram = ({ activeBlock, setActiveBlock, t }) => {
    const blocks = [
        { id: 0, title: t('diag_gen_blocks'), icon: <Database size={16} />, x: "50%", y: "15%", color: "blue" },
        { id: 1, title: t('diag_client_inter'), icon: <Cpu size={16} />, x: "50%", y: "38%", color: "violet" },
        { id: 2, title: t('diag_approve_reject'), icon: <Zap size={16} />, x: "50%", y: "61%", color: "emerald" },
    ];
    const lineStart = "15%";
    const lineEnd = "61%";
    return (
        <div className="relative w-full aspect-[3/4] rounded-xl border border-white/10 bg-[#181820] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05]"></div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <path d={`M 50% ${lineStart} L 50% ${lineEnd}`} stroke="url(#lineGradientV)" strokeWidth="2" fill="none" strokeDasharray="5 5" className="animate-pulse" />
                <circle r="3" fill="#8b5cf6"><animateMotion dur="3s" repeatCount="indefinite" path={`M 50% ${lineStart} L 50% ${lineEnd}`} /></circle>
            </svg>
            {blocks.map((block) => (
                <div key={block.id} className={`absolute w-32 h-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-1 z-10 ${activeBlock === block.id ? `bg-[#202028] border-white/20 scale-105` : 'bg-[#181820] border-white/10 opacity-70 hover:opacity-100 hover:scale-105 hover:border-white/20'} group/block`} style={{ left: block.x, top: block.y }} onClick={() => setActiveBlock(block.id)} onMouseEnter={() => setActiveBlock(block.id)} onMouseLeave={() => setActiveBlock(null)}>
                    <div className={`p-1.5 rounded-md bg-${block.color}-500/10 text-${block.color}-400`}>{block.icon}</div>
                    <div className="text-center"><div className="text-[10px] font-bold text-white leading-none">{block.title}</div></div>
                </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-[25%] flex items-center justify-center pointer-events-none"><span className="text-sm text-slate-500 font-medium tracking-wider uppercase">{t('diag_workflow_label')}</span></div>
        </div>
    );
};

export default InteractiveBlockDiagram;
