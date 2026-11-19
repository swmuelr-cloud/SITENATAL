import React, { useEffect, useRef, useState } from 'react';
import { COLORING_SAMPLES, ColoringSample, PREMIUM_CHECKOUT_URL } from '../data/offerConfig';
import { ColoringPagePreview } from './Illustrations';

interface SamplesCarouselProps {
  onZoomSample: (sample: ColoringSample) => void;
}

export const SamplesCarousel: React.FC<SamplesCarouselProps> = ({ onZoomSample }) => {
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
        const loopStart = track.children[COLORING_SAMPLES.length] as HTMLElement | undefined;
        if (firstChild && loopStart) {
          const loopWidth = loopStart.offsetLeft - firstChild.offsetLeft;
          if (loopWidth > 0) {
            const isMobile = window.matchMedia('(max-width: 700px)').matches;
            const speed = isMobile ? 0.085 : 0.055;
            offsetRef.current = (offsetRef.current + dt * speed) % loopWidth;
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
    const loopStart = track.children[COLORING_SAMPLES.length] as HTMLElement | undefined;
    if (!firstChild || !loopStart) return;
    const loopWidth = loopStart.offsetLeft - firstChild.offsetLeft;
    if (loopWidth <= 0) return;

    pausedRef.current = true;
    setIsPaused(true);
    offsetRef.current = (offsetRef.current + direction * 320 + loopWidth) % loopWidth;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  return (
    <section
      id="moldes"
      className="bg-[#173e32] text-[#fff8e8] border-t-4 border-[#c6a76b] py-14 sm:py-16"
    >
      <div className="max-w-[690px] mx-auto px-5 sm:px-8 text-center mb-8">
        <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#ebd093] mb-3">
          Veja de perto antes de escolher
        </div>
        <h2 className="font-editorial text-[30px] sm:text-[44px] leading-[1.14] tracking-[-0.8px] text-[#fff8e8]">
          Veja os desenhos que as crianças vão colorir.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#e3ebdf]">
          Veja exemplos das páginas do material. Toque em uma imagem para observar os detalhes.
        </p>
      </div>

      {/* Carousel shell */}
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
          aria-label="Páginas demonstrativas"
        >
          {[...COLORING_SAMPLES, ...COLORING_SAMPLES].map((sample, idx) => {
            const isClone = idx >= COLORING_SAMPLES.length;
            return (
              <button
                key={`${sample.id}-${idx}`}
                type="button"
                onClick={() => onZoomSample(sample)}
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : 0}
                aria-label={isClone ? undefined : `Ampliar página ${sample.number}: ${sample.title}`}
                className="flex-shrink-0 w-[76vw] max-w-[300px] sm:w-[290px] bg-white rounded-xl p-2.5 shadow-[0_12px_30px_rgba(6,28,23,0.28)] cursor-pointer transition-transform duration-200 hover:-translate-y-1 text-left"
              >
                <ColoringPagePreview
                  id={sample.id}
                  title={sample.title}
                  number={sample.number}
                  theme={sample.theme}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible controls */}
      <div className="flex justify-center items-center gap-3 mt-5 px-5">
        <button
          type="button"
          onClick={() => stepBy(-1)}
          aria-label="Desenho anterior"
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
          aria-label="Próximo desenho"
          className="min-h-[40px] px-4 py-1.5 rounded-full border border-[#8da389] text-[#f7f0df] text-xs hover:bg-[#235747] transition-colors"
        >
          Próximo →
        </button>
      </div>

      <div className="text-center px-5 mt-7">
        <a
          href={PREMIUM_CHECKOUT_URL}
          className="inline-flex w-full sm:w-auto justify-center items-center gap-3 min-h-[54px] px-7 py-4 rounded-lg bg-[#d6b779] hover:bg-[#e5c789] text-[#173e32] border border-[#d6b779] text-xs font-bold tracking-[0.9px] uppercase transition-all duration-200 hover:-translate-y-0.5"
        >
          <span>QUERO OS DESENHOS PARA AS CRIANÇAS</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
};
