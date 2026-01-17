import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light }) => (
    <div className="mb-32 text-center">
        <div className={`text-[10px] font-black tracking-[0.5em] uppercase mb-6 ${light ? 'text-[#d4af37]' : 'text-[#d4af37]'}`}>{subtitle}</div>
        <h2 className={`text-4xl md:text-7xl font-bold tracking-tighter leading-none font-serif-display italic ${light ? 'text-white' : 'text-[#1a365d]'}`}>{title}</h2>
        <div className={`mt-12 w-16 h-[1px] mx-auto ${light ? 'bg-white/10' : 'bg-[#1a365d]/10'}`} />
    </div>
);

export default SectionTitle;
