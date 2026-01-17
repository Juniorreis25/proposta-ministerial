import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface ReflectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReflectionModal: React.FC<ReflectionModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <div className="absolute inset-0 bg-[#1a365d]/90 backdrop-blur-2xl" onClick={onClose} />

            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-modal-up">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04] grayscale transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[#f8f9fa] text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all duration-500 shadow-sm"
                >
                    <X size={20} />
                </button>

                <div className="flex-1 overflow-y-auto p-12 md:p-20 scrollbar-hide relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-[10px] font-black tracking-[0.5em] uppercase text-[#d4af37] mb-6">Sabedoria Ministerial</div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none font-serif-display italic text-[#1a365d]">A Beleza de uma <br />Jornada Compartilhada</h2>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-12 text-[#6c757d] font-light leading-relaxed text-lg text-justify">
                        <section className="space-y-6">
                            <p>
                                Todo ministério que floresce passa por estações naturais de crescimento. O que começa com o zelo de alguns corações dedicados, com o tempo, convida-nos a um novo chamado: o chamado à multiplicação. Não por cansaço, mas por abundância; não por falha, mas por frutificação.
                            </p>
                            <p>
                                Assim como um jardineiro que, vendo a semente germinar, providencia tutor, poda cuidadosa e mais espaço para as raízes, também nós somos convidados a cultivar com sabedoria os dons que Deus tem dado ao nosso ministério.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1a365d] font-serif-display italic tracking-tight">A Sabedoria do Compartilhamento de Dons</h3>
                            <p>
                                A Bíblia, em vários momentos das narrativas sagradas, mostra a importância do compartilhamento de dons e responsabilidades. Histórias antigas nos ensinam como projetos grandiosos foram realizados não por uma pessoa só, mas por muitos, cada um contribuindo com sua habilidade única. Juntos, criaram espaços de beleza e santidade.
                            </p>
                            <p>
                                Há uma graça especial quando permitimos que cada dom encontre seu lugar, quando cada voz contribui para a harmonia do todo. Não se trata de substituir, mas de complementar; não de dividir autoridade, mas de multiplicar o cuidado.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1a365d] font-serif-display italic tracking-tight">A Arte da Delegação como Ato de Confiança</h3>
                            <p>
                                Nas narrativas sobre liderança que encontramos nas Escrituras, vemos a sabedoria do discernimento. Um líder sábio não é aquele que faz tudo sozinho, mas aquele que reconhece quando a tarefa se torna pesada demais para uma só pessoa. Há uma sabedoria antiga que nos lembra: dividir responsabilidades não diminui a liderança, mas amplifica seu alcance.
                            </p>
                            <p>
                                Aqui não há acusação, apenas percepção amorosa. Às vezes, o maior ato de liderança é reconhecer que outros podem carregar conosco. Delegar não é sinal de fraqueza, mas de força madura que sabe que o ministério é maior que qualquer indivíduo.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1a365d] font-serif-display italic tracking-tight">O Exemplo das Orquestras: Harmonia na Diversidade</h3>
                            <p>
                                Observe uma orquestra sinfônica: o maestro não toca todos os instrumentos, mas conhece o valor de cada um. O violinista não toca trompa, mas confia no colega ao lado. Juntos, criaram algo que nenhum poderia criar sozinho.
                            </p>
                            <p>
                                No ministério, quando permitimos que cada pessoa desenvolva sua especialidade, não perdemos controle - ganhamos riqueza. O técnico de som que entende de frequências, o violonista que domina o ritmo, o vocalista que sente a melodia - cada um, em sua expertise, eleva o todo.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1a365d] font-serif-display italic tracking-tight">A Metáfora do Corpo que Cresce</h3>
                            <p>
                                Assim como um corpo é composto de muitos membros, cada um com sua função, um ministério saudável é aquele onde cada parte funciona em harmonia.
                            </p>
                            <p>
                                Quando o coração tenta fazer o trabalho dos pulmões, todo o corpo sofre. Quando cada órgão cumpre sua função específica, a vida flui abundantemente. Assim é no ministério: a saúde vem quando cada dom encontra seu propósito específico dentro do todo.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1a365d] font-serif-display italic tracking-tight">O Convite à Próxima Etapa</h3>
                            <p>
                                Esta reflexão não é sobre o que falta, mas sobre o que pode florescer. Não é sobre corrigir o passado, mas sobre abençoar o futuro.
                            </p>
                            <p>
                                Talvez estejamos sendo convidados a um novo capítulo: onde o cansaço dá lugar à energia renovada, onde a sobrecarga se transforma em alegria compartilhada, onde a responsabilidade solitária se torna comunhão no serviço.
                            </p>
                            <p>
                                As Escrituras nos lembram que não fomos chamados para carregar pesos sozinhos, mas para ajudar uns aos outros a carregar. Não para o esgotamento, mas para a plenitude. Não para servir com fadiga, mas com gratidão renovada.
                            </p>
                            <p className="font-serif-display italic text-[#1a365d] text-center pt-10">
                                Que cada passo que dermos seja marcado pela graça de crescer juntos, na direção de um ministério cada vez mais frutífero e unido.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="p-12 border-t border-slate-100 bg-[#f8f9fa]/80 backdrop-blur-md flex justify-center relative z-20">
                    <button
                        onClick={onClose}
                        className="px-12 py-5 bg-[#1a365d] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#d4af37] transition-all duration-700 shadow-xl shadow-[#1a365d]/20"
                    >
                        Prosseguir com Propósito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReflectionModal;
