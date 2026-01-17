import React from 'react';
import { ShieldAlert, Target, Eye } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ContextSection: React.FC = () => {
    const items = [
        {
            title: "O Desafio",
            icon: <ShieldAlert size={28} />,
            desc: "Superar a fragmentação e a sobrecarga para resgatar a essência e o foco do serviço ao altar.",
            bg: "/images/challenge.jpg"
        },
        {
            title: "O Chamado",
            icon: <Target size={28} />,
            desc: "Um convite à excelência técnica, honrando a soberania divina com o máximo de nossa dedicação.",
            bg: "/images/calling.jpg"
        },
        {
            title: "O Destino",
            icon: <Eye size={28} />,
            desc: "Um ambiente onde a harmonia técnica e a profundidade espiritual convergem em adoração pura.",
            bg: "/images/destiny.jpg"
        }
    ];

    return (
        <section id="contexto" className="py-24 bg-[#fdfdfd] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <SectionTitle title="A Essência do Plano" subtitle="Contextualização Estratégica" />

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="group relative h-[600px] flex flex-col items-center justify-center p-12 rounded-[3.5rem] overflow-hidden transition-all duration-1000 hover:shadow-[0_40px_80px_-15px_rgba(26,54,93,0.3)]"
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-100 group-hover:scale-110"
                                style={{ backgroundImage: `url('${item.bg}')` }}
                            />
                            <div className="absolute inset-0 z-10 bg-[#1a365d]/50 transition-colors duration-700 group-hover:bg-[#1a365d]/70" />
                            <div className="absolute inset-0 z-15 bg-gradient-to-b from-transparent via-[#1a365d]/20 to-[#1a365d]/90" />

                            {/* Content Overlays */}
                            <div className="relative z-20 w-full flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="mb-10 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-[#e8c76d] transition-all duration-700 group-hover:bg-[#d4af37] group-hover:text-white group-hover:-translate-y-3 group-hover:shadow-2xl">
                                    {item.icon}
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-serif-display italic">
                                    {item.title}
                                </h3>

                                <div className="w-16 h-[2px] bg-[#d4af37]/50 mb-8 transition-all duration-700 group-hover:w-24 group-hover:bg-[#d4af37]" />

                                <p className="text-white/80 leading-relaxed font-light text-lg md:text-xl transition-colors duration-700 group-hover:text-white">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom border indicator */}
                            <div className="absolute bottom-0 left-0 h-1.5 bg-[#d4af37] transition-all duration-1000 w-0 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContextSection;
