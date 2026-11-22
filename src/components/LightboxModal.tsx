import React, { useEffect, useRef } from 'react';
import { ColoringSample, IllustrativeConversation } from '../data/offerConfig';

export type LightboxTarget =
  | { type: 'sample'; item: ColoringSample }
  | { type: 'conversation'; item: IllustrativeConversation }
  | null;

interface LightboxModalProps {
  target: LightboxTarget;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ target, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;
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
  }, [target, onClose]);

  if (!target) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071c16]/80 p-4 sm:p-6 backdrop-blur-[2px]"
    >
      <div className="relative w-full max-w-[520px] max-h-[92dvh] overflow-auto rounded-[18px] border border-[#c6a76b] bg-[#f9f5eb] p-5 sm:p-8 shadow-2xl">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-3 right-3 w-11 h-11 rounded-full bg-[#173e32] text-[#fff8e8] hover:bg-[#235747] flex items-center justify-center text-2xl leading-none transition-colors"
        >
          ×
        </button>

        {target.type === 'sample' ? (
          <div className="pt-4">
            <img
              src={target.item.imageUrl}
              alt={target.item.alt}
              className="max-h-[75dvh] w-auto mx-auto rounded-xl shadow-md object-contain bg-white"
            />
            <p className="mt-4 text-center text-xs text-[#4f5d4d]">
              {target.item.pagesLabel} · Exemplo demonstrativo do material
            </p>
          </div>
        ) : (
          <div className="pt-5">
            <img
              src={target.item.imageUrl}
              alt={target.item.alt}
              className="max-h-[75dvh] w-auto mx-auto rounded-xl shadow-md object-contain"
            />
            <p className="mt-3 text-center text-xs text-[#4f5d4d]">
              Imagem ilustrativa de uso do material. Não representa depoimento real.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
