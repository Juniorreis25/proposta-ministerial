import React from 'react';
import { Calendar, Music, Volume2, MessageSquare, TrendingUp, Users, SlidersHorizontal } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PillarData } from '../types';

const Pillars: React.FC = () => {
    const pillars: PillarData[] = [
        { id: "01", topic: "Planejamento Antecipado", subtitle: "Consistência", icon: <Calendar />, current: "Envio aleatório de músicas em datas irregulares.", proposed: "Dia fixo para repertório com 5 dias de antecedência mínima e links diretos para cada versão." },
        { id: "02", topic: "Gestão Técnica Autônoma", subtitle: "Qualidade", icon: <Music />, current: "Ensaios sem direção técnica clara ou feedbacks estruturados.", proposed: "Líderes técnicos com autonomia total para ajustes musicais e correções em tempo real." },
        { id: "03", topic: "Soundcheck Profissional", subtitle: "Reverência", icon: <Volume2 />, current: "Passagem de som com músicas principais do culto.", proposed: "Uso de músicas exclusivas para passagem de som, preservando a surpresa espiritual do culto." },
        { id: "04", topic: "Canais de Comunicação", subtitle: "Agilidade", icon: <MessageSquare />, current: "Comunicação centralizada e lenta via líder maior.", proposed: "Protocolo de porta-vozes via coordenadores para resoluções técnicas e logísticas rápidas." },
        { id: "05", topic: "Curadoria Musical", subtitle: "Inovação", icon: <TrendingUp />, current: "Novas músicas inseridas sem análise prévia de viabilidade.", proposed: "Fluxo formal de triagem técnica e teológica antes da implementação oficial." },
        { id: "06", topic: "Comunhão de Propósito", subtitle: "Unidade", icon: <Users />, current: "Ausência de encontros regulares de alinhamento.", proposed: "Agenda estratégica de encontros periódicos para comunhão, oração e alinhamento." },
        { id: "07", topic: "Integração com Som", subtitle: "Sinergia", icon: <SlidersHorizontal />, current: "Falta de alinhamento direto com a equipe de sonoplastia.", proposed: "Comunicação técnica centralizada via líderes técnicos para equalização e volumes ideais." },
    ];

    return (
        <section id="pilares" className="py-40 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto px-8">
                <SectionTitle title="Os Pilares do Louvor" subtitle="Princípios de Transformação" />

                <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12">
                    {pillars.map((item) => (
                        <div key={item.id} className="bg-[#f8f9fa] p-12 rounded-[3.5rem] shadow-sm border border-[#f8f9fa] transition-all duration-700 group flex flex-col md:flex-row gap-10">
                            <div className="md:w-1/4 flex flex-col items-center text-center">
                                <span className="text-6xl font-black text-[#1a365d]/10 group-hover:text-[#d4af37]/60 transition-colors mb-4 italic font-serif-display">{item.id}</span>
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d4af37]">{item.subtitle}</div>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-2xl font-bold text-[#1a365d] mb-8 group-hover:text-[#d4af37] transition-colors font-serif-display italic tracking-tight">{item.topic}</h3>
                                <div className="space-y-6">
                                    <div className="bg-[#dc3545]/10 p-5 rounded-2xl border border-[#dc3545]/5">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#dc3545] mb-2">Cenário Atual</div>
                                        <p className="text-xs text-[#dc3545] font-light leading-relaxed">{item.current}</p>
                                    </div>
                                    <div className="bg-[#28a745]/10 p-5 rounded-2xl border border-[#28a745]/5">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#28a745] mb-2">A Nova Proposta</div>
                                        <p className="text-sm text-[#28a745] font-bold leading-snug">{item.proposed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
