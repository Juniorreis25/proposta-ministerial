import React from 'react';
import { Calendar, Music, Volume2, MessageSquare, TrendingUp, Users, SlidersHorizontal } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PillarData } from '../types';

const Pillars: React.FC = () => {
    const pillars: PillarData[] = [
        { id: "01", topic: "Planejamento Antecipado", subtitle: "Consistência", icon: <Calendar />, current: "Envio aleatório de músicas em datas irregulares.", proposed: "Dia fixo para repertório com 5 dias de antecedência mínima e links diretos para cada versão." },
        { id: "02", topic: "Gestão Técnica Autônoma", subtitle: "Qualidade", icon: <Music />, current: "Ensaios sem direção técnica clara ou feedbacks estruturados.", proposed: "Coordenador técnico com autonomia para ajustes" },
        { id: "03", topic: "Soundcheck Profissional", subtitle: "Reverência", icon: <Volume2 />, current: "Passagem de som com músicas principais do culto.", proposed: "Uso de músicas exclusivas para passagem de som, preservando a surpresa espiritual do culto." },
        { id: "04", topic: "Canais de Comunicação", subtitle: "Agilidade", icon: <MessageSquare />, current: "Comunicação centralizada e lenta via líder maior.", proposed: "Comunicação verticalizada, Lider para co-lider e este para os demais" },
        { id: "05", topic: "Curadoria Musical", subtitle: "Inovação", icon: <TrendingUp />, current: "Novas músicas inseridas sem análise prévia de viabilidade.", proposed: "Fluxo formal de triagem técnica e teológica antes da implementação oficial." },
        { id: "06", topic: "Comunhão de Propósito", subtitle: "Unidade", icon: <Users />, current: "Ausência de encontros regulares de alinhamento.", proposed: "Agenda estratégica de encontros periódicos para comunhão, oração e alinhamento." },
        { id: "07", topic: "Integração com Som", subtitle: "Sinergia", icon: <SlidersHorizontal />, current: "Falta de alinhamento direto com a equipe de sonoplastia.", proposed: "Comunicação técnica centralizada via líderes técnicos para equalização e volumes ideais." },
    ];

    return (
        <section id="pilares" className="py-32 bg-gradient-to-b from-[#fdfdfd] to-[#f8f9fa] relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.4] z-0" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }}></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <SectionTitle
                    title="Os Pilares do Louvor"
                    subtitle="Princípios de Transformação"
                    className="mb-24"
                />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {pillars.map((item) => (
                        <div key={item.id} className="group relative bg-white/40 backdrop-blur-sm p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 flex flex-col gap-8 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(26,54,93,0.08)] hover:-translate-y-1">
                            {/* Card Header */}
                            <div className="flex items-start justify-between w-full">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4af37]">{item.subtitle}</span>
                                        <div className="w-8 h-px bg-[#d4af37]/20" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#1a365d] tracking-tight font-serif-display italic pt-2">
                                        {item.topic}
                                    </h3>
                                </div>
                                <span className="text-5xl font-black text-[#1a365d]/5 group-hover:text-[#d4af37]/10 transition-colors italic font-serif-display">{item.id}</span>
                            </div>

                            {/* Comparison Section */}
                            <div className="grid md:grid-cols-2 gap-6 relative">
                                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-100 hidden md:block" />

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#dc3545]/60">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#dc3545]/40" />
                                        Cenário Atual
                                    </div>
                                    <p className="text-sm text-[#4a5568] font-light leading-relaxed">
                                        {item.current}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#28a745]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#28a745]" />
                                        A Nova Proposta
                                    </div>
                                    <p className="text-base text-[#1a365d] font-semibold leading-relaxed">
                                        {item.proposed}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent transition-all duration-1000 group-hover:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
