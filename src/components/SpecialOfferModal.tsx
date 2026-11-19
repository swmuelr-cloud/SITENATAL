import React, { useEffect, useRef } from 'react';
import { OFFER_CONFIG, formatBRL } from '../data/offerConfig';

interface SpecialOfferModalProps {
  open: boolean;
  onClose: () => void;
}

export const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({ open, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const popupPrice = formatBRL(OFFER_CONFIG.popup.price);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071c16]/80 p-3 sm:p-6 backdrop-blur-[2px]"
    >
      <div className="animate-offer-in relative w-full max-w-[880px] max-h-[94dvh] overflow-y-auto rounded-[20px] border-2 border-[#c9ad71] bg-[#173e32] text-[#faf6ed] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar oferta"
          className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#faf6ed] text-[#173e32] hover:bg-white flex items-center justify-center text-2xl leading-none shadow-md transition-colors"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left visual panel */}
          <div className="relative flex items-center justify-center px-5 pt-11 pb-5 sm:p-8 bg-[radial-gradient(ellipse_at_50%_45%,#fffaf1_35%,#e8e0c9_100%)]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#8c2832] text-[#fff7e7] px-4 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[1.4px] uppercase rounded-b-[10px] shadow-md whitespace-nowrap">
              🎁 OFERTA ÚNICA DE NATAL
            </span>
            <img
              src="/assets/aistudio/5_726cb299.png"
              alt="Mockup do kit completo com a coleção e os 4 bônus"
              className="w-full max-h-[min(52dvh,380px)] rounded-xl object-contain drop-shadow-[0_12px_16px_rgba(62,41,28,0.22)]"
            />
          </div>

          {/* Right offer copy */}
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="text-[10px] tracking-[1.8px] uppercase font-bold text-[#e2c685] mb-2">
              Espere! Antes de escolher o Básico
            </div>

            <h2
              id="popup-title"
              className="font-editorial text-[24px] sm:text-[31px] leading-[1.16] tracking-[-0.6px] text-[#fff9e9]"
            >
              Leve o kit completo por menos que o preço do Premium
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#dde6d9] leading-relaxed">
              Em vez de só os desenhos, aproveite uma condição especial para levar a coleção com os 4 bônus.
            </p>

            <ul className="mt-4 divide-y divide-white/10 text-xs sm:text-[13px] text-[#f6f1de]">
              {[
                '+150 desenhos natalinos para colorir',
                '10 Atividades Natalinas',
                '20 Cartões e Etiquetas de Natal',
                'Kit Especial Papai Noel',
                'Calendário de Contagem Regressiva para o Natal',
              ].map((item) => (
                <li key={item} className="py-2 pl-5 relative">
                  <span aria-hidden="true" className="absolute left-0 top-2 text-[#e2c17d]">
                    ✧
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-baseline flex-wrap gap-x-3.5 gap-y-2 mt-5">
              <s className="text-sm sm:text-base text-[#b9c7b4] decoration-[#e07b84]">R$ 19,90</s>
              <strong className="font-editorial text-[46px] sm:text-[54px] leading-none tracking-[-2px] text-[#f2d38f]">
                {popupPrice.reais}
                <small className="text-[20px] sm:text-[22px] tracking-normal">,{popupPrice.cents}</small>
              </strong>
              <span className="text-[10px] font-bold tracking-[1.2px] text-[#173e32] bg-[#e2c17d] rounded-full px-3 py-1 uppercase">
                OFERTA ESPECIAL
              </span>
            </div>

            <a
              href={OFFER_CONFIG.popup.url}
              className="mt-4 w-full inline-flex justify-center items-center min-h-[54px] px-4 py-3.5 rounded-lg bg-[#e2c17d] hover:bg-[#efd08f] text-[#173e32] text-xs font-bold tracking-[0.8px] uppercase shadow-lg transition-colors text-center"
            >
              {OFFER_CONFIG.popup.label}
            </a>

            <a
              href={OFFER_CONFIG.basic.url}
              className="mt-2 min-h-[42px] flex items-center justify-center text-xs text-[#cdd8c8] hover:text-white underline underline-offset-4 text-center"
            >
              Não, quero apenas o Plano Básico
            </a>

            <p className="mt-1 text-[11px] text-[#b4c4af] text-center">
              Produto digital · Garantia de 30 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
