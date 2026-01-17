import React from 'react';

const Hero: React.FC = () => {
    return (
        <header id="home" className="relative h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero">
            <div
                className="absolute inset-0 opacity-20 scale-110 animate-slow-zoom"
                style={{ backgroundImage: `url('/images/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a365d]/40 to-[#1a365d]/80" />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 md:pt-32">
                <div className="inline-block px-8 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-white text-[9px] font-black tracking-[0.4em] uppercase mb-12 animate-fade-in-up">
                    Estratégia & Excelência Ministerial
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold text-[#ffffff] mb-10 leading-[1] md:leading-[0.9] tracking-tighter animate-fade-in-up [animation-delay:200ms]">
                    A Arte de <br /><span className="text-[#e8c76d] font-serif-display italic font-light">Servir com Primor</span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up [animation-delay:400ms] tracking-tight">
                    Redefinindo os padrões de organização e unidade espiritual para um louvor inesquecível.
                </p>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 animate-pulse">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </div>
        </header>
    );
};

export default Hero;
