import React from 'react';
import { PREMIUM_CHECKOUT_URL } from '../data/offerConfig';

export const HeroSection: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
      <main id="inicio">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-10 items-center py-7 sm:py-11">
          {/* Copy column */}
          <div className="min-w-0">
            <div className="text-[10px] sm:text-[11px] tracking-[1.8px] sm:tracking-[2.3px] uppercase font-bold text-[#7c5d2a] mb-3 sm:mb-4">
              O Natal das crianças começa aqui
            </div>

            <h1 className="font-editorial text-[34px] sm:text-[46px] xl:text-[54px] font-normal leading-[1.12] tracking-[-1.2px] text-[#173e32]">
              <span className="font-bold text-[#8c2832] text-[1.18em]">+150 Desenhos</span>
              <br />
              Natalinos para Colorir
              <br />
              <em className="not-italic text-[0.76em] text-[#173e32] inline-block mt-1.5 font-normal italic">
                para imprimir e se divertir!
              </em>
            </h1>

            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#435748] max-w-[500px]">
              Um kit digital cheio de desenhos de Papai Noel, árvores de Natal, renas, bonecos de neve e muito mais
              para as crianças soltarem a criatividade e aproveitarem o clima natalino.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#2b4a33] font-medium mt-4">
              <span>✓ Desenhos prontos para imprimir</span>
              <span>✓ Imprima, pinte e divirta-se</span>
              <span>✓ Material 100% digital</span>
            </div>

            <a
              href={PREMIUM_CHECKOUT_URL}
              className="mt-6 inline-flex w-full sm:w-auto justify-center items-center gap-3 min-h-[54px] px-7 py-4 rounded-lg bg-[#173e32] hover:bg-[#225444] text-white border border-[#173e32] text-xs font-bold tracking-[0.8px] uppercase transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              <span>QUERO O KIT NATALINO DAS CRIANÇAS</span>
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-3 text-[11px] text-[#566656] text-center sm:text-left">
              Você recebe arquivos digitais em PDF. A impressão é feita por você.
            </p>
          </div>

          {/* Showcase card column */}
          <div className="relative rounded-[22px] border border-[#d6c69e] bg-[radial-gradient(ellipse_at_center,#fffaf1_30%,#e9e2cc_100%)] p-3 sm:p-5 shadow-[0_18px_50px_rgba(101,81,43,0.08)] isolate">
            <div className="pointer-events-none absolute inset-3 rounded-[15px] border border-[#cbb888]/60 -z-10" />
            <span className="block text-center text-[9px] sm:text-[10px] tracking-[1.8px] uppercase font-bold text-[#7c5d2a]">
              O NATAL COLORIDO COMEÇA NO PAPEL
            </span>
            <img
              src="/assets/aistudio/6_647af05b.png"
              alt="Coleção +150 Desenhos Natalinos para Colorir"
              className="w-full max-w-[520px] mx-auto my-2 rounded-2xl object-contain drop-shadow-[0_12px_18px_rgba(62,41,28,0.18)]"
            />
            <div className="flex justify-center items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-bold tracking-[2px] text-[#263f34] pt-1 pb-1">
              <span>IMPRIMA</span>
              <i className="not-italic text-[#9c7b3b]">✧</i>
              <span>PINTE</span>
              <i className="not-italic text-[#9c7b3b]">✧</i>
              <span>DIVIRTA-SE</span>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-[#dedfd3] py-4 grid grid-cols-2 md:flex md:justify-around gap-3 text-[11px] sm:text-xs text-[#2d4636] font-medium">
          <span>
            <span className="text-[#9e7c3e] mr-2">✧</span>+150 desenhos natalinos
          </span>
          <span>
            <span className="text-[#9e7c3e] mr-2">✧</span>Arquivos digitais em PDF
          </span>
          <span>
            <span className="text-[#9e7c3e] mr-2">✧</span>Imprima e pinte
          </span>
          <span>
            <span className="text-[#9e7c3e] mr-2">✧</span>Diversão longe das telas
          </span>
        </div>
      </main>
    </div>
  );
};
