import React from 'react';
import { Crown, Guitar, Mic2, SlidersHorizontal, Volume2, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const OrgChart: React.FC = () => {
    return (
        <section id="estrutura" className="py-32 bg-[#1a365d] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.4] z-0" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#1a365d] via-transparent to-[#1a365d]/90" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <SectionTitle
                    title="Arquitetura de Liderança"
                    subtitle="Estrutura Hierárquica"
                    light={true}
                    className="mb-20"
                />

                <div className="flex flex-col items-center max-w-5xl mx-auto">
                    {/* Leader Level 1 */}
                    <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-10 md:p-12 text-center shadow-2xl border border-white/10 group hover:border-[#d4af37]/40 transition-all duration-700 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#e8c76d] mx-auto mb-6 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-700">
                            <Crown size={28} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-serif-display italic mb-3">Líder Maior</h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#e8c76d]">Direção Geral & Visão</p>
                    </div>

                    <div className="h-16 w-px bg-gradient-to-b from-[#d4af37]/40 to-white/10" />

                    {/* Level 2 Sub-leaders */}
                    <div className="w-full flex flex-col md:flex-row gap-6 mt-0">
                        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-10 text-center border border-white/10 group hover:bg-white/10 transition-all duration-700">
                            <Guitar className="mx-auto mb-4 text-[#e8c76d]/50 group-hover:text-[#e8c76d]" size={24} />
                            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight font-serif-display italic mb-2">Co-líder Banda</h4>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Gestão Instrumental</p>
                        </div>
                        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-10 text-center border border-white/10 group hover:bg-white/10 transition-all duration-700">
                            <Mic2 className="mx-auto mb-4 text-[#e8c76d]/50 group-hover:text-[#e8c76d]" size={24} />
                            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight font-serif-display italic mb-2">Co-líder Vocal</h4>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Gestão de Vozes</p>
                        </div>
                    </div>

                    {/* Connectors */}
                    <div className="w-full flex">
                        <div className="flex-1 flex justify-center h-12">
                            <div className="w-px h-full bg-white/10"></div>
                        </div>
                        <div className="flex-1 flex justify-center h-12">
                            <div className="w-px h-full bg-white/10"></div>
                        </div>
                    </div>

                    {/* Level 3 technical */}
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-white/5 rounded-[2.5rem] p-6 text-center border border-white/5 group hover:border-[#d4af37]/20 transition-all duration-700">
                            <SlidersHorizontal className="mx-auto mb-3 text-[#e8c76d]/30" size={18} />
                            <h5 className="text-lg font-bold text-white/90 tracking-tight font-serif-display italic">Coordenação Técnica</h5>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mt-1">Direção Musical</p>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-[2.5rem] p-6 text-center border border-white/5 group hover:border-[#d4af37]/20 transition-all duration-700">
                            <Volume2 className="mx-auto mb-3 text-[#e8c76d]/30" size={18} />
                            <h5 className="text-lg font-bold text-white/90 tracking-tight font-serif-display italic">Coordenação Técnica</h5>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mt-1">Arranjo Vocal</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="w-[calc(50%+2px)] h-12 border-x border-b border-white/10 rounded-b-3xl"></div>
                        <div className="h-12 w-px bg-white/10"></div>
                    </div>

                    {/* General Members */}
                    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-10 md:p-12 text-center border border-white/10 group hover:bg-white/10 transition-all duration-700">
                        <Users className="mx-auto mb-6 text-[#e8c76d]/40 group-hover:scale-110 transition-transform duration-700" size={28} />
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-serif-display italic mb-6">Demais Integrantes</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#e8c76d]/60 px-6 py-2 bg-white/5 rounded-full border border-white/5">Corpo de Levitas</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#e8c76d]/60 px-6 py-2 bg-white/5 rounded-full border border-white/5">Instrumentistas</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center max-w-xl mx-auto">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] leading-loose">
                        Unidade · Organização · Reverência
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OrgChart;
