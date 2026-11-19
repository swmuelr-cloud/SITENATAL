import React, { useEffect, useRef, useState } from 'react';
import { ILLUSTRATIVE_CONVERSATIONS, IllustrativeConversation } from '../data/offerConfig';

interface ConversationsCarouselProps {
  onZoomConversation: (conversation: IllustrativeConversation) => void;
}

export const ConversationsCarousel: React.FC<ConversationsCarouselProps> = ({
  onZoomConversation,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      const track = trackRef.current;
      if (track && !pausedRef.current) {
        const firstChild = track.children[0] as HTMLElement | undefined;
        const loopStart = track.children[ILLUSTRATIVE_CONVERSATIONS.length] as HTMLElement | undefined;
        if (firstChild && loopStart) {
          const loopWidth = loopStart.offsetLeft - firstChild.offsetLeft;
          if (loopWidth > 0) {
            offsetRef.current = (offsetRef.current + dt * 0.055) % loopWidth;
            track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
          }
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const handlePauseToggle = () => {
    const next = !isPaused;
    pausedRef.current = next;
    setIsPaused(next);
  };

  const stepBy = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstChild = track.children[0] as HTMLElement | undefined;
    const loopStart = track.children[ILLUSTRATIVE_CONVERSATIONS.length] as HTMLElement | undefined;
    if (!firstChild || !loopStart) return;
    const loopWidth = loopStart.offsetLeft - firstChild.offsetLeft;
    if (loopWidth <= 0) return;

    pausedRef.current = true;
    setIsPaused(true);
    offsetRef.current = (offsetRef.current + direction * 280 + loopWidth) % loopWidth;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  return (
    <section className="bg-[#173e32] text-[#fff8e8] py-14 sm:py-20">
      <div className="max-w-[690px] mx-auto px-5 sm:px-8 text-center mb-8">
        <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#e2c484] mb-3">
          Imagine a sua versão
        </div>
        <h2 className="font-editorial text-[30px] sm:text-[44px] leading-[1.14] tracking-[-0.8px] text-[#fff8e8]">
          Inspirações para <br className="hidden sm:inline" />
          entrar no clima.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#d9e4d5]">
          Conversas e imagens ilustrativas de uso do material. Não representam depoimentos reais de clientes.
        </p>
      </div>

      <div
        className="max-w-[1440px] mx-auto overflow-hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!isPaused) pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 px-5 sm:px-8 py-2 w-max will-change-transform"
          aria-label="Conversas ilustrativas"
        >
          {[...ILLUSTRATIVE_CONVERSATIONS, ...ILLUSTRATIVE_CONVERSATIONS].map((conv, idx) => {
            const isClone = idx >= ILLUSTRATIVE_CONVERSATIONS.length;
            return (
              <button
                key={`${conv.id}-${idx}`}
                type="button"
                onClick={() => onZoomConversation(conv)}
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : 0}
                aria-label={isClone ? undefined : `Ampliar ${conv.title}`}
                className="flex-shrink-0 w-[68vw] max-w-[260px] sm:w-[250px] bg-[#f5f1e6] rounded-xl p-2 shadow-[0_8px_24px_rgba(0,0,0,0.22)] cursor-pointer transition-transform duration-200 hover:-translate-y-1 text-left"
              >
                <img
                  src={conv.imageUrl}
                  alt={conv.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-5 px-5">
        <button
          type="button"
          onClick={() => stepBy(-1)}
          aria-label="Conversa ilustrativa anterior"
          className="min-h-[40px] px-4 py-1.5 rounded-full border border-[#8da389] text-[#f7f0df] text-xs hover:bg-[#235747] transition-colors"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={handlePauseToggle}
          className="min-h-[40px] px-4 py-1.5 rounded-full border border-[#8da389] text-[#f7f0df] text-xs hover:bg-[#235747] transition-colors"
        >
          {isPaused ? '▶ Retomar' : '❚❚ Pausar'}
        </button>
        <button
          type="button"
          onClick={() => stepBy(1)}
          aria-label="Próxima conversa ilustrativa"
          className="min-h-[40px] px-4 py-1.5 rounded-full border border-[#8da389] text-[#f7f0df] text-xs hover:bg-[#235747] transition-colors"
        >
          Próximo →
        </button>
      </div>
    </section>
  );
};
