import React from 'react';
import { Crown, Guitar, Mic2, SlidersHorizontal, Volume2, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const OrgChart: React.FC = () => {
    return (
        <section id="estrutura" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <SectionTitle title="Arquitetura de Liderança" subtitle="Estrutura Hierárquica" />

                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    <div className="w-full max-w-2xl bg-[#fde047] rounded-[3rem] p-10 md:p-14 text-center shadow-2xl border-4 border-[#eab308] relative group hover:scale-[1.02] transition-transform duration-500">
                        <Crown className="mx-auto mb-4 text-[#854d0e] opacity-20" size={32} />
                        <h3 className="text-3xl md:text-5xl font-bold text-[#422006] uppercase tracking-tighter">Líder Maior</h3>
                        <div className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#854d0e]">Direção Geral & Visão</div>
                    </div>

                    <div className="h-16 w-px bg-slate-300 relative">
                        <div className="absolute top-full -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400"></div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
                        <div className="flex-1 bg-[#ccf1ff] rounded-[2.5rem] p-8 md:p-12 text-center shadow-lg border-2 border-[#bae6fd] hover:bg-[#bae6fd] transition-colors duration-300">
                            <Guitar className="mx-auto mb-4 text-[#0c4a6e] opacity-20" size={24} />
                            <h4 className="text-xl md:text-2xl font-bold text-[#0c4a6e] uppercase tracking-tight">Co-líder Banda</h4>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#0369a1] mt-2">Gestão Instrumental</p>
                        </div>
                        <div className="flex-1 bg-[#ccf1ff] rounded-[2.5rem] p-8 md:p-12 text-center shadow-lg border-2 border-[#bae6fd] hover:bg-[#bae6fd] transition-colors duration-300">
                            <Mic2 className="mx-auto mb-4 text-[#0c4a6e] opacity-20" size={24} />
                            <h4 className="text-xl md:text-2xl font-bold text-[#0c4a6e] uppercase tracking-tight">Co-líder Vocal</h4>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#0369a1] mt-2">Gestão de Vozes</p>
                        </div>
                    </div>

                    <div className="w-full flex">
                        <div className="flex-1 flex justify-center h-12">
                            <div className="w-px h-full bg-slate-200"></div>
                        </div>
                        <div className="flex-1 flex justify-center h-12">
                            <div className="w-px h-full bg-slate-200"></div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-[#ccf1ff]/60 rounded-[2.5rem] p-8 md:p-10 text-center shadow-md border-2 border-[#bae6fd] group hover:bg-[#ccf1ff] transition-colors duration-300">
                            <SlidersHorizontal className="mx-auto mb-4 text-[#0c4a6e] opacity-20" size={20} />
                            <h5 className="text-lg font-bold text-[#0c4a6e] uppercase tracking-tight">Responsável Técnico</h5>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#0369a1] mt-2">Direção Musical</p>
                        </div>
                        <div className="flex-1 bg-[#ccf1ff]/60 rounded-[2.5rem] p-8 md:p-10 text-center shadow-md border-2 border-[#bae6fd] group hover:bg-[#ccf1ff] transition-colors duration-300">
                            <Volume2 className="mx-auto mb-4 text-[#0c4a6e] opacity-20" size={20} />
                            <h5 className="text-lg font-bold text-[#0c4a6e] uppercase tracking-tight">Responsável Técnico</h5>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#0369a1] mt-2">Arranjo Vocal</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="w-[calc(50%+4px)] h-12 border-x-2 border-b-2 border-slate-200 rounded-b-3xl"></div>
                        <div className="h-12 w-px bg-slate-200"></div>
                    </div>

                    <div className="w-full max-w-4xl bg-[#ccf1ff] rounded-[3rem] p-10 md:p-14 text-center shadow-xl border-2 border-[#bae6fd] hover:scale-[1.01] transition-transform duration-500">
                        <Users className="mx-auto mb-6 text-[#0c4a6e] opacity-20" size={32} />
                        <h3 className="text-3xl md:text-5xl font-bold text-[#0c4a6e] uppercase tracking-tighter">Demais Membros</h3>
                        <div className="mt-4 flex justify-center gap-8 md:gap-16">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0369a1]">Corpo de Levitas</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0369a1]">Instrumentistas</span>
                        </div>
                    </div>

                </div>

                <div className="mt-32 text-center max-w-xl mx-auto">
                    <p className="text-[#6c757d] text-[10px] font-black uppercase tracking-[0.5em] leading-loose opacity-60">
                        Unidade, Organização e Reverência em cada nível do serviço ministerial.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OrgChart;
