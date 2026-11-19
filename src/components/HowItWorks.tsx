import React from 'react';
import { PREMIUM_CHECKOUT_URL } from '../data/offerConfig';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="bg-[#eee8db] text-[#173e32] py-14 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#7c5d2a] mb-3">
          Do papel para a diversão
        </div>
        <h2 className="font-editorial text-[30px] sm:text-[46px] leading-[1.13] tracking-[-0.9px]">
          Imprima. Pinte.
          <br className="hidden sm:inline" /> Veja a criatividade ganhar vida.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-9">
          {/* Step 1 */}
          <article className="bg-[#fffdf7] border border-[#d7caa9] rounded-[18px] overflow-hidden px-6 pb-6 shadow-[0_10px_25px_rgba(23,62,50,0.04)] flex flex-col">
            <div className="bg-[#e5e8d9] -mx-6 px-6 h-[154px] flex flex-col items-center justify-center gap-2.5 mb-5 text-[#173e32]">
              <svg viewBox="0 0 120 90" className="w-[104px] h-[78px]" aria-hidden="true">
                <path
                  d="M32 31V8h56v23M31 62H15V30h90v32H89"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path d="M31 48h58v36H31z" fill="#fffaf0" stroke="currentColor" strokeWidth="3" />
                <path d="M42 60h35M42 69h25" stroke="#c6a76b" strokeWidth="3" />
                <circle cx="91" cy="40" r="3" fill="#c6a76b" />
              </svg>
              <span className="text-[10px] tracking-[1.6px] font-bold text-[#755a2a]">
                01 · ESCOLHA E IMPRIMA
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-[26px] text-[#173e32]">
              Do arquivo para o papel
            </h3>
            <p className="mt-3 text-sm text-[#4c5c4d] flex-1">
              Escolha os desenhos que as crianças mais gostam e imprima.
            </p>
            <span className="block border-t border-[#ded3b7] pt-3.5 mt-5 text-xs font-medium text-[#755a2a]">
              Tudo começa com uma impressão.
            </span>
          </article>

          {/* Step 2 */}
          <article className="bg-[#fffdf7] border border-[#d7caa9] rounded-[18px] overflow-hidden px-6 pb-6 shadow-[0_10px_25px_rgba(23,62,50,0.04)] flex flex-col">
            <div className="bg-[#e5e8d9] -mx-6 px-6 h-[154px] flex flex-col items-center justify-center gap-2.5 mb-5 text-[#173e32]">
              <svg viewBox="0 0 120 90" className="w-[104px] h-[78px]" aria-hidden="true">
                <path d="M45 50L100 9M47 62L101 83" stroke="currentColor" strokeWidth="4" />
                <circle cx="30" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="30" cy="72" r="13" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M61 8v75" stroke="#c6a76b" strokeWidth="2" strokeDasharray="4 5" />
                <circle cx="54" cy="55" r="4" fill="#c6a76b" />
              </svg>
              <span className="text-[10px] tracking-[1.6px] font-bold text-[#755a2a]">
                02 · PINTE E CRIE
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-[26px] text-[#173e32]">
              Cada traço faz diferença
            </h3>
            <p className="mt-3 text-sm text-[#4c5c4d] flex-1">
              As crianças soltam a criatividade e dão cor a cada desenho.
            </p>
            <span className="block border-t border-[#ded3b7] pt-3.5 mt-5 text-xs font-medium text-[#755a2a]">
              Papai Noel, renas, bonecos de neve e muito mais.
            </span>
          </article>

          {/* Step 3 */}
          <article className="bg-[#fffdf7] border border-[#d7caa9] rounded-[18px] overflow-hidden px-6 pb-6 shadow-[0_10px_25px_rgba(23,62,50,0.04)] flex flex-col">
            <div className="bg-[#e5e8d9] -mx-6 px-6 h-[154px] flex flex-col items-center justify-center gap-2.5 mb-5 text-[#173e32]">
              <svg viewBox="0 0 120 90" className="w-[104px] h-[78px]" aria-hidden="true">
                <path d="M16 43L60 7l44 36M27 36v48h66V36" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M52 84V58h17v26M38 43h12v12H38zM74 43h12v12H74z" fill="#c6a76b" />
                <path d="M90 8l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" fill="#c6a76b" />
              </svg>
              <span className="text-[10px] tracking-[1.6px] font-bold text-[#755a2a]">
                03 · APROVEITE O NATAL
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-[26px] text-[#173e32]">
              Diversão para toda a família
            </h3>
            <p className="mt-3 text-sm text-[#4c5c4d] flex-1">
              Aproveite o clima natalino com as crianças, longe das telas.
            </p>
            <span className="block border-t border-[#ded3b7] pt-3.5 mt-5 text-xs font-medium text-[#755a2a]">
              Momentos para criar e se divertir juntos.
            </span>
          </article>
        </div>

        <div className="text-center mt-8">
          <a
            href={PREMIUM_CHECKOUT_URL}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 min-h-[54px] px-7 py-4 rounded-lg bg-[#173e32] hover:bg-[#225444] text-white border border-[#173e32] text-xs font-bold tracking-[0.8px] uppercase transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>QUERO COMEÇAR A DIVERSÃO</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
