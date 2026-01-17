import React from 'react';
import { Music } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1a365d] text-white py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-16">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37]">
                        <Music size={22} />
                    </div>
                    <span className="font-bold tracking-[0.4em] text-[10px] uppercase">Excelência Ministerial</span>
                </div>
                <div className="w-20 h-[1px] bg-[#e8c76d]/30" />
                <div className="text-[9px] text-white/30 font-black uppercase tracking-[0.6em] text-center leading-[2.5]">
                    © 2026 Ministério de Louvor <br />
                    Um chamado à perfeição através da organização
                </div>
            </div>
        </footer>
    );
};

export default Footer;
