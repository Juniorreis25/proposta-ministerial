import React, { useState, useEffect } from 'react';
import { Music, BookOpen, Menu, X } from 'lucide-react';
import { scrollToSection } from '../types';

interface NavbarProps {
    onOpenReflection: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenReflection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Contexto', id: 'contexto' },
        { label: 'Estrutura', id: 'estrutura' },
        { label: 'Pilares', id: 'pilares' },
        { label: 'Novas Músicas', id: 'processo' }
    ];

    const handleMenuItemClick = (id: string) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-xl py-4 shadow-md' : 'bg-transparent py-8'
            }`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleMenuItemClick('home')}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-[#1a365d] text-[#ffffff]' : 'bg-white/10 text-white backdrop-blur-md'}`}>
                        <Music size={14} />
                    </div>
                    <span className={`font-bold tracking-[0.2em] text-[10px] uppercase transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-[#1a365d]' : 'text-white'}`}>Ministério de Louvor</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full ${isScrolled ? 'text-[#6c757d] hover:text-[#1a365d]' : 'text-white/70 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={onOpenReflection}
                        className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
                            ? 'bg-[#1a365d] text-white hover:bg-[#d4af37]'
                            : 'bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1a365d]'
                            }`}
                    >
                        <BookOpen size={12} />
                        Reflexão
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 transition-colors duration-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={24} className="text-[#1a365d]" />
                    ) : (
                        <Menu size={24} className={isScrolled ? 'text-[#1a365d]' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-8 shadow-2xl' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-center gap-6 px-8">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleMenuItemClick(item.id)}
                            className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1a365d] hover:text-[#d4af37] py-2 transition-colors w-full text-center"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            onOpenReflection();
                            setIsMenuOpen(false);
                        }}
                        className="flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] bg-[#1a365d] text-white px-10 py-5 rounded-2xl w-full hover:bg-[#d4af37] transition-all mt-4"
                    >
                        <BookOpen size={16} />
                        Reflexão Espiritual
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
