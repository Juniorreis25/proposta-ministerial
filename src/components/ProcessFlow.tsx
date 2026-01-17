import React from 'react';
import { Send, Inbox, Microscope, Scale, Gavel, CheckCircle, XCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProcessFlow: React.FC = () => {
    const steps = [
        {
            step: "01",
            title: "Sugestão Inicial",
            icon: <Send size={24} />,
            desc: "Proposta formal de canção vinda de qualquer integrante ou liderança.",
            color: "#1a365d"
        },
        {
            step: "02",
            title: "Triagem de Liderança",
            icon: <Inbox size={24} />,
            desc: "Recepção e avaliação de impacto inicial pela liderança central.",
            color: "#64748b"
        },
        {
            step: "03",
            title: "Análise Técnica & Teológica",
            icon: <Microscope size={24} />,
            desc: "Avaliação rigorosa de letra, harmonia, tonalidade e viabilidade de execução.",
            color: "#d4af37",
            details: ["Teologia", "Viabilidade Técnica", "Arranjos", "Conforto Vocal"]
        },
        {
            step: "04",
            title: "Parecer Técnico",
            icon: <Scale size={24} />,
            desc: "Decisões fundamentadas dos co-líderes apresentada à Líder Maior.",
            color: "#94a3b8"
        },
        {
            step: "05",
            title: "Veredito & Lançamento",
            icon: <Gavel size={24} />,
            desc: "Validação final e planejamento da entrada no ciclo de ensaios.",
            color: "#1a365d"
        }
    ];

    return (
        <section id="processo" className="py-40 bg-[#1a365d] relative overflow-hidden">
            {/* Background Image with sophisticated overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-fixed bg-center grayscale"
                style={{ backgroundImage: `url('/images/process-bg.jpg')` }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1a365d] via-[#1a365d]/90 to-[#1a365d]" />

            <div className="max-w-6xl mx-auto px-8 relative z-20">
                <SectionTitle
                    title="Ciclo para novas músicas"
                    subtitle="Fluxo de Excelência"
                    light={true}
                    className="mb-12"
                />

                <div className="relative mt-8">
                    {/* Vertical Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />

                    <div className="space-y-12">
                        {steps.map((item, i) => (
                            <div key={i} className={`relative flex items-center group ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Icon/Node */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                                    <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-white/10">
                                        <div className="text-[#e8c76d] transition-transform duration-700 group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="absolute -inset-4 bg-[#d4af37]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 -z-10" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ml-24 md:ml-0 p-8 md:p-10 rounded-[2.5rem] transition-all duration-700 hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-sm ${i % 2 === 0 ? 'md:mr-12 text-left md:text-right' : 'md:ml-12 text-left'}`}>
                                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e8c76d]">Fase {item.step}</span>
                                    </div>

                                    <h4 className="text-3xl font-bold text-white mb-4 tracking-tight font-serif-display italic">
                                        {item.title}
                                    </h4>

                                    <p className="text-white/60 font-light leading-relaxed text-base group-hover:text-white/80 transition-colors">
                                        {item.desc}
                                    </p>

                                    {item.details && (
                                        <div className={`flex flex-wrap gap-2 mt-6 ${i % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                            {item.details.map((d, j) => (
                                                <span key={j} className="text-[8px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 text-white/40 rounded-lg border border-white/5 transform transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:text-[#e8c76d]">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Result Options */}
                    <div className="mt-32 pt-24 border-t border-white/10 flex flex-col md:flex-row justify-center gap-10">
                        <div className="flex-1 max-w-sm p-12 rounded-[3.5rem] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center group/success hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 transition-all group-hover/success:bg-emerald-500 group-hover/success:text-white group-hover/success:scale-110">
                                <CheckCircle size={36} />
                            </div>
                            <h5 className="font-bold text-lg uppercase tracking-[0.4em] text-white mb-3 font-serif-display italic">Liberada</h5>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-relaxed">Inclusão Automatizada no Ciclo de Ensaios</p>
                        </div>

                        <div className="flex-1 max-w-sm p-12 rounded-[3.5rem] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center group/archived hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                            <div className="w-20 h-20 rounded-3xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-8 transition-all group-hover/archived:bg-rose-500 group-hover/archived:text-white group-hover/archived:scale-110">
                                <XCircle size={36} />
                            </div>
                            <h5 className="font-bold text-lg uppercase tracking-[0.4em] text-white mb-3 font-serif-display italic">Arquivada</h5>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-relaxed">Removida do Repertório Ativo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
