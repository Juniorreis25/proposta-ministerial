import React from 'react';
import { ShieldAlert, Target, Eye } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ContextSection: React.FC = () => {
    const items = [
        {
            title: "O Desafio",
            icon: <ShieldAlert size={24} />,
            desc: "A urgência em superar a desorganização e a sobrecarga para focar na essência do serviço ministerial.",
            bg: "/images/challenge.jpg"
        },
        {
            title: "O Chamado",
            icon: <Target size={24} />,
            desc: "O convite para elevar o preparo técnico, honrando a Deus com o melhor que nossas mãos e vozes podem oferecer.",
            bg: "/images/calling.jpg"
        },
        {
            title: "O Destino",
            icon: <Eye size={24} />,
            desc: "Um altar de excelência, onde a unidade ecoa harmonia e a técnica serve à espiritualidade.",
            bg: "/images/destiny.jpg"
        }
    ];

    return (
        <section id="contexto" className="py-40 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto px-8">
                <SectionTitle title="A Essência do Plano" subtitle="Contextualização" />
                <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-20">
                    {items.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden text-center flex flex-col items-center p-12 rounded-[3.5rem] bg-[#f8f9fa] border border-[#f1f3f5] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                            <div
                                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700 bg-cover bg-center grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url('${item.bg}')` }}
                            />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-12 text-[#d4af37] w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white shadow-sm transition-all duration-700 group-hover:bg-[#1a365d] group-hover:text-[#ffffff] group-hover:shadow-xl group-hover:border-[#1a365d]">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#1a365d] mb-6 tracking-tighter uppercase">{item.title}</h3>
                                <p className="text-[#6c757d] leading-relaxed font-light text-sm max-w-xs transition-colors group-hover:text-[#343a40]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContextSection;
