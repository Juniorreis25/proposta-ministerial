import React from 'react';
import { Send, Inbox, Microscope, Scale, Gavel, CheckCircle, XCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProcessFlow: React.FC = () => {
    return (
        <section id="processo" className="py-40 bg-[#f8f9fa]">
            <div className="max-w-4xl mx-auto px-8">
                <SectionTitle title="Ciclo de Novas Músicas" subtitle="Fluxo de Excelência" />

                <div className="relative pl-20 border-l border-[#d4af37] space-y-32">
                    {[
                        {
                            step: "01",
                            title: "Sugestão Inicial",
                            icon: <Send size={20} />,
                            desc: "Proposta formal de canção vinda de qualquer integrante ou liderança.",
                            accent: "bg-[#1a365d] text-white"
                        },
                        {
                            step: "02",
                            title: "Triagem de Liderança",
                            icon: <Inbox size={20} />,
                            desc: "Recepção e avaliação de impacto inicial pela liderança central.",
                            accent: "bg-[#ffffff] text-[#1a365d] border border-[#1a365d]/10"
                        },
                        {
                            step: "03",
                            title: "Análise Técnica & Teológica",
                            icon: <Microscope size={20} />,
                            desc: "Avaliação rigorosa de letra, harmonia, tonalidade e viabilidade de execução.",
                            accent: "bg-[#d4af37] text-[#1a365d]",
                            details: ["Teologia", "Viabilidade Técnica", "Arranjos", "Conforto Vocal"]
                        },
                        {
                            step: "04",
                            title: "Parecer Técnico",
                            icon: <Scale size={20} />,
                            desc: "Decisão fundamentada dos co-líderes apresentada à Líder Maior.",
                            accent: "bg-[#ffffff] border border-[#d4af37]/20 text-[#1a365d]"
                        },
                        {
                            step: "05",
                            title: "Veredito & Lançamento",
                            icon: <Gavel size={20} />,
                            desc: "Validação final e planejamento da entrada no ciclo de ensaios.",
                            accent: "bg-[#1a365d] text-white shadow-xl shadow-[#1a365d]/20"
                        }
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className={`absolute -left-[101px] top-0 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border-4 border-[#f8f9fa] ${item.accent}`}>
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-[9px] font-black uppercase tracking-[0.5em] text-[#d4af37] mb-3">Fase {item.step}</div>
                                <h4 className="text-3xl font-bold text-[#1a365d] mb-6 tracking-tighter uppercase">{item.title}</h4>
                                <p className="text-[#6c757d] font-light leading-relaxed max-w-xl text-lg">{item.desc}</p>
                                {item.details && (
                                    <div className="flex flex-wrap gap-3 mt-10">
                                        {item.details.map((d, j) => (
                                            <span key={j} className="text-[9px] font-black uppercase tracking-widest px-6 py-3 bg-[#ffffff] border border-[#1a365d]/5 rounded-full text-[#6c757d] shadow-sm">{d}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="pt-20 grid grid-cols-2 gap-10">
                        <div className="p-12 rounded-[4rem] border border-[#28a745]/20 bg-[#28a745]/5 flex flex-col items-center text-center group/success hover:bg-[#28a745] hover:text-white transition-all duration-700 cursor-default">
                            <CheckCircle className="text-[#28a745] group-hover/success:text-white mb-6" size={40} />
                            <h5 className="font-bold text-xs uppercase tracking-[0.4em] mb-3">Liberada</h5>
                            <p className="text-[10px] opacity-60 uppercase font-black">Ciclo de Ensaios</p>
                        </div>
                        <div className="p-12 rounded-[4rem] border border-[#dc3545]/20 bg-[#dc3545]/5 flex flex-col items-center text-center opacity-40 hover:opacity-100 hover:bg-[#dc3545] hover:text-white transition-all duration-700 group/archived cursor-default">
                            <XCircle className="text-[#dc3545] group-hover/archived:text-white mb-6" size={40} />
                            <h5 className="font-bold text-xs uppercase tracking-[0.4em] mb-3">Arquivada</h5>
                            <p className="text-[10px] opacity-60 uppercase font-black">Fora do Repertório</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
